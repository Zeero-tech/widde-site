import Nav from '@/components/Nav'
import LogoTicker from '@/components/LogoTicker'
import Cases from '@/components/Cases'
import Integracoes from '@/components/Integracoes'
import CtaFullWidth from '@/components/CtaFullWidth'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import VCHero from '@/components/vc/VCHero'
import VCPorque from '@/components/vc/VCPorque'
import VCFormatos from '@/components/vc/VCFormatos'
import VCFuncionalidades from '@/components/vc/VCFuncionalidades'
import VCQuote from '@/components/vc/VCQuote'

export default function VideoCommerce() {
  return (
    <>
      <Nav />
      <VCHero />
      <LogoTicker />
      <main className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 mb-30">
        <VCPorque />
        <VCFormatos />
        <VCFuncionalidades />
        <VCQuote />
        <Cases />
        <Integracoes />
      </main>
      <CtaFullWidth />
      <Newsletter />
      <Footer />
    </>
  )
}
