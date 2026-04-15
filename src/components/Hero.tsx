import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import { getLenis } from "../lib/lenis";
import { easeOutQuint } from "../lib/easing";

export default function Hero() {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      contentRef.current,
      { x: -160, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
    );
    tl.fromTo(
      videoInnerRef.current,
      { opacity: 0, filter: "blur(16px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.4 },
      "<0.15",
    );
  }, []);

  function handleVerDemo(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    getLenis().scrollTo("#demo2", {
      duration: 3,
      offset: -70,
      easing: easeOutQuint,
    });
  }

  return (
    <section
      className="bg-[#f6f6f6] overflow-hidden relative"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <div
        className="mx-auto px-3 md:px-2 max-w-screen-xl h-full flex items-center"
        style={{ minHeight: "inherit" }}
      >
        <div
          className="relative flex flex-col md:flex-row items-stretch w-full"
          style={{ minHeight: "inherit" }}
        >
          {/* Content */}
          <div
            ref={contentRef}
            className="w-full md:flex-[0_0_55%] z-[2] flex flex-col py-10 md:py-20"
            style={{ justifyContent: "center" }}
          >
            <span className="block text-xs font-bold text-brand uppercase tracking-[2px] mb-4 md:mb-5">
              {t("hero.tagline")}
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-[1.15] mb-6 md:mb-6 text-black">
              {t("hero.title")}{" "}
              <span className="text-brand">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-base md:text-base text-[#666] leading-[1.7] mb-1 max-w-full md:max-w-[820px]">
              {t("hero.description")}
            </p>
            <p className="text-base md:text-base text-[#666] leading-[1.7] mb-1 max-w-full md:max-w-[1100px]">
              Por isso, com a Widde você ajuda o visitante a <strong>sentir, entender, escolher e comprar no seu site.</strong>
            </p>
            <p className="text-base md:text-base font-bold text-[#666] leading-[1.7] mb-6 md:mb-10 max-w-full md:max-w-[720px]">
              {t("hero.descriptionProducts")}
            </p>
            <div className="mt-8 md:mt-0 flex flex-col items-stretch md:flex-row md:items-center gap-3 md:justify-start">
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="inline-block text-center bg-brand text-white font-bold text-lg md:text-base px-5 md:px-7 py-[10px] md:py-[13px] rounded-full no-underline"
              >
                {t("hero.ctaSales")}
              </AnimatedButton>
              <AnimatedButton
                href="#demo"
                onClick={handleVerDemo}
                className="inline-block text-center bg-transparent text-black font-bold text-lg md:text-base px-5 md:px-7 py-[10px] md:py-[13px] rounded-full no-underline border border-black/20 hover:border-black transition-colors"
              >
                {t("hero.ctaLearnMore")}
              </AnimatedButton>
            </div>
          </div>

          {/* Video — stretches to right edge of viewport */}
          <div
            className="hidden md:block absolute top-0 bottom-0 overflow-hidden"
            aria-hidden="true"
            style={{
              left: "48%",
              right: "calc(-50vw + 50%)",
              marginRight: "-2rem",
            }}
          >
            <div ref={videoInnerRef} className="absolute inset-0">
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right,#f6f6f6 0%,#f6f6f6 8%,transparent 30%),linear-gradient(to bottom,transparent 60%,#f6f6f6 100%),linear-gradient(to top,transparent 80%,#f6f6f6 100%)",
                }}
              />
              <video
                className="w-full h-full object-cover object-top"
                style={{ display: "block" }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://videos.widde.io/widde-bucket-sp/335ad64a-0820-4ad1-bda6-b44474ed45fe/videos/79a89f7b-b9be-493f-ba6f-d070941150a3-1752673555899-1916263/video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
