# MASTER PROMPT — tanev.design: All Fixes Combined
## Files to edit: `src/index.css` and `src/pages/Index.tsx`

Apply every fix below in one pass. Do not change anything not listed here.

---

# PART 1 — CSS FIX (`src/index.css`)
## Mobile Hero Expansion Bug — `100vh` → `100dvh`

**Why:** `100vh` on mobile browsers equals the viewport height with the address bar fully *hidden*. When the page loads with the address bar visible, the hero is taller than the screen. As the user scrolls and the browser chrome hides, the hero visually "expands". `100dvh` (dynamic viewport height) updates in real time and eliminates this.

Apply the following 4 find-and-replace operations inside `src/index.css`. Replace only the `height`/`min-height` value, leave every other property on that line untouched.

---

### CSS Fix 1 — Hero section (line ~357)
**Find:**
```css
position: relative; height: 100vh; overflow: hidden; display: flex;
  align-items: center; justify-content: center; text-align: center;
```
**Replace with:**
```css
position: relative; height: 100dvh; overflow: hidden; display: flex;
  align-items: center; justify-content: center; text-align: center;
```

---

### CSS Fix 2 — Contact/Mission section (line ~459)
**Find:**
```css
padding: 180px 40px; min-height: 100vh;
```
**Replace with:**
```css
padding: 180px 40px; min-height: 100dvh;
```

---

### CSS Fix 3 — Horizontal services wrapper (line ~531)
**Find:**
```css
position: relative; height: 100vh; overflow: hidden; display: flex; align-items: center;
```
**Replace with:**
```css
position: relative; height: 100dvh; overflow: hidden; display: flex; align-items: center;
```

---

### CSS Fix 4 — CTA pin layer (line ~1081)
**Find:**
```css
position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; z-index: 10;
```
**Replace with:**
```css
position: relative; height: 100dvh; display: flex; align-items: center; justify-content: center; z-index: 10;
```

---

# PART 2 — COPY FIXES (`src/pages/Index.tsx`)
## Bulgarian & English text corrections — `<T en="..." bg="..." />` attributes only.
## Do NOT change any code, logic, JSX structure, class names, or styling.

---

### Copy Fix 1 — Hero CTA button
**Problem:** `"Да поговорим ↗"` starts lowercase — inconsistent with the all-caps style of the entire site. Also weak compared to the brand tone.

**Find:**
```
bg="Да поговорим ↗"
```
**Replace with:**
```
bg="ПИШИ МИ ↗"
```

---

### Copy Fix 2 — Services card 04 — title (Bulgarian)
**Problem:** `"ДВЕ СЕКУНДИ ДА ГРАБНЕ"` is grammatically incomplete — "да грабне" is a subclause with no object. Also "спира скрола" is a stronger, more relevant concept for 2026.

**Find:**
```
titleBg: 'ВИДЕО — ДВЕ СЕКУНДИ ДА ГРАБНЕ'
```
**Replace with:**
```
titleBg: 'ВИДЕО — СПИРА СКРОЛА'
```

---

### Copy Fix 3 — Services card 04 — title (English)
**Problem:** "TWO SECONDS TO HOOK" is weaker than the updated BG concept. Match with the scroll-stopping idea.

**Find:**
```
titleEn: 'VIDEO — TWO SECONDS TO HOOK'
```
**Replace with:**
```
titleEn: 'VIDEO — STOPS THE SCROLL'
```

---

### Copy Fix 4 — CTA display text (Bulgarian)
**Problem:** `"ТВОЯТ ХОД."` is soft. `"ДЕЙСТВАЙ."` is a direct command — zero filler, maximum impact.

**Find:**
```
bg="ТВОЯТ ХОД."
```
**Replace with:**
```
bg="ДЕЙСТВАЙ."
```

---

### Copy Fix 5 — CTA display text (English)
**Problem:** `"YOUR MOVE."` is a passive invitation. `"ACT."` is a command — matches the minimal aggression of the brand.

**Find:**
```
en="YOUR MOVE."
```
**Replace with:**
```
en="ACT."
```

---

### Copy Fix 6 — Styles — Dark Academia card headline
**Problem:** `"Сенки от библиотеки"` (= shadows from libraries) is a wrong translation of `"Of Books & Candlelight"`. Completely different concept — drops the candlelight warmth entirely.

**Find:**
```
bg="Сенки от библиотеки"
```
**Replace with:**
```
bg="Книги и свещи"
```

---

### Copy Fix 7 — Styles — Nordic Clean card description
**Problem:** `"Топли неутрални"` — "неутрални" is an adjective with no noun (grammatically broken). The noun form is "неутрали". Also missing "calm logic" from the EN original.

**Find:**
```
bg="Скандинавска яснота. Топли неутрални, отворено пространство."
```
**Replace with:**
```
bg="Скандинавска яснота. Топли неутрали, отворено пространство, спокойна логика."
```

---

### Copy Fix 8 — Styles — Cyberpunk card description
**Problem:** Drops the defining "low-life" contrast of cyberpunk. "High-tech, low-life" is the genre's founding tagline (William Gibson) — the BG version made it sound like a generic tech ad.

**Find:**
```
bg="Високи технологии, неонови мрежи и изкуствен интелект."
```
**Replace with:**
```
bg="Висока технология, нисък живот. Неонови мрежи и AI в бунт."
```

---

### Copy Fix 9 — Styles — Brutalist card description
**Problem:** `"смело"` (= bold/brave) ≠ `"unapologetic"`. Brutalism is about defiance, not just boldness. Also the three-word rhythm is broken.

**Find:**
```
bg="Функцията крещи най-силно. Нешлифовано, незабравимо, смело."
```
**Replace with:**
```
bg="Функцията крещи най-силно. Нешлифовано, без извинения, незабравимо."
```

---

### Copy Fix 10 — Styles — Pop Art card description
**Problem:** `"смел ефект"` (= bold effect) is bland. "Unapologetic impact" is visceral force — `"удар в очите"` (a punch to the eyes) is the idiomatic Bulgarian equivalent.

**Find:**
```
bg="Полутонове, наситени цветове и смел ефект."
```
**Replace with:**
```
bg="Полутонове, наситени цветове и удар в очите."
```

---

### Copy Fix 11 — Styles — Swiss International card description
**Problem:** "Helvetica" is completely absent from the BG version. It is the single most iconic reference for Swiss International style — omitting it is like describing Bauhaus without mentioning the Bauhaus school.

**Find:**
```
bg="Решетката на първо място. Швейцарска прецизност."
```
**Replace with:**
```
bg="Решетката на първо място. Хелветика. Швейцарска прецизност."
```

---

### Copy Fix 12 — FAQ Answer 3 (How fast can you deliver?)
**Problem:** `"но не бавя проектите"` — no clear grammatical subject, reads as a broken fragment. "Проектите" as direct object is redundant.

**Find:**
```
aBg: 'Бързо. Обхватът определя срока, но не бавя проектите. Ще знаеш точния срок след брифа.'
```
**Replace with:**
```
aBg: 'Бързо. Обхватът определя срока, но аз не чакам. Точния срок ще знаеш след брифа.'
```

---

### Copy Fix 13 — FAQ Answer 5 (International clients)
**Problem:** Ends abruptly mid-list with no conclusion. The English finishes with `"— all standard."` giving closure. The BG just stops.

**Find:**
```
aBg: 'Да. Около половината ми работа е с международни клиенти. Английски, асинхронна комуникация, европейски методи за плащане.'
```
**Replace with:**
```
aBg: 'Да. Около половината ми работа е с международни клиенти. Английски, асинхронна комуникация, европейски методи за плащане — всичко по стандарт.'
```

---

# COMPLETE CHECKLIST

Verify every one of these strings exists in the files after applying all fixes:

**`src/index.css`**
- [ ] `.hero` → `height: 100dvh`
- [ ] Mission/contact section → `min-height: 100dvh`
- [ ] `.hz-wrapper` → `height: 100dvh`
- [ ] `.cta-pin-layer` → `height: 100dvh`

**`src/pages/Index.tsx`**
- [ ] Hero CTA `bg=` → `ПИШИ МИ ↗`
- [ ] Services 04 `titleBg` → `ВИДЕО — СПИРА СКРОЛА`
- [ ] Services 04 `titleEn` → `VIDEO — STOPS THE SCROLL`
- [ ] CTA display `bg=` → `ДЕЙСТВАЙ.`
- [ ] CTA display `en=` → `ACT.`
- [ ] Dark Academia headline `bg=` → `Книги и свещи`
- [ ] Nordic Clean desc `bg=` → `Скандинавска яснота. Топли неутрали, отворено пространство, спокойна логика.`
- [ ] Cyberpunk desc `bg=` → `Висока технология, нисък живот. Неонови мрежи и AI в бунт.`
- [ ] Brutalist desc `bg=` → `Функцията крещи най-силно. Нешлифовано, без извинения, незабравимо.`
- [ ] Pop Art desc `bg=` → `Полутонове, наситени цветове и удар в очите.`
- [ ] Swiss desc `bg=` → `Решетката на първо място. Хелветика. Швейцарска прецизност.`
- [ ] FAQ aBg #3 → `Бързо. Обхватът определя срока, но аз не чакам. Точния срок ще знаеш след брифа.`
- [ ] FAQ aBg #5 → ends with `— всичко по стандарт.`

---

# ALTERNATIVE OPTIONS (if developer wants to swap)

| Fix | Used | Alt 1 | Alt 2 |
|---|---|---|---|
| Hero CTA BG | `ПИШИ МИ ↗` | `РАБОТИМ ↗` | `ГОВОРИМ ↗` |
| Video title EN | `VIDEO — STOPS THE SCROLL` | `VIDEO — NO ONE SKIPS IT` | `VIDEO — HOOKED FROM FRAME ONE` |
| Video title BG | `ВИДЕО — СПИРА СКРОЛА` | `ВИДЕО — НИКОЙ НЕ ПРОПУСКА` | `ВИДЕО — ХВАЩА ОТ КАДЪР ЕДНО` |
| CTA big text EN | `ACT.` | `WHAT ARE YOU WAITING FOR.` | `YOUR CALL.` |
| CTA big text BG | `ДЕЙСТВАЙ.` | `КАКВО ЧАКАШ.` | `ТИ РЕШАВАШ.` |

---

# DO NOT CHANGE
- Any other text strings not listed above
- Any JSX, logic, animations, hooks, or component structure
- Any file other than `src/index.css` and `src/pages/Index.tsx`
- The `descBg` of Services card 04 — `"Монтирано да грабне вниманието от първия кадър..."` is correct, leave it
