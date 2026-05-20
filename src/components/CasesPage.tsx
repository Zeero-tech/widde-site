import { lazy, Suspense, useState } from "react";
import { useLenis } from "@/lib/useLenis";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import Nav from "@/components/Nav";

function lazyWithRetry(factory: () => Promise<any>) {
  return lazy(() =>
    factory().catch(() => {
      if (!sessionStorage.getItem("chunk-reloaded")) {
        sessionStorage.setItem("chunk-reloaded", "1");
        window.location.reload();
      }
      return { default: () => null };
    }),
  );
}

const Newsletter = lazyWithRetry(() => import("@/components/Newsletter"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));

const cases = [
  {
    client: "John John",
    title: "Agregando valor ao produto com o Video Commerce",
    href: "/case/john-john",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/68c2cc161322055b66b7b9b9_Capa%20John%20John.png",
  },
  {
    client: "Majesté",
    title: "Desafios da Moda Festa no E-commerce",
    href: "/case/majeste",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/6836d7610a4f73f81a121f54_capa%20majeste%CC%81.avif",
  },
  {
    client: "Maximum Boxing",
    title: "Mais vendas, menos demanda para o SAC",
    href: "/case/maximum-boxing",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/689de10eed3215b5ef778578_Maximum%20Boxing%20capa%20case.png",
  },
  {
    client: "PA Concept",
    title: "Experiência de Loja Física no E-commerce",
    href: "/case/pa-concept",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682e157501d9ccc3cad72f62_capa%20PA.avif",
  },
  {
    client: "Alanis Brand",
    title: "Impacto do Video Commerce na categoria Plus Size",
    href: "/case/alanis",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f47b93d9c5f901231e51b_Capa%20-%20Case%20Alanis.avif",
  },
  {
    client: "Shop Emme",
    title: "Mais de R$ 1 milhão em vendas com o Video Commerce na Black Friday",
    href: "/case/shop-emme",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f71f1302a909a7f79efe8_Case%20Shop%20Emme.avif",
  },
  {
    client: "LV Store",
    title: "Video Commerce em Moda Feminina",
    href: "/case/lv-store",
    image:
      "https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/682f79295c6f9c8a6fa9eeaa_lvstore.avif",
  },
];

export default function CasesPage() {
  useLenis();
  useRevealOnScroll();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? cases : cases.slice(0, 4);

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: "#f6f6f6" }}>
        {/* Hero — destaque Mamô */}
        <section className="pt-8 pb-14">
          <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
            <h1
              className="font-normal text-black leading-[1.15] mb-6"
              style={{ fontSize: "3rem" }}
            >
              Cases de sucesso
            </h1>
            <p className="text-[#373739] text-lg mb-8">
              Veja como tem sido <strong>os resultados</strong> de quem usa as{" "}
              <strong>soluções de Video Commerce</strong> da Widde.
            </p>

            <a
              href="/case/mamo"
              className="no-underline flex flex-col md:flex-row overflow-hidden rounded-2xl"
              style={{ minHeight: "520px" }}
            >
              {/* Imagem — esquerda */}
              <div
                className="relative overflow-hidden group"
                style={{ flex: "0 0 58%", minHeight: "320px" }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  style={{
                    backgroundImage:
                      "url('https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/695d2d0b1016c8df8923096d_capa%20youtube%201.png')",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "blur(10px)",
                    transform: "scale(1.05)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ padding: "2rem", zIndex: 2 }}
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/65596f4cd628c3fb6449f35f/695d2d0b1016c8df8923096d_capa%20youtube%201.png"
                    alt="Construindo narrativas com Video Commerce"
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      borderRadius: "1rem",
                      width: "100%",
                      position: "relative",
                    }}
                  />
                </div>
              </div>

              {/* Conteúdo — direita */}
              <div
                className="flex flex-col justify-center px-10 py-12 md:py-16"
                style={{ flex: "0 0 42%", backgroundColor: "#e5e5e5" }}
              >
                <span
                  className="inline-block border text-xs font-normal px-3 py-1 rounded-full mb-5 w-fit"
                  style={{ color: "#2667f8", borderColor: "#2667f8" }}
                >
                  Destaque
                </span>
                <h2
                  className="font-normal text-black leading-[1.2] mb-10"
                  style={{ fontSize: "2.5rem" }}
                >
                  Construindo narrativas com Video Commerce
                </h2>
                <span className="inline-flex items-center justify-center bg-brand text-white font-bold text-base px-7 py-[13px] rounded-full w-fit">
                  Ver case de sucesso
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Todos os cases */}
        <section id="cases" className="section_all-posts">
          <div className="padding-section-large is--bottom-only">
            <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
              <div className="heading-wrapper align-left">
                <h2 className="heading-style-h2">Todos os cases de sucesso</h2>
              </div>
              <div className="filter-list w-dyn-list">
                <div
                  role="list"
                  className="blog_post-wrapper is--cases w-dyn-items"
                >
                  {visible.map((c) => (
                    <div
                      key={c.href}
                      role="listitem"
                      className="blog_post-item-wrapper w-dyn-item"
                    >
                      <div className="cases_post-item">
                        <a
                          href={c.href}
                          className="blog_post-thumbnail-wrapper w-inline-block"
                        >
                          <img
                            src={c.image}
                            loading="lazy"
                            alt=""
                            className="blog_post-thumbnail"
                          />
                        </a>
                        <div className="blog_post-content">
                          <div className="cases_client-name">{c.client}</div>
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-style-h3">{c.title}</h3>
                          </div>
                          <div className="align-bottom">
                            <a
                              href={c.href}
                              className="inline-flex items-center text-base font-bold text-black no-underline hover:text-brand transition-colors"
                            >
                              Ver case de sucesso →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!showAll && cases.length > 4 && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 bg-brand text-white font-bold text-base px-8 py-4 rounded-full cursor-pointer border-none hover:opacity-90 transition-opacity"
                  >
                    Ver todos os cases
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
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
