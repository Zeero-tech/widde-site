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

export default function VideoCommerce() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <VCHero />
      <LogoTicker />
      <main className="max-w-[1740px] mx-auto px-5 md:px-10 lg:px-20 mb-12 md:mb-30">
        <div data-reveal><VCWhy /></div>
        <div data-reveal><VCFormats /></div>
      </main>
      <div data-reveal><VCFeatures /></div>
      <main className="max-w-[1740px] mx-auto px-5 md:px-10 lg:px-20 mb-12 md:mb-30">
        <div data-reveal><VCQuote /></div>
        <div data-reveal><Cases /></div>
        <div data-reveal><Integrations /></div>
      </main>
      <VCCta />
      <Footer />
    </>
  )
}
