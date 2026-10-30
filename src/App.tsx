import Hero from "@/components/landing/Hero";
import Method from "@/components/landing/Method";
import { Service } from "@/components/landing/MotionSections";
import { Nav } from "@/components/landing/Nav";
import {
  Assurance,
  Contact,
  Faq,
  Footer,
  Finding,
  Sectors,
  Services,
} from "@/components/landing/Sections";
import { SmoothScroll } from "@/components/landing/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Service />
        <Finding />
        <Services />
        <Sectors />
        <Method />
        <Assurance />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
