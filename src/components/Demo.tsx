import { useTranslation } from 'react-i18next'
import MuxPlayer from '@mux/mux-player-react'

export default function Demo() {
  const { t } = useTranslation()
  return (
    <section id="demo" className="bg-[#f6f6f6] py-10 md:py-30">
      <div className="mx-auto">
        <h2 className="text-center text-[24px] md:text-[36px] font-normal text-black leading-[1.2] mb-10">
          {t('demo.heading')}
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <MuxPlayer
            playbackId="ud86wbc5uESjjIPpJ421FK02uZtEYPpezDXvQnMg02SfI"
            metadataVideoTitle="Demonstração da Widde"
            thumbnailTime={20.2}
            accentColor="#2667F8"
            style={{ width: '100%', aspectRatio: '16/9' }}
            streamType="on-demand"
          />
        </div>
      </div>
    </section>
  )
}
