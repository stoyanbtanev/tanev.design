import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGSAP";
import { SITE } from "./config";

export function Footer() {
  const year = new Date().getFullYear();
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLElement>(".footer-wordmark__char");
    gsap.set(chars, { yPercent: 110 });
    const tween = gsap.to(chars, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const wordmark = "TANEV.DESIGN";

  return (
    <footer
      style={{
        borderTop: "1px solid var(--td-line)",
        padding: "clamp(40px, 4vw, 64px) 0 0",
        overflow: "hidden",
      }}
    >
      <div className="container-x" style={{ display: "grid", gap: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "span 12" }} className="md:col-span-4">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Studio</div>
            <a className="underline-link" href={`mailto:${SITE.email}`} style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>
              {SITE.email}
            </a>
            <div style={{ marginTop: 12, color: "var(--td-fg-2)", fontSize: 14 }}>
              {SITE.city}, {SITE.country}
              <br />
              EET / EEST · UTC+2/+3
            </div>
          </div>

          <nav style={{ gridColumn: "span 6" }} className="md:col-span-3">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Index</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
              {[
                ["#profile", "Profile"],
                ["#skills", "Skills"],
                ["#aesthetics", "Aesthetics"],
                ["#process", "Process"],
                ["#stack", "Stack"],
                ["#voice", "Voice"],
                ["#projects", "Projects"],
                ["#faq", "FAQ"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="underline-link" style={{ fontSize: 15 }}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav style={{ gridColumn: "span 6" }} className="md:col-span-3">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Elsewhere</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
              <li><a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="underline-link" style={{ fontSize: 15 }}>LinkedIn ↗</a></li>
              <li><a href={SITE.socials.x} target="_blank" rel="noopener noreferrer" className="underline-link" style={{ fontSize: 15 }}>X / Twitter ↗</a></li>
              <li><a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="underline-link" style={{ fontSize: 15 }}>GitHub ↗</a></li>
            </ul>
          </nav>

          <div style={{ gridColumn: "span 12" }} className="md:col-span-2">
            <div className="eyebrow" style={{ marginBottom: 12 }}>Status</div>
            <div className="pill" style={{ display: "inline-flex" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--td-accent)", boxShadow: "0 0 10px var(--td-accent)" }} />
              <span>Open · 2026</span>
            </div>
          </div>
        </div>

        <div ref={wordmarkRef} className="footer-wordmark" aria-hidden="true">
          {[...wordmark].map((ch, i) => (
            <span key={i} className="footer-wordmark__line">
              <span className="footer-wordmark__char">{ch}</span>
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            paddingTop: 24,
            paddingBottom: 24,
            borderTop: "1px solid var(--td-line)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--td-fg-2)",
          }}
        >
          <div>© {year} Stoyan Tanev · tanev.design</div>
          <div>Designed and coded in {SITE.city}</div>
        </div>
      </div>

      <style>{`
        .footer-wordmark {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          padding-block: clamp(24px, 5vw, 80px) clamp(8px, 1.5vw, 16px);
          font-family: var(--font-display);
          font-weight: 600;
          line-height: 0.86;
          letter-spacing: -0.04em;
          color: var(--td-fg);
          font-size: clamp(48px, 14vw, 220px);
          line-height: 0.86;
          text-transform: uppercase;
          margin-inline: -2px;
        }
        .footer-wordmark__line {
          display: inline-block;
          overflow: hidden;
          line-height: 0.86;
        }
        .footer-wordmark__char {
          display: inline-block;
          will-change: transform;
        }
      `}</style>
    </footer>
  );
}
