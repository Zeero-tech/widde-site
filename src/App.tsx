import { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
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
import Demo from "@/components/Demo";
import Demo2 from "@/components/Demo2";
import Problem from "@/components/Problem";
import Problem2 from "@/components/Problem2";
import Cases from "@/components/Cases";
import CasesCarousel from "@/components/CasesCarousel";
import Integrations from "@/components/Integrations";
import Plans from "@/components/Plans";
import Blog from "@/components/Blog";
import Blog2 from "@/components/Blog2";
import Blog3 from "@/components/Blog3";
import CtaFullWidth from "@/components/CtaFullWidth";
import Newsletter from "@/components/Newsletter";
import Newsletter2 from "@/components/Newsletter2";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Footer3 from "@/components/Footer3";
import VideoCommerce from "@/pages/VideoCommerce";

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
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      {/* <LogoTicker /> */}
      <div className="pb-30"><LogoTicker2 /></div>
      <div className="pb-30"><Hero2 /></div>
      <div className="pb-30"><Showcase /></div>
      <main className="max-w-screen-xl mx-auto px-5 md:px-2">
        <div data-reveal className="pb-30">
          <Solutions />
        </div>
        <div data-reveal className="pb-30">
          <Demo />
        </div>
        <div data-reveal className="pb-30">
          <Demo2 />
        </div>
        <div data-reveal className="pb-30">
          <Problem />
        </div>
        <div data-reveal className="pb-30">
          <Problem2 />
        </div>
        <div data-reveal className="pb-30">
          <Cases />
        </div>
        <div data-reveal className="pb-30">
          <CasesCarousel />
        </div>
        <div data-reveal className="pb-30">
          <Integrations />
        </div>
        <div data-reveal className="pb-30">
          <Plans />
        </div>
        {/* <div data-reveal className="pb-30">
          <Blog />
        </div> */}
        {/* <div data-reveal className="pb-30">
          <Blog2 />
        </div> */}
        <div data-reveal className="pb-30">
          <Blog3 />
        </div>
      </main>
      <CtaFullWidth />
      {/* <Newsletter /> */}
      <div className="pb-30 bg-[#0A0A0A]"><Newsletter2 /></div>
      {/* <Footer /> */}
      {/* <Footer2 /> */}
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
