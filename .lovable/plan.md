

## tanev.design — Full Rebuild & Enhancement Plan

### Phase 1: Convert to React + Fix Bugs

**Convert the monolithic HTML into a proper React component architecture:**
- Break the 2748-line HTML into ~15 clean React components: `Preloader`, `Navigation`, `Hero`, `Mission`, `StatsBar`, `HorizontalServices`, `ProcessTimeline`, `Arsenal`, `StylesUniverse`, `FAQ`, `CTA`, `ContactForm`, `Footer`, `MobileMenu`
- Integrate GSAP + ScrollTrigger + Lenis as React hooks (`useGSAP`, `useLenis`)
- Implement the bilingual system as a React context (`LanguageProvider`) with `useLanguage()` hook — cleaner than CSS class toggling
- Port all 1368 lines of CSS into the Tailwind/CSS modules hybrid (keep custom CSS for the style cards since they're intentionally unique designs)

**Fix the preloader bug:**
- The current preloader animation relies on `window.load` which can fire inconsistently — convert to a proper React state machine with `useEffect` that tracks image loading progress
- Add a guaranteed minimum display time (2.5s) so the animation always completes gracefully
- Fix the "looks off" issue by ensuring the scatter-exit animation timing doesn't overlap awkwardly with hero entrance

**Fix Brave mobile scrolling bug:**
- Brave has known issues with `overscroll-behavior` and smooth scroll libraries — add Brave-specific detection and adjust Lenis config (disable `smooth` on Brave mobile, fall back to native smooth scroll)
- Add `will-change` cleanup after animations complete to prevent compositing layer issues on Chromium-based mobile browsers

### Phase 2: Performance & Polish

- **Font loading optimization**: You're loading 12+ Google Fonts + 2 Fontshare fonts — that's ~15 HTTP requests blocking render. Subset only the weights/characters actually used, add `font-display: swap`, and preload the critical ones (Clash Display, General Sans)
- **Image optimization**: Convert hero floating images and preloader grid images to WebP/AVIF with proper `srcset` for responsive sizes
- **GSAP code-splitting**: Lazy-load ScrollTrigger only after preloader completes
- **Reduce CLS**: Set explicit dimensions on all hero floating elements and preloader cells
- **Accessibility**: Add `aria-labels`, keyboard navigation for the style cards, focus-visible states on nav links, proper heading hierarchy, `prefers-reduced-motion` media query to disable heavy animations

### Phase 3: New Sections & Features

- **Portfolio case studies section**: Expandable project cards with before/after screenshots, tech stack used, results/metrics — replaces the current placeholder portfolio grid
- **Client logo ticker**: Subtle infinite scroll of client/partner logos between sections
- **Pricing/packages section**: 3-tier pricing cards (Static Site, Interactive/3D, Full Brand Package) with feature comparison — positioned before the contact form
- **Dark/light mode toggle**: The site is already dark-first, but adding a light mode option shows design range
- **Smooth page transitions**: Add route transitions for future multi-page expansion (e.g., individual case study pages)
- **Blog-ready architecture**: Set up routing for `/blog` and `/work/:slug` pages even if content comes later

### Phase 4: SEO & Meta

- Move structured data, OG tags, and meta into React Helmet
- Add proper `<select>` localization (the current BG/EN inside `<option>` tags doesn't work — `<option>` can't contain `<span>`)
- Generate a proper sitemap
- Add analytics-ready event tracking hooks

