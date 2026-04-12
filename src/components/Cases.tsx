import { cases } from '@/data/cases'
import AnimatedButton from './AnimatedButton'

export default function Cases() {
  return (
    <section id="cases" className="pt-30" aria-labelledby="cases-heading">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        Resultados reais
      </span>
      <h2 id="cases-heading" className="text-[28px] font-normal text-black leading-[1.25] mb-2">
        Quem usa já converte mais
      </h2>
      <p className="text-[14px] text-[#5d5d5d] leading-[1.6] max-w-[520px] mb-8">
        Cases de marcas que transformaram a experiência de compra com a Widde.
      </p>

      <div className="grid grid-cols-3 gap-[18px]" role="list">
        {cases.map((c, i) => (
          <div
            key={i}
            role="listitem"
            className="rounded-[14px] overflow-hidden cursor-pointer transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            {/* Thumbnail */}
            <div
              className="w-full h-[180px] relative flex items-end"
              style={{ background: c.bg }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg,rgba(0,0,0,0.55) 0%,transparent 60%)' }} />
              <span className="relative z-[1] text-[10px] font-bold text-white uppercase tracking-[1px] px-4 pb-[14px]">
                {c.category}
              </span>
            </div>
            {/* Body */}
            <div className="p-4 bg-[#f6f6f6]">
              <p className="text-[16px] font-normal text-[#1d1d1d] mb-[6px] leading-[1.4]">{c.title}</p>
              <p className="text-[14px] text-[#5d5d5d] leading-[1.5] mb-[14px]">{c.desc}</p>
              <a
                href={c.link}
                className="text-[14px] font-bold text-[#010b15] no-underline flex items-center gap-1 hover:underline"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-7">
        <AnimatedButton
          href="https://widde.io/cases?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block bg-transparent text-black text-[13px] font-bold px-[26px] py-[11px] rounded-full no-underline border-[1.5px] border-black hover:bg-black hover:text-white transition-colors"
        >
          Ver todos os cases →
        </AnimatedButton>
      </div>
    </section>
  )
}
