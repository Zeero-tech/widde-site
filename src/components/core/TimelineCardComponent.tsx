import { useState } from "react";

interface ManifestoItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

interface TimelineCardComponentProps {
  items: ManifestoItem[];
  animationDuration?: number;
}

export default function TimelineCardComponent({
  items,
  animationDuration = 400,
}: TimelineCardComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"up" | "down">("up");
  const [visible, setVisible] = useState(true);

  const handleTimelineClick = (index: number) => {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);
    setSlideDir("up");
    setVisible(false);

    setTimeout(() => {
      setActiveIndex(index);
      setSlideDir("down");
      setVisible(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    }, animationDuration);
  };

  const handleCardClick = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    handleTimelineClick(nextIndex);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const cardStyle: React.CSSProperties = {
    willChange: "transform, opacity",
    transition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.6, 1), opacity ${animationDuration}ms cubic-bezier(0.4, 0, 0.6, 1)`,
    transform: visible
      ? "translate(0, 0)"
      : isMobile
        ? slideDir === "up" ? "translateX(-60px)" : "translateX(60px)"
        : slideDir === "up" ? "translateY(-60px)" : "translateY(60px)",
    opacity: visible ? 1 : 0,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
      {/* Timeline */}
      <div className="hidden lg:flex w-full lg:w-[30%] flex-col gap-1">
        {items.map((item, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleTimelineClick(index)}
              className={`flex items-start gap-3 px-4 py-4 rounded-lg text-left transition-all duration-300 border-l-4 w-full ${
                active
                  ? "bg-blue-50 border-blue-500"
                  : "bg-white border-transparent hover:bg-slate-50"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold ${
                  active
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`text-sm leading-snug pt-1 ${
                  active
                    ? "text-blue-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Card */}
      <div className="w-full lg:w-[70%] relative overflow-hidden">
        <div
          className="bg-white rounded-2xl shadow-lg cursor-pointer"
          onClick={handleCardClick}
          style={cardStyle}
        >
          <div className="p-8 flex flex-col gap-5 justify-center min-h-[320px]">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold self-start">
              #{activeIndex + 1} de {items.length}
            </span>
            <h3 className="text-4xl font-bold text-slate-800 leading-tight">
              {items[activeIndex].title}
            </h3>
            <p className="text-xl text-blue-600 font-semibold">
              {items[activeIndex].subtitle}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {items[activeIndex].content}
            </p>
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                Próximo →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
