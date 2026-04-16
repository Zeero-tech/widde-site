import { useState } from 'react'
import AnimatedButton from '@/components/AnimatedButton'

const posts = [
  {
    href: 'https://widde.io/blog/report-video-commerce-brasil-2025',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/69a5dc73c9b53384264daa9a_Capa%20do%20blog%20report.png',
    date: '02.03.2026',
    category: 'Dados no e-commerce',
    title: 'Report Video Commerce Brasil 2025',
    description: 'Dados reais de operações brasileiras, cases de marcas que já aplicam o Video Commerce na prática.',
  },
  {
    href: 'https://widde.io/blog/checklist-de-preparacao-5-ajustes-no-seu-e-commerce-ganhar-vantagem-competitiva',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/698b673c48ba63b42f2c37f6_Blog%20Checklist%20copiar.png',
    date: '10.02.2026',
    category: 'Tendências e-commerce',
    title: 'Checklist de preparação: 5 ajustes no seu e-commerce ganhar vantagem competitiva',
    description: 'Em 2026, crescer não será apenas uma questão de tráfego, mas de experiência, narrativa e eficiência.',
  },
  {
    href: 'https://widde.io/blog/como-fidelizar-os-clientes-no-e-commerce',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/69736a5d3653bac3dde3eef9_Blog%20como%20fidelizar%20no%20e-commerce.png',
    date: '23.01.2026',
    category: 'Video Commerce',
    title: 'Como fidelizar os clientes no e-commerce',
    description: 'As pessoas não seguem mais um caminho previsível entre descobrir uma marca, avaliar opções e comprar.',
  },
  {
    href: 'https://widde.io/blog/shoppable-videos-a-estrategia-que-vai-invadir-o-video-commerce-em-2026',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/696a4136d272a14015d442ea_capa%20shoppable%20videos%202.png',
    date: '16.01.2026',
    category: 'Tendências e-commerce',
    title: 'Shoppable videos: A estratégia que vai invadir o Video Commerce em 2026',
    description: 'Em um cenário em que a atenção do consumidor é cada vez mais disputada e a jornada de compra mais fragmentada.',
  },
  {
    href: 'https://widde.io/blog/guia-estrategico-do-video-commerce-as-tendencias-que-vao-permear-em-2026',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/696141384fe221769b9e530a_Thumbnail.png',
    date: '09.01.2026',
    category: 'Tendências e-commerce',
    title: 'Guia estratégico do Video Commerce: as tendências que vão permear em 2026',
    description: 'O vídeo deixou de ser apenas um formato de comunicação para se consolidar como o principal motor de conversão.',
  },
  {
    href: 'https://widde.io/blog/as-5-principais-licoes-que-aprendemos-com-o-video-commerce-em-2025',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/694aa6a3f6d28247ae460cd4_5%20principais%20li%C3%A7%C3%B5es%20de%202025%20(2).png',
    date: '23.12.2025',
    category: 'Tendências e-commerce',
    title: 'As 5 principais lições que aprendemos com o Video Commerce em 2025',
    description: 'A partir do que observamos em 2025, estas são as cinco principais lições para marcas que querem crescer com vídeo.',
  },
  {
    href: 'https://widde.io/blog/a-nova-era-das-compras-online-como-o-tiktok-shop-se-tornou-o-maior-canal-de-descoberta-do-e-commerce',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6932f3e08775eaf14aea5fcf_Coolab%20com%20Flavio%20B%201.png',
    date: '05.12.2025',
    category: 'Tendências e-commerce',
    title: 'A nova era das compras online: como o TikTok Shop se tornou o maior canal de descoberta do e-commerce',
    description: 'Entenda por que o TikTok Shop está redefinindo o e-commerce. Um guia completo sobre o fenômeno.',
  },
  {
    href: 'https://widde.io/blog/como-o-video-se-tornou-o-motor-das-conversoes-na-black-friday',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/69137f6f444d325befaefe49_Como%20o%20v%C3%ADdeo%20se%20tornou%20o%20motor%20das%20convers%C3%B5es.png',
    date: '10.11.2025',
    category: 'Tendências e-commerce',
    title: 'Como o vídeo se tornou o motor das conversões na Black Friday',
    description: 'Em um cenário de anúncios disputados, carrinhos abandonados e consumidores exigentes, o vídeo fez a diferença.',
  },
  {
    href: 'https://widde.io/blog/sua-loja-online-esta-pronta-para-o-discovery-commerce-aprenda-com-o-tiktok-shop',
    image: 'https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68e675e24e75460b85777d33_Blog_%20Sua%20loja%20online%20est%C3%A1%20pronta%20para%20o%20Discovery%20Commerce.png',
    date: '08.10.2025',
    category: 'Tendências e-commerce',
    title: 'Sua loja online está pronta para o Discovery Commerce? Aprenda com o TikTok Shop',
    description: 'A lógica do Discovery Commerce virou o motor de plataformas como o TikTok Shop. E o seu e-commerce?',
  },
]

const categories = ['Ver Todos', 'Dados no e-commerce', 'Tendências e-commerce', 'Video Commerce']

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('Ver Todos')

  const filtered = activeCategory === 'Ver Todos'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-20 max-w-screen-xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-black text-ink leading-none tracking-tight mb-4">
          Veja mais conteúdos
        </h2>
        <p className="text-lg text-text-muted mb-10 md:mb-12">
          Artigos com insights, dicas e tendências para o seu e-commerce.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-colors ${
                activeCategory === cat
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white text-ink border-ink/20 hover:border-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((post) => (
            <div key={post.href} className="flex flex-col gap-4">
              <a href={post.href} className="group relative block rounded-2xl overflow-hidden aspect-video bg-surface-dark">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-white/90 text-ink px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </a>
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-sm text-text-muted">{post.date}</span>
                <h3 className="text-xl font-black text-ink leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto pt-2">
                  <AnimatedButton
                    href={post.href}
                    className="inline-flex text-ink font-bold text-sm border border-ink/20 px-5 py-2.5 rounded-full hover:border-ink transition-colors"
                  >
                    Saiba mais
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
