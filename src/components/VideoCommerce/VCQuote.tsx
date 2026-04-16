import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";

export default function VCQuote() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-ink rounded-[12px] md:rounded-[20px] px-6 py-6 md:px-16 md:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-40">
      {/* Video — top on mobile, right on desktop */}
      <div className="flex-shrink-0 w-full max-w-[250px] md:w-[320px] md:max-w-none mx-auto md:mx-0 md:order-2 md:flex md:items-center md:justify-center">
        <div
          className="relative rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] w-full aspect-[9/16]"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.png"
          >
            <source
              src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.webm"
              type="video/webm"
            />
            <source
              src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Quote content — below video on mobile, left on desktop */}
      <div className="flex-1 md:max-w-[480px] md:order-1">
        <p className="text-xl md:text-3xl text-white leading-[1.4] font-normal mb-4 md:mb-6">
          {t("vc.quote.text")}
        </p>
        <div className="font-bold md:text-lg text-white mb-[2px] md:mb-1">
          {t("vc.quote.author")}
        </div>
        <div className="text-base md:text-lg text-white/50 mb-4 md:mb-6">{t("vc.quote.company")}</div>
        <AnimatedButton
          href="/?scrollTo=demo2"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); navigate("/?scrollTo=demo2"); }}
          className="inline-block w-full md:w-auto text-center bg-brand text-white font-bold text-lg md:text-lg px-6 py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
        >
          {t("vc.quote.cta")}
        </AnimatedButton>
      </div>
    </div>
  );
}
