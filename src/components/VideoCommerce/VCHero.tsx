import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import AnimatedButton from "@/components/AnimatedButton";

export default function VCHero() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const mockInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      contentRef.current,
      { x: -160, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
    );
    tl.fromTo(
      mockInnerRef.current,
      { opacity: 0, filter: "blur(16px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.4 },
      "<0.15",
    );
  }, []);

  function handleViewPlans(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/?scrollTo=planos");
  }

  return (
    <section
      className="bg-[#1a1a1a] overflow-hidden relative"
      style={{ minHeight: "calc(100svh - 120px)" }}
    >
      {/* Breadcrumb */}
      <div className="absolute top-3 md:top-5 left-0 right-0 h-[60px] z-10 flex">
        <div className="w-full max-w-screen-xl mx-auto px-3 md:px-2 flex">
          <div className="text-xs md:text-sm text-[#aaa]">
            <a href="/" className="text-brand no-underline">
              {t("vc.breadcrumb.home")}
            </a>
            <span className="mx-[6px]">/</span>
            <strong className="text-[#ccc]">{t("vc.breadcrumb.page")}</strong>
          </div>
        </div>
      </div>

      <div
        className="max-w-screen-xl mx-auto px-3 md:px-2 h-full flex items-center"
        style={{ minHeight: "inherit" }}
      >
        <div
          className="relative flex items-stretch w-full"
          style={{ minHeight: "inherit" }}
        >
          {/* Left — content */}
          <div
            ref={contentRef}
            className="w-full md:flex-[0_0_55%] z-[2] flex flex-col py-10 md:py-20"
            style={{ justifyContent: "center" }}
          >
            <h1 className="text-3xl md:text-5xl font-black leading-[1.15] mb-4 md:mb-6 text-white">
              {t("vc.hero.title")}{" "}
              <span className="text-brand">{t("vc.hero.titleHighlight")}</span>
            </h1>
            <p className="hidden md:block text-[14px] md:text-base text-[#aaa] leading-[1.7] mb-3 max-w-full md:max-w-[560px]">
              {t("vc.hero.description")}
            </p>
            <p className="text-[14px] md:text-base text-[#aaa] leading-[1.7] mb-4 md:mb-8 max-w-full md:max-w-[560px]">
              {t("vc.hero.description2")}
            </p>
            <ul className="list-none flex flex-col gap-[8px] md:gap-[10px] mb-8 md:mb-10 p-0">
              {[
                t("vc.hero.feature1"),
                t("vc.hero.feature2"),
                t("vc.hero.feature3"),
              ].map((item) => (
                <li
                  key={item}
                  className="text-[14px] md:text-base text-[#ccc] flex items-start gap-[10px]"
                >
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] text-xs font-black bg-brand/[0.12] text-brand">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-stretch md:flex-row md:items-center gap-3">
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="inline-block text-center bg-brand text-white font-bold px-5 md:px-7 py-[10px] md:py-[13px] rounded-full no-underline"
              >
                {t("vc.hero.ctaSales")}
              </AnimatedButton>
              <a
                href="/#planos"
                onClick={handleViewPlans}
                className="btn-animate-chars inline-flex items-center justify-center text-center bg-transparent text-white font-bold px-5 md:px-7 py-[10px] md:py-[13px] rounded-full no-underline border border-white/20 hover:border-white transition-colors"
              >
                <span
                  data-button-animate-chars=""
                  className="btn-animate-chars__text"
                >
                  {t("vc.hero.ctaPlans")
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

          {/* Right — static image */}
          <div
            className="hidden md:block absolute top-0 bottom-0 overflow-hidden"
            aria-hidden="true"
            style={{
              left: "55%",
              right: "calc(-50vw + 50%)",
              marginRight: "-2rem",
            }}
          >
            <div
              ref={mockInnerRef}
              className="absolute inset-0"
              style={{ opacity: 0, filter: "blur(16px)" }}
            >
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right,#1a1a1a 0%,#1a1a1a 8%,transparent 30%),linear-gradient(to bottom,transparent 60%,#1a1a1a 100%),linear-gradient(to top,transparent 80%,#1a1a1a 100%)",
                }}
              />
              <img
                className="w-full h-full object-cover object-top"
                src="/vc-hero-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
