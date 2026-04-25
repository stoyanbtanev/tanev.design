import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/useGSAP";

const PRELOAD_IMAGES = ["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp", "/6.webp", "/7.webp", "/8.webp"];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  // Pre-hide the cells BEFORE first paint to kill the 1-frame flash where
  // they show fully-visible before the gsap.set runs in useEffect.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cells = grid.querySelectorAll<HTMLElement>(".preloader__cell");
    if (reduced) {
      gsap.set(cells, { opacity: 0, y: 12 });
    } else {
      gsap.set(cells, { clipPath: "inset(100% 0 0 0)" });
      gsap.set(grid.querySelectorAll(".preloader__cell img"), { scale: 1.25 });
    }
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current!;
    const grid = gridRef.current!;
    const counter = counterRef.current!;
    const line = lineRef.current!;
    const label = labelRef.current!;
    const logo = logoRef.current!;
    const cells = grid.querySelectorAll<HTMLElement>(".preloader__cell");

    const minTime = reduced ? 400 : 1600;
    const start = performance.now();
    let loaded = 0;
    const total = cells.length;

    const updateProgress = () => {
      loaded++;
      const pct = Math.round((loaded / total) * 100);
      counter.textContent = String(pct).padStart(3, "0");
      line.style.transform = `scaleX(${pct / 100})`;
      if (loaded >= total) tryExit();
    };

    cells.forEach((cell) => {
      const img = cell.querySelector("img") as HTMLImageElement | null;
      if (!img) return;
      if (img.complete) updateProgress();
      else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
      }
    });

    // Entrance animation (initial hidden state already set in useLayoutEffect)
    if (reduced) {
      gsap.to(cells, { opacity: 1, y: 0, stagger: 0.03, duration: 0.3, ease: "power2.out" });
    } else {
      const entrance = gsap.timeline();
      entrance.to(logo, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0.1);
      entrance.to(label, { opacity: 1, duration: 0.4 }, 0.2);
      cells.forEach((cell, i) => {
        const img = cell.querySelector("img");
        const t = 0.12 + i * 0.14;
        entrance.to(cell, { clipPath: "inset(0% 0 0 0)", duration: 0.55, ease: "power3.inOut" }, t);
        if (img) entrance.to(img, { scale: 1, duration: 1, ease: "power2.out" }, t);
      });
    }

    function tryExit() {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minTime - elapsed);
      gsap.delayedCall(wait / 1000, runExit);
    }

    function runExit() {
      const out = gsap.timeline({
        onComplete: () => {
          setShow(false);
          onComplete();
        },
      });

      if (reduced) {
        out.to(cells, { opacity: 0, duration: 0.3, stagger: 0.02 }, 0);
        out.to(root, { opacity: 0, duration: 0.3 }, 0.15);
      } else {
        const scatter = [
          { x: -50, y: -35 }, { x: -15, y: -45 }, { x: 15, y: -45 }, { x: 50, y: -35 },
          { x: -50, y: 35 },  { x: 50, y: 35 },   { x: -30, y: 45 }, { x: 30, y: 45 },
        ];
        cells.forEach((cell, i) => {
          const dir = scatter[i] || { x: 0, y: -30 };
          out.to(cell, { x: dir.x, y: dir.y, opacity: 0, scale: 0.92, duration: 0.6, ease: "power3.in" }, i === 0 ? 0 : "<0.035");
        });
        out.to(logo, { scale: 1.1, opacity: 0, duration: 0.5, ease: "power2.in" }, "<0.08");
        out.to([label, counter], { y: -12, opacity: 0, duration: 0.35, ease: "power3.in" }, "<");
        out.to(line, { scaleX: 1.05, opacity: 0, duration: 0.35 }, "<");
        out.to(root, { yPercent: -100, duration: 0.85, ease: "expo.inOut" }, "-=0.35");
      }
    }

    const safety = window.setTimeout(() => {
      gsap.to(root, { yPercent: -100, duration: 0.6, ease: "expo.inOut", onComplete: () => { setShow(false); onComplete(); } });
    }, 6000);

    return () => { window.clearTimeout(safety); };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--td-bg)",
        display: "grid",
        gridTemplateRows: "1fr auto",
        padding: "clamp(20px, 4vw, 48px)",
      }}
    >
      <div style={{ display: "grid", placeItems: "center", gap: 28 }}>
        <div ref={logoRef} style={{ opacity: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <svg width="64" height="40" viewBox="0 0 64 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <text x="0" y="32" fontFamily="Clash Display, sans-serif" fontWeight={600} fontSize="36" fill="var(--td-fg)" letterSpacing="-1">T</text>
            <rect x="26" y="2" width="3" height="36" rx="1.5" fill="var(--td-accent)" transform="rotate(12 27.5 20)" />
            <text x="32" y="32" fontFamily="Clash Display, sans-serif" fontWeight={600} fontSize="36" fill="var(--td-fg)" letterSpacing="-1">D</text>
          </svg>
        </div>
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(6px, 1vw, 12px)",
            width: "min(72vw, 520px)",
          }}
        >
          {PRELOAD_IMAGES.map((src, i) => (
            <div
              key={i}
              className="preloader__cell"
              style={{
                aspectRatio: "4 / 5",
                overflow: "hidden",
                borderRadius: 3,
                background: "#0c0c0e",
              }}
            >
              <img
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ position: "relative", height: 1, background: "var(--td-line)", overflow: "hidden" }}>
          <div
            ref={lineRef}
            style={{ position: "absolute", inset: 0, background: "var(--td-fg)", transform: "scaleX(0)", transformOrigin: "left center" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--td-fg-2)",
          }}
        >
          <div ref={labelRef} style={{ opacity: 0 }}>tanev.design</div>
          <div>
            <span ref={counterRef}>000</span>
            <span style={{ opacity: 0.5 }}> / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
