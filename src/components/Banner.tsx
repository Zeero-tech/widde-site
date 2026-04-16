import { useState, useEffect } from 'react'
import { getLenis } from '@/lib/lenis'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog'

interface BannerProps {
  id: string
  content: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export default function Banner({ id, content, ctaLabel, ctaHref }: BannerProps) {
  const storageKey = `banner_closed_${id}`
  const [visible, setVisible] = useState(() => {
    try { return sessionStorage.getItem(storageKey) !== 'true' } catch { return true }
  })
  const [mapOpen, setMapOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(60)

  useEffect(() => {
    const nav = document.querySelector('nav') ?? document.querySelector('header')
    if (!nav) return
    const update = () => setNavHeight(nav.getBoundingClientRect().height)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(nav)
    return () => ro.disconnect()
  }, [])

  function close() {
    try { sessionStorage.setItem(storageKey, 'true') } catch { }
    setVisible(false)
  }

  function handleMapOpen(open: boolean) {
    setMapOpen(open)
    if (open) {
      getLenis().stop()
      document.body.style.overflow = 'hidden'
    } else {
      getLenis().start()
      document.body.style.overflow = ''
    }
  }

  if (!visible) return null

  return (
    <>
      <div
        className="sticky z-40 bg-brand text-white flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-semibold min-h-[44px] relative"
        style={{ top: navHeight }}
      >
        <div className="flex items-center gap-2 flex-wrap justify-center text-center">
          {content}
        </div>

        {ctaLabel && (
          <a
            href={ctaHref ?? '#'}
            onClick={(e) => {
              e.preventDefault()
              handleMapOpen(true)
            }}
            className="flex items-center gap-1 font-bold underline underline-offset-2 whitespace-nowrap hover:opacity-80 transition-opacity pr-4 md:pr-0"
          >
            {ctaLabel}
            <span aria-hidden>›</span>
          </a>
        )}

        <button
          onClick={close}
          aria-label="Fechar banner"
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity text-base leading-none"
        >
          ✕
        </button>
      </div>

      <Dialog open={mapOpen} onOpenChange={handleMapOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Como chegar no nosso estande</DialogTitle>
            <DialogDescription>Mapa do VTEX Day 2026</DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <img
              src="/assets/vtex-como-chegar.jpg"
              alt="Como chegar no estande da Widde no VTEX Day"
              className="w-full h-auto block rounded-lg"
              style={{ maxHeight: '60vh', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
