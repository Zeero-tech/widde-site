import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./AnimatedButton";
import CountUp from "./CountUp";

export default function Problem() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative rounded-[20px] overflow-hidden px-5 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20 items-center"
      aria-labelledby="problema2-heading"
    >
      {inView && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/problem-video/background.mp4" type="video/mp4" />
        </video>
      )}


      {/* Left */}
      <div className="relative z-10 flex-[2.5]">
        <h2
          id="problema2-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-[1.25] mb-6 md:mb-7"
        >
          A experiência online ainda afasta o cliente
        </h2>
        <div className="mb-7">
          <p className="text-base md:text-lg text-white/55 leading-[1.65] mb-4">
            O consumidor não sabe como o produto funciona, como fica no corpo, se vale o investimento.
          </p>
          <p className="text-base md:text-lg text-white/55 leading-[1.65]">
            Com <strong className="text-white font-bold">Video Commerce</strong>, <strong className="text-white font-bold">Provador Virtual</strong> e <strong className="text-white font-bold">Live Commerce</strong>, a Widde faz o consumidor ver, experimentar e sentir o seu produto antes de comprar.
          </p>
        </div>
        <AnimatedButton
          href="/contato-vendas"
          className="inline-block w-full md:w-fit text-center bg-white text-[#1D1D1D] font-bold text-lg md:text-lg px-[22px] py-[11px] rounded-full no-underline"
        >
          Falar com vendas →
        </AnimatedButton>
      </div>

      {/* Numbers */}
      <div className="relative z-10 flex flex-col md:border-l border-white/15 md:pl-6 lg:pl-10 flex-shrink-0 w-full md:w-auto">
        <div className="py-4 md:py-6 flex md:block items-center gap-4">
          <CountUp
            target={84}
            suffix="%"
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            deixam de comprar por medo do produto não ser como descrito
          </div>
        </div>
        <div className="py-4 md:py-6 border-t border-white/15 flex md:block items-center gap-4">
          <CountUp
            target={63}
            suffix="%"
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            buscam vídeos antes de uma compra
          </div>
        </div>
        <div className="py-4 md:py-6 border-t border-white/15 flex md:block items-center gap-4">
          <CountUp
            target={65}
            suffix="%"
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-none md:mb-2 flex-shrink-0"
          />
          <div className="text-base md:text-lg text-white/55 leading-[1.4] max-w-[400px] mt-2">
            desistem por más experiências no e-commerce
          </div>
        </div>
      </div>
    </section>
  );
}
