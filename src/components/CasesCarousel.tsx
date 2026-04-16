import { useRef, useEffect } from "react";
import { cases } from "@/data/cases";
import SectionTitle from "./SectionTitle";

export default function CasesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    function handleWheel(e: WheelEvent) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el!.scrollLeft += e.deltaY;
    }
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-2 -mr-5 md:mr-0 pr-0 md:pr-2">
      <SectionTitle
        label="Cases"
        title="Histórias de sucesso a Widde"
        className="mb-8"
      />

      <div className="flex gap-3 items-stretch">
        {/* Left arrow */}
        {/* <button
          onClick={() => scroll("left")}
          aria-label="Scroll para esquerda"
          className="flex-shrink-0 w-10 self-stretch flex items-center justify-center rounded-lg bg-[#ebebeb] hover:bg-[#e4e4e4] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button> */}

        <div
          ref={scrollRef}
className="flex flex-1 gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((c) => (
            <a
              key={c.title}
              href={c.link}
              className="group flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[calc(50%-60px)] cursor-pointer flex flex-col no-underline snap-start"
            >
              {/* Thumbnail */}
              <div className="w-full h-[240px] md:h-[300px] relative overflow-hidden rounded-md">
                <img
                  src={c.image}
                  srcSet={c.image?.endsWith('.avif') ? undefined : `${c.image?.replace(/(\.[^.]+)$/, '-p-500$1')} 500w, ${c.image?.replace(/(\.[^.]+)$/, '-p-800$1')} 800w, ${c.image?.replace(/(\.[^.]+)$/, '-p-1080$1')} 1080w, ${c.image} 2560w`}
                  sizes={c.image?.endsWith('.avif') ? undefined : "(max-width: 640px) 85vw, 600px"}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="py-5 md:py-6 flex flex-col flex-1">
                <h3 className="text-2xl md:text-2xl font-bold text-charcoal mb-3 leading-[1.3] tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed mb-5 flex-1">
                  {c.desc}
                </p>
                <span className="text-base md:text-lg font-bold text-navy flex items-center gap-2 group-hover:underline">
                  Ver caso completo
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-y-[0.5px] transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path
                      d="M3.333 8h9.334M8.667 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
          {/* Mobile trailing spacer — 12px page padding */}
          <div className="md:hidden flex-shrink-0" />
        </div>

        {/* Right arrow */}
        {/* <button
          onClick={() => scroll("right")}
          aria-label="Scroll para direita"
          className="flex-shrink-0 w-10 self-stretch flex items-center justify-center rounded-lg bg-[#ebebeb] hover:bg-[#e4e4e4] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1d1d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button> */}
      </div>
    </section>
  );
}
