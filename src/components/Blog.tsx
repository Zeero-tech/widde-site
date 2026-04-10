import { blogPosts } from '@/data/blog'

export default function Blog() {
  return (
    <section id="blog" className="pt-14" aria-labelledby="blog-heading">
      <span className="block text-[11px] font-bold text-brand uppercase tracking-[2px] mb-3">
        Conteúdo
      </span>
      <h2 id="blog-heading" className="text-[28px] font-black text-black leading-[1.25] mb-6">
        Conheça nosso blog
      </h2>

      <div className="grid grid-cols-3 gap-[18px]" role="list">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            role="listitem"
            className="border border-[#E9E9E9] rounded-[14px] overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <div
              className="w-full h-[140px]"
              style={{ background: post.bg }}
            />
            <div className="p-4">
              <p className="text-[10px] font-bold text-brand uppercase tracking-[1px] mb-[7px]">
                {post.category}
              </p>
              <p className="text-[13px] font-bold text-black leading-[1.4] mb-2">{post.title}</p>
              <p className="text-[12px] text-[#888] leading-[1.5] mb-3">{post.desc}</p>
              <a href={post.link} className="text-[12px] font-bold text-brand no-underline hover:underline">
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
