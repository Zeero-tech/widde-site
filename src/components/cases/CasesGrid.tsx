import { useState, useEffect } from "react";

type Case = {
  client: string;
  title: string;
  href: string;
  image: string;
};

const cases: Case[] = [
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

export default function CasesGrid() {
  const [showAll, setShowAll] = useState(false);
  const [mobileLimit, setMobileLimit] = useState(4);

  useEffect(() => {
    const update = () => setMobileLimit(window.innerWidth < 768 ? 2 : 4);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const visible = showAll ? cases : cases.slice(0, mobileLimit);

  return (
    <section id="cases" className="bg-[#f6f6f6] w-full relative overflow-hidden">
      <div className="pt-0 pb-16 w-full h-full">
        <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">

          <div data-reveal className="flex flex-col items-start w-full mb-0">
            <h2 className="text-black tracking-[-0.03em] mt-5 mb-10 text-[2.5rem] font-normal leading-[1.2] block">
              Todos os cases de sucesso
            </h2>
          </div>

          <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-24 md:gap-x-[3.5rem]"
          >
            {visible.map((c) => (
              <div
                key={c.href}
                data-reveal
                role="listitem"
                className="h-full"
              >
                <div className="bg-[#f6f6f6] flex flex-col h-full relative overflow-hidden max-md:bg-[#e5e5e5] max-md:rounded-2xl">
                  <a
                    href={c.href}
                    className="aspect-[1080/697] rounded-lg flex-none w-full relative overflow-hidden block"
                  >
                    <img
                      src={c.image}
                      loading="lazy"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </a>
                  <div className="flex flex-col items-start h-full pt-2 gap-2 max-md:px-3 max-md:pb-3">
                    <div className="uppercase text-sm mt-1 text-[#4b4b4b]">
                      {c.client}
                    </div>
                    <div className="mb-2">
                      <h3 className="text-[#373739] tracking-[-0.01em] mt-1 mb-2 text-2xl font-bold leading-[1.2]">
                        {c.title}
                      </h3>
                    </div>
                    <div className="mt-auto">
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

          {!showAll && cases.length > mobileLimit && (
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
  );
}
