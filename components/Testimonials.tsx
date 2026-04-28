"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const next = () => setIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-stage reveal">
      <AnimatePresence mode="wait">
        <motion.figure
          key={active.quote}
          className="testimonial-slide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            if (info.offset.x > 60) prev();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <blockquote>{active.quote}</blockquote>
          <motion.figcaption initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
            <Image src={active.avatar} width={112} height={112} alt={`${active.name} testimonial avatar`} />
            <span>
              <strong>{active.name}</strong>
              <small>{active.role}</small>
            </span>
          </motion.figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="testimonial-controls">
        <button type="button" onClick={prev} aria-label="Previous testimonial">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button type="button" onClick={next} aria-label="Next testimonial">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
