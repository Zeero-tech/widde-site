import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import HighlightText from "./ui/highlight-text";

export default function Newsletter() {
  const { t } = useTranslation();
  const circleRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">(() => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w < 768) return "mobile";
    if (w < 1280) return "tablet";
    return "desktop";
  });
  const isMobile = viewport === "mobile";

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      setViewport(w < 768 ? "mobile" : w < 1280 ? "tablet" : "desktop");
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    const containerId = "inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e";
    const flagKey = "__rdform_created__" + containerId;

    if ((window as any)[flagKey]) return;

    const tryInit = () => {
      // @ts-ignore
      if (typeof window.RDStationForms !== "function") return;
      if ((window as any)[flagKey]) return;
      (window as any)[flagKey] = true;
      // @ts-ignore
      new window.RDStationForms(containerId, "null").createForm();
    };

    // Script loaded in index.html — may already be ready or still loading
    // @ts-ignore
    if (typeof window.RDStationForms === "function") {
      tryInit();
    } else {
      const script = document.querySelector(
        `script[src*="rdstation-forms"]`
      );
      if (script) {
        script.addEventListener("load", tryInit, { once: true });
      }
    }
  }, []);

  return (
    <section
      className="overflow-hidden bg-ink px-5 md:px-10 lg:px-12 xl:px-2"
      aria-labelledby="newsletter2-heading"
    >
      <div
        className="relative rounded-3xl my-12 mx-auto max-w-screen-xl overflow-hidden min-h-[480px] flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay + blur */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

        {/* Centered form */}
        <div className="relative z-[5] flex flex-col items-center text-center px-6 py-16 w-full max-w-[920px]">
          <h2
            id="newsletter2-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-[1.25] mb-6"
          >
            <HighlightText
              highlightColor="var(--color-brand)"
              delay={0.2}
              duration={0.8}
              className="px-2 py-1 md:px-4 md:py-1"
            >
              {t("newsletter.title")}
            </HighlightText>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[940px]">
            Receba tendências de experiência em e-commerce, cases de sucesso e dicas práticas para vender mais.
          </p>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6 max-w-[940px]">
            Direto no seu e-mail, sem spam.
          </p>

          {/* RD Station form — SDK injects into this div */}
          <style>{`
            #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e input {
              background-color: rgba(255,255,255,0.1) !important;
              color: white !important;
              border: 1px solid rgba(255,255,255,0.2) !important;
              box-shadow: none !important;
              padding: 12px 16px !important;
            }
            #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e input::placeholder {
              color: rgba(255,255,255,0.4) !important;
            }
            #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e button[type=submit] {
              padding: 12px 16px !important;
            }
            @media (min-width: 768px) {
              #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e input,
              #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e button[type=submit] {
                width: 550px !important;
                height: 50px !important;
              }
              #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e form,
              #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e form > * {
                gap: 8px !important;
              }
              #inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e form > *:last-child {
                margin-bottom: 0 !important;
              }
            }
          `}</style>
          <div
            role="main"
            className="w-full max-w-[520px] [&_form]:flex [&_form]:flex-col [&_form]:gap-[10px] [&_input]:w-full [&_input]:rounded-[8px] [&_input]:px-4 [&_input]:py-3 [&_input]:outline-none [&_button[type=submit]]:bg-brand [&_button[type=submit]]:text-white [&_button[type=submit]]:font-bold [&_button[type=submit]]:px-7 [&_button[type=submit]]:py-[14px] md:[&_button[type=submit]]:px-4 md:[&_button[type=submit]]:py-3 [&_button[type=submit]]:rounded-[9px] [&_button[type=submit]]:w-full [&_button[type=submit]]:cursor-pointer [&_button[type=submit]]:border-none"
          >
            <div id="inscricao-newsletter-site-novo-b627ab8cfdec2f7ade6e" />
          </div>
        </div>

        {/* Widde circle — rotating, bottom-right */}
        <img
          ref={circleRef}
          src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/680a51736c23104ce2446416_widde%20circle%20white.avif"
          alt=""
          aria-hidden="true"
          className="widde-cicle is--large absolute z-[3] object-contain pointer-events-none"
          style={{
            width: viewport === "mobile" ? 200 : viewport === "tablet" ? 220 : 250,
            height: viewport === "mobile" ? 200 : viewport === "tablet" ? 220 : 250,
            bottom: viewport === "mobile" ? -120 : viewport === "tablet" ? -70 : -60,
            right: viewport === "mobile" ? -110 : viewport === "tablet" ? -90 : -80,
            opacity: isMobile ? 0.6 : (hovered ? 1 : 0),
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    </section>
  );
}
