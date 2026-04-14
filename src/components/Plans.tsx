import { useTranslation } from "react-i18next";
import AnimatedButton from "./AnimatedButton";
import SectionTitle from "./SectionTitle";

export default function Plans() {
  const { t } = useTranslation();
  return (
    <section
      id="planos"
      aria-labelledby="planos-heading"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-7 flex-wrap gap-3">
        <div>
          <SectionTitle
            label={t("plans.label")}
            title={t("plans.title")}
            id="planos-heading"
          />
        </div>
        <div className="text-xs text-brand font-bold bg-brand/[0.08] px-[14px] py-[6px] rounded-full">
          💰 {t("plans.discountBadge")}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Starter */}
        <article className="bg-[#f6f6f6] rounded-[18px] p-9 relative shadow-[0_0_0_1px_rgb(233,233,233)]">
          <h3 className="text-base font-normal text-black mb-[6px]">Starter</h3>
          <div className="text-3xl font-normal text-black mb-1 leading-none">
            R$399<sub className=" font-normal text-[#888]">/mês</sub>
          </div>
          <p className=" text-[#888] mb-4">{t("plans.starterDesc")}</p>
          <ul className="list-none flex flex-col gap-2 mb-5">
            {[
              t("plans.starterFeature1"),
              t("plans.starterFeature2"),
              t("plans.starterFeature3"),
              t("plans.starterFeature4"),
              t("plans.starterFeature5"),
              t("plans.starterFeature6"),
            ].map((f) => (
              <li
                key={f}
                className=" text-[#5d5d5d] flex items-start gap-2 leading-[1.4]"
              >
                <span className="text-brand font-black flex-shrink-0">
                  &#10003;
                </span>
                {f}
              </li>
            ))}
          </ul>
          <AnimatedButton
            href="https://widde.io/quero-comecar?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="inline-block bg-[#f6f6f6] text-black  font-bold px-[22px] py-[11px] rounded-full no-underline border-[1.5px] border-[#E9E9E9] hover:bg-[#eee] transition-colors"
          >
            {t("plans.starterCta")}
          </AnimatedButton>
        </article>

        {/* Pro */}
        <article className="bg-[#0A0A0A] rounded-[18px] p-9 relative overflow-visible shadow-[0_0_0_1px_rgb(233,233,233)]">
          {/* Decorative SVG circles */}
          <svg
            className="absolute top-7 right-7 opacity-20"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="28" stroke="white" strokeWidth="1" />
            <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="1" />
          </svg>

          <span className="inline-block bg-brand text-white text-xs font-bold px-[10px] py-[2px] rounded-full mb-3">
            {t("plans.proRecommended")}
          </span>
          <h3 className="text-base font-normal text-white">Pro</h3>
          <div className="text-3xl font-normal text-white mb-1">
            {t("plans.proTagline")}
          </div>
          <p className=" text-white/45 mb-4">{t("plans.proDesc")}</p>

          <div className="flex gap-8">
            {/* Left */}
            <div className="flex-1">
              <ul className="list-none flex flex-col gap-2 mb-5">
                {[
                  t("plans.proFeature1"),
                  t("plans.proFeature2"),
                  t("plans.proFeature3"),
                  t("plans.proFeature4"),
                  t("plans.proFeature5"),
                  t("plans.proFeature6"),
                  t("plans.proFeature7"),
                ].map((f) => (
                  <li
                    key={f}
                    className=" text-white/60 flex items-start gap-2 leading-[1.4]"
                  >
                    <span className="text-[#6090FF] font-black flex-shrink-0">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col">
              <div className="bg-brand/20 rounded-[12px] p-4 mb-4">
                <h4 className=" font-black text-white mb-1">
                  {t("plans.proCardTitle")}
                </h4>
                <p className=" text-white/55 leading-[1.5]">
                  {t("plans.proCardDesc")}
                </p>
              </div>
              <AnimatedButton
                href="#contato"
                className="inline-block bg-brand text-white  font-bold px-[22px] py-[11px] rounded-full no-underline border border-brand w-fit"
              >
                {t("plans.proCta")}
              </AnimatedButton>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
