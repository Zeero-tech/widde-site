import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedButton from "@/components/AnimatedButton";
import SectionTitle from "@/components/SectionTitle";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";

export default function VCCta() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const isVCPage = location.pathname === "/video-commerce";
  const prefix = isVCPage ? "vc.cta" : "homeCta";

  function handleViewDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (location.pathname === "/") {
      getLenis().scrollTo("#demo2", {
        duration: 3.5,
        offset: -70,
        easing: easeOutQuint,
      });
    } else {
      navigate("/?scrollTo=demo2");
    }
  }

  return (
    <section className="py-10 md:py-14 lg:py-20 relative overflow-hidden bg-[#E5E5E5]">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-12 xl:px-6 text-center relative z-10">
        <span className="md:hidden block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-4">
          {t(`${prefix}.label`)}
        </span>
        <div className="hidden md:flex justify-center mb-4">
          <SectionTitle label={t(`${prefix}.label`)} />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-[1.2] mb-4">
          {t(`${prefix}.title`)}
        </h2>
        <p className="text-base md:text-base lg:text-lg text-text-muted leading-relaxed mb-8">
          {t(`${prefix}.description`)}
        </p>
        <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-3">
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block text-center text-white font-bold text-base md:text-base lg:text-lg px-7 py-[13px] rounded-full no-underline bg-black"
          >
            {t(`${prefix}.ctaSales`)}
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
              {t(`${prefix}.ctaLearnMore`)
                .split("")
                .map((char, i) => (
                  <span
                    key={i}
                    style={{
                      transitionDelay: `${(i * 0.01).toFixed(2)}s`,
                      whiteSpace: char === " " ? "pre" : undefined,
                    }}
                  >
                    {char}
                  </span>
                ))}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
