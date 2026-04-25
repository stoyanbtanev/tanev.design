import { useRef } from "react";
import { Counter } from "./Counter";
import { SectionTag } from "./SectionTag";
import { useHeadingReveal, useReadAlong, useImageReveal } from "@/hooks/useReveal";

export function Profile() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useHeadingReveal<HTMLHeadingElement>();
  const paraRef = useReadAlong<HTMLParagraphElement>();
  const mediaRef = useImageReveal<HTMLDivElement>();

  return (
    <section ref={ref} id="profile" className="section">
      <div className="container-x">
        <div className="section-head" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, alignItems: "end" }}>
          <div style={{ gridColumn: "span 12" }} className="md:col-span-7">
            <SectionTag label="Profile" className="mb-4" />
            <h2 ref={titleRef} className="display h2" style={{ margin: "16px 0 0" }}>
              A solo studio in Plovdiv, working at agency depth.
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(24px, 4vw, 64px)" }}>
          <div style={{ gridColumn: "span 12" }} className="md:col-span-7">
            <p
              ref={paraRef}
              className="body-lg"
              style={{ fontSize: "clamp(20px, 2.2vw, 30px)", lineHeight: 1.45, color: "var(--td-fg)", maxWidth: 720 }}
            >
              I design and build websites for founders and brands who want a custom site. The work spans identity, type, motion, and code — all from one set of hands. The brief becomes a direction; the direction becomes the site; the site goes live. That is the system.
            </p>

            <div
              ref={mediaRef}
              className="profile-media"
              style={{
                marginTop: "clamp(32px, 4vw, 56px)",
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid var(--td-line)",
                aspectRatio: "3 / 2",
                willChange: "clip-path",
              }}
            >
              <img
                src="/sections/profile-portrait.jpg"
                alt="A walnut writing desk, an open notebook, an espresso cup, low warm window light"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(0.92) contrast(1.04)", willChange: "transform" }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "linear-gradient(180deg, rgba(5,5,6,0) 60%, rgba(5,5,6,0.45) 100%)",
                }}
              />
              <span className="profile-media__cap mono">A typical morning, mid-build.</span>
            </div>
          </div>

          <aside
            style={{
              gridColumn: "span 12",
              borderTop: "1px solid var(--td-line)",
              paddingTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              alignContent: "start",
            }}
            className="md:col-span-5"
          >
            <Stat label="Person, start to finish" value={1} suffix="" />
            <Stat label="Visual directions" value={24} suffix="" />
            <Stat label="Custom code" value={100} suffix="%" />
            <NoteCell label="Operating since" value="2021" />
          </aside>
        </div>
      </div>

      <style>{`
        .profile-media__cap {
          position: absolute;
          left: 16px;
          bottom: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 10px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245, 243, 239, 0.72);
          border: 1px solid rgba(245, 243, 239, 0.16);
          background: rgba(5, 5, 6, 0.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 999px;
        }
        .profile-media__cap::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--td-accent);
          box-shadow: 0 0 8px var(--td-accent);
        }
      `}</style>
    </section>
  );
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div className="eyebrow">{label}</div>
      <div className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.95 }}>
        <Counter to={value} suffix={suffix} />
      </div>
    </div>
  );
}

function NoteCell({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div className="eyebrow">{label}</div>
      <div className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.95 }}>
        {value}
      </div>
    </div>
  );
}
