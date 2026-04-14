import { blogPosts } from "@/data/blog";
import SectionTitle from "./SectionTitle";

export default function Blog3() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="py-10 md:py-20">
      <SectionTitle label="Blog" title="Últimos artigos" className="mb-8" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left: featured large card */}
        <a href={featured.link} className="no-underline block">
          <div className="relative h-full min-h-[360px] md:min-h-[500px] overflow-hidden rounded-xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute right-6 bottom-6 left-6 space-y-3">
              <span className="inline-block text-xs font-medium text-white bg-brand rounded-sm px-2 py-0.5">
                {featured.category}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                {featured.title}
              </h3>
            </div>
          </div>
        </a>

        {/* Right: 2 stacked cards */}
        <div className="flex flex-col gap-6">
          {rest.map((post) => (
            <a key={post.title} href={post.link} className="no-underline block flex-1">
              <div className="relative h-full min-h-[230px] overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute right-6 bottom-6 left-6 space-y-3">
                  <span className="inline-block text-xs font-medium text-white bg-brand rounded-sm px-2 py-0.5">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
