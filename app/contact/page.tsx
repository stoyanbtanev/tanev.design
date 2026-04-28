import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronDown, Mail, MapPin, MessageSquare, Plus } from "lucide-react";
import { image, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website design, UI/UX, SEO, landing page, or front-end build with Tanev Design."
};

const navPages = [
  ["Homepage", "/"],
  ["About", "/#about"],
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["Blog", "/#journal"],
  ["Contact", "/contact"]
] as const;

export default function ContactPage() {
  return (
    <div className="elite-page elite-contact-route">
      <nav className="elite-nav page-shell" aria-label="Contact navigation">
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

        <Link className="elite-nav__icon" href={`mailto:${site.email}`} aria-label="Email Tanev Design" data-cursor="MAIL">
          <Plus size={16} aria-hidden="true" />
        </Link>
      </nav>

      <section className="elite-route-hero page-shell">
        <div className="elite-route-hero__copy reveal">
          <p className="elite-kicker">Project request</p>
          <h1>Tell me what you want to build.</h1>
          <p>
            Send the rough shape: business, offer, timeline, budget range, and whether you need a landing page,
            multi-page website, redesign, SEO, or performance help. I will reply with the clean next step.
          </p>
          <Link className="elite-pill elite-pill--light" href={`mailto:${site.email}`} data-cursor="MAIL">
            {site.displayEmail}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <figure className="elite-route-hero__media reveal">
          <Image
            src={image.portrait}
            width={1586}
            height={992}
            alt="Stoyan Tanev portrait"
            priority
            sizes="(max-width: 900px) 92vw, 42vw"
          />
        </figure>
      </section>

      <section className="elite-contact-board page-shell">
        <div className="elite-contact-cards">
          <article className="elite-contact-card reveal">
            <Mail size={18} aria-hidden="true" />
            <h2>Reach me via email</h2>
            <p>I usually reply with next steps and a few clarifying questions.</p>
            <a href={`mailto:${site.email}`} data-cursor="MAIL">
              {site.displayEmail}
            </a>
          </article>
          <article className="elite-contact-card reveal">
            <MapPin size={18} aria-hidden="true" />
            <h2>Location</h2>
            <p>Based in {site.location}, working with local and remote teams.</p>
            <span>Europe / remote</span>
          </article>
          <article className="elite-contact-card reveal">
            <MessageSquare size={18} aria-hidden="true" />
            <h2>Good fit</h2>
            <p>Website design, UI/UX, SEO, landing pages, business websites, and responsive front-end launches.</p>
            <span>Local business focus</span>
          </article>
        </div>

        <form className="elite-contact-form reveal" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <div className="elite-contact-form__head">
            <p className="elite-kicker">Brief</p>
            <h2>Tell me a bit about yourself</h2>
          </div>

          <label>
            <span>Full name</span>
            <input name="name" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            <span>Email address</span>
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            <span>Required service</span>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option value={service.label} key={service.slug}>
                  {service.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={7} placeholder="What are we building?" required />
          </label>
          <button className="elite-pill elite-pill--light" type="submit" data-magnetic>
            Let&apos;s work together
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </form>
      </section>
    </div>
  );
}
