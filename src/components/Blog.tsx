import { useTranslation } from "react-i18next";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <section
      id="blog"
      className=""
      aria-labelledby="blog-heading"
    >
      <span className="block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-3">
        {t("blog.label")}
      </span>
      <h2
        id="blog-heading"
        className="text-xl md:text-2xl font-normal text-black leading-[1.25] mb-6"
      >
        {t("blog.title")}
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[18px] gap-y-0"
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
              className="w-full h-[180px] md:h-[220px] relative"
              style={post.image ? {} : { background: post.bg }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <p className="text-xs font-bold text-[#5d5d5d] uppercase tracking-[1px] px-4 pt-3">
              {post.category}
            </p>
            <p className="text-base font-normal text-[#1d1d1d] leading-[1.4] px-4 pt-1">
              {post.title}
            </p>
            <p className=" text-[#5d5d5d] leading-[1.5] px-4 pt-1">
              {post.desc}
            </p>
            <a
              href={post.link}
              className=" font-bold text-[#010b15] no-underline hover:underline px-4 py-4 self-end"
            >
              Saiba mais →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
