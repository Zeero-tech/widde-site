import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { marked } from "marked";
import { useLenis } from "@/lib/useLenis";
import { getCaseBySlug } from "@/lib/cases";
import Nav from "@/components/Nav";
import Footer3 from "@/components/Footer3";
import AnimatedButton from "@/components/AnimatedButton";

export default function CasePost() {
  useLenis();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getCaseBySlug(slug) : null;

  const htmlContent = useMemo(() => {
    if (!post) return "";
    return marked(post.content) as string;
  }, [post]);

  if (!post) {
    return (
      <>
        <Nav />
        <main className="max-w-screen-xl mx-auto px-3 md:px-2 py-32 text-center">
          <h1 className="text-3xl font-normal text-black mb-4">Case não encontrado</h1>
          <a href="/cases" className="text-brand underline">Voltar aos cases</a>
        </main>
        <Footer3 />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.brand}: {post.title} | Widde Cases</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://widde.io/case/${post.slug}`} />
        <meta property="og:title" content={`${post.brand}: ${post.title}`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://widde.io/case/${post.slug}`} />
        {post.image && <meta property="og:image" content={`https://widde.io${post.image}`} />}
        <meta name="twitter:title" content={`${post.brand}: ${post.title}`} />
        <meta name="twitter:description" content={post.description} />
      </Helmet>

      <Nav />

      <main className="bg-white min-h-screen">
        {/* Cover */}
        {post.image && (
          <div className="w-full h-[240px] md:h-[480px] overflow-hidden bg-[#e5e5e5]">
            <img
              src={post.image}
              alt={post.brand}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-[800px] mx-auto px-5 md:px-6 py-10 md:py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#888] mb-8 flex items-center gap-1 flex-wrap">
            <a href="/" className="text-brand no-underline hover:underline">Home</a>
            <span>/</span>
            <a href="/cases" className="text-brand no-underline hover:underline">Cases</a>
            <span>/</span>
            <span>{post.brand}</span>
          </nav>

          {/* Category + brand */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-brand uppercase tracking-[2px]">
              {post.category}
            </span>
            <span className="text-[#ccc]">·</span>
            <span className="text-sm font-bold text-[#888]">{post.brand}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-normal text-black leading-[1.2] mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#5d5d5d] leading-[1.65] mb-10 border-l-2 border-brand pl-5">
            {post.description}
          </p>

          {/* Metrics */}
          {post.metrics && post.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-[#f6f6f6] rounded-[16px]">
              {post.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-normal text-brand leading-none">
                    {m.value}
                  </span>
                  <span className="text-xs text-[#888] leading-[1.4]">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quote */}
          {post.quote && (
            <blockquote className="border-l-2 border-brand pl-5 mb-12">
              <p className="text-lg md:text-xl text-[#1d1d1d] italic leading-[1.65] mb-2">
                "{post.quote}"
              </p>
              {post.quoteAuthor && (
                <cite className="text-sm text-[#888] not-italic">{post.quoteAuthor}</cite>
              )}
            </blockquote>
          )}

          {/* Content */}
          <article
            className="
              [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-normal [&_h2]:text-black [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:leading-[1.3]
              [&_h3]:text-xl [&_h3]:font-normal [&_h3]:text-black [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-[1.35]
              [&_p]:text-base [&_p]:md:text-lg [&_p]:text-[#444] [&_p]:leading-[1.75] [&_p]:mb-5
              [&_ul]:list-none [&_ul]:p-0 [&_ul]:mb-5
              [&_li]:text-base [&_li]:md:text-lg [&_li]:text-[#444] [&_li]:leading-[1.65] [&_li]:mb-2 [&_li]:pl-5 [&_li]:relative
              [&_li]:before:content-['–'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-brand [&_li]:before:font-bold
              [&_ol]:pl-5 [&_ol]:mb-5
              [&_ol_li]:text-base [&_ol_li]:md:text-lg [&_ol_li]:text-[#444] [&_ol_li]:leading-[1.65] [&_ol_li]:mb-2 [&_ol_li]:list-decimal [&_ol_li]:before:content-none
              [&_strong]:font-bold [&_strong]:text-black
              [&_a]:text-brand [&_a]:underline
              [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:my-6 [&_blockquote]:italic
              [&_hr]:border-[#e9e9e9] [&_hr]:my-10
            "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-[#e9e9e9]">
            <p className="text-lg text-[#5d5d5d] mb-6">
              Quer resultados como os da {post.brand} no seu e-commerce?
            </p>
            <AnimatedButton
              href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
              className="inline-block bg-brand text-white font-bold text-lg px-7 py-3 rounded-full no-underline"
            >
              Falar com vendas
            </AnimatedButton>
          </div>
        </div>
      </main>

      <Footer3 />
    </>
  );
}
