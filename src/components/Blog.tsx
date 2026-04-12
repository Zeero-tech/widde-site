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

      <div className="grid grid-cols-3 gap-[18px]" role="list">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            role="listitem"
            className="rounded-[14px] overflow-hidden transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col"
          >
            <div
              className="w-full h-[140px] flex-shrink-0"
              style={{ background: post.bg }}
            />
            <div className="p-4 flex flex-col flex-1">
              <p className="text-[10px] font-bold text-[#5d5d5d] uppercase tracking-[1px] mb-[7px]">
                {post.category}
              </p>
              <p className="text-[16px] font-normal text-[#1d1d1d] leading-[1.4] mb-2 flex-1">{post.title}</p>
              <p className="text-[14px] text-[#5d5d5d] leading-[1.5] mb-6">{post.desc}</p>
              <a href={post.link} className="text-[14px] font-bold text-[#010b15] no-underline hover:underline">
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
