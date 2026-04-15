import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const items: {
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
}[] = [
    { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600", alt: "Fashion store", colSpan: 2, rowSpan: 2 },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600", alt: "Brand showcase", colSpan: 1, rowSpan: 1 },
    { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600", alt: "E-commerce", colSpan: 1, rowSpan: 1 },
    { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600", alt: "Shopping", colSpan: 1, rowSpan: 1 },
    { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600", alt: "Product display", colSpan: 1, rowSpan: 1 },
    { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", alt: "Product shot", colSpan: 1, rowSpan: 1 },
  ];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

function BoardBlock({ offset, colSize, rowSize, isMobile }: { offset: number; colSize: number; rowSize: number; isMobile: boolean }) {
  const gridTemplateRows = isMobile
    ? "180px 180px 100px"
    : `repeat(3, ${rowSize}px)`;

  return (
    <div
      className="grid flex-shrink-0 gap-3"
      style={{
        gridTemplateColumns: `repeat(3, ${colSize}px)`,
        gridTemplateRows,
        gridAutoFlow: "dense",
      }}
    >
      {items.map((item, i) => (
        <div
          key={`${offset}-${i}`}
          className="relative rounded-2xl overflow-hidden bg-amber-700"
          style={{
            gridColumn: `span ${item.colSpan}`,
            gridRow: `span ${item.rowSpan}`,
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const colSize = isMobile ? 150 : 280;
  const rowSize = isMobile ? 100 : 180;

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0.98, opacity: 0, filter: "blur(3px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "power1.out" }
    );
  }, []);

  return (
    <section ref={ref} className="bg-[#f6f6f6] overflow-hidden">
      <div className="flex">
        <div className="flex gap-3 animate-ticker-slow">
          {Array.from({ length: 6 }).map((_, i) => (
            <BoardBlock key={i} offset={i} colSize={colSize} rowSize={rowSize} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
