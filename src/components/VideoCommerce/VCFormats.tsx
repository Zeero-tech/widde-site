import { useState } from "react";
import SectionTitle from "@/components/core/SectionTitle";
import { vcFormatVideos } from "@/data/vcFormats";

const formats = [
  {
    name: "Stories",
    desc: "Ofereça uma experiência interativa em todas as páginas do seu e-commerce com Stories. Em um formato vertical e em tela cheia, os vídeos capturam a atenção do consumidor, aumentam a imersão e ajudam a tirar dúvidas sobre os produtos com mais clareza. Tudo isso em uma experiência dinâmica e familiar, no formato que o consumidor já conhece e consome todos os dias.",
    onde: ["Home", "PDP"],
    videoIdx: 0,
  },
  {
    name: "Carrossel de Vídeos",
    desc: "Destaque diferentes produtos em um formato dinâmico e envolvente com o Carrossel de Vídeos. Apresente múltiplos itens em sequência e incentive o visitante a descobrir mais produtos sem sair da página, aumentando a navegação e a exploração do catálogo de forma natural.",
    onde: ["Home", "Categorias"],
    videoIdx: 1,
  },
  {
    name: "Destaques da Loja",
    desc: "Crie uma experiência semelhante aos Destaques do Instagram. Organize vídeos por categorias e facilite o acesso às informações mais importantes, ajudando o cliente a tirar dúvidas, encontrar o que procura de forma objetiva.",
    onde: ["Home", "Categorias"],
    videoIdx: 2,
  },
  {
    name: "Destaques de Produto",
    desc: "Organize vídeos por tema diretamente na página do produto com os Destaques de Produto. Apresente conteúdos como modo de uso, materiais, diferenciais e inspirações para responder dúvidas de forma mais objetiva, eliminar objeções e dar mais segurança ao cliente antes da compra.",
    onde: ["PDP"],
    videoIdx: 3,
  },
  {
    name: "Explorar",
    desc: 'Uma página 100% dedicada a vídeos, o "Explorar" da sua loja. Reúna todos os vídeos dos seus produtos em uma experiência dinâmica e imersiva, com filtros estratégicos para facilitar a navegação e recursos que incentivam a descoberta e a conversão direta de produtos.',
    onde: ["Página exclusiva"],
    videoIdx: 4,
  },
];

const DURATION = 300;

export default function VCFormats() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dir, setDir] = useState<"left" | "right">("left");
  const current = formats[activeIdx];

  const navigate = (nextIdx: number) => {
    const goingNext = nextIdx > activeIdx;
    setDir(goingNext ? "left" : "right");
    setVisible(false);
    setTimeout(() => {
      setActiveIdx(nextIdx);
      setDir(goingNext ? "right" : "left");
      setVisible(true);
    }, DURATION);
  };

  const slideStyle: React.CSSProperties = {
    transition: `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1), opacity ${DURATION}ms ease`,
    transform: visible
      ? "translateX(0)"
      : dir === "left"
        ? "translateX(-40px)"
        : "translateX(40px)",
    opacity: visible ? 1 : 0,
  };

  return (
    <section aria-labelledby="formatos-heading">
      <SectionTitle
        label="Formatos"
        title="Todos os formatos de vídeo que sua loja precisa"
        id="formatos-heading"
        className="mb-9"
      />

      {/* Mobile: phone mockup carousel */}
      <div className="md:hidden flex flex-col items-center gap-16 px-4">
        {/* Phone mockup */}
        <div
          className="relative w-[60%]"
          style={{ aspectRatio: "9/19.5", ...slideStyle }}
        >
          {/* Video clipped to inner radius */}
          <div className="absolute inset-[6px] rounded-[30px] overflow-hidden z-0">
            <video
              key={vcFormatVideos[current.videoIdx]?.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {vcFormatVideos[current.videoIdx]?.webm && (
                <source
                  src={vcFormatVideos[current.videoIdx].webm}
                  type="video/webm"
                />
              )}
              <source
                src={vcFormatVideos[current.videoIdx]?.src ?? ""}
                type="video/mp4"
              />
            </video>
          </div>
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[36px] border-[6px] border-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,0.55)] z-10 pointer-events-none" />
          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20 pointer-events-none" />
        </div>

        {/* Text + nav */}
        <div className="w-full flex flex-col gap-2">
          <div
            className="text-xl font-bold text-black leading-tight"
            style={slideStyle}
          >
            {current.name}
          </div>
          <div
            className="text-sm text-[#555] leading-relaxed"
            style={slideStyle}
          >
            {current.desc}
          </div>
          <div className="text-xs text-[#aaa]" style={slideStyle}>
            Aparece em:
            {current.onde.map((lugar) => (
              <span
                key={lugar}
                className="bg-[#F0F0F0] rounded text-xs font-bold text-[#555] px-[7px] py-[2px] ml-1"
              >
                {lugar}
              </span>
            ))}
          </div>

          {/* Dots + nav buttons */}
          <div className="flex flex-col gap-2 mt-4 items-end">
            <div className="flex gap-1.5">
              {formats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-5 bg-black" : "w-1.5 bg-black/20"}`}
                  aria-label={`Formato ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {activeIdx > 0 && (
                <button
                  onClick={() => navigate(activeIdx - 1)}
                  className="flex items-center gap-2 bg-transparent text-black text-sm font-bold px-4 py-2.5 rounded-full w-fit border border-black/20 hover:border-black transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  Anterior
                </button>
              )}
              {activeIdx < formats.length - 1 && (
                <button
                  onClick={() => navigate(activeIdx + 1)}
                  className="flex items-center gap-2 bg-black text-white text-sm font-bold px-4 py-2.5 rounded-full w-fit"
                >
                  Próximo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: phone mockup carousel */}
      <div className="hidden md:flex items-center gap-12 lg:gap-20 xl:gap-24 md:px-4 lg:px-10 xl:px-16 md:h-[62vh] lg:h-[68vh] xl:h-[70vh]">
        {/* Phone mockup */}
        <div
          className="relative flex-shrink-0 h-full"
          style={{ aspectRatio: "9.2/19.5", ...slideStyle }}
        >
          {/* Video clipped to inner radius */}
          <div className="absolute inset-[8px] rounded-[28px] overflow-hidden z-0">
            <video
              key={vcFormatVideos[current.videoIdx]?.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              {vcFormatVideos[current.videoIdx]?.webm && (
                <source
                  src={vcFormatVideos[current.videoIdx].webm}
                  type="video/webm"
                />
              )}
              <source
                src={vcFormatVideos[current.videoIdx]?.src ?? ""}
                type="video/mp4"
              />
            </video>
          </div>
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[36px] border-[8px] border-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,0.75)] z-10 pointer-events-none" />
          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20 pointer-events-none" />
        </div>

        {/* Right side: text + nav */}
        <div className="flex flex-col justify-between flex-1 h-full py-6 lg:py-8">
          <div style={slideStyle}>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-5 leading-tight">
              {current.name}
            </div>
            <div className="text-base lg:text-lg text-[#555] leading-relaxed mb-5 lg:mb-6">
              {current.desc}
            </div>
            <div className="text-sm lg:text-base text-[#aaa]">
              Aparece em:
              {current.onde.map((lugar) => (
                <span
                  key={lugar}
                  className="bg-[#F0F0F0] rounded text-sm lg:text-base font-bold text-[#555] px-[7px] py-[2px] ml-1"
                >
                  {lugar}
                </span>
              ))}
            </div>
          </div>

          {/* Dots + nav buttons */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              {formats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIdx ? "w-6 bg-black" : "w-2 bg-black/20"}`}
                  aria-label={`Formato ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {activeIdx > 0 && (
                <button
                  onClick={() => navigate(activeIdx - 1)}
                  className="flex items-center gap-2 bg-transparent text-black text-base font-bold px-5 py-3 rounded-full w-fit border border-black/20 hover:border-black transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  Anterior
                </button>
              )}
              {activeIdx < formats.length - 1 && (
                <button
                  onClick={() => navigate(activeIdx + 1)}
                  className="flex items-center gap-2 bg-black text-white text-base font-bold px-5 py-3 rounded-full w-fit"
                >
                  Próximo
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
