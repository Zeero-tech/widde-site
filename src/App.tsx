import { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLenis } from "@/lib/useLenis";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Showcase from "@/components/Showcase";
import LogoTicker2 from "@/components/LogoTicker2";
import Solutions from "@/components/Solutions";
import Demo2 from "@/components/Demo2";
import Problem2 from "@/components/Problem2";
import CasesCarousel from "@/components/CasesCarousel";
import Integrations from "@/components/Integrations";
import Plans from "@/components/Plans";
import Blog from "@/components/Blog";
import Newsletter2 from "@/components/Newsletter2";
import Footer3 from "@/components/Footer3";
import VideoCommerce from "@/pages/VideoCommerce";
import VCCta from "./components/VideoCommerce/VCCta";

function Home() {
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
      <div className="pb-15 md:pb-30"><LogoTicker2 /></div>
      <div className="pb-15 md:pb-30"><Hero2 /></div>
      <div className="pb-15 md:pb-30"><Showcase /></div>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <div data-reveal className="pb-15 md:pb-30">
          <Solutions />
        </div>
      </main>
      <div data-reveal className="pb-15 md:pb-30">
        <Demo2 />
      </div>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <div data-reveal className="pb-15 md:pb-30">
          <Problem2 />
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
      <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-[#0A0A0A]"><Newsletter2 /></div>
      <Footer3 />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video-commerce" element={<VideoCommerce />} />
    </Routes>
  );
}
