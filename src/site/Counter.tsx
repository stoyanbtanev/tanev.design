import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function Counter({ to, suffix = "", duration = 2.0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        el.textContent = String(Math.round(obj.v)) + suffix;
      },
    });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => tween.play(),
    });
    return () => {
      tween.kill();
      trigger.kill();
    };
  }, [to, suffix, duration]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
