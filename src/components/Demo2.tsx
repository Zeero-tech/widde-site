import { useTranslation } from "react-i18next";
import MuxPlayer from "@mux/mux-player-react";
import SectionTitle from "./SectionTitle";
import AnimatedButton from "./AnimatedButton";

export default function Demo2() {
  const { t } = useTranslation();
  return (
    <section id="demo2" className="bg-[#e5e5e5] py-10 md:py-16">
      <div className="max-w-screen-xl mx-auto px-3 md:px-2">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        {/* Video */}
        <div className="w-full md:w-[58%] rounded-2xl overflow-hidden">
          <MuxPlayer
            playbackId="ud86wbc5uESjjIPpJ421FK02uZtEYPpezDXvQnMg02SfI"
            metadataVideoTitle="Demonstração da Widde"
            thumbnailTime={20.2}
            accentColor="#2667F8"
            style={{ width: "100%", aspectRatio: "16/9" }}
            streamType="on-demand"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-[42%] flex flex-col">
          <SectionTitle
            label="Conheça"
            title={t("demo.heading")}
            className="mb-4"
          />
          <p className="text-base md:text-base text-[#5d5d5d] leading-[1.6] mb-8 max-w-[440px]">
            {t(
              "demo.description",
              "Conheça como a Widde gera mais conversão, menos devolução e mais valor percebido do seu produto e marca."
            )}
          </p>
          <AnimatedButton
            href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block w-full md:w-fit text-center bg-black text-white font-bold text-lg md:text-base px-[26px] py-[11px] rounded-full no-underline hover:bg-[#333] transition-colors md:self-start"
          >
            {t("demo.cta", "Falar com vendas")}
          </AnimatedButton>
        </div>
      </div>
      </div>
    </section>
  );
}
