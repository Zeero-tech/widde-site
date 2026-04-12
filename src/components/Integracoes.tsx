import { integracoes } from '@/data/integracoes'

export default function Integracoes() {
  const doubled = [...integracoes, ...integracoes]

  return (
    <section
      className="rounded-[20px] px-11 py-10 mt-14 overflow-hidden"
      style={{ background: '#003ab9ff' }}
      aria-labelledby="int-heading"
    >
      <span className="block text-[11px] font-bold text-white/50 uppercase tracking-[2px] mb-[14px]">
        Integrações
      </span>
      <h2 id="int-heading" className="text-[24px] font-normal text-white leading-[1.25] mb-[10px] max-w-[440px]">
        Integre facilmente com a plataforma que você utiliza
      </h2>
      <p className="text-[13px] text-white/50 leading-[1.6] mb-7">
        Sem precisar de desenvolvimento. A Widde está presente nas principais plataformas de e-commerce do Brasil.
      </p>

      <div
        className="overflow-hidden -mx-11 -mb-10 px-0 py-5"
        aria-label="Plataformas integradas"
      >
        <div className="flex gap-[10px] animate-scroll-logos">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className={`flex-shrink-0 rounded-[8px] px-[14px] h-11 flex items-center justify-center min-w-[90px] ${logo.featured
                  ? 'bg-white'
                  : 'bg-white/[0.12]'
                }`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-[26px] w-auto object-contain"
                style={{ opacity: logo.featured ? 1 : 0.6 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
