import { useTranslation } from 'react-i18next'

export default function VCFormats() {
  const { t } = useTranslation()

  const formats = [
    {
      name: t('vc.formats.stories.name'),
      desc: t('vc.formats.stories.description'),
      onde: t('vc.formats.stories.locations', { returnObjects: true }) as string[],
      thumb: (
        <div className="h-[190px] flex items-center justify-center bg-gradient-to-br from-[#EEF3FF] to-[#C8D9FF]">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-[6px]">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-[24px] h-[24px] rounded-full bg-brand/25 border border-brand/40" />
              ))}
            </div>
            <div className="w-[70px] h-[110px] rounded-[10px] bg-brand border-2 border-white/40 relative overflow-hidden">
              <div className="flex gap-[3px] absolute top-[6px] left-[5px] right-[5px]">
                {[1, 2, 3].map((d, i) => (
                  <div key={d} className={`h-[2px] flex-1 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/35'}`} />
                ))}
              </div>
              <div className="absolute bottom-[8px] left-[5px] right-[5px] bg-white/20 rounded text-[7px] text-white font-bold text-center py-[3px]">
                {t('vc.formats.stories.button')}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: t('vc.formats.carousel.name'),
      desc: t('vc.formats.carousel.description'),
      onde: t('vc.formats.carousel.locations', { returnObjects: true }) as string[],
      thumb: (
        <div className="h-[190px] flex items-center justify-center bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD]">
          <div className="flex gap-1 items-end px-3">
            <div className="w-[32px] h-[58px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(14,165,233,0.25)' }} />
            <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(14,165,233,0.25)' }} />
            <div className="w-[56px] h-[100px] rounded-[7px] flex-shrink-0" style={{ background: '#0EA5E9' }} />
            <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(14,165,233,0.55)' }} />
            <div className="w-[32px] h-[58px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(14,165,233,0.25)' }} />
          </div>
        </div>
      ),
    },
    {
      name: t('vc.formats.highlights.name'),
      desc: t('vc.formats.highlights.description'),
      onde: t('vc.formats.highlights.locations', { returnObjects: true }) as string[],
      thumb: (
        <div className="h-[190px] flex items-center justify-center bg-gradient-to-br from-[#EFF6FF] to-[#BFDBFE]">
          <div className="flex flex-col gap-[6px] px-3 w-full">
            <div className="rounded-lg h-[60px] flex items-center px-[10px]" style={{ background: '#3B82F6' }}>
              <span className="text-[10px] font-black text-white">Festival Jaquetas · R$ 99</span>
            </div>
            <div className="flex gap-[5px]">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-[26px] h-[26px] rounded-full border" style={{ background: 'rgba(59,130,246,0.25)', borderColor: 'rgba(59,130,246,0.5)' }} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: t('vc.formats.productHighlights.name'),
      desc: t('vc.formats.productHighlights.description'),
      onde: t('vc.formats.productHighlights.locations', { returnObjects: true }) as string[],
      thumb: (
        <div className="h-[190px] flex items-center justify-center bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE]">
          <div className="flex flex-col gap-[6px] px-[10px] py-[10px] w-full">
            <div className="flex gap-2">
              <div className="w-[60px] h-[80px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(99,102,241,0.25)' }} />
              <div className="flex-1">
                <div className="text-[8px] font-bold text-[#333] mb-[3px]">Protetor Solar FPS 90</div>
                <div className="text-[11px] font-black mb-[5px]" style={{ color: '#6366F1' }}>R$ 89,90</div>
                <div className="flex gap-[3px] flex-wrap">
                  {['Como usar', 'Ingredientes'].map((tab) => (
                    <span key={tab} className="text-[7px] font-bold rounded-full px-[5px] py-[2px]" style={{ background: 'rgba(99,102,241,0.1)', color: '#6366F1' }}>
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: t('vc.formats.explore.name'),
      desc: t('vc.formats.explore.description'),
      onde: t('vc.formats.explore.locations', { returnObjects: true }) as string[],
      thumb: (
        <div className="h-[190px] bg-gradient-to-br from-[#E8F0FF] to-[#B8CCFF] px-[10px] py-[8px] flex flex-col gap-[4px]">
          {/* Search bar */}
          <div className="rounded-full h-[10px] w-full" style={{ background: 'rgba(38,103,248,0.12)' }} />
          {/* Tags */}
          <div className="flex gap-[3px]">
            {[20, 14, 16, 18, 12].map((w, i) => (
              <div key={i} className="h-[5px] rounded-full" style={{ width: w, background: i === 0 ? 'rgba(38,103,248,0.7)' : 'rgba(38,103,248,0.2)' }} />
            ))}
          </div>
          {/* Main grid: 4 equal columns, first video spans 2 rows */}
          <div className="grid gap-[3px] flex-1" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
            {/* Big video: col 1, spans 2 rows */}
            <div className="rounded-[4px]" style={{ gridColumn: '1', gridRow: '1 / 3', background: 'rgba(38,103,248,0.7)' }} />
            {/* Row 1: cols 2-4 */}
            <div className="rounded-[4px]" style={{ gridColumn: '2', gridRow: '1', background: 'rgba(38,103,248,0.5)' }} />
            <div className="rounded-[4px]" style={{ gridColumn: '3', gridRow: '1', background: 'rgba(38,103,248,0.25)' }} />
            <div className="rounded-[4px]" style={{ gridColumn: '4', gridRow: '1', background: 'rgba(38,103,248,0.35)' }} />
            {/* Row 2: cols 2-4 */}
            <div className="rounded-[4px]" style={{ gridColumn: '2', gridRow: '2', background: 'rgba(38,103,248,0.2)' }} />
            <div className="rounded-[4px]" style={{ gridColumn: '3', gridRow: '2', background: 'rgba(38,103,248,0.4)' }} />
            <div className="rounded-[4px]" style={{ gridColumn: '4', gridRow: '2', background: 'rgba(38,103,248,0.2)' }} />
          </div>
          {/* Bottom row: 4 equal squares */}
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(4, 1fr)', height: 16 }}>
            {[0.18, 0.18, 0.45, 0.18].map((op, i) => (
              <div key={i} className="rounded-[4px]" style={{ background: `rgba(38,103,248,${op})` }} />
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section aria-labelledby="formatos-heading">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        {t('vc.formats.label')}
      </span>
      <h2 id="formatos-heading" className="text-[22px] md:text-[28px] font-normal text-black leading-[1.25] mb-9 max-w-[560px]">
        {t('vc.formats.title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {formats.map((f) => (
          <div key={f.name} className="bg-[#F5F5F5] border border-[#E9E9E9]/70 rounded-2xl overflow-hidden">
            {f.thumb}
            <div className="p-4">
              <div className="text-[14px] font-black text-black mb-[5px]">{f.name}</div>
              <div className="text-[12px] text-[#777] leading-[1.5]">{f.desc}</div>
              <div className="text-[11px] text-[#aaa] mt-2">
                {t('vc.formats.appearsIn')}
                {f.onde.map((lugar) => (
                  <span key={lugar} className="bg-[#F0F0F0] rounded text-[10px] font-bold text-[#555] px-[7px] py-[2px] ml-1">{lugar}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
