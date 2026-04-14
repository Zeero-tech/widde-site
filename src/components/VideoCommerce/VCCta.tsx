import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AnimatedButton from '@/components/AnimatedButton'

export default function VCCta() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  function handleViewDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    navigate('/?scrollTo=demo')
  }

  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-[#E5E5E5]">
      <div className="max-w-[1450px] mx-auto rounded-[16px] md:rounded-[24px] px-6 py-10 md:px-16 md:py-14 text-center relative z-10">
        <span className="block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-4">
          {t('vc.cta.label')}
        </span>
        <h2 className="text-xl md:text-4xl font-black text-black leading-[1.2] mb-4">
          {t('vc.cta.title')}
        </h2>
        <p className="text-sm text-[#5d5d5d] leading-[1.6] mb-8">
          {t('vc.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-brand text-white text-sm font-bold px-7 py-[13px] rounded-full no-underline"
          >
            {t('vc.cta.ctaSales')}
          </AnimatedButton>
          <a
            href="/#demo"
            onClick={handleViewDemo}
            className="btn-animate-chars inline-flex items-center justify-center bg-transparent text-black text-sm font-bold px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
          >
            <span data-button-animate-chars="" className="btn-animate-chars__text">
              {t('vc.cta.ctaLearnMore').split('').map((char, i) => (
                <span key={i} style={{ transitionDelay: `${(i * 0.01).toFixed(2)}s`, whiteSpace: char === ' ' ? 'pre' : undefined }}>{char}</span>
              ))}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
