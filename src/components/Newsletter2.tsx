import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import HighlightText from "./ui/highlight-text";

export default function Newsletter2() {
  const { t } = useTranslation();
  const circleRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const body = new URLSearchParams({
        token_rdstation: "992ba116e4725f4dd0bd5709b2a6549f",
        conversion_identifier: "inscricao-newsletter-site-novo",
        internal_source: "6",
        name,
        email,
      });
      await fetch("https://cta-redirect.rdstation.com/v2/conversions", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className="text-white text-center py-6">
              <p className="text-xl font-bold mb-2">Inscrição realizada! 🎉</p>
              <p className="text-white/60">Obrigado! Em breve você receberá nossos conteúdos.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] w-full max-w-[520px]"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">Ocorreu um erro. Tente novamente.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-brand text-white text-base font-bold px-7 py-[14px] rounded-[9px] border-none cursor-pointer w-full mt-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : t("newsletter.cta")}
              </button>
            </form>
          )}
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
