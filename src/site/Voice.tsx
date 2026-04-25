import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGSAP";
import { PRINCIPLES } from "./config";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal, useImageReveal } from "@/hooks/useReveal";

export function Voice() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();
  const bannerRef = useImageReveal<HTMLDivElement>();

  useEffect(() => {
    const el = ref.current!;
    const cards = el.querySelectorAll<HTMLElement>("[data-principle]");
    const tween = gsap.fromTo(
      cards,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 80%" },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={ref} id="voice" className="section" style={{ borderTop: "1px solid var(--td-line)" }}>
      <div className="container-x">
        <div className="section-head" style={{ display: "grid", gap: 16 }}>
          <SectionTag label="Voice" />
          <h2 ref={titleRef} className="display h2" style={{ margin: 0, maxWidth: 1100 }}>
            Three principles that shape every project.
          </h2>
        </div>

        <div ref={bannerRef} className="voice-banner">
          <img
            src="/sections/voice-banner.jpg"
            alt="An antique brass typewriter on a dark walnut surface, ember red ribbon visible"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fellBack) {
                img.dataset.fellBack = "1";
                img.src = "/hero-23.jpg";
              }
            }}
          />
          <div className="voice-banner__overlay" aria-hidden="true" />
          <div className="voice-banner__roman" aria-hidden="true">
            <span>I</span><span>·</span><span>II</span><span>·</span><span>III</span>
          </div>
          <div className="voice-banner__caption mono">
            Three quiet rules. Held without exception.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(24px, 3vw, 48px)" }}>
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.num}
              data-principle
              style={{
                gridColumn: "span 12",
                padding: "clamp(28px, 3vw, 48px)",
                background: i === 1 ? "rgba(232, 36, 26, 0.03)" : "rgba(255,255,255,0.015)",
                border: "1px solid var(--td-line)",
                borderRadius: 4,
                display: "grid",
                gap: 20,
                alignContent: "space-between",
                minHeight: "clamp(280px, 32vw, 420px)",
              }}
              className="md:col-span-4"
            >
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--td-accent)" }}>
                — {p.num}
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1, margin: 0, letterSpacing: "-0.015em" }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--td-fg-2)", fontSize: 16, lineHeight: 1.55, maxWidth: 360 }}>
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .voice-banner {
          position: relative;
          margin: clamp(36px, 5vw, 64px) 0 clamp(32px, 4vw, 56px);
          aspect-ratio: 21 / 9;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--td-line);
          will-change: clip-path;
        }
        .voice-banner img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.9) contrast(1.05);
          will-change: transform;
        }
        .voice-banner__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(5,5,6,0.65), rgba(5,5,6,0.0) 35%, rgba(5,5,6,0.0) 65%, rgba(5,5,6,0.65)),
            linear-gradient(180deg, rgba(5,5,6,0) 55%, rgba(5,5,6,0.55) 100%);
          pointer-events: none;
        }
        .voice-banner__roman {
          position: absolute;
          left: clamp(20px, 4vw, 56px);
          bottom: clamp(20px, 4vw, 48px);
          display: flex;
          align-items: baseline;
          gap: clamp(10px, 1.4vw, 18px);
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--td-fg);
          letter-spacing: -0.02em;
          font-size: clamp(48px, 9vw, 132px);
          line-height: 0.86;
          mix-blend-mode: screen;
        }
        .voice-banner__roman span:nth-child(2),
        .voice-banner__roman span:nth-child(4) {
          color: var(--td-accent);
          font-size: 0.6em;
          padding-bottom: 0.1em;
        }
        .voice-banner__caption {
          position: absolute;
          right: clamp(20px, 4vw, 56px);
          bottom: clamp(20px, 4vw, 48px);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,243,239,0.6);
          max-width: 260px;
          text-align: right;
        }
        @media (max-width: 720px) {
          .voice-banner__caption { display: none; }
        }
      `}</style>
    </section>
  );
}
