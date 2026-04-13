import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import LogoTicker from '@/components/LogoTicker'
import Cases from '@/components/Cases'
import Integracoes from '@/components/Integracoes'
import VCCta from '@/components/vc/VCCta'
import Footer from '@/components/Footer'
import VCHero from '@/components/vc/VCHero'
import VCPorque from '@/components/vc/VCPorque'
import VCFormatos from '@/components/vc/VCFormatos'
import VCFuncionalidades from '@/components/vc/VCFuncionalidades'
import VCQuote from '@/components/vc/VCQuote'

export default function VideoCommerce() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <VCHero />
      <LogoTicker />
      <main className="max-w-[1740px] mx-auto px-5 md:px-10 lg:px-20 mb-30">
        <div data-reveal><VCPorque /></div>
        <div data-reveal><VCFormatos /></div>
        <div data-reveal><VCFuncionalidades /></div>
        <div data-reveal><VCQuote /></div>
        <div data-reveal><Cases /></div>
        <div data-reveal><Integracoes /></div>
      </main>
      <VCCta />
      <Footer />
    </>
  )
}
