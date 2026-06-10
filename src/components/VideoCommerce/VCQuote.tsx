import React from "react";
import AnimatedButton from "@/components/core/AnimatedButton";

export default function VCQuote() {
  return (
    <div className="bg-ink rounded-[12px] md:rounded-[20px] px-6 py-6 md:pl-[3.5rem] md:pr-[3.5rem] md:py-[3rem] lg:pl-[5rem] lg:pr-[5rem] lg:py-[3.5rem] flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
      {/* Video — top on mobile, right on desktop */}
      <div className="flex-shrink-0 w-full max-w-[250px] md:w-[240px] lg:w-[280px] md:max-w-none mx-auto md:mx-0 md:order-2 md:flex md:items-center md:justify-center">
        <div className="relative rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] w-full aspect-[9/16]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/assets/depoimento-elian-opt.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Quote content — below video on mobile, left on desktop */}
      <div className="flex-1 md:max-w-[45vw] lg:max-w-[40vw] md:order-1">
        <p className="text-xl md:text-2xl lg:text-[28px] text-white leading-[1.4] font-normal mb-4 md:mb-5 lg:mb-6">
          "O principal motivo de contratarmos a Widde é trazer essa experiência
          do vídeo para dentro do site, que a imagem não consegue proporcionar.
          É uma plataforma super simples de usar, não pesa no site, não
          atrapalha o tempo de carregamento, tudo flui e os clientes adoram e
          aumenta a nossa conversão."
        </p>
        <div className="font-black text-base md:text-lg lg:text-xl text-white mb-[2px] md:mb-1">
          Mayara Wolf
        </div>
        <div className="text-base md:text-lg lg:text-xl text-white/50 mb-4 md:mb-5 lg:mb-6">
          Coordenadora de E-commerce no Grupo Elian
        </div>
        <AnimatedButton
          href="/#demo2"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            window.location.href = "/#demo2";
          }}
          className="inline-block w-full md:w-auto text-center bg-brand text-white font-bold text-base md:text-base lg:text-lg px-6 py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
        >
          Começar agora
        </AnimatedButton>
      </div>
    </div>
  );
}
