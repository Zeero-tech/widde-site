import { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { useLenis } from '@/lib/useLenis'
import { getLenis } from '@/lib/lenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Solucoes from '@/components/Solucoes'
import Demo from '@/components/Demo'
import Problema from '@/components/Problema'
import Cases from '@/components/Cases'
import Integracoes from '@/components/Integracoes'
import Planos from '@/components/Planos'
import Blog from '@/components/Blog'
import CtaFullWidth from '@/components/CtaFullWidth'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import VideoCommerce from '@/pages/VideoCommerce'

function Home() {
  useLenis()
  useRevealOnScroll()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (!scrollTo) return
    const timer = setTimeout(() => {
      getLenis().scrollTo(`#${scrollTo}`, { duration: 3.5, offset: -70, easing: (t) => 1 - Math.pow(1 - t, 5) })
      setSearchParams({}, { replace: true })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <LogoTicker />
      <main className="max-w-[1740px] mx-auto px-5 md:px-10 lg:px-20">
        <div data-reveal><Solucoes /></div>
        <div data-reveal><Demo /></div>
        <div data-reveal><Problema /></div>
        <div data-reveal><Cases /></div>
        <div data-reveal><Integracoes /></div>
        <div data-reveal><Planos /></div>
        <div data-reveal><Blog /></div>
      </main>
      <CtaFullWidth />
      <Newsletter />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video-commerce" element={<VideoCommerce />} />
    </Routes>
  )
}
