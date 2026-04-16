import { useEffect, useRef, useState, Component, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseVideos } from "@/data/showcase";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() { return this.state.error ? null : this.props.children; }
}

gsap.registerPlugin(ScrollTrigger);

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
  const l = blockIndex
  const s = blockIndex * 5
  const m = blockIndex * 2

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

function VideoItem({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (failed) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      muted
      loop
      playsInline
      preload="none"
      onError={() => setFailed(true)}
      onLoadedMetadata={(e) => { (e.currentTarget as HTMLVideoElement).currentTime = 5; }}
    />
  );
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
              : <VideoItem src={item.src} />
          )}
        </div>
      ))}
    </div>
  );
}

function ShowcaseInner() {
  const ref = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const colSize = isMobile ? 150 : 280;
  const rowSize = isMobile ? 100 : 180;

  // Reveal animation via ScrollTrigger
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0.98, opacity: 0, filter: "blur(3px)" },
      {
        scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "power1.out",
        scrollTrigger: { trigger: ref.current, start: "top 96%", once: true },
      }
    );
  }, []);

  // Pause ticker animation until visible
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    el.style.animationPlayState = "paused";
    const observer = new IntersectionObserver(
      ([entry]) => { el.style.animationPlayState = entry.isIntersecting ? "running" : "paused"; },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-surface overflow-hidden">
      <div className="flex">
        <div ref={tickerRef} className="flex gap-3 animate-ticker-slow">
          {Array.from({ length: 6 }).map((_, i) => (
            <BoardBlock key={i} offset={i} colSize={colSize} rowSize={rowSize} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Showcase() {
  return <ErrorBoundary><ShowcaseInner /></ErrorBoundary>;
}
