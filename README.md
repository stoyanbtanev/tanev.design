<div align="center">

# tanev.design

**One person. Every detail considered.**

Personal portfolio and studio site for **Stoyan Tanev** — brand, design & hand-coded web.
Built in React with GSAP, Lenis, custom WebGL-adjacent interactions and zero templates.

[Live site →](https://tanev.design) · [Contact](mailto:stoyanbtanev@gmail.com) · [X / Twitter](https://x.com/tanevdesign)

</div>

---

## Highlights

- **Hand-coded** React + TypeScript + Vite. No Wix, no Webflow, no page builders.
- **Preloader** with asset-aware progress + image scatter exit animation.
- **Lenis** smooth scroll + **GSAP ScrollTrigger** pinned sections.
- **Radial orbital timeline** services section with auto-rotate & related-node pulses.
- **Interactive chess game** above the contact form — playable vs a basic engine.
- **Parallax hero** with depth-based floating imagery.
- **24-direction aesthetics grid** showcasing visual styles in a single scroll canvas.
- **Full EN/BG i18n** via a tiny `<T />` component — no heavy libraries.
- Custom **form → email** pipeline via FormSubmit (no backend required).

## Tech stack

| Layer          | Tools |
| -------------- | ----- |
| Framework      | React 18, TypeScript, Vite |
| Styling        | Tailwind CSS, custom CSS, shadcn/ui |
| Motion         | GSAP + ScrollTrigger, Lenis |
| Icons          | Lucide React |
| Hosting        | Vercel |
| Forms          | FormSubmit (ajax endpoint) |

## Local development

```bash
# install (pick your poison)
npm install       # or bun install / pnpm install

# start dev server
npm run dev

# lint
npm run lint

# production build + local preview
npm run build
npm run preview
```

Dev server runs on `http://localhost:5173`.

## Project structure

```
src/
├── components/
│   ├── ChessGame.tsx               # fully playable board above the form
│   ├── RadialOrbitalTimeline.tsx   # services / orbit UI
│   ├── NavLink.tsx
│   └── ui/                         # shadcn/ui primitives
├── contexts/
│   └── LanguageContext.tsx         # EN/BG toggle + <T /> helper
├── hooks/
│   ├── useGSAP.ts                  # GSAP + ScrollTrigger wrapper
│   ├── useLenis.ts                 # smooth scroll bootstrap
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── pages/
│   ├── Index.tsx                   # the entire one-pager
│   └── NotFound.tsx
├── index.css                       # design tokens + all section styles
└── main.tsx
```

## Deployment

Deployed on **Vercel** from `main`. Any push runs `vite build` and publishes the static output — no server required.

## License & ownership

All source code, copy, and design decisions © Stoyan Tanev.
Clients retain 100% ownership of shipped projects — this repo is the **studio site**, not client work.

## Credits

- Radial orbital UI concept inspired by [Jatin Yadav's 21st.dev component](https://21st.dev/community/components/jatin-yadav05/radial-orbital-timeline), rebuilt from scratch for this site.
- Fonts: Clash Display, General Sans, Space Mono, Cormorant Garamond, Playfair Display.
