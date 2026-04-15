import { useTranslation } from "react-i18next";
import CountUp from "@/components/CountUp";
import SectionTitle from "@/components/SectionTitle";

const stats = [
  { target: 80, prefix: "", suffix: "%" },
  { target: 5, prefix: "", suffix: "x" },
  { target: 4, prefix: "", suffix: "x" },
];

export default function VCWhy() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#003ab9] rounded-[12px] md:rounded-[20px] px-6 py-10 md:py-24 md:px-16">
      {/* Top row: title left, paragraph right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 mb-10 md:mb-16">
        <div>
          <SectionTitle
            label={t("vc.why.label")}
            title={t("vc.why.title")}
            className="[&_span]:text-white/40 [&_h2]:text-white"
          />
        </div>
        <div className="flex items-center">
          <p className="text-base md:text-lg text-white/50 leading-[1.6]">
            {t("vc.why.description")}
          </p>
        </div>
      </div>

      {/* Stats row: 3 columns with left border */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 md:gap-10 text-center md:text-left">
        {stats.map((stat, i) => (
          <div key={i} className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-6 pb-4 md:pb-0 flex md:block items-center gap-4 justify-center md:justify-start">
            <CountUp
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="block text-3xl md:text-5xl font-light text-white leading-none md:mb-3 flex-shrink-0 w-[80px]"
            />
            <span className="text-base md:text-lg text-white/50 leading-[1.4]">
              {t(`vc.why.stat${i + 1}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
