import { Routes, Route } from 'react-router-dom'
import { useLenis } from '@/lib/useLenis'
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

  return (
    <>
      <Nav />
      <Hero />
      <LogoTicker />
      <main className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <Solucoes />
        <Demo />
        <Problema />
        <Cases />
        <Integracoes />
        <Planos />
        <Blog />
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
      <Route path="/solucoes/video-commerce" element={<VideoCommerce />} />
    </Routes>
  )
}
