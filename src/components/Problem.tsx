import { useTranslation } from 'react-i18next'
import AnimatedButton from './AnimatedButton'
import CountUp from './CountUp'

export default function Problem() {
  const { t } = useTranslation()
  return (
    <section
      className="rounded-[20px] px-5 py-10 md:px-16 md:py-20 flex flex-col md:flex-row gap-8 md:gap-20 items-center shadow-[0_0_0_1px_rgb(233,233,233)]"
      style={{ background: '#000' }}
      aria-labelledby="problema-heading"
    >
      {/* Left */}
      <div className="flex-1">
        <span className="block text-xs font-normal text-white/50 uppercase tracking-[2px] mb-3">
          {t('problem.label')}
        </span>
        <h2 id="problema-heading" className="text-lg md:text-2xl font-normal text-white leading-[1.25] mb-[10px]">
          {t('problem.title')}
        </h2>
        <p className="text-sm text-white/55 leading-[1.65] mb-[22px]">
          {t('problem.description')}
        </p>
        <AnimatedButton
          href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block bg-white text-[#1D1D1D] text-sm font-bold px-[22px] py-[11px] rounded-full no-underline"
        >
          {t('problem.cta')}
        </AnimatedButton>
      </div>

      {/* Numbers */}
      <div
        className="flex flex-col border-l border-white/15 pl-4 md:pl-10 flex-shrink-0"
      >
        <div className="py-6">
          <CountUp target={84} suffix="%" className="text-2xl md:text-5xl font-normal text-white leading-none mb-2" />
          <div className="text-sm text-white/55 leading-[1.4] max-w-[400px]">{t('problem.stat1Label')}</div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp target={65} suffix="%" className="text-2xl md:text-5xl font-normal text-white leading-none mb-2" />
          <div className="text-sm text-white/55 leading-[1.4] max-w-[400px]">{t('problem.stat2Label')}</div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp target={2} suffix="x" className="text-2xl md:text-5xl font-normal text-white leading-none mb-2" />
          <div className="text-sm text-white/55 leading-[1.4] max-w-[400px]">{t('problem.stat3Label')}</div>
        </div>
      </div>
    </section>
  )
}
