import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import AnimatedButton from '@/components/AnimatedButton'

const slides = [
  {
    label: 'Video Commerce',
    color: '#2667F8',
    bg: 'linear-gradient(135deg, #EEF3FF 0%, #C8D9FF 100%)',
    content: (
      <div className="h-[150px] flex items-center justify-center">
        <div className="flex items-end gap-3">
          <div className="w-[46px] h-[82px] rounded-2xl bg-brand/20 flex-shrink-0 relative overflow-hidden">
            <div className="flex gap-[3px] p-[6px]">
              {[1, 2, 3].map(d => <div key={d} className="h-[2px] flex-1 rounded-full bg-white/40" />)}
            </div>
          </div>
          <div className="w-[72px] h-[130px] rounded-[18px] bg-brand flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand to-[#003ab9]" />
            <div className="absolute inset-0 flex flex-col">
              <div className="flex gap-[3px] p-[8px]">
                {[1, 2, 3, 4].map(d => <div key={d} className={`h-[2px] flex-1 rounded-full ${d === 1 ? 'bg-white' : 'bg-white/30'}`} />)}
              </div>
              <div className="absolute bottom-3 left-[5px] right-[5px] bg-white/90 rounded-xl px-[8px] py-[6px] flex items-center gap-[5px]">
                <span className="text-[11px] font-black text-brand leading-none">🛒</span>
                <div>
                  <div className="text-[7px] font-bold text-[#333] leading-none">Adicionar</div>
                  <div className="text-[7px] font-black text-brand leading-none mt-[2px]">R$ 89,90</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[46px] h-[82px] rounded-2xl bg-brand/35 flex-shrink-0 relative overflow-hidden">
            <div className="flex gap-[3px] p-[6px]">
              {[1, 2].map(d => <div key={d} className="h-[2px] flex-1 rounded-full bg-white/40" />)}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Stories',
    color: '#5B4CF5',
    bg: 'linear-gradient(135deg, #EEEEFF 0%, #C8C0FF 100%)',
    content: (
      <div className="h-[150px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-[6px]">
            <div className="w-[24px] h-[24px] rounded-full border" style={{ background: 'rgba(91,76,245,0.25)', borderColor: 'rgba(91,76,245,0.4)' }} />
            <div className="w-[24px] h-[24px] rounded-full border" style={{ background: 'rgba(91,76,245,0.25)', borderColor: 'rgba(91,76,245,0.4)' }} />
            <div className="w-[24px] h-[24px] rounded-full border" style={{ background: 'rgba(91,76,245,0.25)', borderColor: 'rgba(91,76,245,0.4)' }} />
          </div>
          <div className="w-[70px] h-[110px] rounded-[10px] border-2 border-white/40 relative overflow-hidden" style={{ background: '#5B4CF5' }}>
            <div className="flex gap-[3px] absolute top-[6px] left-[5px] right-[5px]">
              <div className="h-[2px] flex-1 rounded-full bg-white" />
              <div className="h-[2px] flex-1 rounded-full bg-white/35" />
              <div className="h-[2px] flex-1 rounded-full bg-white/35" />
            </div>
            <div className="absolute bottom-[8px] left-[5px] right-[5px] bg-white/20 rounded text-[7px] text-white font-bold text-center py-[3px]">Ver produto</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Carrossel',
    color: '#1a9e5c',
    bg: 'linear-gradient(135deg, #E8F5EE 0%, #BBE0CC 100%)',
    content: (
      <div className="h-[150px] flex items-center justify-center">
        <div className="flex gap-1 items-end px-3">
          <div className="w-[32px] h-[58px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.25)' }} />
          <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.25)' }} />
          <div className="w-[56px] h-[100px] rounded-[7px] flex-shrink-0" style={{ background: 'rgb(26,158,92)' }} />
          <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.55)' }} />
          <div className="w-[32px] h-[58px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.25)' }} />
        </div>
      </div>
    ),
  },
  {
    label: 'Destaques da Loja',
    color: '#f5a623',
    scale: 1.4,
    bg: 'linear-gradient(135deg, #FFF5E8 0%, #FFDEB5 100%)',
    content: (
      <div className="h-[150px] flex items-center justify-center">
        <div className="flex flex-col gap-[6px] px-3 w-full">
          <div className="rounded-lg h-[60px] flex items-center px-[10px]" style={{ background: 'rgb(245,166,35)' }}>
            <span className="text-[10px] font-black text-white">Festival Jaquetas · R$ 99</span>
          </div>
          <div className="flex gap-[5px]">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-[26px] h-[26px] rounded-full border" style={{ background: 'rgba(245,166,35,0.25)', borderColor: 'rgba(245,166,35,0.5)' }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Destaques de Produto',
    color: '#9b44f8',
    bg: 'linear-gradient(135deg, #F5E8FF 0%, #DFBBFF 100%)',
    content: (
      <div className="h-[150px] flex items-center justify-center">
        <div className="flex flex-col gap-[6px] px-[10px] py-[10px]">
          <div className="flex gap-2">
            <div className="w-[60px] h-[80px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(155,68,248,0.25)' }} />
            <div className="flex-1">
              <div className="text-[8px] font-bold text-[#333] mb-[3px]">Protetor Solar FPS 90</div>
              <div className="text-[11px] font-black mb-[5px]" style={{ color: 'rgb(155,68,248)' }}>R$ 89,90</div>
              <div className="flex gap-[3px] flex-wrap">
                <span className="text-[7px] font-bold rounded-full px-[5px] py-[2px]" style={{ background: 'rgba(155,68,248,0.1)', color: 'rgb(155,68,248)' }}>Como usar</span>
                <span className="text-[7px] font-bold rounded-full px-[5px] py-[2px]" style={{ background: 'rgba(155,68,248,0.1)', color: 'rgb(155,68,248)' }}>Ingredientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function VCHero() {
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)
  const mockInnerRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })
    tl.fromTo(contentRef.current, { x: -160, opacity: 0 }, { x: 0, opacity: 1, duration: 2 })
    tl.fromTo(mockInnerRef.current, { opacity: 0, filter: 'blur(16px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1.4 }, '<0.15')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRef.current) {
        gsap.to(slideRef.current, {
          x: -40, opacity: 0, filter: 'blur(8px)', duration: 0.7, ease: 'power1.inOut',
          onComplete: () => {
            setActive(prev => (prev + 1) % slides.length)
            gsap.fromTo(slideRef.current,
              { x: 40, opacity: 0, filter: 'blur(8px)' },
              { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }
            )
          }
        })
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  function handleVerPlanos(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    navigate('/?scrollTo=planos')
  }

  const current = slides[active]

  return (
    <section className="bg-[#f6f6f6] overflow-hidden relative" style={{ minHeight: 'calc(100vh - 120px)' }}>
      {/* Breadcrumb */}
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
          <div ref={contentRef} className="flex-[0_0_50%] z-[2] flex flex-col py-20" style={{ justifyContent: 'center', paddingBottom: 'calc(10vh)' }}>
            <h1 className="text-[48px] font-black leading-[1.15] mb-6 text-black">
              Acelere a decisão<br />de compra com <span style={{ color: current.color, transition: 'color 0.6s ease' }}>vídeo.</span>
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
                  <span
                    className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] text-[10px] font-black"
                    style={{ background: `${current.color}1e`, color: current.color, transition: 'background 0.6s ease, color 0.6s ease' }}
                  >✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="inline-block text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
                style={{ backgroundColor: current.color, transition: 'background-color 0.6s ease' }}
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

          {/* Right — animated slides */}
          <div
            className="absolute top-0 bottom-0 overflow-hidden"
            aria-hidden="true"
            style={{ left: '48%', right: 'calc(-50vw + 50%)', marginRight: '-2rem' }}
          >
            <div ref={mockInnerRef} className="absolute inset-0" style={{ background: current.bg, transition: 'background 0.6s ease' }}>
              {/* Fade overlay */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: 'linear-gradient(to right,#f6f6f6 0%,transparent 20%),linear-gradient(to bottom,transparent 60%,#f6f6f6 100%),linear-gradient(to top,transparent 80%,#f6f6f6 100%)' }}
              />

              {/* Slide content */}
              <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ paddingBottom: '15%' }}>
                <div ref={slideRef} className="flex items-center justify-center">
                  <div className="w-[420px] rounded-[20px] overflow-hidden" style={{ transform: `scale(${(current as any).scale ?? 1.9})`, transformOrigin: 'center center' }}>
                    {current.content}
                  </div>
                </div>
              </div>

              {/* Label — always at fixed bottom position */}
              <div className="absolute bottom-[28%] left-0 right-0 z-[2] flex justify-center pointer-events-none">
                <span
                  className="text-[13px] font-bold px-[14px] py-[6px] rounded-full"
                  style={{ background: `${current.color}15`, color: `${current.color}99` }}
                >
                  {current.label}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
