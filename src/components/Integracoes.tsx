import { integracoes } from '@/data/integracoes'

export default function Integracoes() {
  const doubled = [...integracoes, ...integracoes]

  return (
    <section
      className="rounded-[20px] px-11 py-10 mt-30 overflow-hidden"
      style={{ background: '#003ab9ff' }}
      aria-labelledby="int-heading"
    >
      <h2 id="int-heading" className="text-[24px] font-normal text-white leading-[1.25] mb-[10px] max-w-[440px]">
        Integre facilmente com a plataforma que você utiliza
      </h2>
      <p className="text-[14px] text-white/50 leading-[1.6] mb-7">
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
              className={`flex-shrink-0 rounded-[8px] px-[14px] h-11 flex items-center justify-center min-w-[90px]`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-[18px] w-auto object-contain"
                style={{ opacity: 0.8 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
