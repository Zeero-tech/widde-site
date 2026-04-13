import { useTranslation } from 'react-i18next'
import CountUp from '@/components/CountUp'

const stats = [
  { target: 80, prefix: '', suffix: '%' },
  { target: 3, prefix: '', suffix: 'x' },
  { target: 40, prefix: '+', suffix: '%' },
]

export default function VCWhy() {
  const { t } = useTranslation()

  return (
    <div className="bg-[#003ab9] rounded-[12px] md:rounded-[20px] px-6 py-10 md:px-25 md:py-30 my-30">
      {/* Top row: title left, paragraph right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 mb-16">
        <div>
          <span className="block text-[11px] font-bold text-white/40 uppercase tracking-[2px] mb-[10px]">
            {t('vc.why.label')}
          </span>
          <h2 className="text-[20px] md:text-[26px] font-normal text-white leading-[1.25]">
            {t('vc.why.title')}
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] text-white/50 leading-[1.6]">
            {t('vc.why.description')}
          </p>
        </div>
      </div>

      {/* Stats row: 3 columns with left border */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="border-l border-white/20 pl-6">
            <CountUp
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="block text-[36px] md:text-[52px] font-light text-white leading-none mb-3"
            />
            <span className="text-[13px] text-white/50 leading-[1.4]">{t(`vc.why.stat${i + 1}`)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
