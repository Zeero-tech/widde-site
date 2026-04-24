import CountUp from "./CountUp";
import SolutionArticle from "./SolutionArticle";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
import { useInViewVideo } from "@/hooks/useInViewVideo";

export default function Solutions() {
  const { t } = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const videoVC = useInViewVideo();
  const videoLC = useInViewVideo();
  const videoTryOn = useInViewVideo();
  const videoVCMobile = useInViewVideo();
  const videoLCMobile = useInViewVideo();
  const videoTryOnMobile = useInViewVideo();

  return (
    <section
      id="solucoes"
      aria-labelledby="sol-heading"
    >
      <SectionTitle
        label={t("solutions.label")}
        title={t("solutions.title")}
        id="sol-heading"
        className="mb-8"
      />

      {/* Mobile: carrossel horizontal */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mr-3 pl-0 pr-3 scrollbar-hide">
        {/* VIDEO COMMERCE */}
        <SolutionArticle direction="left" id="video-commerce" mobileCarousel>
          <div
            className="flex-shrink-0 rounded-2xl overflow-hidden h-[230px]"
            aria-hidden="true"
          >
            <video ref={videoVCMobile} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="none">
              <source data-src="/solution/Ferracini Carrossel aberto.webm" type="video/webm" />
              <source data-src="/solution/Ferracini Carrossel aberto.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <h3 className="text-2xl font-normal text-black mb-4 leading-tight">Video Commerce</h3>
              <p className="text-text-body text-base max-w-full">
                <strong>{t("solutions.videoCommerce.descBold")}</strong>{" "}{t("solutions.videoCommerce.desc")}
              </p>
              <p className="text-text-body text-base mt-4 max-w-full">
                {t("solutions.videoCommerce.desc2")}{" "}<strong>{t("solutions.videoCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex mb-4 mt-4">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={5} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted text-base leading-snug">{t("solutions.videoCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-surface-border" />
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={4} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted text-base leading-snug">{t("solutions.videoCommerce.stat2")}</span>
                </div>
              </div>
              <a href="/video-commerce" className="inline-flex items-center gap-2 text-lg font-bold text-navy no-underline w-full justify-center px-7 py-3 border border-black/20 rounded-full hover:border-black transition-colors">
                {t("solutions.learnMore")}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                  <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </SolutionArticle>

        {/* LIVE COMMERCE */}
        <SolutionArticle direction="left" id="live-commerce-mobile" mobileCarousel>
          <div
            className="flex-shrink-0 rounded-2xl overflow-hidden h-[230px]"
            aria-hidden="true"
          >
            <video ref={videoLCMobile} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="none">
              <source data-src="/solution/Live Commerce - Desktop.webm" type="video/webm" />
              <source data-src="/solution/Live Commerce - Desktop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <span className="inline-block bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-2xl font-normal text-black mb-4 leading-tight">{t("solutions.liveCommerce.title")}</h3>
              <p className="text-text-body text-base max-w-full">
                <strong>{t("solutions.liveCommerce.descBold")}</strong>{" "}{t("solutions.liveCommerce.desc")}
              </p>
              <p className="text-text-body text-base mt-4 max-w-full">
                <strong>{t("solutions.liveCommerce.desc2Bold")}</strong>
              </p>
              <div className="flex mt-6">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={5} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted text-base leading-snug">{t("solutions.liveCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-surface-border" />
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={60} prefix="+" suffix="%" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted text-base leading-snug">{t("solutions.liveCommerce.stat2")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>

        {/* TRYON */}
        <SolutionArticle direction="left" id="provador-ia-mobile" mobileCarousel>
          <div
            className="flex-shrink-0 rounded-2xl overflow-hidden h-[230px] relative"
            aria-hidden="true"
          >
            <video
              ref={videoTryOnMobile}
              autoPlay muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover object-right"
            >
              <source data-src="/solution/Provador IA Chart.webm" type="video/webm" />
              <source data-src="/solution/Provador IA Chart.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <span className="inline-block bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-2xl font-normal text-black mb-4 leading-tight">{t("solutions.tryOn.title")}</h3>
              <p className="text-text-body text-base max-w-full">
                {t("solutions.tryOn.desc")}{" "}<strong>{t("solutions.tryOn.descBold")}</strong>
              </p>
              <p className="text-text-body text-base mt-4 max-w-full">
                <strong>{t("solutions.tryOn.desc2Bold")}</strong>
              </p>
              <div className="flex mt-6">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={93} suffix="%" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted text-base leading-snug">{t("solutions.tryOn.stat1")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>
      </div>

      {/* Desktop: layout vertical normal */}
      <div className="hidden md:flex flex-col gap-16 lg:gap-24 overflow-hidden">
        {/* VIDEO COMMERCE */}
        <SolutionArticle direction="left" id="video-commerce">
          <div
            className="flex-1 flex-shrink-0 rounded-2xl overflow-hidden md:min-h-96"
            aria-hidden="true"
          >
            <video
              ref={videoVC}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source data-src="/solution/Ferracini Carrossel aberto.webm" type="video/webm" />
              <source data-src="/solution/Ferracini Carrossel aberto.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-5 md:px-6 lg:px-8 justify-between py-6 md:py-6 lg:py-8">
            <div>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-normal text-black mb-4 leading-tight">Video Commerce</h3>
              <p className="text-text-body md:text-lg max-w-full">
                <strong>{t("solutions.videoCommerce.descBold")}</strong>{" "}{t("solutions.videoCommerce.desc")}
              </p>
              <p className="text-text-body md:text-lg mt-4 max-w-full">
                {t("solutions.videoCommerce.desc2")}{" "}<strong>{t("solutions.videoCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-5 md:gap-6 lg:gap-8 mb-6 md:mb-6 lg:mb-8 mt-6 md:mt-6 lg:mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted md:text-lg leading-snug">{t("solutions.videoCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-surface-border" />
                <div className="flex flex-col gap-1">
                  <CountUp target={4} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted md:text-lg leading-snug">{t("solutions.videoCommerce.stat2")}</span>
                </div>
              </div>
              <a href="/video-commerce" className="inline-flex items-center gap-2 md:text-lg font-bold text-navy no-underline w-fit px-7 py-2 border border-black/20 rounded-full hover:border-black transition-colors">
                {t("solutions.learnMore")}
                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "11" : "16"} height={isMobile ? "11" : "16"} viewBox="0 0 11 11">
                  <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </SolutionArticle>

        {/* LIVE COMMERCE */}
        <SolutionArticle direction="right" id="live-commerce">
          <div
            className="flex-1 flex-shrink-0 rounded-2xl overflow-hidden md:min-h-96"
            aria-hidden="true"
          >
            <video ref={videoLC} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="none">
              <source data-src="/solution/Live Commerce - Desktop.webm" type="video/webm" />
              <source data-src="/solution/Live Commerce - Desktop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-5 md:px-6 lg:px-8 justify-between py-6 md:py-6 lg:py-8">
            <div>
              <span className="inline-block bg-charcoal text-white text-xs md:text-base font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-normal text-black mb-4 leading-tight">{t("solutions.liveCommerce.title")}</h3>
              <p className="text-text-body md:text-lg max-w-full">
                <strong>{t("solutions.liveCommerce.descBold")}</strong>{" "}{t("solutions.liveCommerce.desc")}
              </p>
              <p className="text-text-body md:text-lg mt-4 max-w-full">
                <strong>{t("solutions.liveCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-5 md:gap-6 lg:gap-8 mb-6 md:mb-6 lg:mb-8 mt-6 md:mt-6 lg:mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted md:text-lg leading-snug">{t("solutions.liveCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-surface-border" />
                <div className="flex flex-col gap-1">
                  <CountUp target={60} prefix="+" suffix="%" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted md:text-lg leading-snug">{t("solutions.liveCommerce.stat2")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>

        {/* TRYON */}
        <SolutionArticle direction="left" id="provador-ia">
          <div
            className="flex-1 flex-shrink-0 rounded-2xl overflow-hidden md:min-h-96 relative self-stretch"
            aria-hidden="true"
          >
            <video
              ref={videoTryOn}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover object-right"
            >
              <source data-src="/solution/Provador IA Chart.webm" type="video/webm" />
              <source data-src="/solution/Provador IA Chart.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col flex-1 px-5 md:px-6 lg:px-8 justify-between py-6 md:py-6 lg:py-8">
            <div>
              <span className="inline-block bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-normal text-black mb-4 leading-tight">{t("solutions.tryOn.title")}</h3>
              <p className="text-text-body md:text-lg max-w-full">
                {t("solutions.tryOn.desc")}{" "}<strong>{t("solutions.tryOn.descBold")}</strong>
              </p>
              <p className="text-text-body md:text-lg mt-4 max-w-full">
                <strong>{t("solutions.tryOn.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-5 md:gap-6 lg:gap-8 mb-6 md:mb-6 lg:mb-8 mt-6 md:mt-6 lg:mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={93} suffix="%" className="text-3xl md:text-3xl lg:text-4xl font-normal text-charcoal leading-none mb-1" />
                  <span className="text-text-muted md:text-lg leading-snug">{t("solutions.tryOn.stat1")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>
      </div>
    </section>
  );
}
