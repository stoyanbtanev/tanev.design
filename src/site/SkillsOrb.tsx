import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Box, Film, RefreshCw, Search, Sparkles, X, Zap } from "lucide-react";
import { gsap } from "@/hooks/useGSAP";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal } from "@/hooks/useReveal";

type Service = {
  id: string;
  num: string;
  title: string;
  body: string;
  tag: string;
  status: "LIVE" | "FAST" | "CORE" | "NEW";
  energy: number;
  related: string[];
  details: string[];
  Icon: typeof Zap;
};

const SERVICES: Service[] = [
  {
    id: "static",
    num: "01",
    title: "Static Sites",
    body: "Sub-second loads. Hand-coded, no page builders.",
    tag: "Performance",
    status: "FAST",
    energy: 95,
    related: ["motion", "seo"],
    details: [
      "Server-rendered HTML, hydrated only where needed.",
      "Image and font optimisation built into every page.",
      "Lighthouse 95+ as the baseline, not the goal.",
    ],
    Icon: Zap,
  },
  {
    id: "motion",
    num: "02",
    title: "3D & Motion",
    body: "Real WebGL and GSAP, used with restraint.",
    tag: "WebGL / GSAP",
    status: "NEW",
    energy: 88,
    related: ["static", "brand"],
    details: [
      "GSAP timelines for narrative reveals.",
      "WebGL shaders for hero moments.",
      "Reduced-motion paths shipped alongside.",
    ],
    Icon: Box,
  },
  {
    id: "brand",
    num: "03",
    title: "Brand Identity",
    body: "Logo, type, colour. A small system that scales.",
    tag: "Visual DNA",
    status: "CORE",
    energy: 82,
    related: ["motion", "video"],
    details: [
      "Wordmarks and symbols, tuned by hand.",
      "Type pairings that work past the homepage.",
      "Tokens delivered for design and code.",
    ],
    Icon: Sparkles,
  },
  {
    id: "video",
    num: "04",
    title: "Video",
    body: "Short-form, long-form, product cuts.",
    tag: "Editing",
    status: "LIVE",
    energy: 70,
    related: ["brand"],
    details: [
      "DaVinci Resolve and After Effects pipeline.",
      "Sound design and colour pass on every cut.",
      "Vertical and landscape masters from one edit.",
    ],
    Icon: Film,
  },
  {
    id: "seo",
    num: "05",
    title: "SEO",
    body: "Structure, schema, and speed, in that order.",
    tag: "Organic Growth",
    status: "CORE",
    energy: 78,
    related: ["static"],
    details: [
      "Information architecture that matches intent.",
      "Schema.org graphs for rich results.",
      "Core Web Vitals in the green on launch day.",
    ],
    Icon: Search,
  },
  {
    id: "redesign",
    num: "06",
    title: "Full Redesign",
    body: "A rebuild from the ground up, content-first.",
    tag: "Rebuild",
    status: "NEW",
    energy: 90,
    related: ["static", "brand"],
    details: [
      "Audit of what stays and what gets rewritten.",
      "Migration without breaking inbound links.",
      "Net-new design system shipped as code.",
    ],
    Icon: RefreshCw,
  },
];

export function SkillsOrb() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const active = useMemo(
    () => (activeId ? SERVICES.find((s) => s.id === activeId) ?? null : null),
    [activeId]
  );
  const panelOpen = active !== null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-orb-reveal]");
    const tween = gsap.fromTo(
      items,
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 76%" },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // ESC closes the panel
  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen]);

  const orbitPaused = panelOpen || hovering;

  return (
    <section ref={ref} id="skills" className="section skills-orb" style={{ borderTop: "1px solid var(--td-line)", overflow: "hidden", position: "relative" }}>
      {/* Ambient blended glows — anchor the orb to the page without a box */}
      <div className="skills-orb__ambient" aria-hidden="true" />

      <div className="container-x" style={{ position: "relative" }}>
        <div className="skills-orb__head" data-orb-reveal>
          <SectionTag label="Skills" />
          <h2 ref={titleRef} className="display h2" style={{ margin: "16px 0 0", maxWidth: 1100 }}>
            Six services. One standard.
          </h2>
          <p className="body-lg" style={{ marginTop: 18, maxWidth: 640 }}>
            Tap any orbit to read more. Every discipline a serious site needs — under one roof.
          </p>
        </div>

        <div
          className="skills-orb__stage"
          data-orb-reveal
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className={`skills-orb__system ${orbitPaused ? "is-paused" : ""}`}>
            <div className="skills-orb__ring skills-orb__ring--outer" />
            <div className="skills-orb__ring skills-orb__ring--inner" />
            <div className="skills-orb__core" aria-hidden="true">
              <span>T</span>
              <i />
              <span>D</span>
            </div>

            <div className="skills-orb__nodes">
              {SERVICES.map((service, index) => {
                const Icon = service.Icon;
                const isActive = active?.id === service.id;
                const isRelated = active?.related.includes(service.id) ?? false;
                const angle = (360 / SERVICES.length) * index;
                return (
                  <button
                    type="button"
                    key={service.id}
                    className={`skills-orb__node ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""}`}
                    style={{ "--angle": `${angle}deg` } as CSSProperties}
                    aria-pressed={isActive}
                    aria-label={`Open ${service.title} details`}
                    onClick={() => setActiveId(service.id)}
                  >
                    <span className="skills-orb__node-halo" />
                    <span className="skills-orb__node-icon"><Icon size={17} strokeWidth={2} /></span>
                    <span className="skills-orb__node-label">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {active && (
            <>
              <button
                type="button"
                className="skills-orb__panel-backdrop"
                aria-label="Close details"
                onClick={() => setActiveId(null)}
              />
              <article className="skills-orb__panel" aria-live="polite" role="dialog" aria-labelledby="skill-detail-title">
                <button type="button" className="skills-orb__panel-close" aria-label="Close details" onClick={() => setActiveId(null)}>
                  <X size={14} />
                </button>
                <div className="skills-orb__panel-top">
                  <span className={`skills-orb__status skills-orb__status--${active.status.toLowerCase()}`}>{active.status}</span>
                  <span>{active.num}</span>
                </div>
                <h3 id="skill-detail-title" className="display">{active.title}</h3>
                <p>{active.body}</p>

                <ul className="skills-orb__details">
                  {active.details.map((d, i) => (
                    <li key={i}><span>{String(i + 1).padStart(2, "0")}</span> {d}</li>
                  ))}
                </ul>

                <div className="skills-orb__meta">
                  <span>{active.tag}</span>
                  <span>Energy {active.energy}%</span>
                </div>
                <div className="skills-orb__bar"><span style={{ width: `${active.energy}%` }} /></div>
                <div className="skills-orb__related">
                  <span>Pairs with</span>
                  <div>
                    {active.related.map((id) => {
                      const item = SERVICES.find((s) => s.id === id);
                      if (!item) return null;
                      return (
                        <button key={id} type="button" onClick={() => setActiveId(id)}>
                          {item.title}
                          <ArrowRight size={12} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            </>
          )}

          {!active && (
            <div className="skills-orb__hint" aria-hidden="true">
              <span className="mono">Tap a node</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .skills-orb__head {
          text-align: center;
          display: grid;
          gap: 4px;
          justify-items: center;
          margin-bottom: clamp(40px, 5vw, 72px);
        }
        .skills-orb__ambient {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 50% at 50% 60%, rgba(232,36,26,0.10), transparent 70%),
            radial-gradient(35% 25% at 50% 60%, rgba(245,243,239,0.04), transparent 70%);
          /* Soft fade so it blends into adjacent sections */
          mask-image: linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%);
        }
        .skills-orb__stage {
          position: relative;
          min-height: clamp(560px, 70vw, 720px);
          /* No border, no card. The orb floats in the page. */
          background: transparent;
          isolation: isolate;
        }
        .skills-orb__stage::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            radial-gradient(circle at 50% 50%, rgba(245,243,239,0.06) 1px, transparent 1.4px);
          background-size: 26px 26px;
          mask-image: radial-gradient(circle at 50% 52%, black, transparent 58%);
          -webkit-mask-image: radial-gradient(circle at 50% 52%, black, transparent 58%);
          pointer-events: none;
          opacity: 0.7;
        }
        .skills-orb__system {
          --orb-radius: clamp(140px, 24vw, 260px);
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          z-index: 1;
        }
        .skills-orb__ring {
          position: absolute;
          border: 1px solid rgba(245,243,239,0.14);
          border-radius: 50%;
          box-shadow: inset 0 0 60px rgba(232,36,26,0.035);
        }
        .skills-orb__ring--outer { width: calc(var(--orb-radius) * 2.05); height: calc(var(--orb-radius) * 2.05); }
        .skills-orb__ring--inner { width: calc(var(--orb-radius) * 1.24); height: calc(var(--orb-radius) * 1.24); border-style: dashed; opacity: 0.5; }
        .skills-orb__core {
          width: clamp(92px, 10vw, 132px);
          height: clamp(92px, 10vw, 132px);
          border-radius: 50%;
          border: 1px solid rgba(245,243,239,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--td-fg);
          background: rgba(5,5,6,0.72);
          box-shadow: 0 0 80px rgba(232,36,26,0.18), inset 0 0 22px rgba(245,243,239,0.04);
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1;
          z-index: 2;
        }
        .skills-orb__core i {
          width: 2px;
          height: 54%;
          border-radius: 999px;
          background: var(--td-accent);
          transform: rotate(13deg);
        }
        .skills-orb__nodes {
          position: absolute;
          inset: 0;
          animation: skills-orbit 28s linear infinite;
          transform-origin: 50% 50%;
        }
        .skills-orb__system.is-paused .skills-orb__nodes { animation-play-state: paused; }
        .skills-orb__node {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 58px;
          height: 58px;
          margin: -29px 0 0 -29px;
          border: 0;
          border-radius: 50%;
          color: var(--td-fg);
          background: transparent;
          transform: rotate(var(--angle)) translateX(var(--orb-radius)) rotate(calc(var(--angle) * -1));
          cursor: pointer;
          z-index: 3;
        }
        .skills-orb__node-halo {
          position: absolute;
          inset: -7px;
          border-radius: inherit;
          border: 1px solid rgba(245,243,239,0.14);
          background: rgba(5,5,6,0.68);
          box-shadow: 0 18px 40px rgba(0,0,0,0.34);
          transition: border-color 260ms ease, box-shadow 260ms ease, transform 260ms ease, background 260ms ease;
        }
        .skills-orb__node-icon {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          border-radius: inherit;
          background: rgba(255,255,255,0.035);
          color: var(--td-fg);
        }
        .skills-orb__node-label {
          position: absolute;
          left: 50%;
          top: calc(100% + 13px);
          transform: translateX(-50%);
          width: max-content;
          max-width: 150px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--td-fg-2);
          opacity: 0.74;
          pointer-events: none;
        }
        .skills-orb__node.is-active .skills-orb__node-halo,
        .skills-orb__node:hover .skills-orb__node-halo {
          border-color: rgba(232,36,26,0.76);
          background: rgba(232,36,26,0.12);
          box-shadow: 0 0 0 1px rgba(232,36,26,0.15), 0 0 48px rgba(232,36,26,0.24);
          transform: scale(1.06);
        }
        .skills-orb__node.is-related .skills-orb__node-halo { border-color: rgba(245,243,239,0.36); }
        .skills-orb__node.is-active .skills-orb__node-label { color: var(--td-fg); opacity: 1; }
        .skills-orb__panel-backdrop {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: rgba(5,5,6,0.32);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border: 0;
          padding: 0;
          cursor: pointer;
          animation: skills-orb-fade-in 220ms ease-out;
        }
        .skills-orb__panel {
          position: absolute;
          left: clamp(14px, 4vw, 56px);
          right: clamp(14px, 4vw, 56px);
          bottom: clamp(14px, 4vw, 56px);
          z-index: 5;
          padding: clamp(20px, 3vw, 38px);
          max-height: calc(100% - clamp(28px, 8vw, 112px));
          overflow: auto;
          border: 1px solid rgba(245,243,239,0.14);
          border-radius: 5px;
          background: rgba(5,5,6,0.92);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 28px 80px rgba(0,0,0,0.42);
          animation: skills-orb-panel-in 380ms cubic-bezier(0.65,0.05,0.36,1);
        }
        @keyframes skills-orb-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes skills-orb-panel-in {
          from { opacity: 0; transform: translateY(20px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .skills-orb__details {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: grid;
          gap: 10px;
        }
        .skills-orb__details li {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          padding: 12px 14px;
          border: 1px solid rgba(245,243,239,0.07);
          border-radius: 6px;
          background: rgba(255,255,255,0.018);
          font-size: clamp(13px, 1.2vw, 15px);
          color: var(--td-fg);
          line-height: 1.5;
        }
        .skills-orb__details li span {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--td-accent);
        }
        .skills-orb__hint {
          position: absolute;
          left: 50%;
          bottom: clamp(20px, 3vw, 36px);
          transform: translateX(-50%);
          z-index: 4;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--td-fg-2);
          opacity: 0.55;
          pointer-events: none;
          padding: 8px 14px;
          border: 1px solid var(--td-line);
          border-radius: 999px;
          background: rgba(5,5,6,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .skills-orb__panel-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          border: 1px solid var(--td-line-strong);
          background: transparent;
          color: var(--td-fg-2);
          cursor: pointer;
        }
        .skills-orb__panel-top,
        .skills-orb__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--td-fg-2);
        }
        .skills-orb__status { color: var(--td-accent); }
        .skills-orb__status--live { color: #f5f3ef; }
        .skills-orb__status--fast { color: #ff734d; }
        .skills-orb__status--core { color: #e8241a; }
        .skills-orb__panel h3 {
          margin: 22px 0 12px;
          font-size: clamp(30px, 4vw, 58px);
          line-height: 0.98;
          letter-spacing: -0.02em;
        }
        .skills-orb__panel p {
          max-width: 650px;
          margin: 0 0 24px;
          color: var(--td-fg);
          font-size: clamp(16px, 1.5vw, 19px);
          line-height: 1.55;
        }
        .skills-orb__bar {
          height: 1px;
          background: rgba(245,243,239,0.12);
          margin: 16px 0 22px;
          overflow: hidden;
        }
        .skills-orb__bar span {
          display: block;
          height: 100%;
          background: var(--td-accent);
          box-shadow: 0 0 18px rgba(232,36,26,0.7);
          transition: width 520ms cubic-bezier(0.65,0.05,0.36,1);
        }
        .skills-orb__related {
          display: grid;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--td-fg-2);
        }
        .skills-orb__related div {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skills-orb__related button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid var(--td-line-strong);
          background: rgba(255,255,255,0.025);
          color: var(--td-fg);
          font: inherit;
          cursor: pointer;
        }
        @keyframes skills-orbit { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .skills-orb__stage { min-height: 600px; }
          .skills-orb__system { --orb-radius: 124px; }
          .skills-orb__node-label { display: none; }
        }
      `}</style>
    </section>
  );
}
