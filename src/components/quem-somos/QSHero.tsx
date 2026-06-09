export default function QSHero() {
  return (
    <section className="pt-8">
      <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
        {/* Founders */}
        <div>
          <div
            data-reveal
            className="flex flex-col md:flex-row gap-10 md:gap-20 justify-start items-start md:items-center mt-[60px]"
          >
            <img
              src="/assets/components/quem-somos/681ca182c50c42c2115d5905_3f73365573698d2d21a17349832dc53c_fundadores-widde.avif"
              loading="eager"
              alt=""
              className="aspect-square object-cover rounded-2xl flex-none w-full md:w-[40vw] overflow-hidden"
            />
            <div className="flex flex-col gap-4">
              <div className="mb-2">
                <h1 className="max-w-[34rem] mt-[60px] mb-2 text-5xl font-normal leading-none">
                  Conheça a Widde
                </h1>
              </div>
              <p className="text-[1.2rem] leading-[1.4] tracking-[-0.01em] text-[#373739]">
                Raísa Bresolin e Pedro Ferreira fundaram a Widde em 2021, após
                vivenciarem de perto os desafios do varejo on-line. <br />
              </p>
              <p>
                Em meio à pandemia de Covid-19, quando o distanciamento social
                transformou a forma como as pessoas compravam, ficou evidente a
                necessidade de uma experiência digital mais humana, fluida e
                envolvente.
                <br />
              </p>
              <p>
                Foi nesse contexto que a Widde trouxe o Video Commerce para o
                Brasil, uma tecnologia criada para tornar a jornada de compra
                online mais interativa, imersiva e eficaz. Desde então, a Widde
                tem ajudado marcas a se conectarem com seus consumidores de
                forma mais autêntica e engajadora, reinventando o modo de
                navegar e comprar no e-commerce.
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-14 md:py-20">
          <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "+10 mil",
                label: "Lojas impactadas pelas soluções da Widde",
              },
              { stat: "1ª", label: "Solução de Video Commerce do Brasil" },
              { stat: "+1.19MM", label: "Consumidores impactados" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="flex flex-row items-center gap-5 bg-white border border-gray-200 rounded-2xl px-8 py-8"
              >
                <span
                  className="font-bold text-blue-600 whitespace-nowrap flex-shrink-0"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {stat}
                </span>
                <span className="text-base text-[#374151] leading-[1.4]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
