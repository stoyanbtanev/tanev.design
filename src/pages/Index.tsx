import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { ScrollTrigger } from "@/hooks/useGSAP";
import { Preloader } from "@/site/Preloader";
import { Chrome } from "@/site/Chrome";
import { Hero } from "@/site/Hero";
import { Services } from "@/site/Services";
import { Profile } from "@/site/Profile";
import { Process } from "@/site/Process";
import { Voice } from "@/site/Voice";
import { Projects } from "@/site/Projects";
import { FAQ } from "@/site/FAQ";
import { Closer } from "@/site/Closer";
import { Footer } from "@/site/Footer";

export default function Index() {
  const [ready, setReady] = useState(false);
  useLenis();

  useEffect(() => {
    if (!ready) return;
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    const id2 = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(id2);
    };
  }, [ready]);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true, type: "touch" });
    }
  }, []);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      {/* Chrome stays mounted but is hidden until preloader exits, so it doesn't
          flash above the preloader cover for one paint frame. */}
      <div style={{ visibility: ready ? "visible" : "hidden" }}>
        <Chrome />
      </div>
      <main style={{ visibility: ready ? "visible" : "hidden" }}>
        <Hero ready={ready} />
        <Services />
        <Profile />
        <Process />
        <Voice />
        <Projects />
        <FAQ />
        <Closer />
      </main>
      {ready && <Footer />}
    </>
  );
}
