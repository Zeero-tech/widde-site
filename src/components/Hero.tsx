import AnimatedButton from './AnimatedButton'

export default function Hero() {
  return (
    <section className="bg-white px-8 pt-4 pb-8 max-w-[1440px] mx-auto">
      <div className="flex items-center min-h-[460px] relative">
        {/* Content */}
        <div className="flex-[0_0_52%] pb-15 z-[2]" style={{ paddingBottom: '60px' }}>
          <span className="block text-[11px] font-bold text-brand uppercase tracking-[2px] mb-3">
            Plataforma de conversão para e-commerce
          </span>
          <h1 className="text-[40px] font-black leading-[1.15] mb-4 text-black">
            Acelere a decisão de compra<br />do seu <span className="text-brand">consumidor.</span>
          </h1>
          <p className="text-[15px] text-[#666] leading-[1.7] mb-7 max-w-[420px]">
            Transformamos a jornada de compra com experiências que convencem — não apenas informam. Somos o parceiro que dita a tendência.
          </p>
          <div className="flex gap-3 flex-wrap">
            <AnimatedButton
              href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
              className="inline-block bg-brand text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
            >
              Falar com vendas
            </AnimatedButton>
            <AnimatedButton
              href="#demo"
              className="inline-block bg-transparent text-black text-[14px] font-bold px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
            >
              Ver demonstração
            </AnimatedButton>
          </div>
        </div>

        {/* Video */}
        <div
          className="flex-[0_0_48%] relative self-stretch overflow-hidden"
          aria-hidden="true"
          style={{
            background: 'transparent',
          }}
        >
          <div
            className="absolute inset-0 z-[1] pointer-events-none rounded-tl-2xl rounded-tr-2xl"
            style={{
              background: 'linear-gradient(to right,#fff 0%,transparent 28%),linear-gradient(to bottom,transparent 60%,#fff 100%),linear-gradient(to top,transparent 80%,#fff 100%)',
            }}
          />
          <video
            className="w-full h-full object-cover object-top rounded-tl-2xl rounded-tr-2xl"
            style={{ display: 'block' }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.widde.io/widde-bucket-sp/335ad64a-0820-4ad1-bda6-b44474ed45fe/videos/79a89f7b-b9be-493f-ba6f-d070941150a3-1752673555899-1916263/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  )
}
