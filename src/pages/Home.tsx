import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLenis } from "@/lib/useLenis";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroStatement from "@/components/HeroStatement";
import Showcase from "@/components/Showcase";
import LogoTicker from "@/components/LogoTicker";
import Solutions from "@/components/Solutions";
import DemoSection from "@/components/DemoSection";
import Problem from "@/components/Problem";
import CasesCarousel from "@/components/CasesCarousel";
import Integrations from "@/components/Integrations";
import Plans from "@/components/Plans";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import VCCta from "@/components/VideoCommerce/VCCta";

export default function Home() {
  useLenis();
  useRevealOnScroll();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (!scrollTo) return;
    const timer = setTimeout(() => {
      getLenis().scrollTo(`#${scrollTo}`, {
        duration: 3.5,
        offset: -70,
        easing: easeOutQuint,
      });
      setSearchParams({}, { replace: true });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Video Commerce para E-commerce | Widde</title>
        <meta name="description" content="Acelere a decisão de compra do seu consumidor com Video Commerce, Live Commerce e TryOn. Plataforma líder para e-commerces no Brasil. Comece agora." />
        <link rel="canonical" href="https://widde.io/" />
      </Helmet>
      <Nav />
      <Hero />
      <div className="pb-15 md:pb-30"><LogoTicker /></div>
      <div className="pb-15 md:pb-30"><HeroStatement /></div>
      <div className="pb-15 md:pb-30"><Showcase /></div>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <div data-reveal className="pb-15 md:pb-30">
          <Solutions />
        </div>
      </main>
      <div data-reveal className="pb-15 md:pb-30">
        <DemoSection />
      </div>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <div data-reveal className="pb-15 md:pb-30">
          <Problem />
        </div>
        <div data-reveal className="pb-15 md:pb-30">
          <CasesCarousel />
        </div>
        <div data-reveal className="pb-15 md:pb-30">
          <Integrations />
        </div>
        <div data-reveal className="pb-15 md:pb-30">
          <Plans />
        </div>
        <div data-reveal className="pb-15 md:pb-30">
          <Blog />
        </div>
      </main>
      <VCCta />
      <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div>
      <Footer />
    </>
  );
}
