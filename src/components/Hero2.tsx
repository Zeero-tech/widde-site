import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { getLenis } from "../lib/lenis";
import { easeOutQuint } from "../lib/easing";

export default function Hero2() {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
    );
  }, []);

  function handleVerDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    getLenis().scrollTo("#demo", {
      duration: 3,
      offset: -70,
      easing: easeOutQuint,
    });
  }

  return (
    <section className="bg-[#f6f6f6] py-10 md:py-16">
      <div className=" max-w-screen-xl mx-auto px-2">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: "min(80vh, 640px)" }}
        >
          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20 md:py-28"
            style={{ minHeight: "inherit" }}
          >
            <span className="block text-[11px] md:text-[12px] font-bold text-brand uppercase tracking-[2.5px] mb-6">
              {t("hero.tagline")}
            </span>

            <h1 className="text-white text-[36px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] mb-6 max-w-[800px]">
              {t("hero.title")}{" "}
              <span className="text-brand">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] mb-1 max-w-[720px]">
              {t("hero.description")}
            </p>
            <p className="font-bold text-white/80 text-[15px] md:text-[16px] leading-[1.7] mb-10 max-w-[720px]">
              {t("hero.descriptionBold")}
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="inline-block bg-brand text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline"
              >
                {t("hero.ctaSales")}
              </AnimatedButton>
              <AnimatedButton
                href="#demo"
                onClick={handleVerDemo}
                className="inline-block bg-transparent text-white text-[14px] font-bold px-7 py-[13px] rounded-full no-underline border border-white/30 hover:border-white transition-colors"
              >
                {t("hero.ctaLearnMore")}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
