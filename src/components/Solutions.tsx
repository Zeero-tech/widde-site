import CountUp from "./CountUp";
import SolutionArticle from "./SolutionArticle";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";

export default function Solutions() {
  const { t } = useTranslation();

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
            className="flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden h-[230px]"
            aria-hidden="true"
          >
            <div className="p-4 flex flex-col gap-2 w-full">
              <div className="flex gap-1.5 justify-center items-end">
                <div className="rounded-lg bg-brand/25 relative overflow-hidden flex-shrink-0 w-10 h-16">
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/45 rounded px-1 py-0.5 font-bold">A</span>
                </div>
                <div className="rounded-lg bg-brand/50 relative overflow-hidden flex-shrink-0 w-12 h-20">
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/45 rounded px-1 py-0.5 font-bold">B</span>
                </div>
                <div className="rounded-lg bg-brand relative overflow-hidden flex-shrink-0 w-16 h-28">
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/45 rounded px-1 py-0.5 font-bold">{t("solutions.videoCommerce.formatCarousel")}</span>
                </div>
                <div className="rounded-lg bg-brand/50 relative overflow-hidden flex-shrink-0 w-12 h-20">
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/45 rounded px-1 py-0.5 font-bold">C</span>
                </div>
                <div className="rounded-lg bg-brand/25 relative overflow-hidden flex-shrink-0 w-10 h-16">
                  <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white bg-black/45 rounded px-1 py-0.5 font-bold">D</span>
                </div>
              </div>
              <div className="flex gap-1 justify-center flex-wrap">
                <span className="bg-brand/[0.12] text-brand text-[10px] font-bold px-2 py-0.5 rounded-full">{t("solutions.videoCommerce.formatStories")}</span>
                <span className="bg-brand/[0.12] text-brand text-[10px] font-bold px-2 py-0.5 rounded-full">{t("solutions.videoCommerce.formatCarousel")}</span>
                <span className="bg-brand/[0.12] text-brand text-[10px] font-bold px-2 py-0.5 rounded-full">{t("solutions.videoCommerce.formatExplore")}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <h3 className="text-lg font-normal text-black mb-4 leading-tight">Video Commerce</h3>
              <p className="text-[#2d2d2d] text-sm max-w-full">
                <strong>{t("solutions.videoCommerce.descBold")}</strong>{" "}{t("solutions.videoCommerce.desc")}
              </p>
              <p className="text-[#2d2d2d] text-sm mt-4 max-w-full">
                {t("solutions.videoCommerce.desc2")}{" "}<strong>{t("solutions.videoCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex mb-4 mt-4">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={5} suffix="x" className="text-2xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] text-sm leading-snug">{t("solutions.videoCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={4} suffix="x" className="text-2xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] text-sm leading-snug">{t("solutions.videoCommerce.stat2")}</span>
                </div>
              </div>
              <a href="/video-commerce" className="inline-flex items-center gap-2 font-bold text-[#010b15] no-underline w-full justify-center px-7 py-3 border border-black/20 rounded-full hover:border-black transition-colors">
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
            className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl flex items-center justify-center overflow-hidden h-[230px]"
            aria-hidden="true"
          >
            <div className="flex items-end gap-2 p-4">
              <div className="w-20 h-36 rounded-xl bg-[#0A0A0A] overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 opacity-75" style={{ background: "linear-gradient(160deg,#003AB9,#2667F8)" }} />
                <span className="absolute top-2 left-2 bg-[#FF3B30] text-white text-[7px] font-black px-1 py-0.5 rounded-full">{t("solutions.liveCommerce.mockLive")}</span>
                <span className="absolute top-2 right-2 bg-black/50 text-white text-[7px] font-bold px-1 py-0.5 rounded-full">1.2k</span>
                <div className="absolute bottom-11 left-1 right-1 flex flex-col gap-0.5">
                  <div className="bg-black/50 rounded px-1 py-0.5 text-[9px] text-white">{t("solutions.liveCommerce.mockMessage1")}</div>
                  <div className="bg-black/50 rounded px-1 py-0.5 text-[9px] text-white">{t("solutions.liveCommerce.mockMessage2")}</div>
                </div>
                <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-brand rounded px-1.5 py-1 text-[7px] font-bold text-white text-center">{t("solutions.liveCommerce.mockAddToCart")}</div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="bg-white/90 border border-[#eee] rounded-lg p-1.5 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded flex-shrink-0 bg-brand/20" />
                  <div>
                    <div className="text-[10px] font-bold text-black">{t("solutions.liveCommerce.mockProduct")}</div>
                    <div className="text-[10px] font-black text-brand">{t("solutions.liveCommerce.mockPrice")}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-brand/[0.08] rounded px-2 py-1 text-[10px] text-brand font-bold">{t("solutions.liveCommerce.mockSales")}</div>
                  <div className="bg-brand/[0.08] rounded px-2 py-1 text-[10px] text-brand font-bold">{t("solutions.liveCommerce.mockSpectators")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-lg font-normal text-black mb-4 leading-tight">{t("solutions.liveCommerce.title")}</h3>
              <p className="text-[#2d2d2d] text-sm max-w-full">
                <strong>{t("solutions.liveCommerce.descBold")}</strong>{" "}{t("solutions.liveCommerce.desc")}
              </p>
              <p className="text-[#2d2d2d] text-sm mt-4 max-w-full">
                <strong>{t("solutions.liveCommerce.desc2Bold")}</strong>
              </p>
              <div className="flex mt-6">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={5} suffix="x" className="text-2xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] text-sm leading-snug">{t("solutions.liveCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={60} prefix="+" suffix="%" className="text-2xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] text-sm leading-snug">{t("solutions.liveCommerce.stat2")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>

        {/* TRYON */}
        <SolutionArticle direction="left" id="provador-ia-mobile" mobileCarousel>
          <div
            className="flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden h-[230px]"
            aria-hidden="true"
          >
            <div className="flex gap-2 p-4 items-end">
              <div className="w-16 h-36 rounded-xl bg-brand/[0.08] border border-brand/20 overflow-hidden flex flex-col flex-shrink-0">
                <div className="flex-1 relative" style={{ background: "linear-gradient(160deg,rgba(38,103,248,0.25),rgba(0,58,185,0.15))" }}>
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-14 bg-brand/30 rounded-t-md" />
                </div>
                <div className="bg-brand/[0.06] px-1.5 py-1.5 flex gap-1 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#E8C4A0" }} />
                  <div className="w-2.5 h-2.5 rounded-full border border-brand" style={{ background: "#6B4C3B" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F5E6D3" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#2C2C2C" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-10 h-10 rounded-lg bg-brand/[0.15] border border-brand" />
                <div className="w-10 h-10 rounded-lg bg-brand/[0.07] border border-brand/15" />
                <div className="w-10 h-10 rounded-lg bg-brand/[0.07] border border-brand/15" />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-0 justify-between py-0">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-lg font-normal text-black mb-4 leading-tight">{t("solutions.tryOn.title")}</h3>
              <p className="text-[#2d2d2d] text-sm max-w-full">
                {t("solutions.tryOn.desc")}{" "}<strong>{t("solutions.tryOn.descBold")}</strong>
              </p>
              <p className="text-[#2d2d2d] text-sm mt-4 max-w-full">
                <strong>{t("solutions.tryOn.desc2Bold")}</strong>
              </p>
              <div className="flex mt-6">
                <div className="flex flex-col gap-1 flex-1 items-center text-center">
                  <CountUp target={93} suffix="%" className="text-2xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] text-sm leading-snug">{t("solutions.tryOn.stat1")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>
      </div>

      {/* Desktop: layout vertical normal */}
      <div className="hidden md:flex flex-col gap-24 overflow-hidden">
        {/* VIDEO COMMERCE */}
        <SolutionArticle direction="left" id="video-commerce">
          <div
            className="flex-1 flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden md:min-h-96"
            aria-hidden="true"
          >
            <div className="p-6 flex flex-col gap-2 w-full">
              <div className="flex gap-2 justify-center items-end">
                <div className="rounded-xl bg-brand/25 relative overflow-hidden flex-shrink-0 w-14 h-24">
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-xs text-white bg-black/45 rounded px-1.5 py-0.5 font-bold">A</span>
                </div>
                <div className="rounded-xl bg-brand/50 relative overflow-hidden flex-shrink-0 w-16 h-32">
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-xs text-white bg-black/45 rounded px-1.5 py-0.5 font-bold">B</span>
                </div>
                <div className="rounded-xl bg-brand relative overflow-hidden flex-shrink-0 w-24 h-40">
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-xs text-white bg-black/45 rounded px-1.5 py-0.5 font-bold">{t("solutions.videoCommerce.formatCarousel")}</span>
                </div>
                <div className="rounded-xl bg-brand/50 relative overflow-hidden flex-shrink-0 w-16 h-32">
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-xs text-white bg-black/45 rounded px-1.5 py-0.5 font-bold">C</span>
                </div>
                <div className="rounded-xl bg-brand/25 relative overflow-hidden flex-shrink-0 w-14 h-24">
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-xs text-white bg-black/45 rounded px-1.5 py-0.5 font-bold">D</span>
                </div>
              </div>
              <div className="flex gap-1.5 justify-center">
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-2.5 py-1 rounded-full">{t("solutions.videoCommerce.formatStories")}</span>
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-2.5 py-1 rounded-full">{t("solutions.videoCommerce.formatCarousel")}</span>
                <span className="bg-brand/[0.12] text-brand text-xs font-bold px-2.5 py-1 rounded-full">{t("solutions.videoCommerce.formatExplore")}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-8 justify-between py-8">
            <div>
              <h3 className="text-5xl font-normal text-black mb-4 leading-tight">Video Commerce</h3>
              <p className="text-[#2d2d2d] max-w-full">
                <strong>{t("solutions.videoCommerce.descBold")}</strong>{" "}{t("solutions.videoCommerce.desc")}
              </p>
              <p className="text-[#2d2d2d] mt-4 max-w-full">
                {t("solutions.videoCommerce.desc2")}{" "}<strong>{t("solutions.videoCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-8 mb-8 mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] leading-snug">{t("solutions.videoCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1">
                  <CountUp target={4} suffix="x" className="text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] leading-snug">{t("solutions.videoCommerce.stat2")}</span>
                </div>
              </div>
              <a href="/video-commerce" className="inline-flex items-center gap-2 font-bold text-[#010b15] no-underline w-fit px-7 py-3 border border-black/20 rounded-full hover:border-black transition-colors">
                {t("solutions.learnMore")}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                  <path d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </SolutionArticle>

        {/* LIVE COMMERCE */}
        <SolutionArticle direction="right" id="live-commerce">
          <div
            className="flex-1 flex-shrink-0 bg-[#1a1a1a] rounded-2xl flex items-center justify-center overflow-hidden md:min-h-96"
            aria-hidden="true"
          >
            <div className="flex items-end gap-2.5 p-5">
              <div className="w-28 h-48 rounded-2xl bg-[#0A0A0A] overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 opacity-75" style={{ background: "linear-gradient(160deg,#003AB9,#2667F8)" }} />
                <span className="absolute top-2.5 left-2.5 bg-[#FF3B30] text-white text-xs font-black px-2 py-0.5 rounded-full">{t("solutions.liveCommerce.mockLive")}</span>
                <span className="absolute top-2.5 right-2.5 bg-black/50 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">1.2k</span>
                <div className="absolute bottom-14 left-1.5 right-1.5 flex flex-col gap-1">
                  <div className="bg-black/50 rounded-md px-1.5 py-1 text-xs text-white">{t("solutions.liveCommerce.mockMessage1")}</div>
                  <div className="bg-black/50 rounded-md px-1.5 py-1 text-xs text-white">{t("solutions.liveCommerce.mockMessage2")}</div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-brand rounded-lg px-2 py-1.5 text-xs font-bold text-white text-center">{t("solutions.liveCommerce.mockAddToCart")}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-white/90 border border-[#eee] rounded-lg p-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md flex-shrink-0 bg-brand/20" />
                  <div>
                    <div className="text-xs font-bold text-black">{t("solutions.liveCommerce.mockProduct")}</div>
                    <div className="text-xs font-black text-brand">{t("solutions.liveCommerce.mockPrice")}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="bg-brand/[0.08] rounded-md px-2.5 py-1.5 text-xs text-brand font-bold">{t("solutions.liveCommerce.mockSales")}</div>
                  <div className="bg-brand/[0.08] rounded-md px-2.5 py-1.5 text-xs text-brand font-bold">{t("solutions.liveCommerce.mockSpectators")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-8 justify-between py-8">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-5xl font-normal text-black mb-4 leading-tight">{t("solutions.liveCommerce.title")}</h3>
              <p className="text-[#2d2d2d] max-w-full">
                <strong>{t("solutions.liveCommerce.descBold")}</strong>{" "}{t("solutions.liveCommerce.desc")}
              </p>
              <p className="text-[#2d2d2d] mt-4 max-w-full">
                <strong>{t("solutions.liveCommerce.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-8 mb-8 mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={5} suffix="x" className="text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] leading-snug">{t("solutions.liveCommerce.stat1")}</span>
                </div>
                <div className="w-px bg-[#E9E9E9]" />
                <div className="flex flex-col gap-1">
                  <CountUp target={60} prefix="+" suffix="%" className="text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] leading-snug">{t("solutions.liveCommerce.stat2")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>

        {/* TRYON */}
        <SolutionArticle direction="left" id="provador-ia">
          <div
            className="flex-1 flex-shrink-0 bg-[#e5e5e5] rounded-2xl flex items-center justify-center overflow-hidden md:min-h-96"
            aria-hidden="true"
          >
            <div className="flex gap-2.5 p-5 items-end">
              <div className="w-24 h-48 rounded-2xl bg-brand/[0.08] border border-brand/20 overflow-hidden flex flex-col flex-shrink-0">
                <div className="flex-1 relative" style={{ background: "linear-gradient(160deg,rgba(38,103,248,0.25),rgba(0,58,185,0.15))" }}>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-11 h-20 bg-brand/30 rounded-t-lg" />
                </div>
                <div className="bg-brand/[0.06] px-2 py-2 flex gap-1.5 justify-center">
                  <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#E8C4A0" }} />
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-brand" style={{ background: "#6B4C3B" }} />
                  <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#F5E6D3" }} />
                  <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#2C2C2C" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="w-14 h-14 rounded-lg bg-brand/[0.15] border border-brand" />
                <div className="w-14 h-14 rounded-lg bg-brand/[0.07] border border-brand/15" />
                <div className="w-14 h-14 rounded-lg bg-brand/[0.07] border border-brand/15" />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-8 justify-between py-8">
            <div>
              <span className="inline-block bg-[#1D1D1D] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{t("solutions.new")}</span>
              <h3 className="text-5xl font-normal text-black mb-4 leading-tight">{t("solutions.tryOn.title")}</h3>
              <p className="text-[#2d2d2d] max-w-full">
                {t("solutions.tryOn.desc")}{" "}<strong>{t("solutions.tryOn.descBold")}</strong>
              </p>
              <p className="text-[#2d2d2d] mt-4 max-w-full">
                <strong>{t("solutions.tryOn.desc2Bold")}</strong>
              </p>
            </div>
            <div>
              <div className="flex gap-8 mb-8 mt-8">
                <div className="flex flex-col gap-1">
                  <CountUp target={93} suffix="%" className="text-5xl font-normal text-[#1d1d1d] leading-none mb-1" />
                  <span className="text-[#5d5d5d] leading-snug">{t("solutions.tryOn.stat1")}</span>
                </div>
              </div>
            </div>
          </div>
        </SolutionArticle>
      </div>
    </section>
  );
}
