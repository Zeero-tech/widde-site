import { useRef, useEffect } from "react";

const videos = [
  {
    src: "https://www.youtube-nocookie.com/embed/ILBUjeEbyL0?si=47TDwjgpyH_3ikE0&controls=0",
    heading: "Video Commerce",
    paragraphs: [
      <>
        Até pouco tempo, todos os e-commerces seguiam o mesmo padrão: fotos,
        textos e pouca interação.
      </>,
      <>
        A Widde chegou para mudar isso. Com o Video Commerce,{" "}
        <strong>
          transformamos a experiência de compra online com humanização
        </strong>
        , criando conexões reais entre marcas e consumidores.
      </>,
      <>
        Hoje,{" "}
        <strong>milhares de lojas já adotaram esse novo formato</strong> e estão
        deixando o modelo tradicional para trás.{" "}
        <strong>O futuro do e-commerce é criar conexão</strong>, e a Widde já
        está nele.
      </>,
    ],
  },
  {
    src: "https://www.youtube-nocookie.com/embed/xTXuUuKT-do?si=3HJyZ0UsQkzHk9yO&controls=0",
    heading: "Quem somos",
    paragraphs: [
      <>
        O e-commerce evoluiu, mas a experiência de compra ainda precisa de mais{" "}
        <strong>conexão, clareza e confiança</strong>.
      </>,
      <>
        Na Widde, acreditamos que cada{" "}
        <strong>loja on-line pode ser mais do que um catálogo digital</strong>.
      </>,
      <>
        Somos uma plataforma de Video Commerce criada para humanizar e
        transformar a jornada de compra. Com{" "}
        <strong>tecnologia, design e propósito</strong>, ajudamos{" "}
        <strong>
          marcas a se conectarem de forma autêntica com seus consumidores
        </strong>
        .
      </>,
    ],
  },
];

export default function QSVideos() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    el.style.opacity = "0";

    function triggerPeek() {
      el!.style.scrollSnapType = "none";
      el!.classList.add("grid-videos-peek");
      function onPeekEnd(e: Event) {
        if ((e as AnimationEvent).animationName !== "gridVideosPeek") return;
        el!.removeEventListener("animationend", onPeekEnd);
        el!.classList.remove("grid-videos-peek");
        el!.style.scrollSnapType = "";
      }
      el!.addEventListener("animationend", onPeekEnd);
    }

    function triggerSequence() {
      el!.style.opacity = "";
      void el!.offsetWidth;
      el!.classList.add("carousel-reveal");
      function onRevealEnd(e: Event) {
        if ((e as AnimationEvent).animationName !== "revealFadeSlide") return;
        el!.removeEventListener("animationend", onRevealEnd);
        el!.classList.remove("carousel-reveal");
        el!.style.opacity = "1";
        setTimeout(triggerPeek, 500);
      }
      el!.addEventListener("animationend", onRevealEnd);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(triggerSequence, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    let startX = 0;
    let startScrollLeft = 0;
    let isDragging = false;
    let overshoot = 0;
    let rafId: number;

    function getMaxScroll() {
      return el.scrollWidth - el.clientWidth;
    }

    function springBack() {
      cancelAnimationFrame(rafId);
      function step() {
        overshoot *= 0.75;
        if (Math.abs(overshoot) < 0.5) {
          overshoot = 0;
          el.style.transform = "";
          return;
        }
        el.style.transform = `translateX(${-overshoot}px)`;
        rafId = requestAnimationFrame(step);
      }
      rafId = requestAnimationFrame(step);
    }

    function onTouchStart(e: TouchEvent) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startScrollLeft = el.scrollLeft;
      overshoot = 0;
      cancelAnimationFrame(rafId);
      el.style.transform = "";
    }

    function onTouchMove(e: TouchEvent) {
      if (!isDragging) return;
      const dx = startX - e.touches[0].clientX;
      const maxScroll = getMaxScroll();
      const newScroll = startScrollLeft + dx;
      if (newScroll < 0) {
        el.scrollLeft = 0;
        overshoot = newScroll * 0.3;
        el.style.transform = `translateX(${-overshoot}px)`;
      } else if (newScroll > maxScroll) {
        el.scrollLeft = maxScroll;
        overshoot = (newScroll - maxScroll) * 0.3;
        el.style.transform = `translateX(${-overshoot}px)`;
      } else {
        el.scrollLeft = newScroll;
        overshoot = 0;
        el.style.transform = "";
      }
    }

    function onTouchEnd() {
      isDragging = false;
      if (overshoot !== 0) springBack();
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="cases">
      <div className="pb-16">
        <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
          <div data-reveal className="flex flex-col items-center text-center w-full mb-0 max-w-[48rem] mx-auto">
            <h2 className="text-black tracking-[-0.03em] mt-5 mb-10 text-[2.5rem] font-normal leading-[1.2] block">
              Nova era do e-commerce
            </h2>
            <p className="text-[#373739] tracking-[-0.01em] text-[1.2rem] leading-[1.4] max-w-[40rem]">
              Na Widde, nosso propósito é dar vida ao e-commerce, criando
              experiências que aproximam marcas e pessoas.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="
              grid grid-cols-2 gap-8 mt-12
              max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:scroll-snap-x-mandatory
              max-md:[-webkit-overflow-scrolling:touch] max-md:gap-4 max-md:pb-2 max-md:[scrollbar-width:none]
              max-md:[&::-webkit-scrollbar]:hidden
            "
          >
            {videos.map((v) => (
              <div
                key={v.src}
                className="
                  flex flex-col gap-6 bg-[#e5e5e5] rounded-2xl p-6 w-full overflow-hidden
                  max-md:flex-none max-md:w-[90%] max-md:[scroll-snap-align:start]
                "
              >
                {/* Embed */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  <iframe
                    src={v.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#373739] tracking-[-0.01em] mt-1 mb-2 text-2xl font-bold leading-[1.2]">
                    {v.heading}
                  </h3>
                  {v.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
