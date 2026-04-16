import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import CountUp from "./CountUp";

const videos = [
  "/problem-video/7679832-uhd_4096_2160_25fps.mp4",
  "/problem-video/7680111-uhd_4096_2160_25fps.mp4",
  "/problem-video/8126811-hd_1920_1080_25fps.mp4",
];

const DISPLAY_DURATION = 6000; // ms each video stays visible
const FADE_DURATION = 1000;    // ms crossfade

export default function Problem() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(function advance() {
      const nextIdx = (current + 1) % videos.length;
      setNext(nextIdx);
      setFading(true);

      setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        setFading(false);
        timerRef.current = setTimeout(advance, DISPLAY_DURATION);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <section
      className="relative rounded-[20px] overflow-hidden px-5 py-10 md:px-16 md:py-20 flex flex-col md:flex-row gap-8 md:gap-20 items-center"
      aria-labelledby="problema2-heading"
    >
      {/* Current video */}
      <video
        key={current}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        style={{ opacity: 1, transition: `opacity ${FADE_DURATION}ms ease` }}
      >
        <source src={videos[current]} type="video/mp4" />
      </video>

      {/* Next video fading in */}
      {next !== null && (
        <video
          key={`next-${next}`}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{
            opacity: fading ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
          }}
        >
          <source src={videos[next]} type="video/mp4" />
        </video>
      )}

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Left */}
      <div className="relative z-10 flex-[2.5]">
        <span className="block text-xs md:text-base font-normal text-white/50 uppercase tracking-[2px] mb-6">
          {t("problem.label")}
        </span>
        <h2
          id="problema2-heading"
          className="text-2xl md:text-4xl font-normal text-white leading-[1.25] mb-6 md:mb-7"
        >
          {t("problem.title")}
        </h2>
        <div className="mb-7">
          <p className="text-base md:text-lg text-white/55 leading-[1.65] mb-4">
            {t("problem.desciption")}
          </p>
          <p className="text-base md:text-lg text-white/55 leading-[1.65]">
            Com <strong className="text-white font-bold">Video Commerce</strong>, <strong className="text-white font-bold">Provador Virtual</strong> e <strong className="text-white font-bold">Live Commerce</strong>, a Widde faz o consumidor ver, experimentar e sentir o seu produto antes de comprar.
          </p>
        </div>
        <AnimatedButton
          href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block w-full md:w-fit text-center bg-white text-[#1D1D1D] font-bold text-lg md:text-lg px-[22px] py-[11px] rounded-full no-underline"
        >
          {t("problem.cta")}
        </AnimatedButton>
      </div>

      {/* Numbers */}
      <div className="relative z-10 flex flex-col md:border-l border-white/15 md:pl-10 flex-shrink-0 w-full md:w-auto">
        <div className="py-4 md:py-6 flex md:block items-center gap-4">
          <CountUp
            target={84}
            suffix="%"
            className="text-2xl md:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            {t("problem.stat1Label")}
          </div>
        </div>
        <div className="py-4 md:py-6 border-t border-white/15 flex md:block items-center gap-4">
          <CountUp
            target={63}
            suffix="%"
            className="text-2xl md:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            {t("problem.stat2Label")}
          </div>
        </div>
        <div className="py-4 md:py-6 border-t border-white/15 flex md:block items-center gap-4">
          <CountUp
            target={65}
            suffix="%"
            className="text-2xl md:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            {t("problem.stat3Label")}
          </div>
        </div>
      </div>
    </section>
  );
}
