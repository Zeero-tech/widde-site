import AnimatedButton from '@/components/AnimatedButton'

const cases = [
  {
    href: 'https://widde.io/case/john-john',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68c2cc161322055b66b7b9b9_Capa%20John%20John.png',
    client: 'John John',
    title: 'Agregando valor ao produto com o Video Commerce',
  },
  {
    href: 'https://widde.io/case/majeste',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6836d7610a4f73f81a121f54_capa%20majeste%CC%81.avif',
    client: 'Majesté',
    title: 'Desafios da Moda Festa no E-commerce',
  },
  {
    href: 'https://widde.io/case/maximum-boxing',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/689de10eed3215b5ef778578_Maximum%20Boxing%20capa%20case.png',
    client: 'Maximum Boxing',
    title: 'Mais vendas, menos demanda para o SAC',
  },
  {
    href: 'https://widde.io/case/pa-concept',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682e157501d9ccc3cad72f62_capa%20PA.avif',
    client: 'PA Concept',
    title: 'Experiência de Loja Física no E-commerce',
  },
  {
    href: 'https://widde.io/case/alanis',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f47b93d9c5f901231e51b_Capa%20-%20Case%20Alanis.avif',
    client: 'Alanis Brand',
    title: 'Impacto do Video Commerce na categoria Plus Size',
  },
  {
    href: 'https://widde.io/case/shop-emme',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f71f1302a909a7f79efe8_Case%20Shop%20Emme.avif',
    client: 'Shop Emme',
    title: 'Mais de R$ 1 milhão em vendas com o Video Commerce na Black Friday',
  },
  {
    href: 'https://widde.io/case/lv-store',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f79295c6f9c8a6fa9eeaa_lvstore.avif',
    client: 'LV Store',
    title: 'Video Commerce em Moda Feminina',
  },
]

export default function CasesList() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black text-ink leading-none tracking-tight mb-12 md:mb-16">
          Todos os cases de sucesso
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cases.map((c) => (
            <div key={c.href} className="flex flex-col gap-4">
              <a href={c.href} className="group block rounded-2xl overflow-hidden aspect-video bg-surface-dark">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  {c.client}
                </span>
                <h3 className="text-xl font-black text-ink leading-snug">
                  {c.title}
                </h3>
                <div className="mt-auto pt-2">
                  <AnimatedButton
                    href={c.href}
                    className="inline-flex text-ink font-bold text-sm border border-ink/20 px-5 py-2.5 rounded-full hover:border-ink transition-colors"
                  >
                    Ver case de sucesso
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
