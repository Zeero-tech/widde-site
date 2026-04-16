export default function QSHero() {
  return (
    <section className="bg-surface pt-10 md:pt-15 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pb-16 md:pb-24">
          <img
            src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/681ca182c50c42c2115d5905_3f73365573698d2d21a17349832dc53c_fundadores-widde.avif"
            loading="eager"
            alt=""
            className="w-[40vw] h-full object-cover rounded-2xl"
          />
          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-ink leading-none tracking-tight mt-15">
                Conheça a Widde
              </h1>
            </div>
            <p className="text-xl md:text-lg text-text-body leading-snug">
              Raísa Bresolin e Pedro Ferreira fundaram a Widde em 2021, após vivenciarem de perto os desafios do varejo on-line.
            </p>
            <p className="text-base text-text-body leading-relaxed">
              Em meio à pandemia de Covid-19, quando o distanciamento social transformou a forma como as pessoas compravam, ficou evidente a necessidade de uma experiência digital mais humana, fluida e envolvente.
            </p>
            <p className="text-base text-text-body leading-relaxed">
              Foi nesse contexto que a Widde trouxe o Video Commerce para o Brasil, uma tecnologia criada para tornar a jornada de compra online mais interativa, imersiva e eficaz. Desde então, a Widde tem ajudado marcas a se conectarem com seus consumidores de forma mais autêntica e engajadora, reinventando o modo de navegar e comprar no e-commerce.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-surface-border pt-12 pb-16 md:pb-24">
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-black text-ink whitespace-nowrap">+10 mil</span>
            <span className="text-xl text-text-body leading-snug">Lojas impactadas pelas soluções da Widde</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-black text-ink">1ª</span>
            <span className="text-xl text-text-body leading-snug">Solução de Video Commerce do Brasil</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-black text-ink">+1.19MM</span>
            <span className="text-xl text-text-body leading-snug">Consumidores impactados</span>
          </div>
        </div>

      </div>
    </section>
  )
}
