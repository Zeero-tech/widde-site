import React from "react";
import AnimatedButton from "@/components/AnimatedButton";
import SectionTitle from "@/components/SectionTitle";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";

const vcContent = {
  label: "Agende uma demonstração",
  title: "Quer conhecer tudo?",
  description: "Nosso time de vendas está pronto para entender seu cenário e te ajudar a começar.",
  ctaSales: "Falar com Vendas →",
  ctaLearnMore: "Começar agora →",
};

const homeContent = {
  label: "Falar com vendas",
  title: "Pronto para transformar seu e-commerce com vídeo?",
  description: "Nossa equipe responde em até 24h e monta uma proposta sob medida para o seu negócio.",
  ctaSales: "Falar com vendas",
  ctaLearnMore: "Conhecer mais",
};

export default function VCCta() {
  const isVCPage = typeof window !== "undefined"
    ? window.location.pathname === "/video-commerce"
    : false;
  const content = isVCPage ? vcContent : homeContent;

  function handleViewDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (window.location.pathname === "/") {
      getLenis().scrollTo("#demo2", {
        duration: 3.5,
        offset: -70,
        easing: easeOutQuint,
      });
    } else {
      window.location.href = "/?scrollTo=demo2";
    }
  }

  const ctaLearnMoreChars = content.ctaLearnMore.split("").map((char, i) => (
    <span
      key={i}
      style={{
        transitionDelay: `${(i * 0.01).toFixed(2)}s`,
        whiteSpace: char === " " ? "pre" : undefined,
      }}
    >
      {char}
    </span>
  ));

  return (
    <section className="py-10 md:py-14 lg:py-20 relative overflow-hidden bg-[#E5E5E5]">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6 text-center relative z-10">
        <span className="md:hidden block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-4">
          {content.label}
        </span>
        <div className="hidden md:flex justify-center mb-4">
          <SectionTitle label={content.label} />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-[1.2] mb-4">
          {content.title}
        </h2>
        <p className="text-base md:text-base lg:text-lg text-text-muted leading-relaxed mb-8">
          {content.description}
        </p>
        <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-3">
          <AnimatedButton
            href="/contato-vendas"
            className="inline-block text-center text-white font-bold text-base md:text-base lg:text-lg px-7 py-[13px] rounded-full no-underline bg-black"
          >
            {content.ctaSales}
          </AnimatedButton>
          <a
            href="/#demo2"
            onClick={handleViewDemo}
            className="btn-animate-chars inline-flex items-center justify-center bg-transparent text-black font-bold text-base md:text-base lg:text-lg px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
          >
            <span
              data-button-animate-chars=""
              className="btn-animate-chars__text"
            >
              {ctaLearnMoreChars}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
