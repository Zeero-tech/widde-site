const stats = [
  { num: '80%', label: 'dos consumidores preferem assistir a um vídeo a ler sobre um produto' },
  { num: '3x', label: 'mais tempo na página em sessões com vídeo' },
  { num: '+40%', label: 'na taxa de adição ao carrinho com vídeo shoppable' },
]

export default function VCPorque() {
  return (
    <div className="bg-[#0A0A0A] rounded-[20px] px-10 py-16 my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[820px] mx-auto items-start">
        <div>
          <div className="text-[11px] font-bold text-white/40 uppercase tracking-[2px] mb-[14px]">
            Por que video commerce
          </div>
          <h2 className="text-[32px] font-black text-white leading-[1.2]">
            Vídeo é o formato que mais converte no e-commerce
          </h2>
        </div>
        <div className="pt-2">
          <p className="text-[14px] text-white/55 leading-[1.7] mb-10">
            Consumidores que assistem a um vídeo de produto têm muito mais probabilidade de comprar. O vídeo reduz objeções, transmite confiança e aproxima o produto da realidade do cliente.
          </p>
          <div className="flex flex-col">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-4 py-5 border-t border-white/10">
                <span className="text-[48px] font-black text-white leading-none flex-shrink-0">{stat.num}</span>
                <span className="text-[13px] text-white/50 leading-[1.4]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
