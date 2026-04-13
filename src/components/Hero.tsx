import React from 'react'
import AnimatedButton from './AnimatedButton'
import { getLenis } from '../lib/lenis'

export default function Hero() {
  function handleVerDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    getLenis().scrollTo('#demo', { duration: 3, offset: -70, easing: (t) => 1 - Math.pow(1 - t, 5) })
  }

  return (
    <section className="bg-[#f6f6f6] overflow-hidden relative" style={{ minHeight: 'calc(100vh - 120px)' }}>

      <div className="max-w-full mx-auto px-30 h-full flex items-center" style={{ minHeight: 'inherit' }}>
        <div className="relative flex items-stretch w-full" style={{ minHeight: 'inherit' }}>
          {/* Content */}
          <div className="flex-[0_0_50%] z-[2] flex flex-col py-20" style={{ justifyContent: 'center', paddingBottom: 'calc(30vh)' }}>
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
                onClick={handleVerDemo}
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

      {/* Double chevron — bottom center of left half */}
      {/* <div
        className="absolute bottom-10 z-10"
        style={{ left: '25%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: 28, height: 28, fill: '#1a1a2e', opacity: 0.4 }}>
          <path d="M342.6 534.6C330.1 547.1 309.8 547.1 297.3 534.6L137.3 374.6C124.8 362.1 124.8 341.8 137.3 329.3C149.8 316.8 170.1 316.8 182.6 329.3L320 466.7L457.4 329.4C469.9 316.9 490.2 316.9 502.7 329.4C515.2 341.9 515.2 362.2 502.7 374.7L342.7 534.7zM502.6 182.6L342.6 342.6C330.1 355.1 309.8 355.1 297.3 342.6L137.3 182.6C124.8 170.1 124.8 149.8 137.3 137.3C149.8 124.8 170.1 124.8 182.6 137.3L320 274.7L457.4 137.4C469.9 124.9 490.2 124.9 502.7 137.4C515.2 149.9 515.2 170.2 502.7 182.7z" />
        </svg>
      </div> */}

    </section>
  )
}
