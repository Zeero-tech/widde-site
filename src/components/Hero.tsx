import AnimatedButton from './AnimatedButton'

export default function Hero() {
  return (
    <section className="bg-[#f6f6f6] overflow-hidden relative" style={{ minHeight: 'calc(100vh - 72px)' }}>

      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center" style={{ minHeight: 'inherit' }}>
        <div className="relative flex items-stretch w-full" style={{ minHeight: 'inherit' }}>
          {/* Content */}
          <div className="flex-[0_0_50%] z-[2] flex flex-col py-20" style={{ justifyContent: 'center', paddingBottom: 'calc(20vh)' }}>
            <span className="block text-[11px] font-bold text-brand uppercase tracking-[2px] mb-5">
              Plataforma de conversão para e-commerce
            </span>
            <h1 className="text-[48px] font-black leading-[1.15] mb-6 text-black">
              Acelere a decisão de compra<br />do seu <span className="text-brand">consumidor.</span>
            </h1>
            <p className="text-[15px] text-[#666] leading-[1.7] mb-10 max-w-[420px]">
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

          {/* Video — stretches to right edge of viewport */}
          <div
            className="absolute top-0 bottom-0 overflow-hidden"
            aria-hidden="true"
            style={{
              left: '48%',
              right: 'calc(-50vw + 50%)',
              marginRight: '-2rem',
            }}
          >
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background: 'linear-gradient(to right,#f6f6f6 0%,transparent 20%),linear-gradient(to bottom,transparent 60%,#f6f6f6 100%),linear-gradient(to top,transparent 80%,#f6f6f6 100%)',
              }}
            />
            <video
              className="w-full h-full object-cover object-top"
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
      </div>

    </section>
  )
}
