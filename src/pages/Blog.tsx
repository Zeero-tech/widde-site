import { lazy, Suspense } from 'react'
import { useLenis } from '@/lib/useLenis'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import Nav from '@/components/Nav'
import BlogHero from '@/components/Blog/BlogHero'
import BlogList from '@/components/Blog/BlogList'

const VCCta = lazy(() => import('@/components/VideoCommerce/VCCta'))
const Newsletter = lazy(() => import('@/components/Newsletter'))
const Footer = lazy(() => import('@/components/Footer'))

export default function Blog() {
  useLenis()
  useRevealOnScroll()

  return (
    <>
      <Nav />
      <BlogHero />
      <Suspense>
        <BlogList />
        <VCCta />
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink"><Newsletter /></div>
        <Footer />
      </Suspense>
    </>
  )
}
