import { integrations } from "@/data/integrations";
import { useTranslation } from "react-i18next";

export default function Integrations() {
  const { t } = useTranslation();
  const doubled = [...integrations, ...integrations];

  return (
    <section
      className="rounded-[20px] p-6 pt-14 md:p-15 overflow-hidden shadow-[0_0_0_1px_rgb(233,233,233)]"
      style={{ background: "#003ab9ff" }}
      aria-labelledby="int-heading"
    >
      <h2
        id="int-heading"
        className="text-2xl md:text-3xl leading-normal font-normal text-white mb-4 max-w-[840px]"
      >
        {t("integrations.title")}
      </h2>
      <p className="text-sm md:text-sm text-white/50 mb-7">{t("integrations.description")}</p>

      <div
        className="overflow-hidden md:-mx-11 -mb-5 md:-mb-10 px-0 py-5"
        aria-label={t("integrations.ariaLabel")}
      >
        <div className="flex gap-[10px] animate-scroll-logos-fast md:animate-scroll-logos">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-[8px] px-[14px] h-11 flex items-center justify-center min-w-[90px] pb-1"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="w-auto object-contain"
                style={{ opacity: 0.8, height: logo.height ? logo.height * 0.75 : 14 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
