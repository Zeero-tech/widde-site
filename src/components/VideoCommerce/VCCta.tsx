import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedButton from "@/components/AnimatedButton";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";

export default function VCCta() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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
    <section className="py-10 md:py-20 relative overflow-hidden bg-[#E5E5E5]">
      <div className="max-w-screen-xl mx-auto px-3 md:px-2 text-center relative z-10">
        <span className="block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-4">
          {t("vc.cta.label")}
        </span>
        <h2 className="text-lg md:text-4xl font-black text-black leading-[1.2] mb-4">
          {t("vc.cta.title")}
        </h2>
        <p className="text-[14px] md:text-base text-[#5d5d5d] leading-[1.6] mb-8">
          {t("vc.cta.description")}
        </p>
        <div className="flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-3">
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block text-center bg-brand text-white font-bold px-7 py-[13px] rounded-full no-underline"
          >
            {t("vc.cta.ctaSales")}
          </AnimatedButton>
          <a
            href="/#demo2"
            onClick={handleViewDemo}
            className="btn-animate-chars inline-flex items-center justify-center bg-transparent text-black font-bold px-7 py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
          >
            <span
              data-button-animate-chars=""
              className="btn-animate-chars__text"
            >
              {t("vc.cta.ctaLearnMore")
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
