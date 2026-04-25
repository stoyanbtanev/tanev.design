// Generates section images via Leonardo gpt-image-2 (OpenAI's GPT Image 2.0).
// Output -> public/sections/<slug>.jpg
// Idempotent: skips files already on disk.
// Usage: node scripts/gen-sections.mjs
//        node scripts/gen-sections.mjs --quality=HIGH      (default)
//        node scripts/gen-sections.mjs --quality=MEDIUM
//        node scripts/gen-sections.mjs --only=profile,process-brief
import fs from 'node:fs';
import path from 'node:path';

const API_KEY = '9f3bed64-d4ba-42e6-b8e9-a10756cda51a';
const BASE = 'https://cloud.leonardo.ai/api/rest';
const OUT_DIR = path.resolve(process.cwd(), 'public', 'sections');

// CLI args
const argv = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
  })
);
const QUALITY = (argv.quality || 'HIGH').toUpperCase(); // LOW | MEDIUM | HIGH
const ONLY = argv.only ? new Set(String(argv.only).split(',').map((s) => s.trim())) : null;

// Cedric-Pereira-tier global direction. Phrased as instructions GPT-Image-2 obeys well.
// Hard exclusions go inside the prompt itself (gpt-image-2 doesn't have negative_prompt).
const STYLE = [
  'shot on 35mm film, cinematic, photographic, editorial',
  'deep monochrome warm tones with one single ember red #E8241A accent light',
  'deep shadows, negative space, intentional composition, gallery-grade',
  'no people, no faces, no hands, no text, no logos, no watermark',
  'no AI sheen, no oversaturation, no HDR, no clipart, no 3D render',
].join(', ');

const PROMPTS = [
  {
    slug: 'profile-portrait',
    aspect: '3:2',
    width: 1536,
    height: 1024,
    prompt:
      'an old walnut writing desk in low warm window light. an open black leather notebook with pencilled wireframes. a half-empty espresso cup with curling steam. a brass lamp casting a single ember orange pool of light onto worn paper. deep shadows. negative space top right. nothing in motion.',
  },
  {
    slug: 'process-brief',
    aspect: '3:2',
    width: 1536,
    height: 1024,
    prompt:
      'a leather-bound notebook open on dark walnut, a fountain pen resting across the page mid-sketch. a single square of cold window light cutting diagonally across the surface. crumpled paper drafts pushed aside in soft focus.',
  },
  {
    slug: 'process-direction',
    aspect: '3:2',
    width: 1536,
    height: 1024,
    prompt:
      'a moodboard pinned to a deep matte black wall. one slightly blurred photograph at the centre. swatches of cream cardstock. a single ember red yarn thread running between all pins like a constellation. raking side light from the left.',
  },
  {
    slug: 'process-build',
    aspect: '3:2',
    width: 1536,
    height: 1024,
    prompt:
      'extreme close-up macro of an aluminium laptop keyboard at an oblique angle. one single keycap glowing softly ember orange from beneath. all surrounding keys in deep shadow. a faint blurred reflection of geometric shapes on the screen above. dust particles in the light.',
  },
  {
    slug: 'process-launch',
    aspect: '3:2',
    width: 1536,
    height: 1024,
    prompt:
      'a long empty cobblestone street at first dawn in an old European town, mist hanging low between the stone buildings. a single ember orange streetlamp glowing in the distant vanishing point. blue-grey overhead light. nobody in frame.',
  },
  {
    slug: 'voice-banner',
    aspect: '21:9',
    width: 1792,
    height: 768,
    prompt:
      'an antique brass typewriter on a dark walnut surface, partially in deep shadow. an ember red ink ribbon visible. a stack of inked pages beside it. side raking warm window light. dust caught in the beam. cinematic horizontal composition.',
  },
  {
    slug: 'closer-mood',
    aspect: '21:9',
    width: 1792,
    height: 768,
    prompt:
      'a wet cobblestone old-town street at night. a single ember orange neon glow reflecting on the wet cobbles in the foreground. distant blurred shopfronts and warm window pools far behind. soft drizzle in the air. deep blue-black tones. nobody in frame.',
  },
];

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
  let json;
  try { json = JSON.parse(txt); } catch { json = { raw: txt }; }
  return { ok: res.ok, status: res.status, json };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startGen(p) {
  const body = {
    public: false,
    model: 'gpt-image-2',
    parameters: {
      quality: QUALITY,
      prompt: `${p.prompt}. ${STYLE}`,
      quantity: 1,
      width: p.width,
      height: p.height,
      prompt_enhance: 'OFF',
    },
  };
  const r = await api('v2', '/generations', { method: 'POST', body: JSON.stringify(body) });
  if (!r.ok) {
    throw new Error(`start ${r.status}: ${JSON.stringify(r.json).slice(0, 300)}`);
  }
  const id = r.json?.generate?.generationId;
  if (!id) throw new Error('no generation id: ' + JSON.stringify(r.json).slice(0, 300));
  const cost = r.json?.generate?.cost?.amount;
  return { id, cost };
}

async function poll(id, tries = 80) {
  for (let i = 0; i < tries; i++) {
    await sleep(2500);
    const r = await api('v1', `/generations/${id}`);
    if (!r.ok) continue;
    const gen = r.json?.generations_by_pk;
    const status = gen?.status;
    if (status === 'COMPLETE') return gen;
    if (status === 'FAILED') throw new Error('FAILED: ' + JSON.stringify(gen).slice(0, 300));
  }
  throw new Error('timeout polling ' + id);
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function runOne(p) {
  const dest = path.join(OUT_DIR, `${p.slug}.jpg`);
  if (fs.existsSync(dest)) {
    console.log(`[${p.slug}] already on disk, skip`);
    return { slug: p.slug, status: 'skip', dest };
  }
  console.log(`[${p.slug}] starting (${p.width}x${p.height}, ${QUALITY})...`);
  const { id, cost } = await startGen(p);
  console.log(`[${p.slug}] queued ${id} (cost ~$${cost})`);
  const gen = await poll(id);
  const url = gen?.generated_images?.[0]?.url;
  if (!url) throw new Error('no image url in result');
  await download(url, dest);
  console.log(`[${p.slug}] saved ${dest}`);
  return { slug: p.slug, status: 'ok', dest, cost };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const todo = ONLY ? PROMPTS.filter((p) => ONLY.has(p.slug)) : PROMPTS;
  console.log(`Generating ${todo.length} images at quality=${QUALITY} -> ${OUT_DIR}`);

  // Fire all in parallel — Leonardo enqueues server-side.
  const results = await Promise.allSettled(todo.map(runOne));
  let ok = 0;
  let totalCost = 0;
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      ok++;
      if (r.value.cost) totalCost += parseFloat(r.value.cost);
    } else {
      console.error(`[${todo[i].slug}] FAIL:`, r.reason?.message || r.reason);
    }
  });
  console.log(`\n${ok}/${todo.length} succeeded. approx total cost: $${totalCost.toFixed(3)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
