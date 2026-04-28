import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DetailPage } from "@/data/site";
import { faqs } from "@/data/site";
import { FAQ } from "@/components/FAQ";
import { SectionHeader } from "@/components/SectionHeader";

type DetailTemplateProps = {
  page: DetailPage;
  kind: "Project" | "Blog" | "Service";
  showFaq?: boolean;
};

export function DetailTemplate({ page, kind, showFaq = false }: DetailTemplateProps) {
  return (
    <article className="detail-page">
      <header className="detail-hero page-shell">
        <p className="eyebrow reveal">{kind}</p>
        <h1 className="detail-title reveal">{page.title}</h1>
        <p className="detail-compact reveal">{page.compactTitle}</p>
        <p className="detail-subtitle reveal">{page.subtitle}</p>
        <div className="detail-meta reveal">
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

      <div className="detail-cover page-shell reveal">
        <Image src={page.cover} width={1600} height={920} alt={`${page.title} ${kind.toLowerCase()} cover`} priority data-parallax />
      </div>

      <section className="detail-copy page-shell">
        <SectionHeader label={page.blocks[0].eyebrow} />
        <div className="copy-block reveal">
          {page.blocks[0].body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="detail-copy page-shell">
        <SectionHeader label={page.blocks[1].eyebrow} />
        <div className="copy-block copy-block--two reveal">
          {page.blocks[1].body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div className="detail-pair page-shell">
        <Image className="reveal" src={page.detailImages[0]} width={860} height={680} alt={`${page.title} detail image one`} />
        <Image className="reveal" src={page.detailImages[1]} width={860} height={680} alt={`${page.title} detail image two`} />
      </div>

      <section className="detail-copy page-shell">
        <SectionHeader label={page.blocks[2].eyebrow} />
        <div className="copy-block reveal">
          {page.blocks[2].body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="pill pill--large" href={page.ctaHref} data-magnetic data-cursor="OPEN">
            {page.ctaLabel}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="detail-banner page-shell reveal">
        <Image src={page.closingImage} width={1600} height={760} alt={`${page.title} closing banner`} data-parallax />
      </div>

      {showFaq ? (
        <section className="home-section page-shell">
          <SectionHeader label="FAQ" />
          <FAQ items={faqs} />
        </section>
      ) : null}
    </article>
  );
}
