"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { DetailPage } from "@/data/site";

export type DetailKind = "Project" | "Service" | "Blog";

type DetailModalProps = {
  page: DetailPage | null;
  kind: DetailKind;
  onClose: () => void;
};

export function DetailModal({ page, kind, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!page) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [page, onClose]);

  if (typeof window === "undefined") return null;

  const content = (
    <AnimatePresence>
      {page ? (
        <motion.div
          key={page.slug}
          className="detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="detail-modal__panel"
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
          >
            <button
              type="button"
              className="detail-modal__close"
              onClick={onClose}
              aria-label="Close"
              data-cursor="CLOSE"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="detail-modal__scroll">
              <header className="detail-modal__hero">
                <p className="elite-kicker">{kind}</p>
                <h2 id="detail-modal-title">{page.title}</h2>
                <p className="detail-modal__subtitle">{page.subtitle}</p>
                <div className="detail-modal__meta">
                  <div>
                    <span>{page.categoryLabel}</span>
                    <strong>{page.categories.join(" / ")}</strong>
                  </div>
                  <div>
                    <span>{page.typeLabel}</span>
                    <strong>{page.typeValue}</strong>
                  </div>
                </div>
              </header>

              <figure className="detail-modal__cover">
                <Image
                  src={page.cover}
                  width={1600}
                  height={920}
                  alt={`${page.title} cover`}
                  sizes="(max-width: 900px) 92vw, 920px"
                />
              </figure>

              {page.blocks.map((block) => (
                <section className="detail-modal__block" key={block.eyebrow}>
                  <p className="elite-kicker">{block.eyebrow}</p>
                  <div>
                    {block.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="detail-modal__pair">
                <Image
                  src={page.detailImages[0]}
                  width={860}
                  height={680}
                  alt={`${page.title} detail one`}
                  sizes="(max-width: 900px) 92vw, 440px"
                />
                <Image
                  src={page.detailImages[1]}
                  width={860}
                  height={680}
                  alt={`${page.title} detail two`}
                  sizes="(max-width: 900px) 92vw, 440px"
                />
              </div>

              <div className="detail-modal__cta">
                <Link
                  className="elite-pill elite-pill--light"
                  href={page.ctaHref}
                  target={page.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={page.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="OPEN"
                >
                  {page.ctaLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
