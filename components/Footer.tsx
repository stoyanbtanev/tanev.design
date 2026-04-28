"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LayoutGroup, motion } from "framer-motion";
import { site } from "@/data/site";
import { HoverSwapText } from "@/components/HoverSwapText";
import { TextRotate } from "@/components/ui/text-rotate";

const socials = [
  ["GH", "https://github.com/stoyantanev"],
  ["IN", "https://www.linkedin.com/in/stoyan-tanev/"],
  ["MAIL", `mailto:${site.email}`]
] as const;

const rotatingWords = [
  "MEMORABLE",
  "TRUSTED",
  "FAST",
  "CLEAN",
  "FOUND",
  "CLEAR",
  "POLISHED",
  "SCALABLE"
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-opener page-shell">
        <div>
          <div className="eyebrow footer-rotate" role="text">
            <LayoutGroup>
              <motion.div layout className="footer-rotate__line">
                <motion.span layout className="footer-rotate__static">
                  READY TO BUILD SOMETHING&nbsp;
                </motion.span>
                <TextRotate
                  texts={rotatingWords}
                  mainClassName="footer-rotate__word"
                  splitLevelClassName="overflow-hidden"
                  staggerDuration={0.025}
                  staggerFrom="last"
                  rotationInterval={2600}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
                <motion.span layout className="footer-rotate__static">
                  ?
                </motion.span>
              </motion.div>
            </LayoutGroup>
          </div>
          <Link href="/contact" className="footer-giant" data-cursor="OPEN">
            <HoverSwapText>LETSTALK</HoverSwapText>
          </Link>
        </div>
        <Image className="spin-mark" src="/assets/icons/star.svg" width={132} height={132} alt="" />
        <Link className="pill pill--large" href="/contact" data-magnetic data-cursor="OPEN">
          LET&apos;S WORK TOGETHER
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <div className="footer-bottom page-shell">
        <p>&copy;2026 TANEV.DESIGN</p>
        <nav aria-label="Social links">
          {socials.map(([label, href]) => (
            <a href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" data-cursor="OPEN">
              {label}
            </a>
          ))}
        </nav>
        <a href="#top" data-cursor="OPEN">
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
