import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import HighlightText from "./ui/highlight-text";

export default function Newsletter2() {
  const { t } = useTranslation();
  const circleRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      className="overflow-hidden bg-[#0A0A0A] px-5 md:px-2"
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
        <div className="relative z-[2] flex flex-col items-center text-center px-6 py-16 w-full max-w-[820px]">
          <h2
            id="newsletter2-heading"
            className="text-3xl font-normal text-white leading-[1.25] mb-6"
          >
            <HighlightText highlightColor="var(--color-brand)" delay={0.2} duration={0.8}>
              {t("newsletter.title")}
            </HighlightText>
          </h2>
          <p className="text-white/60 leading-[1.6] max-w-[840px]">
            Receba tendências de experiência em e-commerce, cases de sucesso e dicas práticas para vender mais.
          </p>
          <p className="text-white/60 leading-[1.6] mb-6 max-w-[840px]">
            Direto no seu e-mail, sem spam.
          </p>
          <form
            action="https://cta-redirect.rdstation.com/v2/conversions"
            className="flex flex-col gap-[10px] w-[520px]"
            aria-label={t("newsletter.ariaLabel")}
          >
            <label htmlFor="nl2-name" className="sr-only">
              {t("newsletter.namePlaceholder")}
            </label>
            <input
              id="nl2-name"
              type="text"
              placeholder={t("newsletter.namePlaceholder")}
              autoComplete="name"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <label htmlFor="nl2-email" className="sr-only">
              {t("newsletter.emailPlaceholder")}
            </label>
            <input
              id="nl2-email"
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              autoComplete="email"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <button
              type="submit"
              className="bg-brand text-white text-base font-bold px-7 py-[14px] rounded-[9px] border-none cursor-pointer w-full mt-2 hover:opacity-90 transition-opacity"
            >
              {t("newsletter.cta")}
            </button>
          </form>
        </div>

        {/* Widde circle — rotating, bottom-right */}
        <img
          ref={circleRef}
          src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/680a51736c23104ce2446416_widde%20circle%20white.avif"
          alt=""
          aria-hidden="true"
          className="widde-cicle is--large absolute z-[3] object-contain pointer-events-none"
          style={{
            width: 250,
            height: 250,
            bottom: -60,
            right: -80,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    </section>
  );
}
