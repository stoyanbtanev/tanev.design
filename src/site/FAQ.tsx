import { useState } from "react";
import { FAQ as FAQ_ITEMS } from "./config";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal, useScramble } from "@/hooks/useReveal";

export function FAQ() {
  const titleRef = useHeadingReveal<HTMLHeadingElement>();
  return (
    <section id="faq" className="section" style={{ borderTop: "1px solid var(--td-line)" }}>
      <div className="container-x">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(24px, 4vw, 64px)" }}>
          <div style={{ gridColumn: "span 12" }} className="md:col-span-4">
            <SectionTag label="FAQ" />
            <h2 ref={titleRef} className="display h2" style={{ margin: "16px 0 0", fontSize: "clamp(36px, 6vw, 88px)" }}>
              Common questions, clearly answered.
            </h2>
          </div>

          <div style={{ gridColumn: "span 12", borderTop: "1px solid var(--td-line)" }} className="md:col-span-8">
            {FAQ_ITEMS.map((item, i) => (
              <FaqRow key={i} index={i + 1} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-row__btn { position: relative; }
        .faq-row__btn::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: var(--td-accent);
          transition: width 360ms cubic-bezier(0.65,0.05,0.36,1);
        }
        .faq-row__btn:hover .faq-row__q,
        .faq-row__btn:focus-visible .faq-row__q {
          color: var(--td-accent);
          transform: translate3d(8px, 0, 0);
        }
        .faq-row__btn:hover::before { width: 2px; }
        @media (prefers-reduced-motion: reduce) {
          .faq-row__q { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

function FaqRow({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const numRef = useScramble<HTMLSpanElement>(420);
  return (
    <div style={{ borderBottom: "1px solid var(--td-line)" }} className="faq-row">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="faq-row__btn"
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          color: "var(--td-fg)",
          padding: "clamp(20px, 2vw, 28px) 0",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 20,
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span ref={numRef} className="mono faq-row__num" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--td-fg-2)" }}>
          {String(index).padStart(2, "0")}
        </span>
        <span className="display faq-row__q" style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.2, letterSpacing: "-0.01em", transition: "color 320ms ease, transform 480ms cubic-bezier(0.65,0.05,0.36,1)" }}>
          {q}
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "relative",
            width: 22,
            height: 22,
            display: "grid",
            placeItems: "center",
            color: "var(--td-fg-2)",
          }}
        >
          <span
            style={{
              position: "absolute",
              width: 14,
              height: 1,
              background: "currentColor",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: 1,
              height: 14,
              background: "currentColor",
              transform: open ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 360ms cubic-bezier(0.65,0.05,0.36,1)",
            }}
          />
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 480ms cubic-bezier(0.65,0.05,0.36,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              paddingLeft: "clamp(36px, 4vw, 60px)",
              paddingBottom: open ? "clamp(20px, 2vw, 28px)" : 0,
              maxWidth: 720,
              color: "var(--td-fg-2)",
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.6,
              transition: "padding 480ms",
            }}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}
