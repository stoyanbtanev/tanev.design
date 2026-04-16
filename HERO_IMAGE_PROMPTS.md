# Hero Image Prompts — tanev.design

Replace the 8 hero parallax images (`public/1.webp` → `public/8.webp`) with a set that reflects the owner's actual interests: 90s hip-hop, chess, archery, LOTR / fantasy, fantasy PC gaming, website craft.

The images float behind the headline with **depth parallax** (depths: `0.5, 1, 2, 1, 1, 2, 4, 1`) and are also used as preloader cells. They should therefore:

- Read well at **small sizes** and under **motion blur**.
- Have a **dark, moody, slightly desaturated** palette so the bright "YOUR NEXT WEBSITE. NO COMPROMISE." headline stays dominant.
- Feel like a curated mood board — **not stock photography**, not AI-slop busy compositions.
- Include at least one subtle tanev.design accent color (**#E8241A** ember red) where natural (sparks, neon sign, highlight).

---

## Global style directive (paste into every prompt)

> Cinematic, editorial, fine-grain 35mm film, very low saturation, deep shadows, single warm accent light, negative space, shot on Portra 800 or Cinestill 800T, minimal composition, moody, 4:5 aspect, no text, no logos, no watermarks, no humans facing the camera, tasteful, photographic — not illustrated.

Append that block verbatim to each specific prompt below.

---

## 1 — `1.webp` — 90s hip-hop (boombox / vinyl)

```
Close-up of a worn matte-black boombox on a cracked concrete floor next to a single vinyl record sleeve, soft haze of dust in a shaft of window light, one glowing red power LED (#E8241A), shallow depth of field, 35mm film, 1990s New York basement vibe, dark warm grey palette, strong negative space on the right half of the frame.
```

## 2 — `2.webp` — Chess (tactical close-up)

```
Extreme macro of a carved wooden knight chess piece on a leather-topped board mid-game, black king toppled in soft focus in the background, warm tungsten desk lamp from the left, deep shadows, slight cigar-smoke atmosphere, museum-quality ebony and ivory pieces, no hands visible, editorial still life.
```

## 3 — `3.webp` — Archery

```
Recurve bow string fully drawn, carbon arrow nocked, only the fingertips and riser visible, forest bokeh in the background at dawn, cold dew mist, a single beam of orange sunrise cutting diagonally across the frame (#E8241A warmth), very shallow depth of field, cinematic, no face.
```

## 4 — `4.webp` — LOTR / fantasy (artifact still life)

```
Weathered bronze ring resting on a folded piece of aged parchment, a single candle flame out of focus behind it throwing a warm ember glow, map fragment with calligraphy faintly visible, dust motes in the air, Middle-earth archival tone, deep blacks, museum product photography, absolutely no characters, no faces.
```

## 5 — `5.webp` — Fantasy PC gaming (hardware cathedral)

```
Dark wood desk lit only by the ember-red (#E8241A) underglow of a custom watercooled PC and a curved ultrawide monitor displaying an out-of-focus fantasy landscape, mechanical keyboard and a worn leather mousepad, single candle on a bookshelf in deep background, cinematic product photography, rich shadows, Thomas Wolski aesthetic, night mood.
```

## 6 — `6.webp` — Website design craft (analog-to-digital)

```
Overhead flat-lay on a dark charcoal desk: an open hardcover notebook with hand-drawn web wireframes in pencil, a matte-black MacBook showing a minimal monochrome website mockup in low brightness, a fountain pen, a coffee in a heavy ceramic cup, one red marker cap (#E8241A) as the only color. Editorial, moody, low-key lighting, Kinfolk magazine styling.
```

## 7 — `7.webp` — 90s hip-hop (turntable spinning)

```
Macro close-up of a Technics SL-1200 turntable needle in the groove of a spinning vinyl, deep reflective black platter, slight motion blur on the record, warm low-key studio light from the right, one small red tally light glowing (#E8241A), grain, 1990s record store mood, absolutely no people.
```

## 8 — `8.webp` — Chess + fantasy crossover (stone chess set)

```
Hand-carved stone chess set mid-game on a weathered oak table in a medieval library, soft afternoon window light through leaded glass, a leather-bound book and an extinguished candle in the background, dust floating in the sunbeam, a single piece glowing faintly red from an unseen source (#E8241A), cinematic still life, no people, parchment tones, deep shadows.
```

---

## Generation tips

- **Midjourney**: append `--ar 4:5 --style raw --stylize 250 --v 6` and remove the "cinematic, editorial..." block since raw + low stylize gives you that for free.
- **Nano Banana / Gemini 2.5 Flash Image**: keep the full global style directive; it leans painterly otherwise.
- **Flux Pro 1.1 / Ideogram**: good for #6 (text-adjacent) because they render tiny mock-UI glyphs cleanly.
- Target output size **1200×1500 (4:5)**, export WebP quality 82, aim for **≤ 150 KB per image**.

## Post-processing before committing to `/public/`

1. Run all through a unified LUT or curves adjustment so they feel like a set, not 8 separate images.
2. Convert with `cwebp -q 82 -m 6 input.png -o N.webp` (or `squoosh`).
3. Keep filenames exactly `1.webp` → `8.webp` — they are referenced by index in both `Preloader` and `Hero`.
4. Optional: generate `@2x` variants and update `<img src>` to use `srcset`.

## If you want the set to feel more cohesive

Run the **same negative prompt** on every image:
```
no people, no faces, no text, no logos, no watermarks, no oversaturation, no HDR, no clipart, no vector, no 3D render look, no anime
```
