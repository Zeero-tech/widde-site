import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import AnimatedButton from "./AnimatedButton";
import { getLenis } from "@/lib/lenis";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

function MapImage() {
  return (
    <div className=" py-2">
      <img
        src="/assets/vtex-como-chegar.jpg"
        alt="Como chegar no estande da Widde no VTEX Day"
        className="w-full h-auto block rounded-lg"
        style={{ maxHeight: "60vh", objectFit: "contain" }}
      />
    </div>
  );
}

export default function Hero2() {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeBgRef = useRef<HTMLSpanElement>(null);
  const [mapOpen, setMapOpen] = useState(false);

  function handleMapOpen(open: boolean) {
    setMapOpen(open);
    if (open) {
      getLenis().stop();
      document.body.style.overflow = "hidden";
    } else {
      getLenis().start();
      document.body.style.overflow = "";
    }
  }
  useEffect(() => {
    // Card inteiro: blur + opacity ao entrar na tela
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, filter: "blur(16px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );

    // Badge background: revelação da direita para a esquerda
    gsap.fromTo(
      badgeBgRef.current,
      { clipPath: "inset(0 100% 0 0 round 4px)" },
      {
        clipPath: "inset(0 0% 0 0 round 4px)",
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          once: true,
        },
      }
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
            className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20 md:py-28"
            style={{ minHeight: "inherit" }}
          >
            {/* Badge com background animado */}
            <div className="relative inline-block mb-6">
              <span
                ref={badgeBgRef}
                className="absolute inset-0 bg-brand rounded"
              />
              <span className="relative block text-sm md:text-lg font-bold text-white px-3 py-1 uppercase tracking-[2.5px]">
                VTEX DAY 2026
              </span>
            </div>

            <h1 className="text-white text-2xl md:text-5xl lg:text-5xl font-black leading-[1.1] mb-4 md:mb-6 max-w-[800px]">
              Estamos no VTEX Day!
              <br />
              <span className="text-brand">16 e 17 de Abril</span>
            </h1>

            <p className="text-white/70 text-sm md:text-lg leading-[1.7] mb-1 max-w-[720px]">
              Venha conhecer as novidades da Widde no maior evento de digital
              commerce do mundo.
            </p>
            <p className="font-bold text-sm text-white/80 md:text-lg leading-[1.7] mb-8 md:mb-10 max-w-[720px]">
              Estamos mostrando novidades que vão transformar a experiência de
              compra online.
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <AnimatedButton
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleMapOpen(true);
                }}
                className="inline-block bg-brand text-white font-bold px-7 py-[13px] rounded-full no-underline"
              >
                Como chegar no nosso estande
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={mapOpen} onOpenChange={handleMapOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Como chegar no nosso estande</DialogTitle>
            <DialogDescription>Mapa do VTEX Day 2026</DialogDescription>
          </DialogHeader>
          <MapImage />
        </DialogContent>
      </Dialog>
    </section>
  );
}
