import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

// Above-the-fold — eager
import Nav from '@/components/Nav'
import VCHero from '@/components/VideoCommerce/VCHero'
import LogoTicker from '@/components/LogoTicker'
import Banner from '@/components/Banner'

// Below-the-fold — lazy
const VCWhy = lazy(() => import('@/components/VideoCommerce/VCWhy'))
const VCFormats = lazy(() => import('@/components/VideoCommerce/VCFormats'))
const VCFeatures = lazy(() => import('@/components/VideoCommerce/VCFeatures'))
const VCQuote = lazy(() => import('@/components/VideoCommerce/VCQuote'))
const CasesCarousel = lazy(() => import('@/components/CasesCarousel'))
const Integrations = lazy(() => import('@/components/Integrations'))
const VCCta = lazy(() => import('@/components/VideoCommerce/VCCta'))
const Footer = lazy(() => import('@/components/Footer'))

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
        ctaHref="https://widde.io/contato-vendas"
      />
      <VCHero />
      <div className="pb-15 md:pb-30"><LogoTicker /></div>
      <Suspense fallback={null}>
        <main className="max-w-screen-xl mx-auto px-3 md:px-2">
          <div data-reveal className="pb-15 md:pb-30"><VCWhy /></div>
          <div data-reveal className="pb-20 md:pb-30"><VCFormats /></div>
        </main>
        <div className="pb-15 md:pb-30"><VCFeatures /></div>
        <main className="max-w-screen-xl mx-auto px-3 md:px-2">
          <div data-reveal className="pb-15 md:pb-30"><VCQuote /></div>
          <div data-reveal className="pb-15 md:pb-30"><CasesCarousel /></div>
          <div data-reveal className="pb-15 md:pb-30"><Integrations /></div>
        </main>
        <VCCta />
        <Footer />
      </Suspense>
    </>
  )
}
