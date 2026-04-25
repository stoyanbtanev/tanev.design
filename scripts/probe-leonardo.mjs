// Tiny probe: tests if gpt-image-2 (or gpt-image-1.5) is reachable on this account.
// Usage: node scripts/probe-leonardo.mjs
import fs from 'node:fs';
import path from 'node:path';

const API_KEY = '9f3bed64-d4ba-42e6-b8e9-a10756cda51a';
const BASE = 'https://cloud.leonardo.ai/api/rest';

async function api(version, pathname, opts = {}) {
  const url = `${BASE}/${version}${pathname}`;
  const res = await fetch(url, {
    ...opts,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${API_KEY}`,
      ...(opts.headers || {}),
    },
  });
  const txt = await res.text();
  let json; try { json = JSON.parse(txt); } catch { json = { raw: txt }; }
  return { ok: res.ok, status: res.status, json };
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function tryStart(model) {
  // v2 shape per docs (gpt-image-1.5/2)
  const body = {
    public: false,
    model,
    parameters: {
      quality: 'LOW',
      prompt: 'a single black coffee mug on a wooden desk, side natural window light, editorial still life, 35mm grain, deep shadows, one ember red glow accent, minimal',
      quantity: 1,
      width: 1024,
      height: 1024,
      prompt_enhance: 'OFF',
    },
  };
  const r = await api('v2', '/generations', { method: 'POST', body: JSON.stringify(body) });
  return r;
}

async function pollV2(id, tries = 40) {
  // Try multiple known polling paths; first one that returns ok wins.
  const paths = [
    ['v1', `/generations/${id}`],
    ['v2', `/generations/${id}`],
    ['v1', `/jobs/${id}`],
    ['v2', `/jobs/${id}`],
  ];
  let goodPath = null;
  for (let i = 0; i < tries; i++) {
    await sleep(2500);
    if (!goodPath) {
      for (const p of paths) {
        const r = await api(p[0], p[1]);
        if (r.ok) { goodPath = p; console.log('  found polling path:', p); break; }
      }
      if (!goodPath) {
        console.log(`  poll ${i + 1}: no path ok yet`);
        continue;
      }
    }
    const r = await api(goodPath[0], goodPath[1]);
    if (!r.ok) {
      console.log('  poll non-ok', r.status, JSON.stringify(r.json).slice(0, 200));
      continue;
    }
    const gen = r.json?.generations_by_pk || r.json?.data || r.json?.generation || r.json;
    const status = gen?.status;
    console.log(`  poll ${i + 1}: status=${status}, hasImages=${(gen?.generated_images || gen?.images || []).length}`);
    if (status === 'COMPLETE' || status === 'COMPLETED' || status === 'SUCCESS') return r.json;
    if (status === 'FAILED' || status === 'ERROR') throw new Error('failed: ' + JSON.stringify(r.json).slice(0, 400));
  }
  throw new Error('timeout');
}

async function main() {
  for (const model of ['gpt-image-2', 'gpt-image-1.5']) {
    console.log(`\n=== Trying model: ${model} ===`);
    const r = await tryStart(model);
    console.log('start status:', r.status);
    console.log('start body:', JSON.stringify(r.json).slice(0, 600));
    if (!r.ok) continue;
    const id =
      r.json?.generate?.generationId ||
      r.json?.sdGenerationJob?.generationId ||
      r.json?.generations_by_pk?.id ||
      r.json?.id ||
      r.json?.data?.id ||
      r.json?.generation?.id;
    console.log('generation id:', id);
    if (!id) continue;
    try {
      const final = await pollV2(id);
      console.log('FINAL:', JSON.stringify(final).slice(0, 1200));
      // Save the first image url to public/_probe.json for inspection
      const out = path.resolve(process.cwd(), 'public', '_probe.json');
      fs.writeFileSync(out, JSON.stringify(final, null, 2));
      console.log('saved', out);
      console.log(`\n✅ ${model} works on this account`);
      return;
    } catch (e) {
      console.error('poll failed:', e.message);
    }
  }
  console.log('\n❌ neither model worked');
}

main().catch(e => { console.error(e); process.exit(1); });
