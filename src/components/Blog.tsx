import { useTranslation } from "react-i18next";
import { blogPosts } from "@/data/blog";
import SectionTitle from "./SectionTitle";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <section
      id="blog"
      className=""
      aria-labelledby="blog-heading"
    >
      <SectionTitle
        label={t("blog.label")}
        title={t("blog.title")}
        id="blog-heading"
        className="mb-6"
      />

      {/* < xl (1280px): horizontal carousel */}
      <div
        className="xl:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mr-5 md:-mr-10 lg:-mr-12 pr-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="flex-shrink-0 w-[90vw] md:w-[60vw] lg:w-[45vw] snap-start rounded-[14px] overflow-hidden shadow-[0_0_0_1px_rgb(233,233,233)] flex flex-col"
          >
            <div
              className="w-full h-[180px] md:h-[220px] relative"
              style={post.image ? {} : { background: post.bg }}
            >
              {post.image && (
                <img
                  src={post.image}
                  srcSet={`${post.image.replace(/(\.[^.]+)$/, '-p-500$1')} 500w, ${post.image.replace(/(\.[^.]+)$/, '-p-800$1')} 800w, ${post.image.replace(/(\.[^.]+)$/, '-p-1080$1')} 1080w, ${post.image} 1600w`}
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 45vw"
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <div className="flex flex-col flex-1 p-4 gap-1">
              <p className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-[1px]">
                {post.category}
              </p>
              <p className="text-lg md:text-xl font-normal text-charcoal leading-[1.4]">
                {post.title}
              </p>
              <p className="text-base md:text-lg text-text-muted leading-[1.5]">
                {post.desc}
              </p>
              <a
                href={post.link}
                className="font-bold text-navy no-underline hover:underline mt-auto pt-3"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
        {/* Trailing spacer to match page padding */}
        <div className="flex-shrink-0" />
      </div>

      {/* >= xl (1280px): grid */}
      <div
        className="hidden xl:grid xl:grid-cols-3 gap-x-[18px] gap-y-0"
        style={{ gridTemplateRows: "auto auto auto auto auto", rowGap: 0 }}
        role="list"
      >
        {blogPosts.map((post) => (
          <div
            key={post.title}
            role="listitem"
            className="rounded-[14px] overflow-hidden transition-shadow shadow-[0_0_0_1px_rgb(233,233,233)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            style={{
              display: "grid",
              gridRow: "span 5",
              gridTemplateRows: "subgrid",
              rowGap: "4px",
            }}
          >
            <div
              className="w-full h-[180px] md:h-[200px] lg:h-[220px] relative"
              style={post.image ? {} : { background: post.bg }}
            >
              {post.image && (
                <img
                  src={post.image}
                  srcSet={`${post.image.replace(/(\.[^.]+)$/, '-p-500$1')} 500w, ${post.image.replace(/(\.[^.]+)$/, '-p-800$1')} 800w, ${post.image.replace(/(\.[^.]+)$/, '-p-1080$1')} 1080w, ${post.image} 1600w`}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <p className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-[1px] px-4 pt-3">
              {post.category}
            </p>
            <p className="text-base md:text-xl lg:text-2xl font-normal text-charcoal leading-[1.4] px-4 pt-1">
              {post.title}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-text-muted leading-[1.5] px-4 pt-1">
              {post.desc}
            </p>
            <a
              href={post.link}
              className="text-base md:text-base lg:text-lg font-bold text-navy no-underline hover:underline px-4 py-4 self-end"
            >
              Saiba mais →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
