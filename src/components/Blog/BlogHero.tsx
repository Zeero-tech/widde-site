import AnimatedButton from '@/components/AnimatedButton'

const destaque = {
  href: 'https://widde.io/blog/alta-performance-em-e-commerce-o-que-realmente-funciona-em-qualquer-segmento',
  image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/69bdb59cfdad17b6dc8d144e_Blog%20artigo%20FG.png',
  title: 'Alta performance em e-commerce: o que realmente funciona em qualquer segmento',
}

export default function BlogHero() {
  return (
    <section className="bg-surface pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-ink leading-none tracking-tight">
            Nosso Blog
          </h1>
        </div>

        {/* Card destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Destaque</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">
              {destaque.title}
            </h2>
            <AnimatedButton
              href={destaque.href}
              className="self-start text-white font-bold text-base px-6 py-3 rounded-full bg-brand"
            >
              Saiba mais
            </AnimatedButton>
          </div>

          <a href={destaque.href} className="group relative block rounded-2xl overflow-hidden aspect-video bg-ink">
            <img
              src={destaque.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </a>
        </div>

      </div>
    </section>
  )
}
