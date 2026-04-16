import AnimatedButton from '@/components/AnimatedButton'

const destaque = {
  href: 'https://widde.io/case/mamo',
  image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/695d2d0b1016c8df8923096d_capa%20youtube%201.png',
  title: 'Construindo narrativas com Video Commerce',
}

export default function CasesHero() {
  return (
    <section className="bg-surface pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-ink leading-none tracking-tight mb-4">
            Cases de sucesso
          </h1>
          <p className="text-xl md:text-2xl text-text-body leading-snug max-w-2xl">
            Veja como tem sido <strong>os resultados</strong> de quem usa as{' '}
            <strong>soluções de Video Commerce</strong> da Widde.
          </p>
        </div>

        {/* Card destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <a href={destaque.href} className="group relative block rounded-2xl overflow-hidden aspect-video bg-ink">
            <img
              src={destaque.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </a>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Destaque</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">
              {destaque.title}
            </h2>
            <AnimatedButton
              href={destaque.href}
              className="self-start text-white font-bold text-base px-6 py-3 rounded-full bg-brand"
            >
              Ver case de sucesso
            </AnimatedButton>
          </div>
        </div>

      </div>
    </section>
  )
}
