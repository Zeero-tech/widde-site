const formatos = [
  {
    name: 'Stories',
    desc: 'Conteúdo vertical em tela cheia. Alta imersão e engajamento — o formato que o consumidor já conhece.',
    onde: ['Home', 'PDP'],
    thumb: (
      <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-[#EEF3FF] to-[#C8D9FF]">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-[6px]">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-[24px] h-[24px] rounded-full bg-brand/25 border border-brand/40" />
            ))}
          </div>
          <div className="w-[70px] h-[110px] rounded-[10px] bg-brand border-2 border-white/40 relative overflow-hidden">
            <div className="flex gap-[3px] absolute top-[6px] left-[5px] right-[5px]">
              {[1, 2, 3].map((d, i) => (
                <div key={d} className={`h-[2px] flex-1 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/35'}`} />
              ))}
            </div>
            <div className="absolute bottom-[8px] left-[5px] right-[5px] bg-white/20 rounded text-[7px] text-white font-bold text-center py-[3px]">
              Ver produto
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Carrossel de Vídeos',
    desc: 'Mostre múltiplos produtos em sequência. O visitante descobre mais itens sem sair da página.',
    onde: ['Home', 'Categorias'],
    thumb: (
      <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-[#E8F5EE] to-[#BBE0CC]">
        <div className="flex gap-1 items-end px-3">
          <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.25)' }} />
          <div className="w-[56px] h-[100px] rounded-[7px] flex-shrink-0" style={{ background: '#1A9E5C' }} />
          <div className="w-[42px] h-[78px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.55)' }} />
          <div className="w-[32px] h-[58px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(26,158,92,0.25)' }} />
        </div>
      </div>
    ),
  },
  {
    name: 'Destaques da Loja',
    desc: 'Feed estilo rede social para campanhas, lançamentos e coleções. Imersivo e direto.',
    onde: ['Home', 'Categorias'],
    thumb: (
      <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-[#FFF5E8] to-[#FFDEB5]">
        <div className="flex flex-col gap-[6px] px-3 w-full">
          <div className="rounded-lg h-[60px] flex items-center px-[10px]" style={{ background: '#F5A623' }}>
            <span className="text-[10px] font-black text-white">Festival Jaquetas · R$ 99</span>
          </div>
          <div className="flex gap-[5px]">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-[26px] h-[26px] rounded-full border" style={{ background: 'rgba(245,166,35,0.25)', borderColor: 'rgba(245,166,35,0.5)' }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Destaques de Produto',
    desc: 'Vídeos organizados por tema na PDP — modo de uso, materiais, looks. O cliente tira todas as objeções antes de comprar.',
    onde: ['PDP'],
    thumb: (
      <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-[#F5E8FF] to-[#DFBBFF]">
        <div className="flex flex-col gap-[6px] px-[10px] py-[10px] w-full">
          <div className="flex gap-2">
            <div className="w-[60px] h-[80px] rounded-[7px] flex-shrink-0" style={{ background: 'rgba(155,68,248,0.25)' }} />
            <div className="flex-1">
              <div className="text-[8px] font-bold text-[#333] mb-[3px]">Protetor Solar FPS 90</div>
              <div className="text-[11px] font-black mb-[5px]" style={{ color: '#9B44F8' }}>R$ 89,90</div>
              <div className="flex gap-[3px] flex-wrap">
                {['Como usar', 'Ingredientes'].map((tab) => (
                  <span key={tab} className="text-[7px] font-bold rounded-full px-[5px] py-[2px]" style={{ background: 'rgba(155,68,248,0.1)', color: '#9B44F8' }}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Explorar',
    desc: 'Página 100% dedicada a vídeos — o TikTok da sua loja. Máximo engajamento e descoberta de produtos.',
    onde: ['Página exclusiva'],
    thumb: (
      <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-[#E8F0FF] to-[#B8CCFF]">
        <div className="flex flex-col gap-1 px-2 py-2 w-full">
          <div className="rounded-full h-[18px] bg-brand/10" />
          <div className="grid grid-cols-2 gap-1">
            <div className="h-[70px] rounded-[7px] bg-brand" />
            <div className="flex flex-col gap-1">
              <div className="h-[32px] rounded-[7px]" style={{ background: 'rgba(38,103,248,0.4)' }} />
              <div className="h-[32px] rounded-[7px]" style={{ background: 'rgba(38,103,248,0.2)' }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function VCFormatos() {
  return (
    <section aria-labelledby="formatos-heading">
      <div className="text-[11px] font-bold text-brand uppercase tracking-[2px] mb-3">
        Formatos
      </div>
      <h2 id="formatos-heading" className="text-[30px] font-black text-black leading-[1.2] mb-9 max-w-[560px]">
        Todos os formatos de vídeo que sua loja precisa
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {formatos.map((f) => (
          <div key={f.name} className="bg-[#F5F5F5] border border-[#E9E9E9]/70 rounded-2xl overflow-hidden">
            {f.thumb}
            <div className="p-4">
              <div className="text-[14px] font-black text-black mb-[5px]">{f.name}</div>
              <div className="text-[12px] text-[#777] leading-[1.5]">{f.desc}</div>
              <div className="text-[11px] text-[#aaa] mt-2">
                Aparece em:
                {f.onde.map((lugar) => (
                  <span key={lugar} className="bg-[#F0F0F0] rounded text-[10px] font-bold text-[#555] px-[7px] py-[2px] ml-1">{lugar}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
