import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";
import { vcFormatVideos } from "@/data/vcFormats";

function FormatThumb({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <div className="h-[190px] flex flex-col items-center justify-center bg-[#f0f0f0] gap-2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span className="text-xs text-[#aaa]">Imagem não disponível</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-[190px] object-cover"
      loading="lazy"
      decoding="async"
    />
  );
}

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

  return (
    <section aria-labelledby="formatos-heading">
      <SectionTitle
        label={t("vc.formats.label")}
        title={t("vc.formats.title")}
        id="formatos-heading"
        className="mb-9"
      />
      {/* Mobile: horizontal carousel */}
      <div
        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mr-5 pr-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {formats.map((f) => (
          <div
            key={f.name}
            className="flex-shrink-0 w-[80vw] snap-start bg-[#F5F5F5] border border-[#E9E9E9]/70 rounded-2xl overflow-hidden"
          >
            <FormatThumb src={vcFormatVideos[f.videoIdx]?.src ?? ""} alt={f.name} />
            <div className="p-4">
              <div className="text-2xl font-black text-black mb-[5px]">{f.name}</div>
              <div className="text-base text-[#777] leading-[1.5]">{f.desc}</div>
              <div className="text-sm text-[#aaa] mt-2">
                {t("vc.formats.appearsIn")}
                {f.onde.map((lugar) => (
                  <span
                    key={lugar}
                    className="bg-[#F0F0F0] rounded text-sm font-bold text-[#555] px-[7px] py-[2px] ml-1"
                  >
                    {lugar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Mobile trailing spacer */}
        <div className="flex-shrink-0 w-3" />
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {formats.map((f) => (
          <div
            key={f.name}
            className="bg-[#F5F5F5] border border-[#E9E9E9]/70 rounded-2xl overflow-hidden"
          >
            <FormatThumb src={vcFormatVideos[f.videoIdx]?.src ?? ""} alt={f.name} />
            <div className="p-4 md:p-7">
              <div className="font-normal md:text-2xl text-black mb-2 md:mb-4">{f.name}</div>
              <div className="text-xs md:text-lg text-[#777] leading-[1.5] mb-2 md:mb-4">{f.desc}</div>
              <div className="text-xs md:text-base text-[#aaa]">
                {t("vc.formats.appearsIn")}
                {f.onde.map((lugar) => (
                  <span
                    key={lugar}
                    className="bg-[#F0F0F0] rounded text-xs md:text-base font-bold text-[#555] px-[7px] py-[2px] ml-1"
                  >
                    {lugar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
