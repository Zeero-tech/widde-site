import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";

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

function MapImage() {
  return (
    <div className="overflow-auto">
      <img
        src="/assets/vtex-como-chegar.jpg"
        alt="Como chegar no stand da Widde no VTEX Day"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

export default function Hero2() {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      contentRef.current!.children,
      { x: -160, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, stagger: 0.12 },
    );
    tl.fromTo(
      cardRef.current,
      { opacity: 0, filter: "blur(16px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.4 },
      "<0.15",
    );
  }, []);

  return (
    <section className="bg-[#f6f6f6]">
      <div className="max-w-screen-xl mx-auto px-2">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: "min(80vh, 640px)" }}
        >
          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/vtex-bg.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

          {/* Content */}
          <div
            ref={contentRef}
            className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20 md:py-28"
            style={{ minHeight: "inherit" }}
          >
            <span className="block text-base font-bold bg-brand text-white px-3 py-1 uppercase tracking-[2.5px] mb-6 rounded">
              VTEX DAY 2026
            </span>

            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] mb-6 max-w-[800px]">
              Estamos no VTEX Day!
              <br />
              <span className="text-brand">16 e 17 de Abril</span>
            </h1>

            <p className="text-white/70 text-lg md:text-base leading-[1.7] mb-1 max-w-[720px]">
              Venha conhecer as novidades da Widde no maior evento de digital
              commerce do mundo.
            </p>
            <p className="font-bold text-white/80 md:text-base leading-[1.7] mb-10 max-w-[720px]">
              Estamos mostrando novidades que vão transformar a experiência de
              compra online.
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <AnimatedButton
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setMapOpen(true);
                }}
                className="inline-block bg-brand text-white font-bold px-7 py-[13px] rounded-full no-underline"
              >
                Como chegar no nosso stand
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Dialog / Mobile: Drawer */}
      {isMobile ? (
        <Drawer open={mapOpen} onOpenChange={setMapOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-lg font-bold text-black">
                Como chegar no nosso stand
              </DrawerTitle>
              <DrawerDescription className="text-sm text-[#666]">
                Mapa do VTEX Day 2026
              </DrawerDescription>
            </DrawerHeader>
            <MapImage />
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={mapOpen} onOpenChange={setMapOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Como chegar no nosso stand</DialogTitle>
              <DialogDescription>Mapa do VTEX Day 2026</DialogDescription>
            </DialogHeader>
            <MapImage />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
