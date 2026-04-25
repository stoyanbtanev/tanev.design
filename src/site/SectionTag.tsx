import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";

type Props = {
  /** Optional — kept for backwards compat. No longer rendered. */
  num?: string;
  label: string;
  className?: string;
};

/**
 * Section tag: pulsing accent dot + letter-staggered label.
 * Letters scale-in on scroll-enter. Numbers were removed per design direction.
 */
export function SectionTag({ label, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = el.querySelectorAll<HTMLElement>(".section-tag__char");
    gsap.set(letters, { opacity: 0, scale: 0.5, transformOrigin: "50% 100%" });
    const tween = gsap.to(letters, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: { each: 0.018, from: "start" },
      scrollTrigger: { trigger: el, start: "top 92%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={`section-tag ${className ?? ""}`}>
      <span className="section-tag__dot" aria-hidden="true" />
      <span className="section-tag__label">
        {[...label].map((ch, i) => (
          <span key={i} className="section-tag__char" aria-hidden={i === 0 ? undefined : true}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>

      <style>{`
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--td-fg-2);
          line-height: 1;
        }
        .section-tag__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--td-accent);
          box-shadow: 0 0 0 0 rgba(232, 36, 26, 0.55);
          animation: section-tag-pulse 2.6s ease-out infinite;
          flex: none;
        }
        .section-tag__label {
          display: inline-flex;
        }
        .section-tag__char {
          display: inline-block;
          will-change: transform, opacity;
        }
        @keyframes section-tag-pulse {
          0%   { box-shadow: 0 0 0 0   rgba(232, 36, 26, 0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(232, 36, 26, 0); }
          100% { box-shadow: 0 0 0 0   rgba(232, 36, 26, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .section-tag__dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
