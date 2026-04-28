# tanev.design

Personal portfolio of Stoyan Tanev — independent web designer and developer based in Plovdiv, Bulgaria.

Live: [www.tanev.design](https://www.tanev.design)

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** + custom CSS in `app/globals.css`
- **GSAP 3** + **ScrollTrigger** + **Lenis** (smooth scroll)
- **Framer Motion 12** (hero parallax)
- **Vercel** (hosting + CDN + image optimization)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Project structure

```
app/                  Next.js App Router — pages, layout, metadata, sitemap, robots
components/           React components (PortraitHero, Footer, FAQ, etc.)
data/                 Static content (site config, services, blog posts)
hooks/                Custom React hooks
lib/                  Utility functions
public/assets/        Production images and icons (cached 1y on Vercel)
```

## Deployment

Auto-deploys to Vercel project `tanevdesrebuild` on push to `main`.

## Notes

- All `100vh` values are replaced with `100svh` + `var(--app-height, 100svh)` for cross-browser mobile scroll stability — see [vault: Cross-Browser Scroll Stability](https://github.com/stoyanbtanev) for the full pattern.
- Image optimization handled by Next's `<Image>` component (AVIF/WebP/responsive `srcset` enabled in `next.config.mjs`).
- JSON-LD structured data (`ProfessionalService`, `Person`, `WebSite`) injected from `app/layout.tsx`.
