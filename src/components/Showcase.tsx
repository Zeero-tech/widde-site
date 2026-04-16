import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { showcaseVideos } from "@/data/showcase";

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

// Retorna src da lista pelo índice, voltando ao início se necessário
function pick(list: string[], index: number): string {
  if (!list.length) return '';
  return list[index % list.length];
}

type BlockItem = {
  src: string
  colSpan: number
  rowSpan: number
}

function buildItems(isMobile: boolean, blockIndex: number): BlockItem[] {
  const l = blockIndex // large index
  const s = blockIndex * 5 // small index base — 5 slots por bloco
  const m = blockIndex * 2 // medium index base — 2 slots por bloco

  if (isMobile) {
    return [
      { src: pick(showcaseVideos.mobile_large, l), colSpan: 2, rowSpan: 2 },
      { src: pick(showcaseVideos.mobile_medium, m), colSpan: 1, rowSpan: 1 },
      { src: pick(showcaseVideos.mobile_medium, m + 1), colSpan: 1, rowSpan: 1 },
      { src: pick(showcaseVideos.mobile_small, s), colSpan: 1, rowSpan: 1 },
      { src: pick(showcaseVideos.mobile_small, s + 1), colSpan: 1, rowSpan: 1 },
      { src: pick(showcaseVideos.mobile_small, s + 2), colSpan: 1, rowSpan: 1 },
    ]
  }
  return [
    { src: pick(showcaseVideos.desktop_large, l), colSpan: 2, rowSpan: 2 },
    { src: pick(showcaseVideos.desktop_small, s), colSpan: 1, rowSpan: 1 },
    { src: pick(showcaseVideos.desktop_small, s + 1), colSpan: 1, rowSpan: 1 },
    { src: pick(showcaseVideos.desktop_small, s + 2), colSpan: 1, rowSpan: 1 },
    { src: pick(showcaseVideos.desktop_small, s + 3), colSpan: 1, rowSpan: 1 },
    { src: pick(showcaseVideos.desktop_small, s + 4), colSpan: 1, rowSpan: 1 },
  ]
}

function BoardBlock({ offset, colSize, rowSize, isMobile }: { offset: number; colSize: number; rowSize: number; isMobile: boolean }) {
  const items = buildItems(isMobile, offset)

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
          className="relative rounded-2xl overflow-hidden bg-[#e0e0e0]"
          style={{
            gridColumn: `span ${item.colSpan}`,
            gridRow: `span ${item.rowSpan}`,
          }}
        >
          {item.src && (
            item.src.match(/\.(png|jpg|jpeg|webp)$/i)
              ? <img className="absolute inset-0 w-full h-full object-cover" src={item.src} alt="" loading="lazy" />
              : <video
                className="absolute inset-0 w-full h-full object-cover"
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => { (e.currentTarget as HTMLVideoElement).currentTime = 5; }}
              />
          )}
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
    <section ref={ref} className="bg-surface overflow-hidden">
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
