"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { secondaryCarousel } from "@/data/site";

export function SecondaryCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);

  const move = (direction: number) => {
    const node = ref.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <section className="secondary-carousel page-shell">
      <div className="carousel-side reveal">
        <p className="eyebrow">MORE SURFACES</p>
        <h2>VISUAL RANGE</h2>
        <Link href="/works" className="pill" data-magnetic data-cursor="OPEN">
          VIEW WORKS
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <div className="carousel-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous thumbnails">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next thumbnails">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="carousel-track" ref={ref}>
        {secondaryCarousel.map(([src, label]) => (
          <article className="carousel-card" key={label} data-cursor="VIEW">
            <Image src={src} width={620} height={460} alt={`${label} thumbnail`} />
            <p>{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
