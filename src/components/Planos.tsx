import AnimatedButton from './AnimatedButton'

export default function Planos() {
  return (
    <section id="planos" className="pt-14" aria-labelledby="planos-heading">
      {/* Header */}
      <div className="flex justify-between items-end mb-7 flex-wrap gap-3">
        <div>
          <span className="block text-[11px] font-bold text-brand uppercase tracking-[2px] mb-3">Planos</span>
          <h2 id="planos-heading" className="text-[28px] font-black text-black leading-[1.25]">
            Escolha como começar
          </h2>
        </div>
        <div className="text-[12px] text-brand font-bold bg-brand/[0.08] px-[14px] py-[6px] rounded-full">
          💰 15% de desconto no plano anual
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 2fr' }}>

        {/* Starter */}
        <article className="bg-[#f6f6f6] border border-[#E9E9E9] rounded-[18px] p-7 relative">
          <span className="block text-[10px] font-bold text-brand uppercase tracking-[1px] mb-[10px]">Starter</span>
          <h3 className="text-[16px] font-black text-black mb-[6px]">Starter</h3>
          <div className="text-[32px] font-black text-black mb-1 leading-none">
            R$399<sub className="text-[14px] font-normal text-[#888]">/mês</sub>
          </div>
          <p className="text-[11px] text-[#888] mb-4">Para lojas em fase inicial de conteúdo</p>
          <ul className="list-none flex flex-col gap-2 mb-5">
            {[
              'Formato Stories',
              'Até 75 vídeos ativos',
              'Até 10K views/mês',
              'Integração com Google Analytics',
              'Personalização de cores e botões',
              'Suporte via WhatsApp e Chat',
            ].map((f) => (
              <li key={f} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.4]">
                <span className="text-brand font-black flex-shrink-0">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <AnimatedButton
            href="https://widde.io/quero-comecar?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-[#f6f6f6] text-black text-[13px] font-bold px-[22px] py-[11px] rounded-full no-underline border-[1.5px] border-[#E9E9E9] hover:bg-[#eee] transition-colors"
          >
            Começar agora
          </AnimatedButton>
        </article>

        {/* Pro */}
        <article className="bg-[#0A0A0A] border border-[#0A0A0A] rounded-[18px] p-7 relative overflow-visible">
          {/* Decorative SVG circles */}
          <svg
            className="absolute top-7 right-7 opacity-20"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="1" />
          </svg>

          <span className="inline-block bg-brand text-white text-[10px] font-bold px-[10px] py-[2px] rounded-full mb-3">
            Recomendado para médias e grandes marcas
          </span>
          <h3 className="text-[16px] font-black text-white mb-[6px]">Pro</h3>
          <div className="text-[22px] font-black text-white mb-1">Sob medida para o seu negócio</div>
          <p className="text-[11px] text-white/45 mb-4">Fale com vendas para montar o plano ideal</p>

          <div className="flex gap-8">
            {/* Left */}
            <div className="flex-1">
              <ul className="list-none flex flex-col gap-2 mb-5">
                {[
                  'Vídeos ilimitados',
                  '40K views ou mais',
                  'Video Commerce + Live Commerce + TryOn',
                  'Gerente de contas dedicado',
                  'Carrinho dentro do vídeo',
                  'Widde IA para comentários',
                ].map((f) => (
                  <li key={f} className="text-[12px] text-white/60 flex items-start gap-2 leading-[1.4]">
                    <span className="text-[#6090FF] font-black flex-shrink-0">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col">
              <div className="bg-brand/20 rounded-[12px] p-4 mb-4">
                <h4 className="text-[13px] font-black text-white mb-1">Para marcas que querem crescer de verdade</h4>
                <p className="text-[12px] text-white/55 leading-[1.5]">
                  Grandes varejistas têm desafios únicos. O plano Pro é desenhado junto com você — volume, integrações, SLA e treinamento incluídos.
                </p>
              </div>
              <AnimatedButton
                href="#contato"
                className="inline-block bg-brand text-white text-[13px] font-bold px-[22px] py-[11px] rounded-full no-underline border border-brand w-fit"
              >
                Falar com vendas →
              </AnimatedButton>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}
