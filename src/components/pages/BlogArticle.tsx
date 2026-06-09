import { Suspense, useState, useRef } from "react";
import Nav from "@/components/core/Nav";
import VCCta from "@/components/VideoCommerce/VCCta";
import Newsletter from "@/components/core/Newsletter";
import Footer from "@/components/core/Footer";
import { allBlogPosts, getRecentPosts } from "@/data/blogPosts";

export type BlogArticleProps = {
  title: string;
  category: string;
  date: string;
  readingTime?: string;
  coverImage: string;
  coverImageAlt?: string;
  children: React.ReactNode;
  currentSlug?: string;
  author?: string;
  authorUrl?: string;
};

export default function BlogArticle({
  title,
  category,
  date,
  readingTime,
  coverImage,
  coverImageAlt,
  children,
  currentSlug,
  author,
  authorUrl,
}: BlogArticleProps) {
  const [query, setQuery] = useState("");
  const articleRef = useRef<HTMLDivElement>(null);

  const recentPosts = getRecentPosts(currentSlug);

  const filtered = query.trim()
    ? allBlogPosts
        .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : recentPosts;

  return (
    <>
      <Nav />
      <main>
        {/* Article header */}
        <section className="bg-surface pt-12 md:pt-16 pb-0">
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
            <div className="max-w-[860px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-brand uppercase tracking-wide">
                  {category}
                </span>
                <span className="text-xs text-[#888]">{date}</span>
                <span className="text-xs text-[#888]">·</span>
                {authorUrl ? (
                  <a
                    href={authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#888] no-underline hover:text-brand transition-colors"
                  >
                    Por {author ?? "Widde"}
                  </a>
                ) : (
                  <span className="text-xs text-[#888]">Por {author ?? "Widde"}</span>
                )}
              </div>
              <h1
                className="text-black font-normal leading-[1.2] mb-4"
                style={{
                  fontSize: "38px",
                  letterSpacing: "-0.03em",
                  marginTop: "20px",
                  marginBottom: "40px",
                  fontWeight: 400,
                }}
              >
                {title}
              </h1>
              {readingTime && (
                <div className="flex items-center gap-2 mb-8" style={{ color: "#888" }}>
                  <span style={{ width: 18, height: 18, display: "inline-flex", flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
                    </svg>
                  </span>
                  <span className="text-sm">{readingTime}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content + Aside */}
        <div ref={articleRef} className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto pb-20 md:pb-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Rich text content */}
            <article className="flex-1 min-w-0">
              {/* Cover image */}
              <img
                src={coverImage}
                alt={coverImageAlt ?? title}
                loading="eager"
                className="w-full rounded-xl mb-10 md:mb-14"
                style={{ objectFit: "contain", height: "auto" }}
              />
              <div className="blog-richtext">{children}</div>
            </article>

            {/* Aside */}
            <aside className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 lg:sticky" style={{ top: 72 }}>
              {/* Search */}
              <div className="flex gap-2 mb-8">
                <input
                  type="search"
                  placeholder="Faça sua busca"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-sm border border-black/20 rounded-full px-4 py-[9px] outline-none focus:border-black transition-colors bg-transparent"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-sm font-bold bg-black text-white px-4 py-[9px] rounded-full border-none cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Recent posts */}
              <h3 className="text-base font-bold text-black mb-4">
                Posts Recentes
              </h3>
              <div className="flex flex-col gap-4">
                {filtered.length > 0 ? (
                  filtered.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex flex-col gap-2 no-underline group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <h4 className="text-sm text-black leading-[1.4] group-hover:text-brand transition-colors m-0">
                        {post.title}
                      </h4>
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-[#888]">Nenhum post encontrado.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Suspense>
        <VCCta />
      </Suspense>
      <Suspense>
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink">
          <Newsletter />
        </div>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
