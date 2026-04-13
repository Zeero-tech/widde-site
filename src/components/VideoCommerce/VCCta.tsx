import React from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from '@/components/AnimatedButton'

export default function VCCta() {
  const navigate = useNavigate()

  function handleViewDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    navigate('/?scrollTo=demo')
  }

  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-[#E5E5E5]">
      <div className="max-w-[1450px] mx-auto rounded-[16px] md:rounded-[24px] px-6 py-10 md:px-16 md:py-14 text-center relative z-10">
        <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-4">
          Falar com vendas
        </span>
        <h2 className="text-[24px] md:text-[36px] font-black text-black leading-[1.2] mb-4">
          Pronto para transformar<br />seu e-commerce com vídeo?
        </h2>
        <p className="text-[14px] text-[#5d5d5d] leading-[1.6] mb-8">
          Nossa equipe responde em até 24h e monta uma proposta sob medida para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-brand text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
          >
            Falar com vendas
          </AnimatedButton>
          <a
            href="/#demo"
            onClick={handleViewDemo}
            className="btn-animate-chars inline-flex items-center justify-center bg-transparent text-black text-[14px] font-bold px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
          >
            <span data-button-animate-chars="" className="btn-animate-chars__text">
              {'Conhecer mais'.split('').map((char, i) => (
                <span key={i} style={{ transitionDelay: `${(i * 0.01).toFixed(2)}s`, whiteSpace: char === ' ' ? 'pre' : undefined }}>{char}</span>
              ))}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
