import AnimatedButton from './AnimatedButton'
import CountUp from './CountUp'

export default function Problema() {
  return (
    <section
      className="rounded-[20px] px-16 py-20 flex gap-20 items-center"
      style={{ background: '#003ab9ff' }}
      aria-labelledby="problema-heading"
    >
      {/* Left */}
      <div className="flex-1">
        <span className="block text-[12px] font-normal text-white/50 uppercase tracking-[2px] mb-3">
          O problema
        </span>
        <h2 id="problema-heading" className="text-[26px] font-normal text-white leading-[1.25] mb-[10px]">
          A experiência online ainda afasta o consumidor
        </h2>
        <p className="text-[14px] text-white/55 leading-[1.65] mb-[22px]">
          Lojas que não investem em experiência perdem vendas todos os dias para o medo, a dúvida e a má apresentação do produto.
        </p>
        <AnimatedButton
          href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block bg-white text-[#1A3EAF] text-[13px] font-bold px-[22px] py-[11px] rounded-full no-underline"
        >
          Falar com vendas →
        </AnimatedButton>
      </div>

      {/* Numbers */}
      <div
        className="flex flex-col border-l border-white/15 pl-10 flex-shrink-0"
      >
        <div className="py-6">
          <CountUp target={84} suffix="%" className="text-[40px] font-normal text-white leading-none mb-2" />
          <div className="text-[14px] text-white/55 leading-[1.4] max-w-[400px]">deixam de comprar por medo do produto não ser como descrito</div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp target={65} suffix="%" className="text-[40px] font-normal text-white leading-none mb-2" />
          <div className="text-[14px] text-white/55 leading-[1.4] max-w-[400px]">desistem por más experiências no e-commerce</div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp target={2} suffix="x" className="text-[40px] font-normal text-white leading-none mb-2" />
          <div className="text-[14px] text-white/55 leading-[1.4] max-w-[400px]">mais conversão em lojas com vídeo na jornada</div>
        </div>
      </div>
    </section>
  )
}
