import { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { useLenis } from '@/lib/useLenis'
import { getLenis } from '@/lib/lenis'
import { easeOutQuint } from '@/lib/easing'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Solutions from '@/components/Solutions'
import Demo from '@/components/Demo'
import Problem from '@/components/Problem'
import Cases from '@/components/Cases'
import Integrations from '@/components/Integrations'
import Plans from '@/components/Plans'
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
      getLenis().scrollTo(`#${scrollTo}`, { duration: 3.5, offset: -70, easing: easeOutQuint })
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
        <div data-reveal><Solutions /></div>
        <div data-reveal><Demo /></div>
        <div data-reveal><Problem /></div>
        <div data-reveal><Cases /></div>
        <div data-reveal><Integrations /></div>
        <div data-reveal><Plans /></div>
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
