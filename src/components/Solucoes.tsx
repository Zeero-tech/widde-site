import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import CountUp from "./CountUp";

function useArticleReveal(direction: 'left' | 'right') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const xFrom = direction === 'left' ? -60 : 60
    gsap.set(el, { x: xFrom, opacity: 0, filter: 'blur(12px)' })
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, { x: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [direction])

  return ref
}

export default function Solucoes() {
  const vcRef = useArticleReveal('left')
  const liveRef = useArticleReveal('right')
  const tryonRef = useArticleReveal('left')

  return (
    <section id="solucoes" className="pt-30" aria-labelledby="sol-heading">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        O que a Widde faz
      </span>
      <h2 id="sol-heading" className="text-[28px] font-normal text-black leading-[1.25] mb-16">
        Conheça nossas soluções
      </h2>

      <div className="flex flex-col gap-24 overflow-hidden">

        {/* VIDEO COMMERCE */}
        <article ref={vcRef} id="video-commerce" className="flex gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-[48%] flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden min-h-[400px]" aria-hidden="true">
            <div className="p-6 flex flex-col gap-2 w-full">
              <div className="flex gap-[7px] justify-center items-end">
                <div className="rounded-[10px] bg-brand/25 relative overflow-hidden flex-shrink-0 w-[54px] h-[96px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-[8px] text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">A</span>
                </div>
                <div className="rounded-[10px] bg-brand/50 relative overflow-hidden flex-shrink-0 w-[68px] h-[124px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-[8px] text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">B</span>
                </div>
                <div className="rounded-[10px] bg-brand relative overflow-hidden flex-shrink-0 w-[90px] h-[158px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-[8px] text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">Destaque</span>
                </div>
                <div className="rounded-[10px] bg-brand/50 relative overflow-hidden flex-shrink-0 w-[68px] h-[124px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-[8px] text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">C</span>
                </div>
                <div className="rounded-[10px] bg-brand/25 relative overflow-hidden flex-shrink-0 w-[54px] h-[96px]">
                  <span className="absolute bottom-[6px] left-[5px] right-[5px] text-[8px] text-white bg-black/45 rounded px-[5px] py-[2px] font-bold">D</span>
                </div>
              </div>
              <div className="flex gap-[6px] justify-center">
                <span className="bg-brand/[0.12] text-brand text-[9px] font-bold px-[9px] py-[3px] rounded-full">Stories</span>
                <span className="bg-brand/[0.12] text-brand text-[9px] font-bold px-[9px] py-[3px] rounded-full">Carrossel</span>
                <span className="bg-brand/[0.12] text-brand text-[9px] font-bold px-[9px] py-[3px] rounded-full">Explorar</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-8">
            <div>
              <h3 className="text-[32px] font-normal text-black mb-4 leading-[1.15]">Video Commerce</h3>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] max-w-full">
                <strong>Saia do estático e tenha vídeos em Carrosséis, Destaques e Stories</strong> nas páginas do e-commerce. O consumidor vê o produto sendo usado, entende os detalhes e soluciona as objeções assistindo aos conteúdos.
              </p>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                Com carrinho dentro do vídeo para <strong>acelerar a compra.</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-8 mb-10">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-[40px] font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[14px] text-[#5d5d5d] leading-[1.4]">Mais tempo na página com vídeo</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1">
                  <CountUp target={4} suffix="x" className="text-[40px] font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[14px] text-[#5d5d5d] leading-[1.4]">Mais conversão de vendas</span>
                </div>
              </div>
              <a
                href="/video-commerce"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#010b15] no-underline w-fit px-7 py-[11px] border border-black/20 rounded-full hover:border-black transition-colors"
              >
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                  <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* LIVE COMMERCE */}
        <article ref={liveRef} id="live-commerce" className="flex flex-row-reverse gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-[48%] flex-shrink-0 bg-[#1a1a1a] rounded-2xl flex items-center justify-center overflow-hidden min-h-[400px]" aria-hidden="true">
            <div className="flex items-end gap-[10px] p-5">
              <div className="w-[110px] h-[196px] rounded-[14px] bg-[#0A0A0A] overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 opacity-75" style={{ background: 'linear-gradient(160deg,#003AB9,#2667F8)' }} />
                <span className="absolute top-[9px] left-[9px] bg-[#FF3B30] text-white text-[8px] font-black px-[7px] py-[2px] rounded-full">AO VIVO</span>
                <span className="absolute top-[9px] right-[9px] bg-black/50 text-white text-[8px] font-bold px-[6px] py-[2px] rounded-full">1.2k</span>
                <div className="absolute bottom-[55px] left-[6px] right-[6px] flex flex-col gap-[3px]">
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-[8px] text-white">Ana: qual o tamanho? 👀</div>
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-[8px] text-white">Carol: amei essa peça!</div>
                </div>
                <div className="absolute bottom-[7px] left-[7px] right-[7px] bg-brand rounded-[8px] px-2 py-[6px] text-[9px] font-bold text-white text-center">
                  Adicionar ao carrinho
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <div className="bg-white/90 border border-[#eee] rounded-[8px] p-2 flex items-center gap-[7px]">
                  <div className="w-[30px] h-[30px] rounded-[5px] bg-brand/20 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-bold text-black">Jaqueta Jeans Premium</div>
                    <div className="text-[10px] font-black text-brand">R$ 349,90</div>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <div className="bg-brand/[0.08] rounded-[6px] px-[10px] py-[6px] text-[9px] text-brand font-bold">💰 R$ 18.400 em vendas</div>
                  <div className="bg-brand/[0.08] rounded-[6px] px-[10px] py-[6px] text-[9px] text-brand font-bold">👁 1.240 espectadores</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-8">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-[10px] font-bold px-3 py-[3px] rounded-full w-fit mb-4">
                Novo
              </span>
              <h3 className="text-[32px] font-normal text-black mb-4 leading-[1.15]">Live Commerce</h3>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] max-w-full">
                <strong>Transmissão ao vivo onde a venda acontece.</strong> O consumidor assiste, engaja, tira dúvidas em tempo real, vê detalhes do produto ao vivo e compra durante a live, sem sair do seu site.
              </p>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                <strong>Cria urgência, conexão e confiança na marca.</strong>
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <CountUp target={5} suffix="x" className="text-[40px] font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-[14px] text-[#5d5d5d] leading-[1.4]">Maior engajamento vs. redes sociais</span>
              </div>
              <div className="w-px bg-[#E9E9E9]" />
              <div className="flex flex-col gap-1">
                <CountUp target={60} prefix="+" suffix="%" className="text-[40px] font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-[14px] text-[#5d5d5d] leading-[1.4]">Maior ticket médio durante a live</span>
              </div>
            </div>
          </div>
        </article>

        {/* TRYON */}
        <article ref={tryonRef} id="provador-ia" className="flex gap-16 items-stretch w-full">
          {/* Visual */}
          <div className="w-[48%] flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden min-h-[400px]" aria-hidden="true">
            <div className="flex gap-[10px] p-5 items-end">
              <div className="w-[100px] h-[188px] rounded-2xl bg-brand/[0.08] border border-brand/20 overflow-hidden flex flex-col flex-shrink-0">
                <div className="flex-1 relative" style={{ background: 'linear-gradient(160deg,rgba(38,103,248,0.25),rgba(0,58,185,0.15))' }}>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[44px] h-[76px] bg-brand/30 rounded-t-[7px]" />
                </div>
                <div className="bg-brand/[0.06] px-[7px] py-[7px] flex gap-[5px] justify-center">
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#E8C4A0' }} />
                  <div className="w-[14px] h-[14px] rounded-full border-2 border-brand" style={{ background: '#6B4C3B' }} />
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#F5E6D3' }} />
                  <div className="w-[14px] h-[14px] rounded-full" style={{ background: '#2C2C2C' }} />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.15] border border-brand" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 justify-between py-8">
            <div>
              <span className="inline-block bg-brand text-white text-[10px] font-bold px-3 py-[3px] rounded-full w-fit mb-4">
                Novo
              </span>
              <h3 className="text-[32px] font-normal text-black mb-4 leading-[1.15]">Provador IA</h3>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] max-w-full">
                Seu cliente prova o produto no próprio corpo, através de uma foto, como se estivesse na loja física, mas no seu site. <strong>Para vestuário e calçados: ele vê como fica antes de decidir.</strong>
              </p>
              <p className="text-[15px] text-[#2d2d2d] leading-[1.7] mt-4 max-w-full">
                <strong>Menos dúvida na compra, menos devolução depois.</strong>
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <CountUp target={93} suffix="%" className="text-[40px] font-normal text-[#1d1d1d] leading-none mb-1" />
                <span className="text-[14px] text-[#5d5d5d] leading-[1.4]">Satisfação dos consumidores com o resultado</span>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
