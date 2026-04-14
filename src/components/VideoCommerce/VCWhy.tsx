import { useTranslation } from "react-i18next";
import CountUp from "@/components/CountUp";

const stats = [
  { target: 80, prefix: "", suffix: "%" },
  { target: 3, prefix: "", suffix: "x" },
  { target: 40, prefix: "+", suffix: "%" },
];

export default function VCWhy() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#003ab9] rounded-[12px] md:rounded-[20px] px-6 py-10 md:px-16 md:py-16 my-16 md:my-30">
      {/* Top row: title left, paragraph right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 mb-10 md:mb-16">
        <div>
          <span className="block text-xs font-bold text-white/40 uppercase tracking-[2px] mb-[10px]">
            {t("vc.why.label")}
          </span>
          <h2 className="text-lg md:text-2xl font-normal text-white leading-[1.25]">
            {t("vc.why.title")}
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-white/50 leading-[1.6]">
            {t("vc.why.description")}
          </p>
        </div>
      </div>

      {/* Stats row: 3 columns with left border */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="border-l border-white/20 pl-6">
            <CountUp
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="block text-5xl md:text-7xl font-light text-white leading-none mb-3"
            />
            <span className="text-white/50 leading-[1.4]">
              {t(`vc.why.stat${i + 1}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
