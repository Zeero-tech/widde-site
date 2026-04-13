import AnimatedButton from '@/components/AnimatedButton'

export default function VCQuote() {
  return (
    <div className="bg-[#0A0A0A] rounded-[12px] md:rounded-[20px] px-6 py-8 md:px-20 md:py-15 mt-30 flex flex-col md:flex-row items-center gap-6 md:gap-25">
      {/* Left: quote */}
      <div className="flex-1">
        <p className="text-[20px] md:text-[28px] text-white leading-[1.4] font-normal mb-6">
          "Desde que começamos a trabalhar com a Widde, a experiência em nosso e-commerce alcançou um novo nível de interatividade."
        </p>
        <div className="text-[15px] font-bold text-white mb-[2px]">Time de E-commerce</div>
        <div className="text-[13px] text-white/50 mb-8">John John</div>
        <AnimatedButton
          href="https://widde.io/demo"
          className="inline-block bg-brand text-white text-[14px] font-bold px-6 py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
        >
          Começar agora
        </AnimatedButton>
      </div>

      {/* Right: phone mock with video */}
      <div className="flex-shrink-0 w-full md:w-[340px] mx-auto">
        <div className="relative rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] w-full md:w-[280px]" style={{ aspectRatio: '9/16' }}>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.png"
          >
            <source src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.webm" type="video/webm" />
            <source src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
