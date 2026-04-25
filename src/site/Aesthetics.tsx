import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal } from "@/hooks/useReveal";

type View = "showcase" | "grid";

/**
 * Aesthetics Universe — 24 visual directions, ported from the live tanev.design build.
 * Two views:
 *   • Showcase — full masonry editorial cards
 *   • Grid     — compact tile labels for fast scan
 */
export function Aesthetics() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();
  const universeRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>("showcase");

  // 3D entrance + tilt on showcase view
  useEffect(() => {
    const root = universeRef.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>(".style-card");
    if (!cards.length) return;

    // Entrance scrub
    const enter = gsap.fromTo(
      cards,
      { y: 120, z: -200, rotationX: -10, opacity: 0 },
      {
        y: 0,
        z: 0,
        rotationX: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 85%", end: "top 30%", scrub: 1.2 },
      }
    );

    // Per-card 3D tilt
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        if (view !== "showcase") return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(card, {
          rotationX: -10 * (y / (rect.height / 2)),
          rotationY: 10 * (x / (rect.width / 2)),
          transformPerspective: 1200,
          ease: "power2.out",
          duration: 0.4,
        });
      };
      const onLeave = () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, ease: "power3.out", duration: 0.7 });
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      enter.scrollTrigger?.kill();
      enter.kill();
      cleanups.forEach((c) => c());
    };
  }, [view]);

  const handleToggle = (v: View) => {
    setView(v);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <section ref={ref} id="aesthetics" className="section" style={{ borderTop: "1px solid var(--td-line)" }}>
      <div className="container-x">
        <div className="section-head" style={{ display: "grid", gap: 18, textAlign: "center", justifyItems: "center", marginBottom: "clamp(48px, 6vw, 88px)" }}>
          <SectionTag label="Aesthetics" />
          <h2 ref={titleRef} className="display h2" style={{ margin: 0, maxWidth: 1100 }}>
            24 directions. One standard.
          </h2>
          <p className="body-lg" style={{ margin: 0, maxWidth: 640 }}>
            Starting points, not a menu. Every project gets its own direction — these show how far the language can stretch.
          </p>

          <div className="aesthetics-toggle" role="tablist" aria-label="Aesthetics view">
            <button
              type="button"
              role="tab"
              aria-selected={view === "showcase"}
              className={view === "showcase" ? "active" : ""}
              onClick={() => handleToggle("showcase")}
            >
              Showcase
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === "grid"}
              className={view === "grid" ? "active" : ""}
              onClick={() => handleToggle("grid")}
            >
              Grid
            </button>
          </div>
        </div>

        <div ref={universeRef} className={`universe ${view === "grid" ? "universe--compact" : ""}`}>
          <Cards />
        </div>
      </div>

      <style>{`
        .aesthetics-toggle {
          display: inline-flex;
          gap: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--td-line);
          border-radius: 999px;
          padding: 3px;
          margin-top: 12px;
        }
        .aesthetics-toggle button {
          appearance: none;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 9px 22px;
          border-radius: 999px;
          color: var(--td-fg-2);
          background: transparent;
          border: 0;
          cursor: pointer;
          transition: color 280ms ease, background 280ms ease;
        }
        .aesthetics-toggle button:hover { color: var(--td-fg); }
        .aesthetics-toggle button.active { background: var(--td-fg); color: var(--td-bg); }
      `}</style>
    </section>
  );
}

/* All 24 cards — concise, no business-logic. Markup stays in CSS-driven components. */
function Cards() {
  return (
    <>
      {/* 1 — Neo-Minimal */}
      <article className="style-card card-minimal">
        <div className="m-eyebrow">✦ &nbsp; Refined &nbsp; ✦</div>
        <div className="m-headline">The art of saying less.</div>
        <div className="m-rule" />
        <div className="m-body">Zero noise. Pure function. The aesthetic of ruthless elegance.</div>
        <span className="style-badge">Neo-Minimal</span>
      </article>

      {/* 2 — Cyberpunk */}
      <article className="style-card card-cyberpunk">
        <div className="cy-topline" />
        <div className="cy-corner" />
        <div className="cy-corner2" />
        <div className="cy-headline">NEURAL_INTERFACE<span className="blink">_</span></div>
        <div className="cy-sub">High-tech, low-life. Neon grids and rogue AI terminals.</div>
        <span className="style-badge">Cyberpunk</span>
      </article>

      {/* 3 — Art Deco */}
      <article className="style-card card-artdeco">
        <div className="ad-ornament">◆ &ensp; ◇ &ensp; ◆</div>
        <div className="ad-headline">The grand salon.</div>
        <div className="ad-sub">Unapologetic geometry and gold.</div>
        <span className="style-badge">Art Deco</span>
      </article>

      {/* 4 — Paper & Ink */}
      <article className="style-card card-paper">
        <div className="pk-stamp">✦ &nbsp; Handcrafted &nbsp; — &nbsp; Vol. I</div>
        <div className="pk-headline">Written in ink.</div>
        <div className="pk-body">Typewriters, tactile parchment, and timeless craftsmanship.</div>
        <span className="style-badge">Paper &amp; Ink</span>
      </article>

      {/* 5 — Japanese Edo */}
      <article className="style-card card-japanese">
        <div className="jp-stripe" />
        <div className="jp-content">
          <div className="jp-headline">The way of the warrior.</div>
          <div className="jp-body">Zen minimalism, forged with the discipline of a samurai.</div>
          <div className="jp-mega">武道</div>
        </div>
        <span className="style-badge" style={{ background: "rgba(192,57,43,0.9)" }}>Japanese Edo</span>
      </article>

      {/* 6 — Brutalist */}
      <article className="style-card card-brutalist">
        <div className="brut-header"><div className="brut-title">BRUTALISM.EXE</div></div>
        <div className="brut-body">
          <div className="brut-headline">NO APOLOGIES FOR ART.</div>
          <div className="brut-text">Function screams loudest. Unpolished, unapologetic, unforgettable.</div>
        </div>
        <span className="style-badge">Brutalist</span>
      </article>

      {/* 7 — Glassmorphism */}
      <article className="style-card card-glass">
        <div className="glass-blob1" />
        <div className="glass-blob2" />
        <div className="glass-panel">
          <div className="glass-headline">Crystal clear.</div>
          <div className="glass-body">Frosted interfaces floating through the creative void.</div>
        </div>
        <span className="style-badge">Glassmorphism</span>
      </article>

      {/* 8 — Vaporwave */}
      <article className="style-card card-vaporwave">
        <div className="vw-sun" />
        <div className="vw-headline">VAPORWAVE</div>
        <div className="vw-body">Retro Future</div>
        <span className="style-badge" style={{ background: "rgba(185,103,255,0.7)" }}>Vaporwave</span>
      </article>

      {/* 9 — Dark Academia */}
      <article className="style-card card-darkacademia">
        <div className="da-headline">Of books &amp; candlelight.</div>
        <div className="da-body">Ivy-league shadows, hidden libraries, and unspoken secrets.</div>
        <span className="style-badge">Dark Academia</span>
      </article>

      {/* 10 — Memphis 80s */}
      <article className="style-card card-memphis">
        <div className="mem-headline">TOTALLY RAD.</div>
        <div className="mem-body">Loud, abstract shapes clashing in perfect retro harmony.</div>
        <span className="style-badge">Memphis 80s</span>
      </article>

      {/* 11 — Bauhaus */}
      <article className="style-card card-bauhaus">
        <div className="bh-headline">BAUS<br />HAUS</div>
        <div className="bh-body">Form strictly follows function. The origin of modernism.</div>
        <span className="style-badge">Bauhaus</span>
      </article>

      {/* 12 — Zen */}
      <article className="style-card card-zen">
        <div className="zen-headline">Beauty in imperfection.</div>
        <div className="zen-body">Profound calm in empty space and fleeting moments.</div>
        <span className="style-badge">Zen</span>
      </article>

      {/* 13 — Steampunk */}
      <article className="style-card card-steampunk">
        <div className="sp-headline">Mechanical wonders.</div>
        <div className="sp-body">Copper gears, steam-powered mechanics, and Victorian futurism.</div>
        <span className="style-badge">Steampunk</span>
      </article>

      {/* 14 — Y2K Chrome */}
      <article className="style-card card-y2k">
        <div className="y2k-headline">CYBER<br />2000</div>
        <div className="y2k-body">Liquid-metal interfaces from the year 2000. Jack in.</div>
        <span className="style-badge">Y2K Chrome</span>
      </article>

      {/* 15 — Retro Terminal */}
      <article className="style-card card-terminal">
        <div className="term-headline">SYSTEM ONLINE<span className="term-cursor" /></div>
        <div className="term-body">&gt; Green phosphor screens and command-line aesthetics.</div>
        <span className="style-badge">Retro Terminal</span>
      </article>

      {/* 16 — Swiss International */}
      <article className="style-card card-swiss">
        <div className="sw-headline">ORDER IN TYPE.</div>
        <div className="sw-rule" />
        <div className="sw-body">Grid-first thinking. Helvetica discipline. Swiss precision.</div>
        <span className="style-badge">Swiss International</span>
      </article>

      {/* 17 — Art Nouveau */}
      <article className="style-card card-nouveau">
        <div className="nv-headline">Nature&apos;s ornament.</div>
        <div className="nv-body">Organic curves, floral motifs, and handcrafted elegance.</div>
        <span className="style-badge">Art Nouveau</span>
      </article>

      {/* 18 — Grunge */}
      <article className="style-card card-grunge">
        <div className="grn-headline">RAW ENERGY.</div>
        <div className="grn-body">Distressed textures, broken grids, and analog rebellion.</div>
        <span className="style-badge">Grunge</span>
      </article>

      {/* 19 — Pop Art */}
      <article className="style-card card-popart">
        <div className="pop-headline">BOLD &amp; LOUD.</div>
        <div className="pop-body">Halftone dots, saturated color, and unapologetic impact.</div>
        <span className="style-badge">Pop Art</span>
      </article>

      {/* 20 — Luxury Noir */}
      <article className="style-card card-luxury">
        <div className="lux-headline">Black &amp; gold.</div>
        <div className="lux-body">Whispered opulence. Understated wealth. Dark prestige.</div>
        <span className="style-badge">Luxury Noir</span>
      </article>

      {/* 21 — Nordic Clean */}
      <article className="style-card card-nordic">
        <div className="nrd-headline">Quiet confidence.</div>
        <div className="nrd-body">Scandinavian clarity. Warm neutrals, open space, calm logic.</div>
        <span className="style-badge">Nordic Clean</span>
      </article>

      {/* 22 — Sci-Fi */}
      <article className="style-card card-scifi">
        <div className="sf-headline">DEEP SPACE.</div>
        <div className="sf-body">Interstellar interfaces. Built for the next frontier.</div>
        <span className="style-badge">Sci-Fi</span>
      </article>

      {/* 23 — Organic Nature */}
      <article className="style-card card-organic">
        <div className="org-headline">Rooted in the earth.</div>
        <div className="org-body">Natural tones, soft textures, and grounded authenticity.</div>
        <span className="style-badge">Organic Nature</span>
      </article>

      {/* 24 — Neon Noir */}
      <article className="style-card card-neonnoir">
        <div className="nn-headline">After dark.</div>
        <div className="nn-body">Neon reflections on wet asphalt. Cinema meets interface.</div>
        <span className="style-badge">Neon Noir</span>
      </article>
    </>
  );
}
