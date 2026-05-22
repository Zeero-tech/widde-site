import AnimatedButton from "./AnimatedButton";
import SectionTitle from "./SectionTitle";

export default function Plans() {
  return (
    <section id="planos" aria-labelledby="planos-heading">
      {/* Header */}
      <div className="flex justify-between items-end mb-10 md:mb-14 flex-wrap gap-3">
        <div>
          <SectionTitle
            label="Planos"
            title="Escolha como começar"
            id="planos-heading"
          />
        </div>
        <div className="text-xs text-brand font-bold bg-brand/[0.08] px-[14px] py-[6px] rounded-full">
          15% de desconto no plano anual
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Starter */}
        <article className="bg-surface rounded-[18px] p-7 md:p-9 lg:p-12 relative shadow-[0_0_0_1px_rgb(233,233,233)]">
          <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-black mb-2 md:mb-3">
            Starter
          </h3>
          <div className="text-[30px] md:text-[32px] lg:text-4xl font-normal text-black mb-2 md:mb-3 leading-none">
            R$399
            <sub className=" font-normal text-[#888] md:text-[22px] lg:text-[28px]">
              /mês
            </sub>
          </div>
          <p className="text-base md:text-base lg:text-lg text-[#888] mb-6 md:mb-8">
            Para lojas em fase inicial de conteúdo
          </p>
          <ul className="list-none flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              "Formato Stories",
              "Até 75 vídeos ativos",
              "Até 10K views/mês",
              "Personalização de cores e botões",
              "Suporte via WhatsApp e Chat",
            ].map((f) => (
              <li
                key={f}
                className="text-base md:text-base lg:text-lg text-text-muted flex items-start gap-2 leading-[1.4]"
              >
                <span className="text-brand font-black flex-shrink-0">
                  &#10003;
                </span>
                {f}
              </li>
            ))}
          </ul>
          <AnimatedButton
            href="/quero-comecar"
            className="inline-block w-full md:w-fit text-center bg-surface text-black font-bold text-base md:text-base lg:text-lg px-[22px] py-[11px] rounded-full no-underline border-[1.5px] border-surface-border hover:bg-[#eee] transition-colors"
          >
            Começar agora
          </AnimatedButton>
        </article>

        {/* Pro */}
        <article className="bg-ink rounded-[18px] p-7 md:p-9 lg:p-12 relative overflow-visible shadow-[0_0_0_1px_rgb(233,233,233)]">
          {/* Decorative SVG circles */}
          <svg
            className="absolute top-3 right-4 md:top-7 md:right-7 opacity-20 w-10 h-10 md:w-20 md:h-20"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="1" />
          </svg>

          <span className="inline-block bg-brand text-white text-xs font-bold px-[10px] py-[2px] rounded-full mb-4 md:mb-5">
            Recomendado para médias e grandes marcas
          </span>
          <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-white mb-1 md:mb-2">
            Pro
          </h3>
          <div className="text-[30px] md:text-[32px] lg:text-4xl font-normal text-white mb-2 md:mb-3">
            Sob medida para o seu negócio
          </div>
          <p className="text-base md:text-base lg:text-lg text-white/45 mb-6 md:mb-8">
            Fale com vendas para montar o plano ideal
          </p>

          {/* Mobile: column layout (features → card → button) */}
          <div className="flex flex-col md:hidden gap-5">
            <ul className="list-none flex flex-col gap-3">
              {[
                "Vídeos ilimitados",
                "Views customizados",
                "Video Commerce",
                "Widde IA para análise de comentários",
                "Gerente de contas dedicado",
              ].map((f) => (
                <li
                  key={f}
                  className="text-base text-white/60 flex items-start gap-2 leading-[1.4]"
                >
                  <span className="text-[#6090FF] font-black flex-shrink-0">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="bg-brand/20 rounded-[12px] p-5">
              <h4 className="text-lg font-black text-white mb-2">
                Para marcas que querem crescer de verdade
              </h4>
              <p className="text-base text-white/55 leading-[1.5]">
                Grandes varejistas têm desafios únicos. O plano PRO é desenhado
                para o seu cenário: volume, soluções e integrações.
              </p>
            </div>
            <AnimatedButton
              href="/contato-vendas"
              className="inline-block w-full text-center bg-brand text-white font-bold text-lg px-[22px] py-[11px] rounded-full no-underline border border-brand"
            >
              Falar com vendas →
            </AnimatedButton>
          </div>

          {/* Desktop: two-column layout */}
          <div className="hidden md:flex gap-6 lg:gap-10">
            {/* Left */}
            <div className="flex-1">
              <ul className="list-none flex flex-col gap-4 mb-6">
                {[
                  "Vídeos ilimitados",
                  "Views customizados",
                  "Video Commerce",
                  "Widde IA para análise de comentários",
                  "Gerente de contas dedicado",
                ].map((f) => (
                  <li
                    key={f}
                    className="text-base lg:text-lg text-white/60 flex items-start gap-3 leading-[1.4]"
                  >
                    <span className="text-[#6090FF] font-black flex-shrink-0">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col">
              <div className="bg-brand/20 rounded-[12px] p-5 lg:p-6 mb-6">
                <h4 className="text-base lg:text-lg font-black text-white mb-2">
                  Para marcas que querem crescer de verdade
                </h4>
                <p className="text-base lg:text-lg text-white/55 leading-[1.5]">
                  Grandes varejistas têm desafios únicos. O plano PRO é
                  desenhado para o seu cenário: volume, soluções e integrações.
                </p>
              </div>
              <AnimatedButton
                href="/contato-vendas"
                className="text-base lg:text-lg inline-block bg-brand text-white font-bold px-[22px] py-[11px] rounded-full no-underline border border-brand w-fit"
              >
                Falar com vendas →
              </AnimatedButton>
            </div>
          </div>
        </article>
      </div>

      {/* Live Commerce & Provador IA banner */}
      <div
        style={{
          background: "#E3ECFF",
          border: "1.5px solid #79A2FF",
          borderRadius: "16px",
          padding: "36px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          marginTop: "24px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
            <div
              style={{
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="14" fill="#F0F0F0" />
                <circle cx="24" cy="24" r="2.5" fill="#2667f8" />
                <path
                  d="M19 19a7.07 7.07 0 0 0 0 10"
                  stroke="#2667f8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M29 19a7.07 7.07 0 0 1 0 10"
                  stroke="#2667f8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M14 15a13.07 13.07 0 0 0 0 18"
                  stroke="#2667f8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M34 15a13.07 13.07 0 0 1 0 18"
                  stroke="#2667f8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div
              style={{
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="14" fill="#F0F0F0" />
                <rect
                  x="17"
                  y="10"
                  width="14"
                  height="22"
                  rx="7"
                  stroke="#2667f8"
                  strokeWidth="2.2"
                  fill="none"
                />
                <circle cx="24" cy="18" r="2.5" fill="#2667f8" />
                <path
                  d="M20 28c0-3 1.8-5 4-5s4 2 4 5"
                  stroke="#2667f8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M24 32v4"
                  stroke="#2667f8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 36h8"
                  stroke="#2667f8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="20" r="2.2" fill="#2667f8" opacity="0.45" />
                <path
                  d="M7 29c0-2.5 1.3-4 3-4s3 1.5 3 4"
                  stroke="#2667f8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.45"
                />
                <path
                  d="M14 22h3"
                  stroke="#2667f8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2667F8",
                marginBottom: "6px",
              }}
            >
              Live Commerce · Provador IA
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: 900,
                color: "#000",
                marginBottom: "6px",
              }}
            >
              Quer saber como contratar nossas outras soluções?
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#6B7280",
                lineHeight: 1.6,
                maxWidth: "480px",
              }}
            >
              Live Commerce e Provador IA estão disponíveis para clientes da
              Widde.
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#6B7280",
                lineHeight: 1.6,
                maxWidth: "480px",
              }}
            >
              Converse com nosso time Comercial.
            </div>
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <AnimatedButton
            href="/contato-vendas"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "full",
              background: "#2667F8",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Falar com vendas →
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
