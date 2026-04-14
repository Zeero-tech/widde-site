import { useTranslation } from "react-i18next";
import AnimatedButton from "./AnimatedButton";
import CountUp from "./CountUp";
import HighlightText from "./ui/highlight-text";

export default function Problem2() {
  const { t } = useTranslation();
  return (
    <section
      className="relative rounded-[20px] overflow-hidden px-5 py-10 md:px-16 md:py-20 mt-10 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-20 items-center"
      aria-labelledby="problema2-heading"
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

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />

      {/* Left */}
      <div className="relative z-10 flex-1">
        <span className="block text-xs font-normal text-white/50 uppercase tracking-[2px] mb-3">
          {t("problem.label")}
        </span>
        <h2
          id="problema2-heading"
          className="text-lg md:text-2xl font-normal text-white leading-[1.25] mb-[10px]"
        >
          <HighlightText highlightColor="var(--color-brand)" delay={0.2} duration={0.8}>
            {t("problem.title")}
          </HighlightText>
        </h2>
        <p className="text-white/55 leading-[1.65] mb-[22px]">
          {t("problem.description")}
        </p>
        <AnimatedButton
          href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block bg-white text-[#1D1D1D] font-bold px-[22px] py-[11px] rounded-full no-underline"
        >
          {t("problem.cta")}
        </AnimatedButton>
      </div>

      {/* Numbers */}
      <div className="relative z-10 flex flex-col border-l border-white/15 pl-4 md:pl-10 flex-shrink-0">
        <div className="py-6">
          <CountUp
            target={84}
            suffix="%"
            className="text-2xl md:text-5xl font-normal text-white leading-none mb-2"
          />
          <div className="text-white/55 leading-[1.4] max-w-[400px]">
            {t("problem.stat1Label")}
          </div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp
            target={65}
            suffix="%"
            className="text-2xl md:text-5xl font-normal text-white leading-none mb-2"
          />
          <div className="text-white/55 leading-[1.4] max-w-[400px]">
            {t("problem.stat2Label")}
          </div>
        </div>
        <div className="py-6 border-t border-white/15">
          <CountUp
            target={2}
            suffix="x"
            className="text-2xl md:text-5xl font-normal text-white leading-none mb-2"
          />
          <div className="text-white/55 leading-[1.4] max-w-[400px]">
            {t("problem.stat3Label")}
          </div>
        </div>
      </div>
    </section>
  );
}
