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
      <div className="flex justify-between items-end mb-10 md:mb-14 flex-wrap gap-3">
        <div>
          <SectionTitle
            label={t("plans.label")}
            title={t("plans.title")}
            id="planos-heading"
          />
        </div>
        <div className="text-xs text-brand font-bold bg-brand/[0.08] px-[14px] py-[6px] rounded-full">
          {t("plans.discountBadge")}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Starter */}
        <article className="bg-surface rounded-[18px] p-7 md:p-12 relative shadow-[0_0_0_1px_rgb(233,233,233)]">
          <h3 className="text-lg md:text-2xl font-normal text-black mb-2 md:mb-3">Starter</h3>
          <div className="text-[30px] md:text-4xl font-normal text-black mb-2 md:mb-3 leading-none">
            R$399<sub className=" font-normal text-[#888] md:text-[28px]">/mês</sub>
          </div>
          <p className="text-base md:text-lg text-[#888] mb-6 md:mb-8">{t("plans.starterDesc")}</p>
          <ul className="list-none flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
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
                className="text-base md:text-lg text-text-muted flex items-start gap-2 leading-[1.4]"
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
            className="inline-block w-full md:w-fit text-center bg-surface text-black font-bold text-lg md:text-lg px-[22px] py-[11px] rounded-full no-underline border-[1.5px] border-surface-border hover:bg-[#eee] transition-colors"
          >
            {t("plans.starterCta")}
          </AnimatedButton>
        </article>

        {/* Pro */}
        <article className="bg-ink rounded-[18px] p-7 md:p-12 relative overflow-visible shadow-[0_0_0_1px_rgb(233,233,233)]">
          {/* Decorative SVG circles */}
          <svg
            className="absolute top-3 right-4 md:top-7 md:right-7 opacity-20 w-10 h-10 md:w-20 md:h-20"
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

          <span className="inline-block bg-brand text-white text-xs font-bold px-[10px] py-[2px] rounded-full mb-4 md:mb-5">
            {t("plans.proRecommended")}
          </span>
          <h3 className="text-lg md:text-2xl font-normal text-white mb-1 md:mb-2">Pro</h3>
          <div className="text-[30px] md:text-4xl font-normal text-white mb-2 md:mb-3">
            {t("plans.proTagline")}
          </div>
          <p className="text-base md:text-lg text-white/45 mb-6 md:mb-8">{t("plans.proDesc")}</p>

          {/* Mobile: column layout (features → card → button) */}
          <div className="flex flex-col md:hidden gap-5">
            <ul className="list-none flex flex-col gap-3">
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
                  className="text-base text-white/60 flex items-start gap-2 leading-[1.4]"
                >
                  <span className="text-[#6090FF] font-black flex-shrink-0">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="bg-brand/20 rounded-[12px] p-5">
              <h4 className="text-lg font-black text-white mb-2">
                {t("plans.proCardTitle")}
              </h4>
              <p className="text-base text-white/55 leading-[1.5]">
                {t("plans.proCardDesc")}
              </p>
            </div>
            <AnimatedButton
              href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
              className="inline-block w-full text-center bg-brand text-white font-bold text-lg px-[22px] py-[11px] rounded-full no-underline border border-brand"
            >
              {t("plans.proCta")}
            </AnimatedButton>
          </div>

          {/* Desktop: two-column layout */}
          <div className="hidden md:flex gap-10">
            {/* Left */}
            <div className="flex-1">
              <ul className="list-none flex flex-col gap-4 mb-6">
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
                    className="text-lg text-white/60 flex items-start gap-3 leading-[1.4]"
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
              <div className="bg-brand/20 rounded-[12px] p-6 mb-6">
                <h4 className="text-lg font-black text-white mb-2">
                  {t("plans.proCardTitle")}
                </h4>
                <p className="text-lg text-white/55 leading-[1.5]">
                  {t("plans.proCardDesc")}
                </p>
              </div>
              <AnimatedButton
                href="https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01"
                className="text-lg inline-block bg-brand text-white font-bold px-[22px] py-[11px] rounded-full no-underline border border-brand w-fit"
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
