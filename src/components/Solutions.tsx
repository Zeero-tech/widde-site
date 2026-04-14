import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import CountUp from "./CountUp";
import { useTranslation } from 'react-i18next'

function useArticleReveal(direction: 'left' | 'right') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const xFrom = direction === 'left' ? -60 : 60
    gsap.set(el, { x: xFrom, opacity: 0, filter: 'blur(12px)' })
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [direction])

  return ref
}

export default function Solutions() {
  const { t } = useTranslation()
  const vcRef = useArticleReveal('left')
  const liveRef = useArticleReveal('right')
  const tryonRef = useArticleReveal('left')

  return (
    <section id="solucoes" className="pt-10 md:pt-30" aria-labelledby="sol-heading">
      <span className="block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        {t('solutions.label')}
      </span>
      <h2 id="sol-heading" className="text-xl md:text-2xl font-normal text-black leading-[1.25] mb-16">
        {t('solutions.title')}
      </h2>

      <div className="flex flex-col gap-14 md:gap-24 overflow-hidden">

        {/* VIDEO COMMERCE */}
        <article ref={vcRef} id="video-commerce" className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-full md:w-[48%] flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-[400px]" aria-hidden="true">
            <div className="p-6 flex flex-col gap-2 w-full">
              <div className="flex gap-[7px] justify-center items-end">
                <div className="rounded-[10px] bg-brand/25 relative overflow-hidden flex-shrink-0 w-[54px] h-[96px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-xs text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">A</span>
                </div>
                <div className="rounded-[10px] bg-brand/50 relative overflow-hidden flex-shrink-0 w-[68px] h-[124px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-xs text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">B</span>
                </div>
                <div className="rounded-[10px] bg-brand relative overflow-hidden flex-shrink-0 w-[90px] h-[158px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-xs text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">{t('solutions.videoCommerce.formatCarousel')}</span>
                </div>
                <div className="rounded-[10px] bg-brand/50 relative overflow-hidden flex-shrink-0 w-[68px] h-[124px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-xs text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">C</span>
                </div>
                <div className="rounded-[10px] bg-brand/25 relative overflow-hidden flex-shrink-0 w-[54px] h-[96px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-xs text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">D</span>
                </div>
              </div>
              <div className="flex gap-[6px] justify-center">
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-[9px] py-[3px] rounded-full">{t('solutions.videoCommerce.formatStories')}</span>
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-[9px] py-[3px] rounded-full">{t('solutions.videoCommerce.formatCarousel')}</span>
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-[9px] py-[3px] rounded-full">{t('solutions.videoCommerce.formatExplore')}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-0 md:py-8">
            <div>
              <h3 className="text-xl md:text-3xl font-normal text-black mb-4 leading-[1.15]">Video Commerce</h3>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] max-w-full">
                <strong>{t('solutions.videoCommerce.descBold')}</strong> {t('solutions.videoCommerce.desc')}
              </p>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                {t('solutions.videoCommerce.desc2')} <strong>{t('solutions.videoCommerce.desc2Bold')}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-8 mb-10">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-3xl md:text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-sm text-[#5d5d5d] leading-[1.4]">{t('solutions.videoCommerce.stat1')}</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1">
                  <CountUp target={4} suffix="x" className="text-3xl md:text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-sm text-[#5d5d5d] leading-[1.4]">{t('solutions.videoCommerce.stat2')}</span>
                </div>
              </div>
              <a
                href="/video-commerce"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#010b15] no-underline w-fit px-7 py-[11px] border border-black/20 rounded-full hover:border-black transition-colors"
              >
                {t('solutions.learnMore')}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                  <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* LIVE COMMERCE */}
        <article ref={liveRef} id="live-commerce" className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-full md:w-[48%] flex-shrink-0 bg-[#1a1a1a] rounded-2xl flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-[400px]" aria-hidden="true">
            <div className="flex items-end gap-[10px] p-5">
              <div className="w-[110px] h-[196px] rounded-[14px] bg-[#0A0A0A] overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 opacity-75" style={{ background: 'linear-gradient(160deg,#003AB9,#2667F8)' }} />
                <span className="absolute top-[9px] left-[9px] bg-[#FF3B30] text-white text-xs font-black px-[7px] py-[2px] rounded-full">{t('solutions.liveCommerce.mockLive')}</span>
                <span className="absolute top-[9px] right-[9px] bg-black/50 text-white text-xs font-bold px-[6px] py-[2px] rounded-full">1.2k</span>
                <div className="absolute bottom-[55px] left-[6px] right-[6px] flex flex-col gap-[3px]">
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-xs text-white">{t('solutions.liveCommerce.mockMessage1')}</div>
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-xs text-white">{t('solutions.liveCommerce.mockMessage2')}</div>
                </div>
                <div className="absolute bottom-[7px] left-[7px] right-[7px] bg-brand rounded-[8px] px-2 py-[6px] text-xs font-bold text-white text-center">
                  {t('solutions.liveCommerce.mockAddToCart')}
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <div className="bg-white/90 border border-[#eee] rounded-[8px] p-2 flex items-center gap-[7px]">
                  <div className="w-[30px] h-[30px] rounded-[5px] bg-brand/20 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-black">{t('solutions.liveCommerce.mockProduct')}</div>
                    <div className="text-xs font-black text-brand">{t('solutions.liveCommerce.mockPrice')}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="bg-brand/[0.08] rounded-[6px] px-[10px] py-[6px] text-xs text-brand font-bold">{t('solutions.liveCommerce.mockSales')}</div>
                  <div className="bg-brand/[0.08] rounded-[6px] px-[10px] py-[6px] text-xs text-brand font-bold">{t('solutions.liveCommerce.mockSpectators')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-0 md:py-8">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-xs font-bold px-3 py-[3px] rounded-full w-fit mb-4">
                {t('solutions.new')}
              </span>
              <h3 className="text-xl md:text-3xl font-normal text-black mb-4 leading-[1.15]">{t('solutions.liveCommerce.title')}</h3>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] max-w-full">
                <strong>{t('solutions.liveCommerce.descBold')}</strong> {t('solutions.liveCommerce.desc')}
              </p>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                <strong>{t('solutions.liveCommerce.desc2Bold')}</strong>
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <CountUp target={5} suffix="x" className="text-3xl md:text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-sm text-[#5d5d5d] leading-[1.4]">{t('solutions.liveCommerce.stat1')}</span>
              </div>
              <div className="w-px bg-[#E9E9E9]" />
              <div className="flex flex-col gap-1">
                <CountUp target={60} prefix="+" suffix="%" className="text-3xl md:text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-sm text-[#5d5d5d] leading-[1.4]">{t('solutions.liveCommerce.stat2')}</span>
              </div>
            </div>
          </div>
        </article>

        {/* TRYON */}
        <article ref={tryonRef} id="provador-ia" className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-full md:w-[48%] flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-[400px]" aria-hidden="true">
            <div className="flex gap-[10px] p-5 items-end">
              <div className="w-[100px] h-[188px] rounded-2xl bg-brand/[0.08] border border-brand/20 overflow-hidden flex flex-col flex-shrink-0">
                <div className="flex-1 relative" style={{ background: 'linear-gradient(160deg,rgba(38,103,248,0.25),rgba(0,58,185,0.15))' }}>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[44px] h-[76px] bg-brand/30 rounded-t-[7px]" />
                </div>
                <div className="bg-brand/[0.06] px-[7px] py-[7px] flex gap-[5px] justify-center">
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#E8C4A0' }} />
                  <div className="w-[14px] h-[14px] rounded-full border-2 border-brand" style={{ background: '#6B4C3B' }} />
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#F5E6D3' }} />
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#2C2C2C' }} />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.15] border border-brand" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-0 md:py-8">
            <div>
              <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-[3px] rounded-full w-fit mb-4">
                {t('solutions.new')}
              </span>
              <h3 className="text-xl md:text-3xl font-normal text-black mb-4 leading-[1.15]">{t('solutions.tryOn.title')}</h3>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] max-w-full">
                {t('solutions.tryOn.desc')} <strong>{t('solutions.tryOn.descBold')}</strong>
              </p>
              <p className="text-sm text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                <strong>{t('solutions.tryOn.desc2Bold')}</strong>
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <CountUp target={93} suffix="%" className="text-3xl md:text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-sm text-[#5d5d5d] leading-[1.4]">{t('solutions.tryOn.stat1')}</span>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
