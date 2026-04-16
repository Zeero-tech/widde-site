import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";
import { vcFormatVideos } from "@/data/vcFormats";

export default function VCFormats() {
  const { t } = useTranslation();

  const formats = [
    {
      name: t("vc.formats.stories.name"),
      desc: t("vc.formats.stories.description"),
      onde: t("vc.formats.stories.locations", { returnObjects: true }) as string[],
      videoIdx: 0,
    },
    {
      name: t("vc.formats.carousel.name"),
      desc: t("vc.formats.carousel.description"),
      onde: t("vc.formats.carousel.locations", { returnObjects: true }) as string[],
      videoIdx: 1,
    },
    {
      name: t("vc.formats.highlights.name"),
      desc: t("vc.formats.highlights.description"),
      onde: t("vc.formats.highlights.locations", { returnObjects: true }) as string[],
      videoIdx: 2,
    },
    {
      name: t("vc.formats.productHighlights.name"),
      desc: t("vc.formats.productHighlights.description"),
      onde: t("vc.formats.productHighlights.locations", { returnObjects: true }) as string[],
      videoIdx: 3,
    },
    {
      name: t("vc.formats.explore.name"),
      desc: t("vc.formats.explore.description"),
      onde: t("vc.formats.explore.locations", { returnObjects: true }) as string[],
      videoIdx: 4,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = formats[activeIdx];

  return (
    <section aria-labelledby="formatos-heading">
      <SectionTitle
        label={t("vc.formats.label")}
        title={t("vc.formats.title")}
        id="formatos-heading"
        className="mb-9"
      />

      {/* Mobile: phone mockup carousel */}
      <div className="md:hidden flex flex-col items-center gap-16 px-4">
        {/* Phone mockup */}
        <div className="relative w-[60%]" style={{ aspectRatio: "9/19.5" }}>
          {/* Video clipped to inner radius */}
          <div className="absolute inset-[6px] rounded-[30px] overflow-hidden z-0">
            <video
              key={vcFormatVideos[current.videoIdx]?.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {vcFormatVideos[current.videoIdx]?.webm && (
                <source src={vcFormatVideos[current.videoIdx].webm} type="video/webm" />
              )}
              <source src={vcFormatVideos[current.videoIdx]?.src ?? ""} type="video/mp4" />
            </video>
          </div>
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[36px] border-[6px] border-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,0.55)] z-10 pointer-events-none" />
          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20 pointer-events-none" />
        </div>

        {/* Text + nav */}
        <div className="w-full flex flex-col gap-2">
          <div className="text-xl font-bold text-black leading-tight">{current.name}</div>
          <div className="text-sm text-[#555] leading-relaxed">{current.desc}</div>
          <div className="text-xs text-[#aaa]">
            {t("vc.formats.appearsIn")}
            {current.onde.map((lugar) => (
              <span
                key={lugar}
                className="bg-[#F0F0F0] rounded text-xs font-bold text-[#555] px-[7px] py-[2px] ml-1"
              >
                {lugar}
              </span>
            ))}
          </div>

          {/* Dots + nav buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1.5">
              {formats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-5 bg-black" : "w-1.5 bg-black/20"}`}
                  aria-label={`Formato ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {activeIdx > 0 && (
                <button
                  onClick={() => setActiveIdx(activeIdx - 1)}
                  className="flex items-center gap-2 bg-transparent text-black text-sm font-bold px-4 py-2.5 rounded-full w-fit border border-black/20 hover:border-black transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  Anterior
                </button>
              )}
              {activeIdx < formats.length - 1 && (
                <button
                  onClick={() => setActiveIdx(activeIdx + 1)}
                  className="flex items-center gap-2 bg-black text-white text-sm font-bold px-4 py-2.5 rounded-full w-fit"
                >
                  Próximo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: phone mockup carousel */}
      <div className="hidden md:flex items-center gap-24 px-50" style={{ height: "70vh" }}>
        {/* Phone mockup */}
        <div className="relative flex-shrink-0 h-full" style={{ aspectRatio: "9.2/19.5" }}>
          {/* Video clipped to inner radius */}
          <div className="absolute inset-[8px] rounded-[28px] overflow-hidden z-0">
            <video
              key={vcFormatVideos[current.videoIdx]?.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              {vcFormatVideos[current.videoIdx]?.webm && (
                <source src={vcFormatVideos[current.videoIdx].webm} type="video/webm" />
              )}
              <source src={vcFormatVideos[current.videoIdx]?.src ?? ""} type="video/mp4" />
            </video>
          </div>
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[36px] border-[8px] border-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,0.75)] z-10 pointer-events-none" />
          {/* Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-20 pointer-events-none" />
        </div>

        {/* Right side: text + nav */}
        <div className="flex flex-col justify-between flex-1 h-full py-8">
          <div>
            <div className="text-4xl font-bold text-black mb-5 leading-tight">{current.name}</div>
            <div className="text-lg text-[#555] leading-relaxed mb-6">{current.desc}</div>
            <div className="text-base text-[#aaa]">
              {t("vc.formats.appearsIn")}
              {current.onde.map((lugar) => (
                <span
                  key={lugar}
                  className="bg-[#F0F0F0] rounded text-base font-bold text-[#555] px-[7px] py-[2px] ml-1"
                >
                  {lugar}
                </span>
              ))}
            </div>
          </div>

          {/* Dots + nav buttons */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              {formats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIdx ? "w-6 bg-black" : "w-2 bg-black/20"}`}
                  aria-label={`Formato ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {activeIdx > 0 && (
                <button
                  onClick={() => setActiveIdx(activeIdx - 1)}
                  className="flex items-center gap-2 bg-transparent text-black text-base font-bold px-5 py-3 rounded-full w-fit border border-black/20 hover:border-black transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  Anterior
                </button>
              )}
              {activeIdx < formats.length - 1 && (
                <button
                  onClick={() => setActiveIdx(activeIdx + 1)}
                  className="flex items-center gap-2 bg-black text-white text-base font-bold px-5 py-3 rounded-full w-fit"
                >
                  Próximo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
