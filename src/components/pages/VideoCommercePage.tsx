import { lazyWithRetry } from "@/lib/lazyWithRetry"
import { Suspense } from 'react'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

// Above-the-fold — eager
import Nav from '@/components/core/Nav'
import VCHero from '@/components/VideoCommerce/VCHero'
import LogoTicker from '@/components/core/LogoTicker'

// Below-the-fold — lazy
const VCWhy = lazyWithRetry(() => import('@/components/VideoCommerce/VCWhy'))
const VCFormats = lazyWithRetry(() => import('@/components/VideoCommerce/VCFormats'))
const VCFeatures = lazyWithRetry(() => import('@/components/VideoCommerce/VCFeatures'))
const VCQuote = lazyWithRetry(() => import('@/components/VideoCommerce/VCQuote'))
const CasesCarousel = lazyWithRetry(() => import('@/components/core/CasesCarousel'))
const Integrations = lazyWithRetry(() => import('@/components/core/Integrations'))
const VCCta = lazyWithRetry(() => import('@/components/VideoCommerce/VCCta'))
const Footer = lazyWithRetry(() => import('@/components/core/Footer'))

export default function VideoCommercePage() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav isDark={true} />
      <VCHero />
      <div className="pb-15 md:pb-30"><LogoTicker /></div>
      <main className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><VCWhy /></div></Suspense>
        <Suspense><div data-reveal className="pb-20 md:pb-30"><VCFormats /></div></Suspense>
      </main>
      <Suspense><div className="pb-15 md:pb-30"><VCFeatures /></div></Suspense>
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <Suspense><div data-reveal className="pb-15 md:pb-30"><VCQuote /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><CasesCarousel /></div></Suspense>
        <Suspense><div data-reveal className="pb-15 md:pb-30"><Integrations /></div></Suspense>
      </div>
      <Suspense><VCCta /></Suspense>
      <Suspense><Footer /></Suspense>
    </>
  )
}
