import { useRef } from "react";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal } from "@/hooks/useReveal";

type Service = {
  num: string;
  title: string;
  body: string;
  scope: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Web design",
    body: "Direction, layout, type, motion. Editorial, not template.",
    scope: ["Direction", "Layout", "Type", "Motion"],
  },
  {
    num: "02",
    title: "Web development",
    body: "Hand-coded, top to bottom. React, GSAP, Vercel. No CMS bloat unless you want one.",
    scope: ["React", "TypeScript", "GSAP", "Vercel"],
  },
  {
    num: "03",
    title: "Brand identity",
    body: "Marks, type system, palette, the lockup. One direction, fully resolved.",
    scope: ["Logo", "Type", "Palette", "Guidelines"],
  },
  {
    num: "04",
    title: "Motion",
    body: "Loops, transitions, micro-interactions. Earned, not decorative.",
    scope: ["GSAP", "Lottie", "Reveal", "Scroll"],
  },
  {
    num: "05",
    title: "SEO",
    body: "Technical SEO + AI-search optimisation. Sitemap, schema, llms.txt, Lighthouse 90+.",
    scope: ["Schema", "Sitemap", "Core Web Vitals", "GEO"],
  },
];

/**
 * Services — five plain rows. The offer in one viewport.
 * No icons, no orbs, no decoration. Spacing carries the weight.
 */
export function Services() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();

  return (
    <section
      ref={ref}
      id="services"
      className="section"
      style={{ borderTop: "1px solid var(--td-line)" }}
      aria-labelledby="services-title"
    >
      <div className="container-x">
        <div
          className="section-head"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 24,
            alignItems: "end",
          }}
        >
          <div style={{ gridColumn: "span 12" }} className="md:col-span-8">
            <SectionTag label="Services" />
            <h2
              id="services-title"
              ref={titleRef}
              className="display h2"
              style={{ margin: "16px 0 0", maxWidth: 1000 }}
            >
              What I do, in five lines.
            </h2>
          </div>
          <div style={{ gridColumn: "span 12", justifySelf: "end" }} className="md:col-span-4">
            <p
              className="body-lg"
              style={{
                margin: 0,
                color: "var(--td-fg-2)",
                maxWidth: 360,
                fontSize: "clamp(15px, 1.3vw, 17px)",
              }}
            >
              One brief, one set of hands. Pick the parts you need; the rest is included if it serves the work.
            </p>
          </div>
        </div>

        <ul className="services-list" role="list">
          {SERVICES.map((s) => (
            <li key={s.num} className="services-row">
              <span className="services-row__num mono" aria-hidden="true">{s.num}</span>
              <div className="services-row__title-wrap">
                <h3 className="display services-row__title">{s.title}</h3>
              </div>
              <p className="services-row__body">{s.body}</p>
              <ul className="services-row__scope mono" role="list" aria-label={`${s.title} scope`}>
                {s.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .services-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--td-line);
        }
        .services-row {
          display: grid;
          grid-template-columns: 56px 1fr;
          column-gap: clamp(20px, 3vw, 48px);
          row-gap: var(--space-tight);
          padding-block: clamp(28px, 3.6vw, 48px);
          border-bottom: 1px solid var(--td-line);
          align-items: baseline;
        }
        @media (min-width: 900px) {
          .services-row {
            grid-template-columns: 64px minmax(220px, 1fr) minmax(0, 1.4fr) minmax(180px, auto);
            row-gap: 0;
            align-items: center;
          }
        }

        .services-row__num {
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--td-accent);
          text-transform: uppercase;
          padding-top: 2px;
        }
        .services-row__title-wrap {
          grid-column: 2;
        }
        @media (min-width: 900px) {
          .services-row__title-wrap { grid-column: 2; }
        }
        .services-row__title {
          margin: 0;
          font-size: clamp(28px, 3.4vw, 48px);
          line-height: 1;
          letter-spacing: -0.015em;
        }

        .services-row__body {
          grid-column: 2;
          margin: 0;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.55;
          color: var(--td-fg-2);
          max-width: 56ch;
        }
        @media (min-width: 900px) {
          .services-row__body { grid-column: 3; }
        }

        .services-row__scope {
          grid-column: 2;
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 6px 14px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--td-muted);
        }
        @media (min-width: 900px) {
          .services-row__scope {
            grid-column: 4;
            justify-content: flex-end;
          }
        }
        .services-row__scope li::after {
          content: '·';
          margin-left: 14px;
          opacity: 0.5;
        }
        .services-row__scope li:last-child::after { content: none; }

        @media (prefers-reduced-motion: no-preference) {
          .services-row { transition: background-color 280ms ease; }
          .services-row:hover { background: rgba(245, 243, 239, 0.015); }
        }
      `}</style>
    </section>
  );
}
