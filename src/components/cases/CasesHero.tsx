export default function CasesHero() {
  return (
    <section className="pt-8 pb-14">
      <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
        <h1
          data-reveal
          className="font-normal text-black leading-[1.15] mb-6 text-5xl"
        >
          Cases de sucesso
        </h1>
        <p data-reveal className="text-[#373739] text-lg mb-8">
          Veja como tem sido <strong>os resultados</strong> de quem usa as{" "}
          <strong>soluções de Video Commerce</strong> da Widde.
        </p>

        {/* Destaque Mamô */}
        <a
          data-reveal
          href="/case/mamo"
          className="no-underline flex flex-col md:flex-row overflow-hidden rounded-2xl min-h-[520px]"
        >
          {/* Imagem */}
          <div
            className="relative overflow-hidden group md:flex-[0_0_58%] min-h-[320px]"
          >
            <div
              className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.08] blur-sm scale-[1.05]"
              style={{
                backgroundImage:
                  "url('/assets/cases/mamo/695d2d0b1016c8df8923096d_capa-youtube-1.webp')",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="absolute inset-0 bg-black/30 z-[1]" />
            <div className="absolute inset-0 flex items-center justify-center p-8 z-[2]">
              <img
                loading="lazy"
                src="/assets/cases/mamo/695d2d0b1016c8df8923096d_capa-youtube-1.webp"
                alt="Construindo narrativas com Video Commerce"
                className="aspect-video object-cover object-center rounded-2xl w-full relative"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className="flex flex-col justify-center px-10 py-12 md:py-16 md:flex-[0_0_42%] bg-[#e5e5e5]"
          >
            <span className="inline-block border text-xs font-normal px-3 py-1 rounded-full mb-5 w-fit text-brand border-brand">
              Em Destaque
            </span>
            <h2
              className="font-normal text-black leading-[1.2] mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
            >
              Construindo narrativas com Video Commerce
            </h2>
            <span className="inline-flex items-center justify-center bg-brand text-white font-bold text-base px-7 py-[13px] rounded-full w-fit">
              Ver case de sucesso
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
