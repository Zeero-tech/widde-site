import { blogPosts } from "@/data/blog";
import SectionTitle from "./SectionTitle";

const tags = [
  "Video Commerce",
  "Live Commerce",
  "E-commerce",
  "Conversão",
  "Experiência",
  "Engajamento",
];

export default function Blog2() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-10 md:py-20">
      <SectionTitle label="Blog" title="Insights e tendências" className="mb-8" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* Featured large card */}
        <div className="grow">
          <a href={featured.link} className="no-underline block">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[360px] md:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block text-xs font-bold text-white bg-brand rounded-full px-3 py-1 mb-3">
                  {featured.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight max-w-[320px]">
                  {featured.title}
                </h3>
              </div>
            </div>
          </a>
        </div>

        {/* Middle column: card + marquee tags */}
        <div className="flex shrink-0 flex-col gap-5 xl:w-[328px]">
          {rest[0] && (
            <a href={rest[0].link} className="no-underline block">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src={rest[0].image}
                  alt={rest[0].title}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-black/0 to-black/85 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-6 bottom-6 left-6">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {rest[0].title}
                  </h3>
                </div>
              </div>
            </a>
          )}

          {/* Tags marquee card */}
          <div className="rounded-xl bg-brand overflow-hidden py-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 overflow-hidden">
                <div className="flex shrink-0 gap-4 animate-ticker">
                  {[...tags, ...tags].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex shrink-0 items-center rounded-full bg-white text-black text-sm font-medium px-3 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 overflow-hidden" style={{ direction: "rtl" }}>
                <div className="flex shrink-0 gap-4 animate-ticker" style={{ direction: "ltr" }}>
                  {[...tags, ...tags].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex shrink-0 items-center rounded-full bg-white text-black text-sm font-medium px-3 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 mt-4">
              <span className="text-lg font-semibold text-white">Ver todas categorias</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-black text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex grow flex-col gap-5 md:max-xl:col-span-2 md:max-xl:flex-row">
          {rest[1] && (
            <a href={rest[1].link} className="no-underline block flex-1">
              <div className="group relative overflow-hidden rounded-xl h-full">
                <img
                  src={rest[1].image}
                  alt={rest[1].title}
                  className="w-full h-full min-h-[240px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-xs font-normal text-white border border-white/30 rounded-full px-2 py-0.5">
                    {rest[1].category}
                  </span>
                </div>
                <div className="absolute right-6 bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white leading-tight max-w-xs">
                    {rest[1].title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mt-2">
                    {rest[1].desc}
                  </p>
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
