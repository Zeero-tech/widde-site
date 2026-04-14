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
import LogoTicker from "@/components/LogoTicker";
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
      <LogoTicker />
      <LogoTicker2 />
      <Hero2 />
      <Showcase />
      <main className="max-w-screen-xl mx-auto px-5 md:px-2">
        <div data-reveal>
          <Solutions />
        </div>
        <div data-reveal>
          <Demo />
        </div>
        <div data-reveal>
          <Demo2 />
        </div>
        <div data-reveal>
          <Problem />
        </div>
        <div data-reveal>
          <Problem2 />
        </div>
        <div data-reveal>
          <Cases />
        </div>
        <div data-reveal>
          <CasesCarousel />
        </div>
        <div data-reveal>
          <Integrations />
        </div>
        <div data-reveal>
          <Plans />
        </div>
        <div data-reveal>
          <Blog />
        </div>
        <div data-reveal>
          <Blog2 />
        </div>
        <div data-reveal>
          <Blog3 />
        </div>
      </main>
      <CtaFullWidth />
      <Newsletter />
      <Footer />
      <Footer2 />
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
