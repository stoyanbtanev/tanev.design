# tanev.design — Copy Revision & Improvement Plan

Last reviewed: full site scan of `src/pages/Index.tsx` + `src/components/RadialOrbitalTimeline.tsx`.

This doc covers **two things**:
1. A line-by-line EN/BG copy revision (tighter, more punchy, grammatically clean).
2. An engineering / UX improvement roadmap, grouped by priority.

---

## 1. Copy revision — EN / BG

Conventions:
- **Before** = what is currently in the code.
- **After**  = suggested rewrite.
- BG uses typographic quotes „…" and em-dashes consistent with modern Bulgarian typography.
- All-caps remains a visual/CSS choice — write the source in sentence case where possible; `text-transform: uppercase` handles the rest.

### 1.1 Hero

| | EN | BG |
|---|---|---|
| Before | YOUR NEXT WEBSITE. NO COMPROMISE. | СЛЕДВАЩИЯТ ТИ САЙТ. БЕЗ КОМПРОМИСИ. |
| After  | Your next website. No compromise. | Следващият ти сайт. Без компромис. |
| Sub before | ONE PERSON. EVERY DETAIL CONSIDERED. | ЕДИН ЧОВЕК. ВСЕКИ ДЕТАЙЛ — ОБМИСЛЕН. |
| Sub after  | One person. Every detail considered. | Един човек. Всеки детайл е обмислен. |
| CTA | LET'S TALK ↗ / ПИШИ МИ ↗ | Start a project ↗ / Започни проект ↗ |

> Note: swapping "Let's talk" → "Start a project" signals intent (they are here to buy, not to chat).

### 1.2 Mission

Keep the current cadence — it's the strongest copy on the site. Small tightens:

| EN | BG |
|---|---|
| I work alone. | Работя сам. |
| No handoffs. No middlemen. | Без посредници. Без предавания. |
| Your project gets my full attention. | Проектът ти получава цялото ми внимание. |
| No delays. No excuses. | Без закъснения. Без извинения. |
| Just the work. Done properly. | Само работата. Както трябва. |

### 1.3 Stats bar

| Current | Suggested EN | Suggested BG |
|---|---|---|
| 1 — PERSON. START TO FINISH. | 1 designer. Start to finish. | 1 дизайнер. От брифа до финала. |
| 24 — VISUAL DIRECTIONS | 24 visual directions | 24 визуални посоки |
| 100% — CUSTOM CODE | 100% custom code | 100% авторски код |

### 1.4 Services (now the orbital timeline)

Already re-written for the orbital UI (see `RadialOrbitalTimeline.tsx`). Final shortlist:

| Code | EN title | BG title | EN description | BG description |
|---|---|---|---|---|
| 01 | Static Sites | Статични сайтове | Sub-second loads. Built to convert before they think twice. Hand-coded — no page builders. | Зарежда за секунда. Конвертира преди да се замислят. Ръчен код — без конструктори. |
| 02 | 3D & Motion | 3D и движение | The kind of site people share at 2 AM. Real WebGL and GSAP — not templates. | Сайтът, който споделят в 2 сутринта. WebGL и GSAP — без шаблони. |
| 03 | Brand Identity | Бранд идентичност | Your brand should not look like the competition. Logo, type, color — crafted to be yours. | Брандът ти не трябва да прилича на конкурента. Лого, шрифт, цвят — направени да бъдат твои. |
| 04 | Video | Видео | Edited to stop the scroll from the first frame. Short-form, long-form, product. | Монтирано да спира скрола от първия кадър. Кратко, дълго, продуктово. |
| 05 | SEO | SEO | When clients search, they find you — not the competition. On-page SEO baked into every build. | Когато търсят — намират теб, не конкуренцията. SEO, вградено във всеки проект. |
| 06 | Full Redesign | Пълен редизайн | If you are embarrassed to share your own site — it is time. Total rebuild. No compromise with the old. | Ако се притесняваш да покажеш сайта си — дойде моментът. Пълна подмяна. Без компромис със старото. |

### 1.5 Process (How it works)

| Step | EN | BG |
|---|---|---|
| 01 Brief | You fill the form. I study your world — not just your industry. | Попълваш формата. Аз проучвам твоя свят — не само бранша. |
| 02 Design | First visual direction lands in your inbox. Fast. | Първата визуална посока пристига в пощата ти. Бързо. |
| 03 Build | Pixel-perfect, animated, fast. Every detail considered. | Пиксел-перфектно, анимирано, бързо. Всеки детайл е обмислен. |
| 04 Launch | Goes live. You keep 100% ownership of everything. | Пуска се на живо. Запазваш 100% собственост над всичко. |

### 1.6 Arsenal

| | EN | BG |
|---|---|---|
| Eyebrow | The stack | Стекът |
| H2 | Modern tools. Serious output. | Модерни инструменти. Сериозен резултат. |
| Sub | Every project ships with a hand-picked, production-grade stack. | Всеки проект тръгва с внимателно подбран, продукционен стек. |
| Footer H3 | Built with the right tools | Направено с правилните инструменти |
| Footer P | Every site is crafted with a modern stack — fast to ship, built to last. | Всеки сайт се изгражда с модерен стек — бързо за пускане, създадено за дълго. |

### 1.7 Aesthetics (24 directions)

| | EN | BG |
|---|---|---|
| H2 | 24 directions. One standard. | 24 посоки. Един стандарт. |
| Sub | These are starting points — not a menu. Every project gets its own direction. | Това са отправни точки — не каталог. Всеки проект получава собствена посока. |

Per-card copy is already tight; keep as is.

### 1.8 FAQ

| Q (EN) | A (EN) | A (BG) |
|---|---|---|
| How does the process work? | You fill the form. Within 24 hours you get a reply with a rough plan. No discovery calls that waste your morning. | Попълваш формата. До 24 часа получаваш отговор с груб план. Без излишни разговори, които губят времето ти. |
| Who works on my project? | Me. One person, brief to launch. Nothing gets lost in translation. The vision stays intact. | Аз. Един човек — от брифа до финала. Нищо не се губи по пътя. Визията остава цяла. |
| How fast can you deliver? | Fast. Scope defines the timeline, but I don't sit on projects. You'll know the exact date after the brief. | Бързо. Обхватът определя срока, но аз не отлагам. Точния срок ще знаеш след брифа. |
| What do I own after the project? | Everything. Source files, code, assets. No subscriptions, no hostage-taking. Once delivered, it's 100% yours. | Всичко. Файловете, кодът, материалите. Без абонаменти, без задържане. След предаването е 100% твое. |
| Do you work with international clients? | Yes. About half my work is international. English, async communication, European payment methods — all standard. | Да. Около половината ми работа е с международни клиенти. Английски, асинхронна комуникация, европейски плащания — всичко стандартно. |

### 1.9 Contact form labels

All-caps is handled by CSS. Source labels should be sentence-case for accessibility & screen readers:

| Field | EN | BG |
|---|---|---|
| Name | Your name | Твоето име |
| Email | Your email | Твоят имейл |
| Style | Preferred aesthetic | Предпочитана естетика |
| Message | About your project | За проекта ти |
| Service | Service type | Вид услуга |
| Submit | Send inquiry | Изпрати запитване |
| Success | Received. I'll reply within 24h ✓ | Получено. Ще отговоря до 24 часа ✓ |
| Error | Something went wrong — try again. | Нещо се обърка — опитай отново. |

### 1.10 Footer

| EN | BG |
|---|---|
| Plovdiv, Bulgaria — working with clients everywhere. | Пловдив, България — работя с клиенти навсякъде. |

---

## 2. Implementation improvement plan

Grouped by priority. Each item is scoped and actionable — no vague "improve performance" handwaving.

### P0 — Ship-blockers (do now)

- [x] Remove "What clients say" section until real, sourced testimonials exist.
- [x] Blend chess section with page background (diagonal pattern removed, ember overlay softened).
- [x] Replace horizontal-scroll services with radial orbital timeline for a memorable interaction.
- [x] Prevent mid-word text breaks globally (`word-break: normal; hyphens: none; overflow-wrap: break-word`).
- [x] Rename package + meaningful `README.md` + repo metadata.

### P1 — High impact, low effort

- [ ] **Split the 1137-line `Index.tsx` into section files** (`sections/Hero.tsx`, `sections/Mission.tsx`, …). Current file is hard to navigate and slows HMR.
- [ ] **Move copy into a single `src/content/site.ts`** exporting `{ en, bg }` objects. The `<T />` helper becomes a lookup. Easier to maintain, translate, and A/B test.
- [ ] **`<T />` currently mounts both EN and BG markup** and toggles visibility via CSS (based on grep patterns). Switch to a render-time conditional so search engines don't index both copies as duplicate content.
- [ ] **Add OpenGraph + Twitter meta** in `index.html`: `og:title`, `og:description`, `og:image` (a hero screenshot), `twitter:card`. Critical for link sharing.
- [ ] **Add `sitemap.xml` and `robots.txt`** at `/public/`. Single-page site, but still useful for AI crawlers + GSC.
- [ ] **Wrap `formsubmit.co` email with a honeypot + rate-limit** (already has `_honey`; add a submit-throttle on the client and a silent captcha like Cloudflare Turnstile if spam increases).

### P2 — Performance

- [ ] **Preloader loads 8 full-resolution `.webp`** images. Serve 2× sizes (`1@1x.webp`, `1@2x.webp`) with `<picture>` + `srcset` for mobile.
- [ ] **Defer GSAP ScrollTrigger** scripts below the fold — inline-import only what the hero needs on first paint, then dynamic `import()` the rest after preloader exit.
- [ ] **Lazy-mount the chess game** (`React.lazy`) — it's below the FAQ and currently ships in the main bundle.
- [ ] **Audit the `public/Ember Smoke Abstract.jpg`** — if > 200 KB, compress or convert to AVIF.
- [ ] **Add `fetchpriority="high"`** to the first preloader image and `loading="lazy"` to everything in portfolio grid.
- [ ] **Self-host fonts** via `@fontsource/*` instead of relying on external CDNs — first paint improves and you avoid a render-blocking round-trip.

### P3 — Accessibility

- [ ] **Preloader:** add `role="progressbar"` + `aria-valuenow` binding on `.preloader__progress`. Right now it's a purely decorative bar from a screen reader's POV.
- [ ] **Hamburger button:** add `aria-expanded={menuOpen}` and `aria-controls="mobile-menu"`.
- [ ] **Language toggle:** wrap in `role="group" aria-label="Language"` and set `aria-pressed` on active button.
- [ ] **Style cards:** `style-badge` announces the style name; cards themselves are div-based and unfocusable. Either drop them from the tab order (`aria-hidden` if purely decorative) or convert to `<button>` with `aria-pressed`.
- [ ] **Form errors:** `.form-status.error` should have `role="alert"` so screen readers announce failures.
- [ ] **Chess board squares:** currently clickable divs — should be `<button>`s with coordinate labels (`a1`, `b2`, …) so the game is keyboard-playable.
- [ ] **Respect `prefers-reduced-motion`** across the orbital rotation, style-card 3D tilt, and mission-line parallax. Only the preloader currently honors it.

### P4 — SEO / Discoverability

- [ ] Real `<title>` and `<meta name="description">` per language (currently one-size-fits-all).
- [ ] JSON-LD `Person` + `ProfessionalService` schema in `index.html`. Name, URL, area served (Bulgaria + worldwide), services offered (1:1 with the orbital timeline).
- [ ] Real `/llms.txt` summarising the site for AI crawlers — good cheap GEO play right now.
- [ ] Distinct URLs per language via `?lang=bg` query param or `/bg` prefix so both versions can rank independently.

### P5 — UX polish

- [ ] **Orbital timeline:** add a keyboard ring — `←/→` to rotate nodes, `Enter` to expand, `Esc` to close.
- [ ] **Orbital cards** currently open downward; if the expanded node is in the bottom half of the orbit the card can clip. Compute placement (`top / bottom`) based on node angle.
- [ ] **Horizontal services removed** — verify nothing else in CSS (`.hz-*`, `.horizontal-services`) is left stranded. It's not harmful but can be deleted for bundle hygiene.
- [ ] **Chess game:** replace emoji pieces with SVG for consistent cross-platform rendering (Windows renders emoji chess pieces with the system UI font, which looks inconsistent with parchment).
- [ ] **StatsBar:** numbers count up once via GSAP. Add a subtle thousands separator for future-proofing (`100` → `100`, but `2400` needs `2,400`).
- [ ] **Contact form:** validate email client-side with a real regex + inline error state (instead of native `required`).

### P6 — Code hygiene / Git

- [ ] Replace legacy `tanevdesign-MASTER-all-fixes.md` and similar root-level scratch files with a single `/docs/` folder (or delete entirely — README covers it now).
- [ ] Remove `bun.lock` **or** `bun.lockb` **or** `package-lock.json` — pick one package manager and commit a single lockfile.
- [ ] Delete `.vercel/` from the repo (`.gitignore` it). It's generated and pollutes diffs.
- [ ] Add `.nvmrc` / `.tool-versions` pinning Node so builds are reproducible.
- [ ] Squash historical commits if this is a rebuild from a prior iteration (`git checkout --orphan clean-main` → commit → force push). **Do this only after a full backup.**
- [ ] Enable Dependabot + a single GitHub Action that runs `npm run lint && npm run build` on every PR.

### P7 — Analytics & feedback loop

- [ ] Plausible / Umami (self-host or cloud) — privacy-friendly and zero-cookie-banner. GA4 adds a cookie banner which is at odds with the "no compromise" copy.
- [ ] Hook form submissions into a dead simple **Sheet / Notion** destination (FormSubmit can forward). Today submissions only land in Gmail.

---

## 3. Things to *not* change

- The **opinionated tone** (short, assertive, almost aggressive) is the product. Do not soften it into generic freelancer language.
- The **one-pager architecture**. Splitting into routes would destroy the scroll cinematography.
- The **red accent (`#E8241A`)** + parchment + navy palette. It's already coherent.
- The **chess game as a signature element**. It's the weirdest thing on the site and that's exactly why people remember it.

---

_This file is a working document. Tick items off as they ship._
