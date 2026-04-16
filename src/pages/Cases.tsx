import { lazy, Suspense } from 'react'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import CasesHero from '@/components/Cases/CasesHero'
import CasesList from '@/components/Cases/CasesList'

const VCCta = lazy(() => import('@/components/VideoCommerce/VCCta'))
const Newsletter = lazy(() => import('@/components/Newsletter'))
const Footer = lazy(() => import('@/components/Footer'))

export default function Cases() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <CasesHero />
      <Suspense>
        <CasesList />
        <VCCta />
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div>
        <Footer />
      </Suspense>
    </>
  )
}
