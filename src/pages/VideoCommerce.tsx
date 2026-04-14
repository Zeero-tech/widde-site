import { Helmet } from 'react-helmet-async'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import LogoTicker from '@/components/LogoTicker'
import Cases from '@/components/Cases'
import Integrations from '@/components/Integrations'
import VCCta from '@/components/VideoCommerce/VCCta'
import Footer from '@/components/Footer'
import VCHero from '@/components/VideoCommerce/VCHero'
import VCWhy from '@/components/VideoCommerce/VCWhy'
import VCFormats from '@/components/VideoCommerce/VCFormats'
import VCFeatures from '@/components/VideoCommerce/VCFeatures'
import VCQuote from '@/components/VideoCommerce/VCQuote'
import LogoTicker2 from '@/components/LogoTicker2'
import Footer3 from '@/components/Footer3'
import CasesCarousel from '@/components/CasesCarousel'

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
      <VCHero />
      <LogoTicker2 />
      <main className="max-w-screen-xl mx-auto px-5 md:px-2 mb-12 md:mb-30">
        <div data-reveal><VCWhy /></div>
        <div data-reveal><VCFormats /></div>
      </main>
      <div data-reveal><VCFeatures /></div>
      <main className="max-w-screen-xl mx-auto px-5 md:px-2 mb-12 md:mb-30">
        <div data-reveal className='pb-30'><VCQuote /></div>
        <div data-reveal className="pb-30">
          <CasesCarousel />
        </div>
        <div data-reveal><Integrations /></div>
      </main>
      <VCCta />
      <Footer3 />
    </>
  )
}
