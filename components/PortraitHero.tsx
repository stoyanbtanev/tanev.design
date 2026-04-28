"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

const MARQUEE_PHRASE = "Stoyan Tanev · ";
const MARQUEE_TEXT = MARQUEE_PHRASE.repeat(8);

export function PortraitHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-130%"]);
  const x = useSpring(xRaw, { stiffness: 260, damping: 50, mass: 0.35 });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.18, 1.24]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);

  return (
    <section ref={sectionRef} className="phero">
      <nav className="phero__nav" aria-label="Primary">
        <Link href="/" className="phero__brand">
          tanev.design
        </Link>
        <div className="phero__nav-links">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>

      <div className="phero__portrait">
        <motion.div
          className="phero__portrait-inner"
          style={{ scale: imageScale, y: imageY, opacity: imageOpacity }}
        >
          <Image
            src="/assets/newherowithbackground.png"
            alt="Stoyan Tanev portrait"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
            className="phero__portrait-img"
          />
        </motion.div>
      </div>

      <motion.div className="phero__marquee" style={{ x }} aria-hidden="true">
        <span>{MARQUEE_TEXT}</span>
      </motion.div>

      <h1 className="phero__sr-only">Stoyan Tanev — Independent Web Designer in Plovdiv, Bulgaria</h1>

      <div className="phero__socials">
        <a href="https://www.instagram.com/tanev.design/" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
          <Instagram size={14} aria-hidden="true" />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/stoyan-tanev-a732603b8/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
          <Linkedin size={14} aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/stoyanbtanev" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
          <Github size={14} aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a href="https://x.com/tanevdesign" target="_blank" rel="noreferrer noopener" aria-label="X (formerly Twitter)">
          <Twitter size={14} aria-hidden="true" />
          <span>X</span>
        </a>
      </div>

      <div className="phero__role">
        <div className="phero__role-text">
          <span>{"// Independent"}</span>
          <span>Web Designer</span>
        </div>
      </div>
    </section>
  );
}
