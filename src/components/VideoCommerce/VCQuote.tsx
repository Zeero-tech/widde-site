import { useTranslation } from "react-i18next";
import AnimatedButton from "@/components/AnimatedButton";

export default function VCQuote() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0A0A0A] rounded-[12px] md:rounded-[20px] px-6 py-8 md:px-16 md:py-14 mt-16 md:mt-30 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Left: quote */}
      <div className="flex-1">
        <p className="text-lg md:text-2xl text-white leading-[1.4] font-normal mb-6">
          {t("vc.quote.text")}
        </p>
        <div className="font-bold text-white mb-[2px]">
          {t("vc.quote.author")}
        </div>
        <div className="text-white/50 mb-8">{t("vc.quote.company")}</div>
        <AnimatedButton
          href="https://widde.io/demo"
          className="inline-block bg-brand text-white font-bold px-6 py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
        >
          {t("vc.quote.cta")}
        </AnimatedButton>
      </div>

      {/* Right: phone mock with video */}
      <div className="flex-shrink-0 w-full max-w-[280px] mx-auto md:mx-0">
        <div
          className="relative rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] w-full"
          style={{ aspectRatio: "9/16" }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.png"
          >
            <source
              src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.webm"
              type="video/webm"
            />
            <source
              src="https://videos.widde.io/widde-bucket-sp/site/site-18-09/estrela.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
