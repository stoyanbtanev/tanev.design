import { PortraitHero } from "@/components/PortraitHero";

export const metadata = {
  title: "Hero Preview · Stoyan Tanev",
  description: "Portrait hero section preview"
};

export default function HeroPreviewPage() {
  return (
    <main className="phero-page">
      <PortraitHero />
      <div className="phero-spacer" aria-hidden="true" />
    </main>
  );
}
