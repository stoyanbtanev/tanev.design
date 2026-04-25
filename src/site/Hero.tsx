import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";
import { useMagnetic, useScramble } from "@/hooks/useReveal";

type FloatEl = { src: string; top: number; left: number; w: number; h: number; depth: number; rot: number };

const FLOAT_ELS: FloatEl[] = [
  { src: "/1.webp",      top: 6,  left: 4,  w: 10, h: 12, depth: 1,   rot: -6 },
  { src: "/hero-13.jpg", top: 22, left: 1,  w: 11, h: 14, depth: 2,   rot: 3 },
  { src: "/7.webp",      top: 44, left: 2,  w: 10, h: 13, depth: 1.5, rot: -3 },
  { src: "/hero-18.jpg", top: 66, left: 3,  w: 12, h: 15, depth: 2,   rot: 4 },
  { src: "/5.webp",      top: 82, left: 5,  w: 9,  h: 11, depth: 1,   rot: -5 },
  { src: "/hero-9.jpg",  top: 14, left: 18, w: 9,  h: 11, depth: 0.8, rot: 2 },
  { src: "/hero-22.jpg", top: 38, left: 15, w: 10, h: 13, depth: 1.2, rot: -4 },
  { src: "/2.webp",      top: 62, left: 17, w: 9,  h: 11, depth: 0.6, rot: 5 },
  { src: "/hero-17.jpg", top: 84, left: 20, w: 9,  h: 11, depth: 1,   rot: -2 },
  { src: "/hero-10.jpg", top: 4,  left: 34, w: 10, h: 12, depth: 0.5, rot: -4 },
  { src: "/hero-26.jpg", top: 8,  left: 50, w: 11, h: 13, depth: 1,   rot: 6 },
  { src: "/3.webp",      top: 6,  left: 66, w: 10, h: 12, depth: 0.7, rot: -3 },
  { src: "/hero-14.jpg", top: 82, left: 40, w: 10, h: 12, depth: 0.9, rot: 4 },
  { src: "/8.webp",      top: 86, left: 56, w: 9,  h: 11, depth: 0.6, rot: -5 },
  { src: "/hero-23.jpg", top: 80, left: 70, w: 10, h: 12, depth: 1.1, rot: 2 },
  { src: "/hero-11.jpg", top: 16, left: 76, w: 9,  h: 11, depth: 0.8, rot: 3 },
  { src: "/6.webp",      top: 40, left: 78, w: 10, h: 13, depth: 1.2, rot: -2 },
  { src: "/hero-20.jpg", top: 64, left: 77, w: 10, h: 12, depth: 0.9, rot: 4 },
  { src: "/4.webp",      top: 8,  left: 88, w: 10, h: 12, depth: 1,   rot: 5 },
  { src: "/hero-15.jpg", top: 28, left: 90, w: 9,  h: 11, depth: 2,   rot: -3 },
  { src: "/hero-25.jpg", top: 50, left: 91, w: 10, h: 13, depth: 1.6, rot: 3 },
  { src: "/hero-19.jpg", top: 72, left: 89, w: 10, h: 12, depth: 2,   rot: -4 },
  { src: "/hero-12.jpg", top: 30, left: 40, w: 7,  h: 9,  depth: 3,   rot: 0 },
  { src: "/hero-16.jpg", top: 54, left: 60, w: 7,  h: 9,  depth: 3,   rot: 2 },
  { src: "/hero-21.jpg", top: 70, left: 32, w: 7,  h: 9,  depth: 4,   rot: -3 },
  { src: "/hero-24.jpg", top: 24, left: 62, w: 6,  h: 8,  depth: 4,   rot: 4 },
  { src: "/hero-27.jpg", top: 48, left: 28, w: 7,  h: 9,  depth: 2.5, rot: -2 },
  { src: "/hero-28.jpg", top: 62, left: 48, w: 7,  h: 9,  depth: 3.5, rot: 3 },
];

export function Hero({ ready = true }: { ready?: boolean } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.32, 130);
  const bottomLabelRef = useScramble<HTMLSpanElement>(420);

  // Pre-hide everything BEFORE first paint to kill the flash of the
  // un-animated state. useLayoutEffect runs synchronously before browser paint.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = floatingRef.current;
    if (!section || !container) return;

    // Split headline chars (operates on each line's .hero__text)
    section.querySelectorAll<HTMLElement>(".hero__headline .hero__text").forEach((el) => {
      if (el.dataset.split === "1") return;
      const text = el.textContent || "";
      el.innerHTML = "";
      [...text].forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char === " " || char === "\u00A0" ? "\u00A0" : char;
        el.appendChild(span);
      });
      el.dataset.split = "1";
    });

    gsap.set(section.querySelectorAll(".hero__headline .char"), { y: 100, opacity: 0 });
    gsap.set(section.querySelector(".hero__sub"), { opacity: 0, y: 16 });
    gsap.set(section.querySelector(".hero__cta-row"), { opacity: 0, y: 12 });
    gsap.set(section.querySelector(".hero__bottom-row"), { opacity: 0 });

    const inners = container.querySelectorAll<HTMLElement>(".hero__float-inner");
    inners.forEach((inner) => {
      const outer = inner.parentElement as HTMLElement;
      const rect = outer.getBoundingClientRect();
      gsap.set(inner, {
        x: window.innerWidth / 2 - (rect.left + rect.width / 2),
        y: window.innerHeight / 2 - (rect.top + rect.height / 2),
        scale: 0.18,
        opacity: 0,
        rotateX: -35,
        rotateY: (Math.random() - 0.5) * 40,
      });
    });
  }, []);

  // Entrance — only fires once `ready` flips true (after preloader exits)
  useEffect(() => {
    if (!ready) return;
    const section = sectionRef.current;
    const container = floatingRef.current;
    if (!section || !container) return;
    const inners = container.querySelectorAll<HTMLElement>(".hero__float-inner");

    const tl = gsap.timeline({ delay: 0.05 });
    tl.to(inners, {
      x: 0, y: 0, scale: 1, opacity: 1, rotateX: 0, rotateY: 0,
      duration: 1.3, ease: "expo.out",
      stagger: { each: 0.03, from: "random" },
    }, 0);
    tl.to(section.querySelectorAll(".hero__headline .char"), {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.035, ease: "expo.out",
    }, 0.2);
    tl.to(section.querySelector(".hero__sub"), { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.5);
    tl.to(section.querySelector(".hero__cta-row"), { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.65);
    tl.to(section.querySelector(".hero__bottom-row"), { opacity: 1, duration: 0.5, ease: "power3.out" }, 0.7);

    return () => { tl.kill(); };
  }, [ready]);

  useEffect(() => {
    const section = sectionRef.current!;
    const container = floatingRef.current!;

    // Parallax on mouse
    const els = container.querySelectorAll<HTMLElement>("[data-depth]");
    const mouse = { x: 0, y: 0 };
    const heroEl = container.closest(".hero")!;
    const elState = new Map<Element, { cx: number; cy: number; tx: number; ty: number }>();
    els.forEach((el) => elState.set(el, { cx: 0, cy: 0, tx: 0, ty: 0 }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - rect.width / 2;
      mouse.y = e.clientY - rect.top - rect.height / 2;
    };
    const onMouseLeave = () => { mouse.x = 0; mouse.y = 0; };

    heroEl.addEventListener("mousemove", onMouseMove);
    heroEl.addEventListener("mouseleave", onMouseLeave);

    let rafId: number;
    function animate() {
      els.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "1");
        const strength = (depth * 1) / 20;
        const state = elState.get(el)!;
        state.tx = mouse.x * strength;
        state.ty = mouse.y * strength;
        state.cx += (state.tx - state.cx) * 0.05;
        state.cy += (state.ty - state.cy) * 0.05;
        (el as HTMLElement).style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0)`;
      });
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // Scroll parallax for headline
    const scrollParallax = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 0.6,
      onUpdate: (st) => {
        const p = st.progress;
        gsap.set(".hero__content", { yPercent: 18 * p, opacity: 1 - p * 0.6 });
      },
    });

    return () => {
      cancelAnimationFrame(rafId);
      heroEl.removeEventListener("mousemove", onMouseMove);
      heroEl.removeEventListener("mouseleave", onMouseLeave);
      scrollParallax.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="top" style={{ position: "relative" }}>
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__floating" ref={floatingRef}>
        {FLOAT_ELS.map((el, i) => {
          const scale = 1 / (0.75 + el.depth * 0.18);
          const w = el.w * scale;
          const h = el.h * scale;
          return (
            <div
              key={i}
              className="hero__float-el"
              data-depth={el.depth}
              data-rot={el.rot}
              style={{
                position: "absolute",
                top: `${el.top}%`,
                left: `${el.left}%`,
                width: `clamp(54px, ${w}vw, ${w * 12}px)`,
                height: `clamp(66px, ${h}vw, ${h * 12}px)`,
                zIndex: Math.round(10 - el.depth),
                filter: `blur(${Math.max(0, el.depth - 1.5) * 0.8}px)`,
                opacity: Math.max(0.42, 0.78 - (el.depth - 0.5) * 0.06),
              }}
            >
              <div className="hero__float-inner" style={{ width: "100%", height: "100%", willChange: "transform" }}>
                <img
                  src={el.src}
                  alt=""
                  loading={i < 10 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 3, display: "block", filter: "saturate(0.9) contrast(1.04)" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero__content">
        <h1 className="hero__headline">
          <span className="hero__line"><span className="hero__text">BUILT&nbsp;BY&nbsp;ONE.</span></span>
          <span className="hero__line"><span className="hero__text">NO&nbsp;COMPROMISE.</span></span>
        </h1>
        <p className="hero__sub">One person. Every detail considered.</p>
        <div className="hero__cta-row">
          <a ref={ctaRef} href="#contact" className="btn">Start a project ↗</a>
        </div>
      </div>

      <div className="hero__bottom-row">
        <span className="label" ref={bottomLabelRef}>Plovdiv, Bulgaria — working worldwide</span>
        <a href="#aesthetics" className="hero__scroll" aria-label="Scroll to aesthetics">
          <span>SCROLL</span>
          <div className="hero__scroll-line" />
        </a>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .hero__vignette {
          position: absolute;
          inset: 0;
          z-index: 11;
          pointer-events: none;
          background:
            radial-gradient(60% 40% at 50% 45%, rgba(5,5,6,0.55), transparent 70%);
        }
        .hero__floating {
          position: absolute;
          inset: 0;
          pointer-events: none;
          perspective: 1200px;
        }
        .hero__float-el {
          will-change: transform;
        }
        .hero__content {
          position: relative;
          z-index: 12;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          text-align: center;
          padding: clamp(120px, 16vw, 180px) clamp(16px, 3vw, 40px) 40px;
          pointer-events: none;
          width: 100%;
        }
        .hero__headline {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          font-family: var(--font-display);
          font-size: clamp(36px, 9.4vw, 168px);
          line-height: 0.92;
          letter-spacing: -0.04em;
          font-weight: 600;
          color: var(--td-fg);
          text-transform: uppercase;
          width: 100%;
          max-width: min(100%, 1500px);
        }
        .hero__line {
          display: block;
          white-space: nowrap;
          overflow: visible;
        }
        .hero__line .hero__text {
          display: inline-block;
        }
        .hero__headline .char {
          display: inline-block;
        }
        .hero__sub {
          margin-top: clamp(18px, 2vw, 28px);
          font-family: var(--font-mono);
          font-size: clamp(10px, 1.2vw, 13px);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--td-fg-2);
        }
        .hero__cta-row {
          margin-top: clamp(20px, 2.4vw, 32px);
          pointer-events: auto;
        }
        @media (max-width: 720px) {
          .hero__headline { font-size: clamp(28px, 8.4vw, 56px); letter-spacing: -0.03em; }
        }
        @media (max-width: 360px) {
          .hero__headline { font-size: 26px; }
        }
        @media (min-width: 1500px) {
          .hero__headline { font-size: 168px; }
        }
        .hero__bottom-row {
          position: relative;
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 4vw, 48px) 24px;
        }
        .hero__bottom-row .label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--td-fg-2);
        }
        .hero__scroll {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--td-fg-2);
        }
        .hero__scroll-line {
          width: 28px;
          height: 1px;
          background: var(--td-fg-2);
          animation: hero-scroll-pulse 1.6s ease-in-out infinite;
        }
        @keyframes hero-scroll-pulse {
          0%, 100% { opacity: 0.4; transform: scaleX(0.7); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        .hero__bottom-row a.hero__scroll { color: var(--td-fg-2); transition: color 280ms ease, opacity 280ms ease; }
        .hero__bottom-row a.hero__scroll:hover { color: var(--td-fg); }
      `}</style>
    </section>
  );
}
