import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGSAP";
import { PROCESS } from "./config";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal } from "@/hooks/useReveal";

const PROCESS_IMAGES = [
  "/sections/process-brief.jpg",
  "/sections/process-direction.jpg",
  "/sections/process-build.jpg",
  "/sections/process-launch.jpg",
];

/** Fallbacks if the section images are not yet present (gracefully degrades). */
const PROCESS_FALLBACK = ["/hero-9.jpg", "/hero-15.jpg", "/hero-22.jpg", "/hero-25.jpg"];

/**
 * Process — four alternating editorial cards, no pin.
 * The previous build used GSAP `pin` which fought Lenis on resize and caused
 * jitter at the section boundary. This version reveals each step on scroll
 * enter, in a clean two-column grid that flips left/right by index.
 */
export function Process() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-process-card]");

    // Cards enter with copy fading + Y, while media wipes via clip-path.
    cards.forEach((card) => {
      const copy = card.querySelector(".process-card__copy");
      const media = card.querySelector<HTMLElement>(".process-card__media");
      const img = card.querySelector<HTMLElement>("[data-process-img]");
      const num = card.querySelector(".process-card__num");
      const label = card.querySelector(".process-card__step-label");
      if (!copy || !media) return;

      gsap.set(media, { clipPath: "inset(0 0 100% 0)", webkitClipPath: "inset(0 0 100% 0)" });
      if (img) gsap.set(img, { scale: 1.2 });
      if (num) gsap.set(num, { y: -10, opacity: 0 });
      if (label) gsap.set(label, { y: 14, opacity: 0 });
      gsap.set(copy.children, { y: 24, opacity: 0 });

      gsap
        .timeline({ scrollTrigger: { trigger: card, start: "top 80%" } })
        .to(media, {
          clipPath: "inset(0 0 0% 0)",
          webkitClipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "expo.out",
        })
        .to(img, { scale: 1.0, duration: 1.6, ease: "expo.out" }, 0)
        .to(copy.children, { y: 0, opacity: 1, duration: 0.85, ease: "expo.out", stagger: 0.08 }, 0.15)
        .to([num, label].filter(Boolean), { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.08 }, 0.4);
    });

    // After the entrance, scrub a slow "breathe" on each image while in view.
    const imgs = el.querySelectorAll<HTMLElement>("[data-process-img]");
    const breathTweens: gsap.core.Tween[] = [];
    imgs.forEach((img) => {
      const t = gsap.fromTo(
        img,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      breathTweens.push(t);
    });

    return () => {
      breathTweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section ref={ref} id="process" className="section" style={{ borderTop: "1px solid var(--td-line)" }}>
      <div className="container-x">
        <div className="section-head" style={{ display: "grid", gap: 18, marginBottom: "clamp(48px, 6vw, 88px)" }}>
          <SectionTag label="Process" />
          <h2 ref={titleRef} className="display h2" style={{ margin: 0, maxWidth: 1100 }}>
            Four steps. No fog.
          </h2>
        </div>

        <div className="process-stack">
          {PROCESS.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={step.num}
                data-process-card
                className={`process-card ${flip ? "is-flip" : ""}`}
              >
                <div className="process-card__media">
                  <img
                    data-process-img
                    src={PROCESS_IMAGES[i] ?? PROCESS_IMAGES[0]}
                    onError={(e) => {
                      // Graceful fallback if the new image hasn't been generated yet.
                      const img = e.currentTarget;
                      if (!img.dataset.fellBack) {
                        img.dataset.fellBack = "1";
                        img.src = PROCESS_FALLBACK[i] ?? PROCESS_FALLBACK[0];
                      }
                    }}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="process-card__num">{step.num}</span>
                  <span className="process-card__step-label mono">Step {step.num} — {step.title}</span>
                  <div className="process-card__media-vignette" aria-hidden="true" />
                </div>

                <div className="process-card__copy">
                  <div className="eyebrow" style={{ color: "var(--td-accent)" }}>Step {step.num}</div>
                  <h3 className="display process-card__title">{step.title}</h3>
                  <p className="body-lg process-card__body">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          .process-stack {
            display: grid;
            gap: clamp(48px, 7vw, 120px);
          }
          .process-card {
            display: grid;
            grid-template-columns: 1fr;
            gap: clamp(20px, 3vw, 40px);
            align-items: center;
          }
          @media (min-width: 900px) {
            .process-card { grid-template-columns: 1.05fr 1fr; }
            .process-card.is-flip .process-card__media  { order: 2; }
            .process-card.is-flip .process-card__copy   { order: 1; }
          }

          .process-card__media {
            position: relative;
            aspect-ratio: 3 / 2;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid var(--td-line);
            background: #0c0c0e;
            will-change: clip-path;
          }
          .process-card__media img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: saturate(0.92) contrast(1.04);
            will-change: transform;
          }
          .process-card__step-label {
            position: absolute;
            left: 16px;
            bottom: 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            max-width: calc(100% - 32px);
            padding: 6px 12px;
            border: 1px solid rgba(245,243,239,0.16);
            background: rgba(5,5,6,0.55);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            border-radius: 999px;
            font-size: 10px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--td-fg);
            z-index: 2;
          }
          .process-card__step-label::before {
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--td-accent);
            box-shadow: 0 0 8px var(--td-accent);
          }
          .process-card__media-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              linear-gradient(180deg, rgba(5,5,6,0) 60%, rgba(5,5,6,0.55) 100%),
              linear-gradient(0deg, rgba(5,5,6,0) 70%, rgba(5,5,6,0.25) 100%);
          }
          .process-card__num {
            position: absolute;
            top: 16px;
            left: 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 12px;
            border: 1px solid rgba(245,243,239,0.2);
            background: rgba(5,5,6,0.5);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 999px;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--td-fg);
          }

          .process-card__copy { display: grid; gap: 18px; }
          .process-card__title {
            margin: 0;
            font-size: clamp(36px, 5vw, 72px);
            line-height: 0.95;
            letter-spacing: -0.02em;
          }
          .process-card__body {
            margin: 0;
            font-size: clamp(16px, 1.4vw, 19px);
            line-height: 1.55;
            color: var(--td-fg-2);
            max-width: 520px;
          }
        `}</style>
      </div>
    </section>
  );
}
