import { lazy, Suspense } from 'react'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import QSHero from '@/components/QuemSomos/QSHero'
import QSVideos from '@/components/QuemSomos/QSVideos'
import QSManifesto from '@/components/QuemSomos/QSManifesto'

const VCCta = lazy(() => import('@/components/VideoCommerce/VCCta'))
const Newsletter = lazy(() => import('@/components/Newsletter'))
const Footer = lazy(() => import('@/components/Footer'))

export default function QuemSomos() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <QSHero />
      <Suspense>
        <QSVideos />
        <QSManifesto />
        <VCCta />
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div>
        <Footer />
      </Suspense>
    </>
  )
}
