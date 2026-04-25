import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGSAP";
import { PROJECTS } from "./config";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal } from "@/hooks/useReveal";

/**
 * Recent projects strip. Three real shipped sites, shown as editorial cards.
 * The fourth project (this site) is intentionally excluded — meta self-reference is noise.
 */
const REAL = PROJECTS.filter((p) => !!p.url);

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-project-card]");
    const tween = gsap.fromTo(
      cards,
      { y: 64, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 82%" },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={ref} id="projects" className="section" style={{ borderTop: "1px solid var(--td-line)" }}>
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
            <SectionTag label="Projects" />
            <h2 ref={titleRef} className="display h2" style={{ margin: "16px 0 0" }}>
              Recent work, shipped.
            </h2>
          </div>
          <div style={{ gridColumn: "span 12", justifySelf: "end" }} className="md:col-span-4">
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--td-fg-2)", textTransform: "uppercase" }}>
              {String(REAL.length).padStart(2, "0")} live · 2025 → 2026
            </span>
          </div>
        </div>

        <div className="projects-grid">
          {REAL.map((p) => (
            <ProjectCard key={p.client} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 3vw, 40px);
        }
        @media (min-width: 720px)  { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      gsap.to(img, { x, y, duration: 0.8, ease: "power3.out", overwrite: "auto" });
    };
    const onLeave = () => {
      gsap.to(img, { x: 0, y: 0, duration: 1.0, ease: "expo.out" });
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      data-project-card
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "grid", gap: 16, color: "var(--td-fg)" }}
    >
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          aspectRatio: "16 / 11",
          overflow: "hidden",
          borderRadius: 4,
          border: "1px solid var(--td-line)",
          background: "#0c0c0e",
        }}
      >
        <picture>
          {project.image.endsWith(".webp") && <source srcSet={project.image} type="image/webp" />}
          <img
            ref={imgRef}
            src={project.image.endsWith(".webp") ? project.image.replace(".webp", ".jpg") : project.image}
            alt={`${project.client} — ${project.title}`}
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: "-2%",
              width: "104%",
              height: "104%",
              objectFit: "cover",
              filter: "saturate(0.92) contrast(1.04)",
            }}
          />
        </picture>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(5,5,6,0) 55%, rgba(5,5,6,0.65) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 10px",
            border: "1px solid rgba(245,243,239,0.2)",
            background: "rgba(5,5,6,0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: 999,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--td-fg)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--td-accent)", boxShadow: "0 0 8px var(--td-accent)" }} />
          <span>Live · {project.year}</span>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--td-fg)",
          }}
        >
          View ↗
        </div>
      </div>

      <div style={{ display: "grid", gap: 6 }}>
        <div className="eyebrow">{project.client}</div>
        <div className="display" style={{ fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.1 }}>
          {project.title}
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--td-fg-2)", textTransform: "uppercase", marginTop: 4 }}>
          {project.scope.join(" · ")}
        </div>
      </div>
    </a>
  );
}
