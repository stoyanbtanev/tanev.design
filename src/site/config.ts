export const SITE = {
  name: "tanev.design",
  email: "stoyanbtanev@gmail.com",
  city: "Plovdiv",
  country: "Bulgaria",
  since: 2021,
  socials: {
    linkedin: "https://www.linkedin.com/in/stoyan-tanev-a732603b8/",
    github: "https://github.com/stoyanbtanev",
    x: "https://x.com/tanevdesign",
  },
};

export type Chapter = { id: string; label: string };

export const CHAPTERS: Chapter[] = [
  { id: "services", label: "Services" },
  { id: "profile", label: "Profile" },
  { id: "process", label: "Process" },
  { id: "voice", label: "Voice" },
  { id: "projects", label: "Projects" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  num: string;
  client: string;
  title: string;
  year: string;
  role: string;
  url?: string;
  image: string;
  scope: string[];
  /**
   * Optional one-line factual outcome — only set when there's a real number
   * or shipped fact to point at. Examples: "Mobile Lighthouse 96.",
   * "Launched in three weeks." Leave undefined when there isn't one yet.
   */
  outcome?: string;
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    client: "SpeedLink EU",
    title: "Logistics, made to feel as fast as it is.",
    year: "2026",
    role: "Identity, site, motion, SEO",
    url: "https://speedlink-eu.vercel.app",
    image: "/work-speedlink.webp",
    scope: ["Web", "Brand", "Motion", "SEO"],
  },
  {
    num: "02",
    client: "Pekarni Siana",
    title: "A neighbourhood bakery, set as an editorial.",
    year: "2025",
    role: "Site, photography direction",
    url: "https://pekarnisiana.github.io/site/",
    image: "/work-siana.webp",
    scope: ["Web", "Art direction"],
  },
  {
    num: "03",
    client: "$SELK — Solana",
    title: "A community memecoin, handled as a real brand.",
    year: "2025",
    role: "Brand, site, micro-interactions",
    url: "https://exelkonsol.github.io/elk/",
    image: "/work-exel.webp",
    scope: ["Web", "Brand", "Motion"],
  },
  {
    num: "04",
    client: "tanev.design",
    title: "This site. Built start to finish.",
    year: "2026",
    role: "Everything",
    image: "/hero-12.jpg",
    scope: ["Web", "Brand", "Motion", "Code"],
  },
];

export type Step = { num: string; title: string; body: string };

export const PROCESS: Step[] = [
  {
    num: "01",
    title: "Brief",
    body: "You fill the form. I study your world — not just your industry. Goals, audience, references, what success looks like.",
  },
  {
    num: "02",
    title: "Direction",
    body: "One direction, fully resolved. Type, colour, layout, motion language — agreed before a single line of code.",
  },
  {
    num: "03",
    title: "Build",
    body: "Pixel-precise, animated, fast. Every detail considered. Tested on every device that matters.",
  },
  {
    num: "04",
    title: "Launch",
    body: "Goes live. You keep a hundred percent ownership of everything — source, hosting, assets, the lot.",
  },
];

export const STACK = [
  "React", "TypeScript", "Vite", "GSAP", "Lenis",
  "Tailwind", "Framer Motion", "Three.js", "WebGL",
  "Vercel", "Cloudflare", "Figma", "After Effects",
  "Lightroom", "Photoshop", "Illustrator", "DaVinci Resolve",
];

export type Principle = { num: string; title: string; body: string };

export const PRINCIPLES: Principle[] = [
  {
    num: "I",
    title: "One person.",
    body: "No layers, no handoffs. The hand that designs is the hand that codes is the hand that ships.",
  },
  {
    num: "II",
    title: "Custom over template.",
    body: "Every site is built from a blank file. Hand-coded, top to bottom. No page builders, no shortcuts.",
  },
  {
    num: "III",
    title: "Motion, with intent.",
    body: "Animation earns its place. If it doesn't clarify the story, it gets removed.",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "How does the process work?",
    a: "You fill out the form below. Within twenty-four hours you get a reply with a rough plan. No discovery calls that waste your morning.",
  },
  {
    q: "Who works on my project?",
    a: "Me. One person, from brief to launch. Nothing gets lost in translation. The vision stays intact.",
  },
  {
    q: "How fast can you deliver?",
    a: "Scope defines the timeline, but I don't sit on projects. You'll know the exact timeline after the brief. The first visual direction lands fast.",
  },
  {
    q: "What do I own after the project?",
    a: "Everything. Source files, code, assets. No subscriptions, no hostage-taking. Once delivered, it's a hundred percent yours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — about half of the work is outside Bulgaria. English, asynchronous, European hours.",
  },
  {
    q: "Do you do redesigns or only new sites?",
    a: "Both. A redesign starts with a short audit, so we agree on what stays and what gets rebuilt before any pixels move.",
  },
];
