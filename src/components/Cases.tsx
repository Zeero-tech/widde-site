import { useTranslation } from "react-i18next";
import { cases } from "@/data/cases";
import AnimatedButton from "./AnimatedButton";
import SectionTitle from "./SectionTitle";

export default function Cases() {
  const { t } = useTranslation();
  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
    >
      <SectionTitle
        label={t("cases.label")}
        title={t("cases.title")}
        id="cases-heading"
        className="mb-2"
      />
      <p className="text-sm md:text-base text-[#5d5d5d] leading-[1.6] max-w-[520px] mb-8">
        {t("cases.description")}
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]"
        role="list"
      >
        {cases.map((c) => (
          <a
            key={c.title}
            href={c.link}
            role="listitem"
            className="rounded-[14px] overflow-hidden cursor-pointer flex flex-col no-underline transition-all duration-300 ease-out shadow-[0_0_0_1px_rgb(233,233,233)] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]"
          >
            {/* Thumbnail */}
            <div
              className="w-full h-[200px] md:h-[290px] relative flex items-end"
              style={c.image ? {} : { background: c.bg }}
            >
              {c.image && (
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(5deg,rgba(0,0,0,1) 0%,rgba(0,0,0, 0.9) 20%,transparent 50%)",
                }}
              />
              <span className="relative z-[1] text-xs font-bold text-white uppercase tracking-[1px] px-4 pb-[14px]">
                {c.category}
              </span>
            </div>
            {/* Body */}
            <div className="p-4 bg-[#f6f6f6] flex flex-col flex-1">
              <p className="text-base font-normal text-[#1d1d1d] mb-[6px] leading-[1.4]">
                {c.title}
              </p>
              <p className="text-sm md:text-base text-[#5d5d5d] leading-[1.5] mb-[14px] flex-1">
                {c.desc}
              </p>
              <span className=" font-bold text-[#010b15] flex items-center gap-1">
                {t("cases.readMore")}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-15">
        <AnimatedButton
          href="https://widde.io/cases?utm_medium=cpc&utm_source=google&utm_campaign=01"
          className="inline-block bg-transparent text-black  font-bold px-[26px] py-[11px] rounded-full no-underline border-[1.5px] border-black hover:bg-black hover:text-white transition-colors"
        >
          {t("cases.viewAll")}
        </AnimatedButton>
      </div>
    </section>
  );
}
