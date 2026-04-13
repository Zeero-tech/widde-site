const cards = [
  {
    bg: 'bg-brand/[0.15]',
    emoji: '🛒',
    badge: 'Conversão',
    badgeClass: 'bg-brand/[0.10] text-brand',
    title: 'Carrinho dentro do vídeo',
    desc: 'O consumidor adiciona ao carrinho sem sair do vídeo. Zero fricção entre descoberta e compra.',
  },
  {
    bg: 'bg-black/[0.12]',
    emoji: '📊',
    badge: 'Analytics',
    badgeClass: 'bg-black/[0.06] text-[#444]',
    title: 'Dados por vídeo',
    desc: 'Views, engajamento, cliques e conversões por vídeo. Entenda exatamente qual conteúdo vende mais.',
  },
  {
    bg: 'bg-[rgba(26,158,92,0.15)]',
    emoji: '⚡',
    badge: 'Performance',
    badgeClass: 'bg-[rgba(26,158,92,0.1)] text-[#1A9E5C]',
    title: 'Zero impacto na velocidade',
    desc: 'Infraestrutura própria de streaming. Os vídeos não pesam no carregamento da loja — Core Web Vitals preservados.',
  },
  {
    bg: 'bg-[rgba(155,68,248,0.15)]',
    emoji: '💬',
    badge: 'Engajamento',
    badgeClass: 'bg-[rgba(155,68,248,0.1)] text-[#9B44F8]',
    title: 'Comentários nos vídeos',
    desc: 'Receba e responda dúvidas dos clientes diretamente nos vídeos. IA da Widde filtra e organiza automaticamente.',
  },
]

export default function VCFeatures() {
  return (
    <section aria-labelledby="func-heading" className="bg-[#e5e5e5] py-8 md:py-16">
      <div className="max-w-[1740px] mx-auto px-5 md:px-10 lg:px-20">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
        Funcionalidades
      </span>
      <h2 id="func-heading" className="text-[22px] md:text-[28px] font-normal text-black leading-[1.25] max-w-[560px]">
        Tudo que você precisa para converter com vídeo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-8">
        {cards.map((card) => (
          <div key={card.title} className="bg-[#e5e5e5] rounded-[14px] p-4 md:p-7 flex gap-4 md:gap-5 items-start">
            <div className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-[10px] flex-shrink-0 flex items-center justify-center ${card.bg}`}>
              <span className="text-[28px]">{card.emoji}</span>
            </div>
            <div>
              <span className={`inline-block text-[9px] font-black px-[9px] py-[3px] rounded mb-2 uppercase tracking-[1px] ${card.badgeClass}`}>
                {card.badge}
              </span>
              <div className="text-[15px] font-black text-black mb-[6px]">{card.title}</div>
              <div className="text-[12px] text-[#777] leading-[1.55]">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
