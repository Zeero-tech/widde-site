import AnimatedButton from './AnimatedButton'

export default function Solucoes() {
  return (
    <section id="solucoes" className="pt-14" aria-labelledby="sol-heading">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        O que a Widde faz
      </span>
      <h2 id="sol-heading" className="text-[28px] font-normal text-black leading-[1.25] mb-10">
        Conheça nossas soluções
      </h2>

      <div className="flex flex-col gap-4">

        {/* VIDEO COMMERCE */}
        <article id="video-commerce" className="flex rounded-2xl overflow-hidden border border-[#E9E9E9] bg-[#f6f6f6] min-h-[320px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <h3 className="text-[22px] font-black text-black mb-[10px] leading-[1.2]">Video Commerce</h3>
            <p className="text-[13px] text-[#666] leading-[1.65] mb-6">
              Stories, carrossel e destaque de produto com vídeo shoppable — em todo o seu e-commerce. O consumidor descobre, confia e compra sem sair da sua loja.
            </p>
            <div className="flex border-t border-[#E9E9E9] pt-5 mt-1">
              <div className="flex-1 pr-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">3x</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">Mais tempo na página com vídeo</div>
              </div>
              <div className="flex-1 border-l border-[#E9E9E9] pl-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">+40%</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">Taxa de adição ao carrinho</div>
              </div>
            </div>
            <AnimatedButton
              href="#"
              className="inline-block bg-brand text-white text-[13px] font-bold px-[22px] py-[11px] rounded-full no-underline w-fit mt-5"
            >
              Saiba mais →
            </AnimatedButton>
          </div>

          {/* Mock Video Commerce */}
          <div className="w-[48%] bg-[#F5F5F5] flex items-center justify-center overflow-hidden" aria-hidden="true">
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
        </article>

        {/* LIVE COMMERCE */}
        <article id="live-commerce" className="flex flex-row-reverse rounded-2xl overflow-hidden border border-[#E9E9E9] bg-[#f6f6f6] min-h-[320px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <span className="inline-block bg-brand text-white text-[10px] font-bold px-3 py-[3px] rounded-full w-fit mb-[14px]">
              Novo
            </span>
            <h3 className="text-[22px] font-black text-black mb-[10px] leading-[1.2]">Live Commerce</h3>
            <p className="text-[13px] text-[#666] leading-[1.65] mb-6">
              Transmissões ao vivo com carrinho em tempo real e engajamento direto dentro da sua loja. O consumidor assiste, interage e compra sem sair do site.
            </p>
            <div className="flex border-t border-[#E9E9E9] pt-5 mt-1">
              <div className="flex-1 pr-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">5x</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">Maior engajamento em lives vs. redes sociais</div>
              </div>
              <div className="flex-1 border-l border-[#E9E9E9] pl-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">+60%</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">Conversão em sessões com live ativa</div>
              </div>
            </div>
          </div>

          {/* Mock Live Commerce */}
          <div className="w-[48%] bg-[#0A0A0A] flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div className="flex items-end gap-[10px] p-5">
              {/* Screen */}
              <div className="w-[110px] h-[196px] rounded-[14px] bg-[#0A0A0A] overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 opacity-75" style={{ background: 'linear-gradient(160deg,#003AB9,#2667F8)' }} />
                <span className="absolute top-[9px] left-[9px] bg-[#FF3B30] text-white text-[8px] font-black px-[7px] py-[2px] rounded-full">AO VIVO</span>
                <span className="absolute top-[9px] right-[9px] bg-black/50 text-white text-[8px] font-bold px-[6px] py-[2px] rounded-full">1.2k</span>
                <div className="absolute bottom-[38px] left-[6px] right-[6px] flex flex-col gap-[3px]">
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-[8px] text-white">Ana: qual o tamanho? 👀</div>
                  <div className="bg-black/50 rounded-[6px] px-[6px] py-[3px] text-[8px] text-white">Carol: amei essa peça!</div>
                </div>
                <div className="absolute bottom-[7px] left-[7px] right-[7px] bg-brand rounded-[8px] px-2 py-[6px] text-[9px] font-bold text-white text-center">
                  Adicionar ao carrinho
                </div>
              </div>
              {/* Info */}
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
        </article>

        {/* TRYON */}
        <article id="try-on" className="flex rounded-2xl overflow-hidden border border-[#E9E9E9] bg-[#f6f6f6] min-h-[320px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <span className="inline-block bg-brand text-white text-[10px] font-bold px-3 py-[3px] rounded-full w-fit mb-[14px]">
              Novo
            </span>
            <h3 className="text-[22px] font-black text-black mb-[10px] leading-[1.2]">TryOn</h3>
            <p className="text-[13px] text-[#666] leading-[1.65] mb-6">
              Experiência de experimentação virtual que elimina a principal objeção de compra. O consumidor visualiza como o produto fica antes de decidir — sem sair do site.
            </p>
            <div className="flex border-t border-[#E9E9E9] pt-5 mt-1">
              <div className="flex-1 pr-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">708%</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">ROI com TryOn (Cajubrasil)</div>
              </div>
              <div className="flex-1 border-l border-[#E9E9E9] pl-4">
                <div className="text-[28px] font-black text-black leading-none mb-1">
                  <span className="text-brand">-35%</span>
                </div>
                <div className="text-[11px] text-[#888] leading-[1.4]">Redução na taxa de devolução</div>
              </div>
            </div>
          </div>

          {/* Mock TryOn */}
          <div className="w-[48%] bg-[#F5F5F5] flex items-center justify-center overflow-hidden" aria-hidden="true">
            <div className="flex gap-[10px] p-5 items-end">
              {/* Phone */}
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
              {/* Panel */}
              <div className="flex flex-col gap-[6px]">
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.15] border border-brand" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
                <div className="w-[56px] h-[56px] rounded-[9px] bg-brand/[0.07] border border-brand/15" />
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
