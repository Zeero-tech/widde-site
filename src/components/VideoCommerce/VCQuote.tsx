import { useTranslation } from "react-i18next";
import AnimatedButton from "@/components/AnimatedButton";

export default function VCQuote() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0A0A0A] rounded-[12px] md:rounded-[20px] px-6 py-6 md:px-20 md:py-20 flex flex-col md:flex-row items-center gap-5 md:gap-20">
      {/* Video — top on mobile, right on desktop */}
      <div className="flex-shrink-0 w-full max-w-[250px] md:max-w-[280px] mx-auto md:mx-0 md:order-2">
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

      {/* Quote content — below video on mobile, left on desktop */}
      <div className="flex-1 md:order-1">
        <p className="text-xl md:text-4xl text-white leading-[1.4] font-normal mb-4 md:mb-10">
          {t("vc.quote.text")}
        </p>
        <div className="font-bold md:text-2xl text-white mb-[2px] md:mb-2">
          {t("vc.quote.author")}
        </div>
        <div className="text-base md:text-2xl text-white/50 mb-4 md:mb-12">{t("vc.quote.company")}</div>
        <AnimatedButton
          href="https://widde.io/demo"
          className="inline-block w-full md:w-auto text-center bg-brand text-white font-bold text-lg md:text-2xl px-6 py-3 rounded-full no-underline hover:opacity-90 transition-opacity"
        >
          {t("vc.quote.cta")}
        </AnimatedButton>
      </div>
    </div>
  );
}
