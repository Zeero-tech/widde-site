import { useNavigate } from 'react-router-dom'
import AnimatedButton from '@/components/AnimatedButton'

export default function VCHero() {
  const navigate = useNavigate()

  function handleVerPlanos(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    navigate('/?scrollTo=planos')
  }

  return (
    <section className="bg-[#f6f6f6] overflow-hidden relative" style={{ minHeight: 'calc(100vh - 120px)' }}>
      {/* Breadcrumb — fixed to top of section */}
      <div className="absolute top-0 left-0 right-0 z-10 max-w-[1440px] mx-auto px-8 pt-5">
        <div className="text-[12px] text-[#aaa]">
          <a href="/" className="text-brand no-underline">Home</a>
          <span className="mx-[6px]">/</span>
          <strong className="text-[#444]">Video Commerce</strong>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center" style={{ minHeight: 'inherit' }}>
        <div className="relative flex items-stretch w-full" style={{ minHeight: 'inherit' }}>

          {/* Left — content */}
          <div className="flex-[0_0_50%] z-[2] flex flex-col py-20" style={{ justifyContent: 'center', paddingBottom: 'calc(30vh)' }}>
            <h1 className="text-[48px] font-black leading-[1.15] mb-6 text-black">
              Acelere a decisão<br />de compra com <span className="text-brand">vídeo.</span>
            </h1>
            <p className="text-[15px] text-[#666] leading-[1.7] mb-8 max-w-[420px]">
              Transforme qualquer conteúdo de vídeo em uma experiência de compra envolvente, diretamente no seu e-commerce — sem sair da loja.
            </p>
            <ul className="list-none flex flex-col gap-[10px] mb-10 p-0">
              {[
                'Stories, carrossel, destaques e explorar em todo o site',
                'Integração sem dev — ativo em menos de 1 dia',
                'Carrinho dentro do vídeo, sem interromper a experiência',
              ].map((item) => (
                <li key={item} className="text-[14px] text-[#333] flex items-start gap-[10px]">
                  <span className="w-[18px] h-[18px] rounded-full bg-brand/[0.12] flex items-center justify-center flex-shrink-0 mt-[1px] text-[10px] font-black text-brand">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="inline-block bg-brand text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
              >
                Falar com vendas
              </AnimatedButton>
              <a
                href="/#planos"
                onClick={handleVerPlanos}
                className="btn-animate-chars inline-flex items-center justify-center bg-transparent text-black text-[14px] font-bold px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
              >
                <span data-button-animate-chars="" className="btn-animate-chars__text">
                  {'Ver planos'.split('').map((char, i) => (
                    <span key={i} style={{ transitionDelay: `${(i * 0.01).toFixed(2)}s`, whiteSpace: char === ' ' ? 'pre' : undefined }}>{char}</span>
                  ))}
                </span>
              </a>
            </div>
          </div>

          {/* Right — visual mock stretching to viewport edge */}
          <div
            className="absolute top-0 bottom-0 overflow-hidden"
            aria-hidden="true"
            style={{
              left: '48%',
              right: 'calc(-50vw + 50%)',
              marginRight: '-2rem',
              background: 'linear-gradient(135deg, #EEF3FF 0%, #C8D9FF 100%)',
            }}
          >
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background: 'linear-gradient(to right,#f6f6f6 0%,transparent 20%),linear-gradient(to bottom,transparent 60%,#f6f6f6 100%),linear-gradient(to top,transparent 80%,#f6f6f6 100%)',
              }}
            />
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="flex items-end gap-6">
                <div className="w-[110px] h-[196px] rounded-3xl bg-brand/20 flex-shrink-0 relative overflow-hidden">
                  <div className="flex gap-[3px] p-[10px]">
                    {[1, 2, 3].map((d) => (
                      <div key={d} className="h-[3px] flex-1 rounded-full bg-white/40" />
                    ))}
                  </div>
                </div>
                <div className="w-[176px] h-[320px] rounded-[32px] bg-brand flex-shrink-0 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand to-[#003ab9]" />
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex gap-[3px] p-[12px]">
                      {[1, 2, 3, 4].map((d) => (
                        <div key={d} className={`h-[3px] flex-1 rounded-full ${d === 1 ? 'bg-white' : 'bg-white/30'}`} />
                      ))}
                    </div>
                    <div className="absolute bottom-6 left-[10px] right-[10px] bg-white/90 rounded-2xl px-[12px] py-[10px] flex items-center gap-[8px]">
                      <span className="text-[16px] font-black text-brand leading-none">🛒</span>
                      <div>
                        <div className="text-[12px] font-bold text-[#333] leading-none">Adicionar ao carrinho</div>
                        <div className="text-[14px] font-black text-brand leading-none mt-[3px]">R$ 89,90</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110px] h-[196px] rounded-3xl bg-brand/35 flex-shrink-0 relative overflow-hidden">
                  <div className="flex gap-[3px] p-[10px]">
                    {[1, 2].map((d) => (
                      <div key={d} className="h-[3px] flex-1 rounded-full bg-white/40" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-16 left-0 right-0 flex gap-[10px] justify-center">
                {['Stories', 'Carrossel', 'Explorar'].map((tag) => (
                  <span key={tag} className="bg-brand/[0.15] text-brand text-[13px] font-bold px-[14px] py-[6px] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Double chevron — bottom center of left half */}
      <div
        className="absolute bottom-10 z-10"
        style={{ left: '25%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: 28, height: 28, fill: '#1a1a2e', opacity: 0.4 }}>
          <path d="M342.6 534.6C330.1 547.1 309.8 547.1 297.3 534.6L137.3 374.6C124.8 362.1 124.8 341.8 137.3 329.3C149.8 316.8 170.1 316.8 182.6 329.3L320 466.7L457.4 329.4C469.9 316.9 490.2 316.9 502.7 329.4C515.2 341.9 515.2 362.2 502.7 374.7L342.7 534.7zM502.6 182.6L342.6 342.6C330.1 355.1 309.8 355.1 297.3 342.6L137.3 182.6C124.8 170.1 124.8 149.8 137.3 137.3C149.8 124.8 170.1 124.8 182.6 137.3L320 274.7L457.4 137.4C469.9 124.9 490.2 124.9 502.7 137.4C515.2 149.9 515.2 170.2 502.7 182.7z" />
        </svg>
      </div>
    </section>
  )
}
