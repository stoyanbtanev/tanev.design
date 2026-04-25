const ITEMS = [
  "I work alone.",
  "No handoffs. No middlemen.",
  "Your project gets my full attention.",
  "No delays. No excuses.",
  "Just the work — done properly.",
  "Custom code, every line.",
  "You own the source.",
];

export function Manifest() {
  return (
    <section
      aria-label="Index"
      style={{
        position: "relative",
        padding: "clamp(40px, 6vw, 80px) 0",
        borderTop: "1px solid var(--td-line)",
        borderBottom: "1px solid var(--td-line)",
        overflow: "hidden",
        background: "var(--td-bg)",
      }}
    >
      <div className="container-x" style={{ marginBottom: 24 }}>
        <div className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--td-accent)" }} />
          A short manifest
        </div>
      </div>

      <div className="manifest-marquee">
        <div className="manifest-marquee__track">
          <Row />
          <Row aria-hidden />
        </div>
      </div>

      <style>{`
        .manifest-marquee {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .manifest-marquee__track {
          display: flex;
          width: max-content;
          animation: manifest-scroll 70s linear infinite;
          will-change: transform;
        }
        .manifest-marquee:hover .manifest-marquee__track {
          animation-play-state: paused;
        }
        .manifest-row {
          display: flex;
          align-items: center;
          gap: 64px;
          padding-right: 64px;
          flex-shrink: 0;
        }
        .manifest-item {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          font-family: var(--font-display);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.02em;
          font-size: clamp(34px, 6vw, 88px);
          white-space: nowrap;
        }
        .manifest-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--td-accent);
          flex: none;
        }
        @keyframes manifest-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .manifest-marquee__track { animation-duration: 240s; }
        }
      `}</style>
    </section>
  );
}

function Row({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean } = {}) {
  return (
    <div className="manifest-row" aria-hidden={ariaHidden ? true : undefined}>
      {ITEMS.map((text, i) => (
        <span key={i} className="manifest-item">
          <span className="manifest-dot" aria-hidden="true" />
          <span>{text}</span>
        </span>
      ))}
    </div>
  );
}
