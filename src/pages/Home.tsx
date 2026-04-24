import { lazy, Suspense, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLenis } from "@/lib/useLenis";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

// Above-the-fold — eager
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroStatement from "@/components/HeroStatement";
import LogoTicker from "@/components/LogoTicker";

// Lazy with auto-reload on chunk 404
function lazyWithRetry(factory: () => Promise<any>) {
  return lazy(() =>
    factory().catch(() => {
      if (!sessionStorage.getItem("chunk-reloaded")) {
        sessionStorage.setItem("chunk-reloaded", "1");
        window.location.reload();
      }
      return { default: () => null };
    })
  );
}

// Below-the-fold — lazy
const Showcase = lazyWithRetry(() => import("@/components/Showcase"));
const Solutions = lazyWithRetry(() => import("@/components/Solutions"));
const DemoSection = lazyWithRetry(() => import("@/components/DemoSection"));
const Problem = lazyWithRetry(() => import("@/components/Problem"));
const CasesCarousel = lazyWithRetry(() => import("@/components/CasesCarousel"));
const Integrations = lazyWithRetry(() => import("@/components/Integrations"));
const Plans = lazyWithRetry(() => import("@/components/Plans"));
const Blog = lazyWithRetry(() => import("@/components/Blog"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Newsletter = lazyWithRetry(() => import("@/components/Newsletter"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));

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
        <title>Widde - A experiência do físico na loja on-line</title>
        <meta name="description" content="Acelere a decisão de compra do seu consumidor com Video Commerce, Live Commerce e TryOn. Plataforma líder para e-commerces no Brasil. Comece agora." />
        <link rel="canonical" href="https://widde.io/" />
      </Helmet>
      <Nav />
      <Hero />
      <div className="pb-15 md:pb-30"><LogoTicker /></div>
      {/* <div className="pb-15 md:pb-30"><HeroStatement /></div> */}
      <Suspense><div className="pb-15 md:pb-30"><Showcase /></div></Suspense>
      <main className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-12">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Solutions /></div></Suspense>
      </main>
      <Suspense><div data-reveal className="pb-15 md:pb-30"><DemoSection /></div></Suspense>
      <main className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-12">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Problem /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><CasesCarousel /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Integrations /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Plans /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Blog /></div></Suspense>
      </main>
      <Suspense><VCCta /></Suspense>
      <Suspense><div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div></Suspense>
      <Suspense><Footer /></Suspense>
    </>
  );
}
