import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";
import { SITE } from "./config";
import { SectionTag } from "./SectionTag";
import { useMagnetic } from "@/hooks/useReveal";

export function Closer() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useMagnetic<HTMLAnchorElement>(0.28, 120);
  const ghostBtnRef = useMagnetic<HTMLAnchorElement>(0.22, 120);

  useEffect(() => {
    const section = ref.current!;
    const title = titleRef.current!;
    const sub = subRef.current!;
    const bg = bgRef.current!;

    const tween = gsap.fromTo(
      title,
      { scale: 0.92, letterSpacing: "0.02em" },
      {
        scale: 1.0,
        letterSpacing: "-0.025em",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 0.6,
        },
      }
    );

    const subTween = gsap.fromTo(
      sub.querySelectorAll("[data-fade]"),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: sub, start: "top 85%" },
      }
    );

    // Background image: long subtle parallax + slow zoom out across the section.
    const bgTween = gsap.fromTo(
      bg,
      { yPercent: -8, scale: 1.12 },
      {
        yPercent: 8,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Title gets a per-letter mask reveal on first enter (Awwwards-style).
    const text = title.textContent ?? "";
    if (!title.dataset.split) {
      title.textContent = "";
      const frag = document.createDocumentFragment();
      [...text].forEach((ch) => {
        const word = document.createElement("span");
        word.className = "closer-h-mask";
        const inner = document.createElement("span");
        inner.className = "closer-h-char";
        inner.textContent = ch === " " ? "\u00A0" : ch;
        word.appendChild(inner);
        frag.appendChild(word);
      });
      title.appendChild(frag);
      title.dataset.split = "1";
    }
    const chars = title.querySelectorAll<HTMLElement>(".closer-h-char");
    gsap.set(chars, { yPercent: 110 });
    const charTween = gsap.to(chars, {
      yPercent: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.018,
      scrollTrigger: { trigger: section, start: "top 70%" },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      subTween.scrollTrigger?.kill();
      subTween.kill();
      bgTween.scrollTrigger?.kill();
      bgTween.kill();
      charTween.scrollTrigger?.kill();
      charTween.kill();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="section closer-section"
    >
      <div ref={bgRef} className="closer-bg" aria-hidden="true">
        <img
          src="/sections/closer-mood.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.fellBack) {
              img.dataset.fellBack = "1";
              img.src = "/hero-19.jpg";
            }
          }}
        />
        <div className="closer-bg__overlay" />
      </div>

      <div
        aria-hidden="true"
        className="closer-glow"
      />

      <div className="container-x" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: 32 }}>
          <SectionTag label="Let us begin" />
        </div>

        <h2
          ref={titleRef}
          className="display closer-title"
        >
          Have a project in mind?
        </h2>

        <div
          ref={subRef}
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 32,
            alignItems: "end",
          }}
        >
          <div data-fade style={{ gridColumn: "span 12" }} className="md:col-span-7">
            <p className="body-lg" style={{ fontSize: "clamp(18px, 1.8vw, 24px)", color: "var(--td-fg)", maxWidth: 600 }}>
              Tell me what you are building. One person, every detail considered — start to finish.
            </p>
          </div>

          <div
            data-fade
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="md:col-span-5 md:justify-end"
          >
            <a ref={primaryBtnRef} className="btn" href={`mailto:${SITE.email}`}>
              Start the brief
              <span aria-hidden="true">→</span>
            </a>
            <a ref={ghostBtnRef} className="btn btn-ghost" href={SITE.socials.x} target="_blank" rel="noopener noreferrer">
              Or DM on X
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .closer-section {
          border-top: 1px solid var(--td-line);
          padding-block: clamp(120px, 14vw, 220px);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .closer-bg {
          position: absolute;
          inset: -8% -2%;
          z-index: 0;
          pointer-events: none;
          will-change: transform;
        }
        .closer-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
        }
        .closer-bg__overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60% 50% at 50% 50%, rgba(5,5,6,0) 0%, rgba(5,5,6,0.65) 70%, var(--td-bg) 100%),
            linear-gradient(180deg, rgba(5,5,6,0.55), rgba(5,5,6,0.85));
        }
        .closer-glow {
          position: absolute;
          inset: auto -10% -40% -10%;
          height: 60%;
          background: radial-gradient(60% 60% at 50% 100%, rgba(232, 36, 26, 0.14), transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .closer-title {
          margin: 0;
          font-size: clamp(72px, 16vw, 240px);
          line-height: 0.86;
          letter-spacing: -0.025em;
          transform-origin: left center;
          max-width: 1400px;
          color: var(--td-fg);
        }
        .closer-h-mask {
          display: inline-block;
          overflow: hidden;
          line-height: 0.86;
          vertical-align: top;
        }
        .closer-h-char {
          display: inline-block;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
