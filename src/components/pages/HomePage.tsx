import { lazyWithRetry } from "@/lib/lazyWithRetry"
import { Suspense, useEffect } from "react";
import { useLenis } from "@/lib/useLenis";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// Above-the-fold — eager
import Nav from "@/components/core/Nav";
import Hero from "@/components/home/Hero";
import LogoTicker from "@/components/core/LogoTicker";

// Lazy with auto-reload on chunk 404
// Below-the-fold — lazy
const Showcase = lazyWithRetry(() => import("@/components/home/Showcase"));
const Solutions = lazyWithRetry(() => import("@/components/home/Solutions"));
const DemoSection = lazyWithRetry(() => import("@/components/home/DemoSection"));
const Problem = lazyWithRetry(() => import("@/components/home/Problem"));
const CasesCarousel = lazyWithRetry(() => import("@/components/core/CasesCarousel"));
const Integrations = lazyWithRetry(() => import("@/components/core/Integrations"));
const Plans = lazyWithRetry(() => import("@/components/home/Plans"));
const Blog = lazyWithRetry(() => import("@/components/home/Blog"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Newsletter = lazyWithRetry(() => import("@/components/core/Newsletter"));
const Footer = lazyWithRetry(() => import("@/components/core/Footer"));

export default function HomePage() {
  useLenis();
  useRevealOnScroll();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      getLenis().scrollTo(hash, {
        duration: 3.5,
        offset: -70,
        easing: easeOutQuint,
      });
      window.history.replaceState({}, "", window.location.pathname);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <div className="pb-15 md:pb-30">
        <LogoTicker />
      </div>
      <Suspense>
        <div className="pb-15 md:pb-30">
          <Showcase />
        </div>
      </Suspense>
      <main className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <Solutions />
          </div>
        </Suspense>
      </main>
      <Suspense>
        <div data-reveal className="pb-15 md:pb-30">
          <DemoSection />
        </div>
      </Suspense>
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <Problem />
          </div>
        </Suspense>
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <CasesCarousel />
          </div>
        </Suspense>
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <Integrations />
          </div>
        </Suspense>
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <Plans />
          </div>
        </Suspense>
        <Suspense>
          <div data-reveal className="pb-15 md:pb-30">
            <Blog />
          </div>
        </Suspense>
      </div>
      <Suspense>
        <VCCta />
      </Suspense>
      <Suspense>
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink">
          <Newsletter />
        </div>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
