import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  delay?: number;
  duration?: number;
  triggerOnView?: boolean;
}

export default function HighlightText({
  children,
  className,
  highlightColor = "var(--color-brand)",
  delay = 0.3,
  duration = 0.8,
  triggerOnView = true,
}: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(!triggerOnView);

  useEffect(() => {
    if (!triggerOnView || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnView]);

  return (
    <span
      ref={ref}
      className={cn("relative inline-block", className)}
    >
      <span
        className="absolute inset-0 rounded-sm"
        style={{
          background: highlightColor,
          width: active ? "100%" : "0%",
          transition: `width ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
          zIndex: 0,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
