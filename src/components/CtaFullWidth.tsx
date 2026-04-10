import AnimatedButton from './AnimatedButton'

export default function CtaFullWidth() {
  return (
    <section id="contato" className="bg-[#0A0A0A] py-16 px-10 text-center" aria-labelledby="cta-heading">
      <div className="max-w-[900px] mx-auto">
        <h2 id="cta-heading" className="text-[28px] font-black text-white mb-3 leading-[1.3]">
          Vamos começar a transformação<br />do seu e-commerce?
        </h2>
        <p className="text-[14px] text-white/45 mb-7">
          Sem dev. Ativo em menos de 1 dia. Resultados desde a primeira semana.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <AnimatedButton
            href="https://widde.io/quero-comecar?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-brand text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
          >
            Começar agora
          </AnimatedButton>
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-transparent text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline border-[1.5px] border-white/25 hover:border-white transition-colors"
          >
            Falar com vendas
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
