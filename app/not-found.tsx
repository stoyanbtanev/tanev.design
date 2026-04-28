import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, Plus } from "lucide-react";
import { image } from "@/data/site";

const navPages = [
  ["Homepage", "/"],
  ["About", "/#about"],
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["Blog", "/#journal"],
  ["Contact", "/contact"]
] as const;

export default function NotFound() {
  return (
    <div className="elite-page elite-not-found-route">
      <nav className="elite-nav page-shell" aria-label="404 navigation">
        <Link className="elite-nav__icon" href="/" aria-label="Back home" data-cursor="HOME">
          <ArrowLeft size={16} aria-hidden="true" />
        </Link>

        <details className="elite-nav__pages">
          <summary>
            All Pages
            <ChevronDown size={14} aria-hidden="true" />
          </summary>
          <div className="elite-nav__menu">
            {navPages.map(([label, href]) => (
              <Link href={href} key={label} data-cursor="OPEN">
                {label}
              </Link>
            ))}
          </div>
        </details>

        <span className="elite-nav__slash">/</span>
        <Link href="/#journal" data-cursor="BLOG">
          Blog
        </Link>
        <Link className="elite-nav__brand" href="/" aria-label="Tanev Design home" data-cursor="HOME">
          tanev.design
        </Link>
        <Link href="/#about" data-cursor="ABOUT">
          About
        </Link>
        <span className="elite-nav__slash">/</span>
        <Link href="/contact" data-cursor="CONTACT">
          Contact
        </Link>

        <Link className="elite-nav__icon" href="/contact" aria-label="Start a project" data-cursor="START">
          <Plus size={16} aria-hidden="true" />
        </Link>
      </nav>

      <section className="elite-not-found page-shell">
        <div className="elite-not-found__type" aria-hidden="true">
          404
        </div>
        <figure className="elite-not-found__portrait" aria-hidden="true">
          <Image src={image.portrait} width={1586} height={992} alt="" priority sizes="min(92vw, 680px)" />
        </figure>
        <div className="elite-not-found__copy">
          <p className="elite-kicker">Oops, something went wrong</p>
          <h1>Page not found</h1>
          <p>The route you opened is not part of the new build.</p>
          <div className="elite-not-found__actions">
            <Link className="elite-pill elite-pill--light" href="/" data-cursor="HOME">
              Go back home
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="elite-pill" href="/contact" data-cursor="CONTACT">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
