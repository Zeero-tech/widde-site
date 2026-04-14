import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterButton from "./LetterButton";
import { getLenis } from "../lib/lenis";
import { easeOutQuint } from "../lib/easing";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

type Solution = {
  label: string;
  elementId: string;
  href?: string;
  tag: string | null;
  desc: string;
  icon: React.ReactNode;
};

function SolutionsDropdown({
  onClose,
  navigate,
  location,
  dark,
}: {
  onClose: () => void;
  navigate: ReturnType<typeof useNavigate>;
  location: ReturnType<typeof useLocation>;
  dark?: boolean;
}) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const label = t("nav.solutions");
  const letters = label.split("");

  const solutions: Solution[] = [
    {
      label: "Video Commerce",
      elementId: "#video-commerce",
      href: "/video-commerce",
      tag: null,
      desc: t("nav.videoCommerceDesc"),
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
    },
    {
      label: "Live Commerce",
      elementId: "#live-commerce",
      tag: t("nav.tagNew"),
      desc: t("nav.liveCommerceDesc"),
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
        >
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 7.76a6 6 0 0 0 0 8.49M20.49 3.51a12 12 0 0 1 0 16.97M3.51 3.51a12 12 0 0 0 0 16.97" />
        </svg>
      ),
    },
    {
      label: "TryOn",
      elementId: "#try-on",
      tag: t("nav.tagNew"),
      desc: t("nav.tryOnDesc"),
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  const animateLetters = useCallback((direction: "in" | "out") => {
    letterRefs.current.forEach((span, i) => {
      if (!span) return;
      span.style.transition = `transform 0.5s cubic-bezier(0.76,0,0.24,1) ${i * 30}ms`;
      span.style.transform =
        direction === "out" ? "translateY(-50%)" : "translateY(0%)";
    });
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
    animateLetters("out");
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setHovered(false), 120);
    animateLetters("in");
  }

  function handleClick(
    elementId: string,
    e: React.MouseEvent<HTMLAnchorElement>,
    href?: string,
  ) {
    e.preventDefault();
    onClose();
    setHovered(false);
    if (href) {
      window.location.href = href;
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${elementId.replace("#", "")}`);
    } else {
      getLenis().scrollTo(elementId, {
        duration: 3,
        offset: -70,
        easing: easeOutQuint,
      });
    }
  }

  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#solucoes"
        onClick={(e) => handleClick("#solucoes", e)}
        className="text-base no-underline inline-flex items-center"
        style={{ color: dark ? "white" : "#000" }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              height: "1.2em",
              verticalAlign: "middle",
            }}
          >
            <span
              ref={(el) => {
                if (el) letterRefs.current[i] = el;
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "200%",
              }}
            >
              <span
                style={{ height: "50%", display: "flex", alignItems: "center" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
              <span
                style={{ height: "50%", display: "flex", alignItems: "center" }}
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          </span>
        ))}
        <svg
          className="ml-1"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          style={{
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            transform: hovered ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Dropdown */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "absolute",
          top: "calc(100% + 16px)",
          left: "50%",
          width: "min(90vw, 750px)",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          opacity: hovered ? 1 : 0,
          transform: hovered
            ? "translateX(-50%) translateY(0px)"
            : "translateX(-50%) translateY(-8px)",
          pointerEvents: hovered ? "all" : "none",
          transition:
            "opacity 0.22s ease, transform 0.22s cubic-bezier(0.16,1,0.3,1)",
          zIndex: 100,
        }}
      >
        {solutions.map((s) => (
          <a
            key={s.label}
            href={s.href ?? s.elementId}
            onClick={(e) => handleClick(s.elementId, e, s.href)}
            className="no-underline"
            style={{
              background: "#f6f6f6",
              borderRadius: 12,
              padding: "18px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              transition: "background 0.15s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#efefef")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f6f6f6")}
          >
            <div
              style={{
                color: "#2667F8",
                height: 28,
                display: "flex",
                alignItems: "center",
              }}
            >
              {s.icon}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  marginBottom: 8,
                  minHeight: 48,
                }}
              >
                <span
                  className=""
                  style={{
                    fontWeight: 800,
                    color: "#000",
                    lineHeight: 1.2,
                  }}
                >
                  {s.label}
                </span>
                {s.tag && (
                  <span
                    className="text-xs"
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      background: "#2667F8",
                      borderRadius: 999,
                      padding: "2px 7px",
                      lineHeight: 1.4,
                      alignSelf: "flex-start",
                    }}
                  >
                    {s.tag}
                  </span>
                )}
              </div>
              <p
                className="text-xs"
                style={{
                  color: "#666",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function NavLink({
  href,
  label,
  onClose,
  dark,
}: {
  href: string;
  label: string;
  onClose: () => void;
  dark?: boolean;
}) {
  const letters = label.split("");
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  const animate = useCallback((direction: "in" | "out") => {
    letterRefs.current.forEach((span, i) => {
      if (!span) return;
      span.style.transition = `transform 0.5s cubic-bezier(0.76,0,0.24,1) ${i * 30}ms`;
      span.style.transform =
        direction === "out" ? "translateY(-50%)" : "translateY(0%)";
    });
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.includes("http")) return;
    e.preventDefault();
    onClose();
    getLenis().scrollTo(href, {
      duration: 3,
      offset: -50,
      easing: easeOutQuint,
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => animate("out")}
      onMouseLeave={() => animate("in")}
      className="text-base no-underline inline-flex"
      style={{ color: dark ? "white" : "#000" }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            height: "1.2em",
            verticalAlign: "middle",
          }}
        >
          <span
            ref={(el) => {
              if (el) letterRefs.current[i] = el;
            }}
            style={{ display: "flex", flexDirection: "column", height: "200%" }}
          >
            <span
              style={{ height: "50%", display: "flex", alignItems: "center" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
            <span
              style={{ height: "50%", display: "flex", alignItems: "center" }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </a>
  );
}

function LanguageSwitcher({ dark }: { dark?: boolean }) {
  const { i18n: i18nInstance } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = i18nInstance.language === "en" ? "en" : "pt-BR";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function select(lang: string) {
    i18n.changeLanguage(lang);
    setOpen(false);
  }

  const color = dark ? "white" : "#000";

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0"
        style={{ color }}
        aria-label="Change language"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            overflow: "hidden",
            minWidth: 120,
            zIndex: 100,
          }}
        >
          {[
            { code: "pt-BR", label: "🇧🇷 Português" },
            { code: "en", label: "🇺🇸 English" },
          ].map(({ code, label }) => (
            <button
              key={code}
              onClick={() => select(code)}
              className=""
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                background: current === code ? "#f0f4ff" : "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: current === code ? 700 : 400,
                color: "#000",
              }}
              onMouseEnter={(e) => {
                if (current !== code)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#f6f6f6";
              }}
              onMouseLeave={(e) => {
                if (current !== code)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    ScrollTrigger.defaults({ markers: false });

    gsap.set(".logo-path", { y: 50 });
    gsap.to(".logo-path", {
      y: 0,
      stagger: 0.07,
      delay: 0.2,
      duration: 0.7,
      ease: "power4.out",
      force3D: true,
      clearProps: "all",
    });
  }, []);

  function handleNav() {
    setOpen(false);
  }

  const isDark = location.pathname === "/video-commerce";

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#1a1a1a" : scrolled ? "#ffffff" : "#f6f6f6",
      }}
    >
      <div className="px-5 md:px-2 max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center md:px-0 p-3 relative min-h-8">
          <a
            href="/"
            aria-current="page"
            className="no-underline flex items-center"
            style={{
              overflow: "hidden",
              display: "inline-flex",
              color: isDark ? "white" : "black",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                getLenis().scrollTo(0, { duration: 3, easing: easeOutQuint });
              } else {
                navigate("/");
              }
            }}
          >
            <Logo />
          </a>

          <button
            className={`md:hidden bg-transparent border-none text-2xl cursor-pointer p-2 ${isDark ? "text-white" : "text-black"}`}
            aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>

          <div
            className={`
              md:flex md:gap-6 md:static md:bg-transparent md:shadow-none md:p-0 md:border-none
              ${open ? "flex" : "hidden"}
              flex-col md:flex-row
              absolute md:relative top-[60px] md:top-auto left-0 right-0
              bg-white px-6 py-5 gap-4
              border-b border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              z-50
            `}
          >
            <SolutionsDropdown
              onClose={handleNav}
              navigate={navigate}
              location={location}
              dark={isDark}
            />
            <NavLink
              href="https://widde.io/cases"
              label={t("nav.results")}
              onClose={handleNav}
              dark={isDark}
            />
            <NavLink
              href="#planos"
              label={t("nav.plans")}
              onClose={handleNav}
              dark={isDark}
            />
            <NavLink
              href="https://widde.io/blog"
              label={t("nav.blog")}
              onClose={handleNav}
              dark={isDark}
            />
            <LanguageSwitcher dark={isDark} />
          </div>

          <LetterButton
            href="https://widde.io/quero-comecar?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="hidden md:inline-flex bg-brand text-white text-base font-bold px-5 py-[10px] rounded-full"
          >
            {t("nav.startNow")}
          </LetterButton>
        </nav>
      </div>
    </header>
  );
}
