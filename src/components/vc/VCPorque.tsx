import CountUp from '@/components/CountUp'

const stats = [
  { target: 80, prefix: '', suffix: '%', label: 'dos consumidores preferem assistir a um vídeo a ler sobre um produto' },
  { target: 3, prefix: '', suffix: 'x', label: 'mais tempo na página em sessões com vídeo' },
  { target: 40, prefix: '+', suffix: '%', label: 'na taxa de adição ao carrinho com vídeo shoppable' },
]

export default function VCPorque() {
  return (
    <div className="bg-[#003ab9] rounded-[20px] px-25 py-30 my-30">
      {/* Top row: title left, paragraph right */}
      <div className="grid grid-cols-2 gap-14 mb-16">
        <div>
          <span className="block text-[11px] font-bold text-white/40 uppercase tracking-[2px] mb-[10px]">
            Por que video commerce
          </span>
          <h2 className="text-[26px] font-normal text-white leading-[1.25]">
            Vídeo é o formato que mais converte no e-commerce
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-[14px] text-white/50 leading-[1.6]">
            Consumidores que assistem a um vídeo de produto têm muito mais probabilidade de comprar. O vídeo reduz objeções, transmite confiança e aproxima o produto da realidade do cliente.
          </p>
        </div>
      </div>

      {/* Stats row: 3 columns with left border */}
      <div className="grid grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="border-l border-white/20 pl-6">
            <CountUp
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="block text-[52px] font-light text-white leading-none mb-3"
            />
            <span className="text-[13px] text-white/50 leading-[1.4]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
