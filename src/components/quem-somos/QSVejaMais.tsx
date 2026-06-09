const cards = [
  {
    href: "https://www.youtube.com/@widde.videocommerce",
    external: true,
    bg: "#1a1a1a",
    bgImage:
      "/assets/components/quem-somos/682df2efad48b0def4f7206e_widde-youtube.avif",
    title: "Widde no YouTube",
    cta: "Nosso canal no YouTube \u00a0→",
    imgAlt: "Widde no YouTube",
  },
  {
    href: "/blog",
    external: false,
    bg: "#1a1a1a",
    bgImage:
      "/assets/components/quem-somos/682df2ef3ac13dad2197206f_84047ca2255bb7ac52e62eae0892e17a_widde-blog.avif",
    title: "Conheça o Blog da Widde",
    cta: "Ir para o blog \u00a0→",
    imgAlt: "Blog da Widde",
  },
];

export default function QSVejaMais() {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6">
        <div data-reveal className="text-center mb-10 md:mb-14">
          <h2 className="text-black tracking-[-0.03em] mt-5 mb-4 text-[2.5rem] font-normal leading-[1.2] block">
            Veja mais conteúdos
          </h2>
          <p className="text-[#373739] tracking-[-0.01em] text-[1.2rem] leading-[1.4] max-w-xl mx-auto">
            Acompanhe semanalmente nossos conteúdos no blog e no YouTube
            para se manter atualizado sobre experiências e tendências no
            e-commerce.
          </p>
        </div>

        <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noreferrer" : undefined}
              className="relative overflow-hidden rounded-2xl flex flex-col justify-between p-4 lg:p-8 min-h-[160px] md:min-h-[420px] group"
              style={{ background: card.bg }}
            >
              {/* blurred bg */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-60"
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />

              <div className="relative z-10 flex flex-col md:flex-col justify-between h-full">
                {/* desktop */}
                <h3 className="hidden md:block text-white text-xl font-semibold text-center">
                  {card.title}
                </h3>
                <img
                  src={card.bgImage}
                  alt={card.imgAlt}
                  loading="lazy"
                  className="hidden md:block rounded-xl w-[75%] mx-auto my-4 object-cover aspect-[4/3]"
                />
                <p className="hidden md:block text-white font-semibold text-center text-lg">
                  {card.cta}
                </p>

                {/* mobile */}
                <div className="flex md:hidden flex-row items-center gap-1 h-full">
                  <div className="flex flex-col items-center justify-center gap-1 flex-1">
                    <h3 className="text-white text-base font-semibold text-center">
                      {card.title}
                    </h3>
                    <p className="text-white font-semibold text-center text-sm">
                      {card.cta}
                    </p>
                  </div>
                  <img
                    src={card.bgImage}
                    alt={card.imgAlt}
                    loading="lazy"
                    className="rounded-xl w-[45%] flex-shrink-0 object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
