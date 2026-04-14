import { useTranslation } from "react-i18next";

export default function VCFeatures() {
  const { t } = useTranslation();

  const cards = [
    {
      bg: "bg-brand/[0.15]",
      emoji: "🛒",
      badge: t("vc.features.card1.badge"),
      badgeClass: "bg-brand/[0.10] text-brand",
      title: t("vc.features.card1.title"),
      desc: t("vc.features.card1.description"),
    },
    {
      bg: "bg-black/[0.12]",
      emoji: "📊",
      badge: t("vc.features.card2.badge"),
      badgeClass: "bg-black/[0.06] text-[#444]",
      title: t("vc.features.card2.title"),
      desc: t("vc.features.card2.description"),
    },
    {
      bg: "bg-[rgba(26,158,92,0.15)]",
      emoji: "⚡",
      badge: t("vc.features.card3.badge"),
      badgeClass: "bg-[rgba(26,158,92,0.1)] text-[#1A9E5C]",
      title: t("vc.features.card3.title"),
      desc: t("vc.features.card3.description"),
    },
    {
      bg: "bg-[rgba(155,68,248,0.15)]",
      emoji: "💬",
      badge: t("vc.features.card4.badge"),
      badgeClass: "bg-[rgba(155,68,248,0.1)] text-[#9B44F8]",
      title: t("vc.features.card4.title"),
      desc: t("vc.features.card4.description"),
    },
  ];

  return (
    <section
      aria-labelledby="func-heading"
      className="bg-[#e5e5e5] py-8 md:py-16"
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-2">
        <span className="block text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px] mb-[10px]">
          {t("vc.features.label")}
        </span>
        <h2
          id="func-heading"
          className="text-xl md:text-2xl font-normal text-black leading-[1.25] max-w-[560px]"
        >
          {t("vc.features.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#e5e5e5] rounded-[14px] p-4 md:p-7 flex gap-4 md:gap-5 items-start"
            >
              <div
                className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-[10px] flex-shrink-0 flex items-center justify-center ${card.bg}`}
              >
                <span className="text-2xl">{card.emoji}</span>
              </div>
              <div>
                <span
                  className={`inline-block text-xs font-black px-[9px] py-[3px] rounded mb-2 uppercase tracking-[1px] ${card.badgeClass}`}
                >
                  {card.badge}
                </span>
                <div className=" font-black text-black mb-[6px]">
                  {card.title}
                </div>
                <div className="text-xs text-[#777] leading-[1.55]">
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
