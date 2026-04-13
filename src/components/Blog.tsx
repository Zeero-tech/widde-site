import { blogPosts } from '@/data/blog'

export default function Blog() {
  return (
    <section id="blog" className="py-30" aria-labelledby="blog-heading">
      <span className="block text-[11px] font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-3">
        Conteúdo
      </span>
      <h2 id="blog-heading" className="text-[28px] font-normal text-black leading-[1.25] mb-6">
        Conheça nosso blog
      </h2>

      <div
        className="grid grid-cols-3 gap-x-[18px] gap-y-0"
        style={{ gridTemplateRows: 'auto auto auto auto auto', rowGap: 0 }}
        role="list"
      >
        {blogPosts.map((post, i) => (
          <div
            key={i}
            role="listitem"
            className="rounded-[14px] overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            style={{ display: 'grid', gridRow: 'span 5', gridTemplateRows: 'subgrid', rowGap: '4px' }}
          >
            <div
              className="w-full h-[220px] relative"
              style={post.image ? {} : { background: post.bg }}
            >
              {post.image && (
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              )}
            </div>
            <p className="text-[10px] font-bold text-[#5d5d5d] uppercase tracking-[1px] px-4 pt-3">
              {post.category}
            </p>
            <p className="text-[16px] font-normal text-[#1d1d1d] leading-[1.4] px-4 pt-1">{post.title}</p>
            <p className="text-[14px] text-[#5d5d5d] leading-[1.5] px-4 pt-1">{post.desc}</p>
            <a href={post.link} className="text-[14px] font-bold text-[#010b15] no-underline hover:underline px-4 py-4 self-end">
              Saiba mais →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
