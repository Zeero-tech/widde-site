import { integracoes } from '@/data/integracoes'
import { useTranslation } from 'react-i18next'

export default function Integrations() {
  const { t } = useTranslation()
  const doubled = [...integracoes, ...integracoes]

  return (
    <section
      className="rounded-[20px] p-6 md:p-15 mt-30 overflow-hidden shadow-[0_0_0_1px_rgb(233,233,233)]"
      style={{ background: '#003ab9ff' }}
      aria-labelledby="int-heading"
    >
      <h2 id="int-heading" className="text-[18px] md:text-[24px] font-normal text-white leading-[1.25] mb-[10px] max-w-[440px]">
        {t('integrations.title')}
      </h2>
      <p className="text-[14px] text-white/50 leading-[1.6] mb-7">
        {t('integrations.description')}
      </p>

      <div
        className="overflow-hidden -mx-4 md:-mx-11 -mb-5 md:-mb-10 px-0 py-5"
        aria-label={t('integrations.ariaLabel')}
      >
        <div className="flex gap-[10px] animate-scroll-logos">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className={`flex-shrink-0 rounded-[8px] px-[14px] h-11 flex items-center justify-center min-w-[90px] pb-1`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="w-auto object-contain"
                style={{ opacity: 0.8, height: logo.height ?? 18 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
