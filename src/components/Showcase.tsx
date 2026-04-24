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

// Cap simultaneous playing <video> elements — iOS Safari limits concurrent
// decoders to ~16 per page; Android/Chrome tolerate more but still throttle.
const MAX_CONCURRENT_PLAYS = 8;
const playingSet = new Set<HTMLVideoElement>();
const waitingQueue: HTMLVideoElement[] = [];

function requestPlay(video: HTMLVideoElement) {
  if (playingSet.has(video)) return;
  if (playingSet.size < MAX_CONCURRENT_PLAYS) {
    playingSet.add(video);
    video.play().catch(() => {});
    return;
  }
  if (!waitingQueue.includes(video)) waitingQueue.push(video);
}

function releasePlay(video: HTMLVideoElement) {
  const waitingIdx = waitingQueue.indexOf(video);
  if (waitingIdx >= 0) waitingQueue.splice(waitingIdx, 1);
  if (!playingSet.has(video)) return;
  playingSet.delete(video);
  try { video.pause(); } catch { /* noop */ }
  while (waitingQueue.length && playingSet.size < MAX_CONCURRENT_PLAYS) {
    const next = waitingQueue.shift();
    if (next && next.isConnected) {
      playingSet.add(next);
      next.play().catch(() => {});
    }
  }
}

type Breakpoint = "mobile" | "tablet" | "desktop";

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");
  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const tabletMq = window.matchMedia("(min-width: 768px) and (max-width: 1279px)");
    const compute = () => {
      if (mobileMq.matches) setBp("mobile");
      else if (tabletMq.matches) setBp("tablet");
      else setBp("desktop");
    };
    compute();
    mobileMq.addEventListener("change", compute);
    tabletMq.addEventListener("change", compute);
    return () => {
      mobileMq.removeEventListener("change", compute);
      tabletMq.removeEventListener("change", compute);
    };
  }, []);
  return bp;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  // Lazy-mount the <video> element only when close to the viewport. Keeps the
  // live decoder count far below iOS Safari's limit as the ticker scrolls.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
        setVisible(entry.isIntersecting);
      },
      { rootMargin: "300px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mounted) return;
    if (visible) requestPlay(video);
    else releasePlay(video);
    return () => releasePlay(video);
  }, [mounted, visible]);

  if (failed) return null;

  return (
    <div ref={containerRef} className="absolute inset-0">
      {mounted && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function BoardBlock({ offset, colSize, rowSize, isMobile, ariaHidden }: { offset: number; colSize: number; rowSize: number; isMobile: boolean; ariaHidden?: boolean }) {
  const items = buildItems(isMobile, offset)

  const mobileRows = "180px 180px 100px";
  const gridTemplateRows = isMobile
    ? mobileRows
    : `repeat(3, ${rowSize}px)`;

  return (
    <div
      className="grid flex-shrink-0 gap-3"
      aria-hidden={ariaHidden}
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

// 3 unique blocks duplicated once — ticker scrolls -50% for a seamless loop
// while only 3 unique content sets exist in the DOM.
const UNIQUE_BLOCKS = 3;

function ShowcaseInner() {
  const ref = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  const colSize = bp === "mobile" ? 150 : bp === "tablet" ? 220 : 280;
  const rowSize = bp === "mobile" ? 100 : bp === "tablet" ? 140 : 180;

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
          {Array.from({ length: UNIQUE_BLOCKS }).map((_, i) => (
            <BoardBlock key={`a-${i}`} offset={i} colSize={colSize} rowSize={rowSize} isMobile={isMobile} />
          ))}
          {Array.from({ length: UNIQUE_BLOCKS }).map((_, i) => (
            <BoardBlock key={`b-${i}`} offset={i} colSize={colSize} rowSize={rowSize} isMobile={isMobile} ariaHidden />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Showcase() {
  return <ErrorBoundary><ShowcaseInner /></ErrorBoundary>;
}
