import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

// Above-the-fold — eager
import Nav from '@/components/Nav'
import VCHero from '@/components/VideoCommerce/VCHero'
import LogoTicker from '@/components/LogoTicker'
import Banner from '@/components/Banner'

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
const VCWhy = lazyWithRetry(() => import('@/components/VideoCommerce/VCWhy'))
const VCFormats = lazyWithRetry(() => import('@/components/VideoCommerce/VCFormats'))
const VCFeatures = lazyWithRetry(() => import('@/components/VideoCommerce/VCFeatures'))
const VCQuote = lazyWithRetry(() => import('@/components/VideoCommerce/VCQuote'))
const CasesCarousel = lazyWithRetry(() => import('@/components/CasesCarousel'))
const Integrations = lazyWithRetry(() => import('@/components/Integrations'))
const VCCta = lazyWithRetry(() => import('@/components/VideoCommerce/VCCta'))
const Footer = lazyWithRetry(() => import('@/components/Footer'))

export default function VideoCommerce() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Helmet>
        <title>Video Commerce | Widde</title>
        <meta name="description" content="Transforme seus vídeos em vendas. Plataforma de Video Commerce líder para e-commerces no Brasil. Shoppable videos, stories e carrosséis integrados à sua loja." />
        <link rel="canonical" href="https://widde.io/video-commerce" />
        <meta property="og:title" content="Video Commerce | Widde" />
        <meta property="og:description" content="Transforme seus vídeos em vendas. Plataforma de Video Commerce líder para e-commerces no Brasil." />
        <meta property="og:url" content="https://widde.io/video-commerce" />
      </Helmet>
      <Nav />
      <Banner
        id="vtex-day-2025"
        content={<>🎉 Estamos no <strong>VTEX Day!</strong> Venha nos visitar e conhecer nossas soluções de Video Commerce.</>}
        ctaLabel="Saiba mais"
      />
      <VCHero />
      <div className="pb-15 md:pb-30"><LogoTicker /></div>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><VCWhy /></div></Suspense>
        <Suspense><div data-reveal className="pb-20 md:pb-30"><VCFormats /></div></Suspense>
      </main>
      <Suspense><div className="pb-15 md:pb-30"><VCFeatures /></div></Suspense>
      <main className="max-w-screen-xl mx-auto px-3 md:px-2">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><VCQuote /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><CasesCarousel /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Integrations /></div></Suspense>
      </main>
      <Suspense><VCCta /></Suspense>
      <Suspense><Footer /></Suspense>
    </>
  )
}
