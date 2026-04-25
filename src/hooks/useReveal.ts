import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./useGSAP";

/** Split a heading into per-letter spans and reveal them on scroll-enter. */
export function useHeadingReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already split? skip.
    if (el.dataset.revealReady === "1") return;

    // Split top-level text nodes into word/letter spans, preserving whitespace.
    const original = el.innerHTML;
    el.dataset.revealOriginal = original;
    const text = el.textContent ?? "";
    el.textContent = "";

    text.split(/(\s+)/).forEach((word) => {
      if (/^\s+$/.test(word) || word === "") {
        el.appendChild(document.createTextNode(word.length ? word : " "));
        return;
      }
      const wrap = document.createElement("span");
      wrap.className = "rv-word";
      wrap.style.display = "inline-block";
      wrap.style.overflow = "hidden";
      wrap.style.lineHeight = "1";
      wrap.style.verticalAlign = "top";

      [...word].forEach((ch) => {
        const inner = document.createElement("span");
        inner.className = "rv-char";
        inner.style.display = "inline-block";
        inner.style.willChange = "transform, opacity";
        inner.textContent = ch;
        wrap.appendChild(inner);
      });
      el.appendChild(wrap);
    });
    el.dataset.revealReady = "1";

    const chars = el.querySelectorAll<HTMLElement>(".rv-char");
    gsap.set(chars, { yPercent: 110, opacity: 0 });

    const tween = gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "expo.out",
      stagger: { each: 0.018, from: "start" },
      scrollTrigger: { trigger: el, start: "top 88%" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}

/** Read-along paragraph: per-word opacity 0.18 → 1 on scroll-scrub. */
export function useReadAlong<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.dataset.readalongReady === "1") return;

    const text = el.textContent ?? "";
    el.textContent = "";
    const frag = document.createDocumentFragment();
    text.split(" ").forEach((w, i, arr) => {
      const span = document.createElement("span");
      span.textContent = w;
      span.style.display = "inline-block";
      span.style.opacity = "0.18";
      span.style.transition = "opacity 320ms cubic-bezier(0.65,0.05,0.36,1)";
      span.dataset.word = "1";
      frag.appendChild(span);
      if (i < arr.length - 1) frag.appendChild(document.createTextNode(" "));
    });
    el.appendChild(frag);
    el.dataset.readalongReady = "1";

    const words = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-word]"));
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 82%",
      end: "bottom 50%",
      scrub: 0.6,
      onUpdate: (st) => {
        const target = Math.floor(st.progress * words.length);
        for (let i = 0; i < words.length; i++) {
          words[i].style.opacity = i <= target ? "1" : "0.18";
        }
      },
    });
    return () => trigger.kill();
  }, []);

  return ref;
}

/** Generic enter fade-up. */
export function useEnterFade<T extends HTMLElement>(opts?: { y?: number; delay?: number; start?: string }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { y: opts?.y ?? 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
        delay: opts?.delay ?? 0,
        scrollTrigger: { trigger: el, start: opts?.start ?? "top 86%" },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [opts?.y, opts?.delay, opts?.start]);
  return ref;
}

/* =========================================================================
   ADVANCED TEXT FX — handcrafted micro-interactions, GPU-only.
   ========================================================================= */

/**
 * Magnetic pull: element follows cursor with elastic damping.
 * Use on small targets (buttons, dots, icons). Pure transform, GPU-accelerated.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, radius = 140) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const state = { tx: 0, ty: 0, cx: 0, cy: 0, active: false };
    let raf = 0;

    const tick = () => {
      state.cx += (state.tx - state.cx) * 0.12;
      state.cy += (state.ty - state.cy) * 0.12;
      el.style.transform = `translate3d(${state.cx}px, ${state.cy}px, 0)`;
      if (Math.abs(state.tx - state.cx) > 0.05 || Math.abs(state.ty - state.cy) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        state.tx = 0;
        state.ty = 0;
      } else {
        const falloff = 1 - dist / radius;
        state.tx = dx * strength * falloff;
        state.ty = dy * strength * falloff;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      state.tx = 0;
      state.ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [strength, radius]);
  return ref;
}

/**
 * Hover scramble: text cycles random glyphs then resolves to the original.
 * Pure DOM text mutation. The "original" is re-captured on every enter
 * so dynamic text (e.g. a live clock) is correctly restored.
 */
export function useScramble<T extends HTMLElement>(durationMs = 520) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!el.textContent || !el.textContent.trim()) return;

    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let raf = 0;
    let startedAt = 0;
    let original = el.textContent;

    const cancel = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.textContent = original;
    };

    const onEnter = () => {
      // Re-capture in case the text changed since mount (live timestamps, counters).
      original = el.textContent ?? original;
      if (raf) cancelAnimationFrame(raf);
      startedAt = performance.now();
      const tick = () => {
        const t = (performance.now() - startedAt) / durationMs;
        if (t >= 1) {
          el.textContent = original;
          raf = 0;
          return;
        }
        const reveal = Math.floor(t * original.length);
        let out = "";
        for (let i = 0; i < original.length; i++) {
          const ch = original[i];
          if (ch === " " || ch === "\u00A0") {
            out += ch;
          } else if (i < reveal) {
            out += ch;
          } else {
            out += glyphs[(Math.random() * glyphs.length) | 0];
          }
        }
        el.textContent = out;
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("focus", onEnter);
    el.addEventListener("mouseleave", cancel);
    el.addEventListener("blur", cancel);
    return () => {
      cancel();
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("focus", onEnter);
      el.removeEventListener("mouseleave", cancel);
      el.removeEventListener("blur", cancel);
    };
  }, [durationMs]);
  return ref;
}

/**
 * Mask reveal: clip-path inset animation that wipes a heading into view
 * line-by-line (or block) on scroll. Smoother than per-letter when the
 * heading is several lines long. Pure compositor, no layout impact.
 */
export function useMaskReveal<T extends HTMLElement>(opts?: { start?: string; duration?: number }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, {
      clipPath: "inset(0 0 100% 0)",
      webkitClipPath: "inset(0 0 100% 0)",
      yPercent: 8,
    });
    const tween = gsap.to(el, {
      clipPath: "inset(0 0 0% 0)",
      webkitClipPath: "inset(0 0 0% 0)",
      yPercent: 0,
      duration: opts?.duration ?? 1.1,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: opts?.start ?? "top 88%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [opts?.start, opts?.duration]);
  return ref;
}

/**
 * Image reveal: image scales from 1.18 -> 1.0 with a clip-path bottom-up wipe
 * as it enters the viewport. Cinematic, CPU-cheap (clip + transform only).
 */
export function useImageReveal<T extends HTMLElement>(opts?: { start?: string }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const img = el.querySelector("img");
    gsap.set(el, { clipPath: "inset(0 0 100% 0)", webkitClipPath: "inset(0 0 100% 0)" });
    if (img) gsap.set(img, { scale: 1.18 });
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: opts?.start ?? "top 84%" },
    });
    tl.to(el, {
      clipPath: "inset(0 0 0% 0)",
      webkitClipPath: "inset(0 0 0% 0)",
      duration: 1.2,
      ease: "expo.out",
    });
    if (img) {
      tl.to(img, { scale: 1.0, duration: 1.6, ease: "expo.out" }, 0);
    }
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [opts?.start]);
  return ref;
}

/**
 * Parallax depth on scroll (subtle, GPU-only). Use on cinematic stills.
 * `speed` is in pixels — total Y travel as the section passes the viewport.
 */
export function useParallaxY<T extends HTMLElement>(speed = 80) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { y: -speed / 2 },
      {
        y: speed / 2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);
  return ref;
}
