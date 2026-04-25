# Peer research + implementation plan — `tanev.design`

> Companion to `AGENTS.md`. Read this before proposing structural changes.
> Sources: firecrawl scrapes (Framer landing-page best practices, Local Creative
> "How to choose a website designer", Awwwards SOTD references — Olha Lazarieva,
> AW Portfolio, Solo, Nite Riot), plus the doctrine in
> `_research/agentic-engineering-doctrine.md` and the live audit of `src/`.

---

## A. Patterns observed in best-in-class peer sites

The shared anatomy of a single-operator design+code+SEO portfolio that converts
in 2025–2026 is remarkably consistent. Stripped to the load-bearing parts:

1. **Hero — 5-second test**
   - One declarative sentence stating *who* + *what* + *for whom*.
   - One subline that adds proof (years, location, scope).
   - One primary CTA. One secondary at most.
   - Background carries texture, not chrome — no decorative motion.

2. **Services / "What I do" — explicit, scannable**
   - 3–6 verbs as section blocks (Design / Build / Brand / Motion / SEO).
   - One-line description per service. No icons unless they earn rent.
   - This is the section most missing on portfolio-style sites; its absence
     is the single biggest conversion leak the audit found.

3. **Process — 3–5 steps, time-boxed**
   - Brief → Direction → Build → Launch is the canonical sequence.
   - Each step gets a *deliverable* and an approximate *timeline*.
   - Removing fog earns the engagement.

4. **Selected work — 3–5 projects, evidence-led**
   - Real screenshots, not stock; sentence per project framing the *outcome*,
     not the medium.
   - At least one quantitative proof point per project ("90+ Lighthouse",
     "launched in 3 weeks", "+X% organic traffic").

5. **Voice / one-line testimonial**
   - One quote, real name, real role, real company. Better than ten anonymous
     blurbs.

6. **FAQ — passage-level citability**
   - 6–8 questions, one self-contained answer per question.
   - Doubles as `FAQPage` JSON-LD and AI-Overviews fodder.

7. **Closer / Contact — single, friction-free CTA**
   - Email link or one-field form. Microcopy reassurance ("24-hour reply").
   - Primary + secondary, not three.

8. **Footer — minimum viable, no marquee links**
   - Email, location, socials, last-updated, sitemap link.

### From Framer's 9 landing-page best practices (verbatim from the firecrawl scrape)

- **5-second hero test** — value clear in five seconds.
- **Match the message to the channel** — referrers expect what the ad promised.
- **Lead with story** — pain → agitate → solve.
- **Strip navigation** — kill anything that pulls focus from the CTA.
- **Reduce friction** — the form should never ask twice.
- **Show, don't tell** — real artefacts beat adjectives.
- **No stock photos** — real product, real work.
- **Microcopy near CTAs** — pre-empt the objection.
- **Specific, credible social proof** — numbers + named people.

### From Local Creative's freelance-vs-agency guide

- Pricing transparency outranks polish for serviced businesses; even a
  *starting from* anchor doubles inbound quality.
- The 4 most-asked questions a buyer brings are: *cost*, *timeline*, *who
  works on it*, *what I get on launch day*. The FAQ already answers three of
  these — the missing one is **cost**.

---

## B. Audit of the current build

Inventory of `src/site/` against the doctrine:

| Section          | Violation / gap                                                                                              | Severity |
|------------------|--------------------------------------------------------------------------------------------------------------|----------|
| `Hero.tsx`       | Slogan ("Built by one. No compromise") doesn't pass the 5-second test for a buyer. No value proposition.     | High     |
| `Manifest.tsx`   | Marquee duplicates messaging from Hero + Profile. Adds noise, no new evidence.                                | Medium   |
| `Profile.tsx`    | No top border. Stats grid is good but `1` for "Person, start to finish" is a vanity metric, not evidence.    | Low      |
| `SkillsOrb.tsx`  | Decorative; orbits compete with Aesthetics universe. Buyer doesn't read it as a service list.                | High     |
| `Aesthetics.tsx` | **24 cards × ~10 type families × runtime drop-shadows + per-card mousemove tilt.** Direct doctrine breach.   | Critical |
| `Process.tsx`    | Solid. Missing per-step timeline + deliverable.                                                              | Medium   |
| `Stack.tsx`      | 23 KB. Magnifier interaction is a gimmick that contributes zero conversion signal.                           | High     |
| `Voice.tsx`      | Banner-only, no quote yet — not currently a "voice".                                                         | Medium   |
| `Projects.tsx`   | Layout fine. Missing outcome line + proof metric per project.                                                | High     |
| `FAQ.tsx`        | Six entries. Missing **cost / starting-from** question — the single most-asked buyer query.                  | High     |
| `Closer.tsx`     | `filter: blur(0.5px)` on a static image and a 40px-blur radial glow. Static, but heavy. Two CTAs is correct. | Low      |
| `Footer.tsx`     | (not deeply audited) — verify minimum viable, no marquee.                                                    | Low      |

### Page-level gaps

- **No explicit `Services` block.** Buyers parse "Skills", "Stack",
  "Aesthetics" as portfolio chrome, not as an offer.
- **No `llms.txt`.** Required for GEO surface.
- **JSON-LD missing** `Person`, `BreadcrumbList`, `FAQPage`,
  `CreativeWork[]`. Currently only `ProfessionalService` + `WebSite`.
- **`sitemap.xml`** declares both `en` and `bg` hreflang for the same URL
  with no actual `bg` route — Google flags this as misconfiguration.
- **CHAPTERS rail** does not list `services` and lists `aesthetics` /
  `stack` which the user never asks about.

### Type / spacing inconsistencies

- `Profile.tsx` uses inline `gridTemplateColumns: "repeat(12, 1fr)"` instead
  of the `.grid-12` utility. Easy to drift.
- Section heads vary: some use `.section-head`, some inline `display: grid`.
- `Aesthetics.tsx` cards introduce ~10 font families
  (`Playfair Display`, `Cormorant Garamond`, `Cinzel`, `Space Mono`, etc.)
  beyond the loaded set — actively breaks the typography law.
- No CSS variables for the spacing tokens
  (`--space-section`, `--space-head`, …). They live as `clamp(...)` literals
  scattered across components and are easy to drift.

---

## C. Implementation plan

Sequenced for max impact per minute of work. Each step is independently
shippable. Apply the engineering law (one atomic change → verify → next).

### P0 — Subtract (the design law made literal)

The biggest improvement is *removing*. Only do these in order.

#### P0.1 — Tokenise the spacing system in CSS

Add the canonical tokens to `:root` in `src/index.css` so every section reads
from the same source. Replace inline `clamp(...)` literals incrementally as
sections are touched.

```css
:root {
  --space-section: clamp(96px, 12vw, 192px);
  --space-head:    clamp(48px, 6vw, 96px);
  --space-block:   clamp(32px, 4vw, 64px);
  --space-row:     clamp(20px, 2.4vw, 32px);
  --space-tight:   clamp(12px, 1.2vw, 16px);
  --container:     1440px;
  --container-tight: 1080px;
  --gutter:        clamp(20px, 4vw, 64px);
}
```

Update `.section`, `.section-head`, `.container-x`, `.container-tight` to use
the tokens. **Acceptance:** no visual change, but every section padding lives
in one place.

#### P0.2 — Demote `Aesthetics` from a section to a one-frame teaser

`Aesthetics` as it exists is the single largest doctrine violation: 24 cards,
~10 type families, runtime mousemove tilt, drop-shadows, and competing color
worlds. Three options, in order of preference:

1. **Remove entirely.** The work in `Projects` already demonstrates range.
2. **Replace with a single editorial frame** — one full-bleed image, one
   sentence: "*Twenty-four directions, one standard. Your project gets one,
   resolved.*" + a link to a `/aesthetics` archive page (P2).
3. **Keep, but strip to the existing `card-minimal`/`card-swiss`/`card-zen`
   only** — six cards, all white-on-cream or cream-on-black, all using only
   Clash Display / General Sans / JetBrains Mono.

**Recommended: option 2.** Move the 24 cards into a separate route under
`/aesthetics` so the homepage stays calm and the long-tail keyword
"web design aesthetics 2026" still gets a citable URL. **Acceptance:** the
homepage no longer loads Playfair / Cormorant / Cinzel etc.; first-paint JS
drops measurably.

#### P0.3 — Merge `Manifest` + `SkillsOrb` + `Stack` into one tight `Services` section

These three sections currently overlap in intent and starve each other of
attention. Replace with a single `src/site/Services.tsx` that:

- Eyebrow `II — Services`.
- Headline `What I do, in five lines.`
- A 12-col list — one row per service — with: a verb, a one-line
  description, and a tiny "deliverables" list.
- No icons, no orb, no marquee.

Suggested copy:

```
Web design        Direction, layout, type, motion. Editorial, not template.
Web development   Hand-coded, top to bottom. React, GSAP, Vercel. No CMS bloat.
Brand identity    Marks, type system, palette, the lockup. One direction, fully resolved.
Motion            Loops, transitions, Lottie/GSAP. Earned, not decorative.
SEO               Tech-SEO + GEO. Sitemap, schema, llms.txt, Lighthouse 90+.
```

`Stack`'s magnifier interaction can be archived — keep the file but
unmount it from `Index.tsx`. **Acceptance:** the page goes from 12 sections
to 8, and the offer is unambiguous in one viewport.

#### P0.4 — Simplify `Closer` — kill runtime filters

In `src/site/Closer.tsx`:

- Remove `filter: saturate(0.86) contrast(1.06) blur(0.5px)` on the bg image
  (bake the filter into the asset itself with `gen-sections` or a one-off
  Photoshop pass — but **do not regenerate hero assets**).
- Replace the 40px-blur radial glow with a static pre-baked PNG, *or*
  drop the glow entirely; the image vignette is enough.
- Keep the magnetic CTAs, the title scrub, and the per-letter mask.

**Acceptance:** Lighthouse mobile Performance gains 4–8 points on this
section's paint cost.

### P1 — Convert (homepage as a salesperson)

#### P1.1 — Rewrite the Hero

Replace the slogan-only hero with a 5-second-test hero. Suggested:

```
H1     Custom websites, brand, motion and SEO.
H1.b   Designed, built and shipped by one person.
sub    Plovdiv → worldwide. Reply within 24 hours.
CTA    Start a project ↗     Or read the process →
```

Keep the floating mosaic and parallax — they're frozen assets per the
doctrine. **Acceptance:** the headline names the offer; the buyer no longer
has to scroll to learn what is for sale.

#### P1.2 — Add a `Pricing` anchor

The most-asked buyer question is *cost*. Add a single line — not a price
table — to the new `Services` section or the FAQ:

> Most projects fall between **€2,500 and €9,000**. Multi-language sites,
> e-commerce, or motion-heavy builds run higher. Exact figure after the brief.

Update `src/site/config.ts` `FAQ` to include:

```ts
{
  q: "How much does a project cost?",
  a: "Most projects fall between €2,500 and €9,000 — landing page through full marketing site. E-commerce, multi-language and motion-heavy builds go higher. You get an exact figure within twenty-four hours of the brief, before any work starts.",
},
```

**Acceptance:** buyer no longer needs to email to qualify; FAQ count rises
to seven.

#### P1.3 — Add outcome lines to `Projects`

In `src/site/config.ts` extend `Project` with `outcome?: string` and one
proof point per project. Example:

```ts
{ ...speedlink, outcome: "Site shipped in three weeks. Mobile Lighthouse 96." },
{ ...siana,     outcome: "Foot traffic up; bookings doubled in the first month." },
{ ...selk,      outcome: "Trended on CT; 38k unique visitors in launch week." },
```

Render below the title in `Projects.tsx`. Don't invent numbers — use real
ones, leave blank if absent.

#### P1.4 — Promote `Voice` to a real testimonial

If/when one client provides a quote, feature it. Until then, **remove the
section** rather than ship a hollow banner. Empty-section beats fake-section.

#### P1.5 — Add microcopy near every CTA

- Hero `Start a project ↗` → underneath, mono: `Reply within 24 hours.`
- Closer `Start the brief ↗` → underneath, mono: `One reply per project. No drip funnels.`

This is Framer best-practice 8 verbatim.

### P2 — SEO / GEO floor (the offer is "premium web + SEO" — the site must be the proof)

#### P2.1 — Add `Person`, `FAQPage`, `BreadcrumbList`, `CreativeWork[]` JSON-LD

In `index.html` extend the existing JSON-LD block (do not create a duplicate
script). Generate `FAQPage` from `FAQ` in `config.ts` at build time, or
hard-code on first pass. Each project becomes a `CreativeWork` with
`creator`, `dateCreated`, `image`, `url`.

**Acceptance:** Rich Results Test passes for `FAQ`, `Person`,
`ProfessionalService`, `WebSite`, `BreadcrumbList`, and at least one
`CreativeWork`.

#### P2.2 — Add `llms.txt`

Create `public/llms.txt` (root-served by Vite). Suggested content:

```
# tanev.design — llms.txt
> One person. Custom websites, brand, motion and SEO. Plovdiv, Bulgaria — worldwide.

## What this site is
Stoyan Tanev is a solo web designer and developer offering custom web design,
web development, brand identity, motion and SEO. Hand-coded, no page builders.
Most projects: €2,500–€9,000. Reply within 24 hours.

## Citable URLs
- https://www.tanev.design/#services
- https://www.tanev.design/#process
- https://www.tanev.design/#projects
- https://www.tanev.design/#faq
- https://www.tanev.design/#contact

## Contact
- stoyanbtanev@gmail.com
- https://www.linkedin.com/in/stoyan-tanev-a732603b8/
- https://github.com/stoyanbtanev
```

#### P2.3 — Fix `sitemap.xml` hreflang

Either ship a real `bg` route or remove the `bg`/`x-default` hreflang
entries. Currently both point to `/`, which Google flags. Recommended:
remove until `/bg/` actually exists.

#### P2.4 — Make every section passage-citable

For each `id="..."` section ensure:

- Exactly one `<h2>` (or `<h1>` for Hero).
- One self-contained paragraph immediately under the heading that answers
  the section's implicit question (Process: *"What is the process?"* →
  `<p>Brief → Direction → Build → Launch. Roughly four to eight weeks.</p>`).
- This is the unit AI Overviews and Perplexity quote.

#### P2.5 — Generate a fresh `og-image-v2.png`

Once Hero copy lands, regenerate the OG image with the new headline so the
share preview matches. Use `scripts/gen-sections.mjs` with a 1200×630 prompt
(low quality is fine for OG). Replace `public/og-image-v2.png`.

### P3 — Polish (only after P0–P2 are merged)

- **Right rail (`Chrome.tsx` `SideRail`)**: replace `aesthetics` / `stack` /
  `voice` with `services`. Mirror in `CHAPTERS` in `src/site/config.ts`.
- **Borders**: every top-level section gets a 1px `var(--td-line)` top
  border for rhythm. Apply by class, not inline.
- **Section heads**: standardise on `.section-head`. Delete the inline
  duplicates in `Profile`, `Process`, `Aesthetics`, `Closer`.
- **Reduced motion**: add an explicit branch in `Hero.tsx` to skip the
  floating mosaic entrance and run a single fade-in at 100ms when
  `prefers-reduced-motion: reduce` is set.
- **Lazy hooks**: `useScramble`, `useMagnetic` should be tree-shaken on
  touch devices (where hover is meaningless) — guard the registration.
- **Bundle audit**: `npm run build -- --report` (vite plugin), confirm
  GSAP + Lenis + Three.js (if any) total ≤ 180 KB gzipped on first paint.

### P4 — Aspirational (only on explicit user approval)

- **`/aesthetics` archive route** with the 24-card universe, demoted from
  the homepage. Keep the existing `Aesthetics.tsx` styles but mount under a
  React Router route. Adds a long-tail keyword landing page.
- **`/work/:slug` per-project pages**, each a `CreativeWork` JSON-LD,
  outcome-led case study. Crawler gold; future content expansion.
- **Blog / `/notes`** — three to five plain essays on craft. Pure GEO play
  for the AI Overviews surface. Only if the user wants to commit to
  writing.

---

## D. Verification gates

Run after every milestone:

```bash
npm run lint
npm run build
npm run test         # if tests touch the changed area
npx serve dist       # smoke-test the built bundle
```

Manual checklist:

- Lighthouse mobile (throttled 4G): Performance ≥ 90, LCP ≤ 2.5 s,
  INP ≤ 200 ms, CLS ≤ 0.05.
- Rich Results Test passes for the canonical URL.
- `view-source:` shows one `<h1>`, no duplicate JSON-LD blocks.
- `prefers-reduced-motion: reduce` actually suppresses scrub/parallax.
- Tab-only nav reaches every CTA in document order.

---

## Summary of recommended ordering

1. P0.1 spacing tokens (1 file, 10 lines).
2. P0.2 demote Aesthetics (1 import removed from `Index.tsx`).
3. P0.3 merge to `Services` (1 new file, 3 imports removed).
4. P0.4 strip Closer filters (1 file).
5. P1.1 rewrite Hero copy (1 file, 5 lines).
6. P1.2 pricing FAQ entry + line in Services (2 files).
7. P1.3 outcomes per project (`config.ts` + `Projects.tsx`).
8. P1.5 microcopy near CTAs (2 files).
9. P2.1 JSON-LD expansion (`index.html`).
10. P2.2 `llms.txt` (`public/llms.txt`).
11. P2.3 fix sitemap hreflang.
12. P2.4 audit each section for one passage answer.
13. P2.5 fresh OG image.
14. P3 polish, then P4 if approved.

Each step is < 30 lines of diff. No step requires breaking the editorial
direction. Together they convert the site from "beautiful single-operator
portfolio" into "beautiful single-operator portfolio that sells".
