export default function QSVideos() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">

        <div className="max-w-3xl mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-ink leading-none tracking-tight mb-4">
            Nova era do e-commerce
          </h2>
          <p className="text-xl md:text-2xl text-text-body leading-snug max-w-xl">
            Na Widde, nosso propósito é dar vida ao e-commerce, criando experiências que aproximam marcas e pessoas.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-ink">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ILBUjeEbyL0?si=47TDwjgpyH_3ikE0&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-black text-ink">Video Commerce</h3>
              <p className="text-base text-text-body leading-relaxed">
                Até pouco tempo, todos os e-commerces seguiam o mesmo padrão: fotos, textos e pouca interação.<br /><br />
                A Widde chegou para mudar isso. Com o Video Commerce, <strong>transformamos a experiência de compra online com humanização</strong>, criando conexões reais entre marcas e consumidores.<br /><br />
                Hoje, <strong>milhares de lojas já adotaram esse novo formato</strong> e estão deixando o modelo tradicional para trás. <strong>O futuro do e-commerce é criar conexão</strong>, e a Widde já está nele.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-ink">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/xTXuUuKT-do?si=3HJyZ0UsQkzHk9yO&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-black text-ink">Quem somos</h3>
              <p className="text-base text-text-body leading-relaxed">
                O e-commerce evoluiu, mas a experiência de compra ainda precisa de mais <strong>conexão, clareza e confiança</strong>.<br /><br />
                Na Widde, acreditamos que cada <strong>loja on-line pode ser mais do que um catálogo digital</strong>.<br /><br />
                Somos uma plataforma de Video Commerce criada para humanizar e transformar a jornada de compra. Com <strong>tecnologia, design e propósito</strong>, ajudamos <strong>marcas a se conectarem de forma autêntica com seus consumidores</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
