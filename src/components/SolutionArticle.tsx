import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SolutionArticleProps {
  direction: "left" | "right";
  id?: string;
  mobileCarousel?: boolean;
  children: React.ReactNode;
}

function useArticleReveal(direction: "left" | "right") {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const xFrom = direction === "left" ? -60 : 60;
    gsap.set(el, { x: xFrom, opacity: 0, filter: "blur(12px)" });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return ref;
}

export default function SolutionArticle({
  direction,
  id,
  mobileCarousel,
  children,
}: SolutionArticleProps) {
  const ref = useArticleReveal(direction);

  return (
    <article
      ref={ref}
      id={id}
      className={
        mobileCarousel
          ? "flex flex-col gap-4 flex-shrink-0 w-[95%] snap-start"
          : `flex flex-col ${direction === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-2 items-stretch w-full`
      }
    >
      {children}
    </article>
  );
}
