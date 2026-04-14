import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterButton from "./LetterButton";
import { getLenis } from "../lib/lenis";
import { easeOutQuint } from "../lib/easing";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Solution = {
  label: string;
  elementId: string;
  href?: string;
  tag: string | null;
  desc: string;
  video: string;
  icon: React.ReactNode;
};

function VideoCommerceIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      <path d="M20 17l11 7-11 7V17z" stroke="var(--color-brand)" strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function LiveCommerceIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      <circle cx="24" cy="24" r="3" fill="var(--color-brand)" />
      <path d="M17 24a7 7 0 0 1 7-7" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M31 24a7 7 0 0 1-7 7" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M13 24a11 11 0 0 1 11-11" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M35 24a11 11 0 0 1-11 11" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function TryOnIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      {/* Mirror frame */}
      <rect x="17" y="10" width="14" height="22" rx="7" stroke="var(--color-brand)" strokeWidth="2.2" fill="none" />
      {/* Person inside mirror */}
      <circle cx="24" cy="18" r="2.5" fill="var(--color-brand)" />
      <path d="M20 28c0-3 1.8-5 4-5s4 2 4 5" stroke="var(--color-brand)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Mirror stand */}
      <path d="M24 32v4" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 36h8" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" />
      {/* Person outside mirror (left side) */}
      <circle cx="10" cy="20" r="2.2" fill="var(--color-brand)" opacity="0.45" />
      <path d="M7 29c0-2.5 1.3-4 3-4s3 1.5 3 4" stroke="var(--color-brand)" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.45" />
      {/* Reflection arrows */}
      <path d="M14 22h3" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arrow)" opacity="0.5" />
    </svg>
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = location.pathname === "/video-commerce";

  const solutions: Solution[] = [
    {
      label: "Video Commerce",
      elementId: "#video-commerce",
      href: "/video-commerce",
      tag: null,
      desc: t("nav.videoCommerceDesc"),
      video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
      icon: <VideoCommerceIcon />,
    },
    {
      label: "Live Commerce",
      elementId: "#live-commerce",
      tag: "Novo",
      desc: t("nav.liveCommerceDesc"),
      video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
      icon: <LiveCommerceIcon />,
    },
    {
      label: "Provador IA",
      elementId: "#try-on",
      tag: "Novo",
      desc: t("nav.tryOnDesc"),
      video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
      icon: <TryOnIcon />,
    },
  ];

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

  function handleSolutionClick(
    elementId: string,
    e: React.MouseEvent<HTMLAnchorElement>,
    href?: string,
  ) {
    e.preventDefault();
    setMobileOpen(false);
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

  function handleNavClick(
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) {
    if (href.includes("http")) return;
    e.preventDefault();
    setMobileOpen(false);
    getLenis().scrollTo(href, {
      duration: 3,
      offset: -50,
      easing: easeOutQuint,
    });
  }

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

          {/* Mobile hamburger */}
          <button
            className={`md:hidden bg-transparent border-none text-2xl cursor-pointer p-2 ${isDark ? "text-white" : "text-black"}`}
            aria-label={mobileOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            &#9776;
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Solutions dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent text-[16px] font-normal",
                      isDark
                        ? "text-white hover:bg-white/10 data-[state=open]:bg-white/10"
                        : "text-black hover:bg-black/5 data-[state=open]:bg-black/5",
                    )}
                  >
                    {t("nav.solutions")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[680px]  grid-cols-3 gap-3 p-2">
                      {solutions.map((s) => (
                        <NavigationMenuLink key={s.label} asChild>
                          <a
                            href={s.href ?? s.elementId}
                            onClick={(e) =>
                              handleSolutionClick(s.elementId, e, s.href)
                            }
                            className="no-underline flex flex-col rounded-xl bg-[#f6f6f6] overflow-hidden transition-colors hover:bg-[#efefef]"
                          >
                            <div className="w-full h-[110px] flex items-center justify-center bg-[#ebebeb] rounded-t-xl">
                              {s.icon}
                            </div>
                            <div className="p-3 flex flex-col gap-1">
                              <div className="flex items-center gap-2">
                                <span className="font-extrabold text-black leading-tight">
                                  {s.label}
                                </span>
                                {s.tag && (
                                  <span className="text-[10px] font-bold text-brand bg-brand/10 rounded px-1.5 py-0.5 uppercase tracking-wide leading-tight">
                                    {s.tag}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#666] leading-[1.55] m-0">
                                {s.desc}
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular links */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="https://widde.io/cases"
                      onClick={(e) =>
                        handleNavClick("https://widde.io/cases", e)
                      }
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      {t("nav.results")}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="#planos"
                      onClick={(e) => handleNavClick("#planos", e)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      {t("nav.plans")}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="https://widde.io/blog"
                      onClick={(e) =>
                        handleNavClick("https://widde.io/blog", e)
                      }
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      {t("nav.blog")}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* <div className="ml-4">
              <LanguageSwitcher dark={isDark} />
            </div> */}
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white px-6 py-5 flex flex-col gap-4 border-b border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)] z-50">
              <span className="text-xs font-bold text-[#5D5D5D] uppercase tracking-[2px]">
                {t("nav.solutions")}
              </span>
              {solutions.map((s) => (
                <a
                  key={s.label}
                  href={s.href ?? s.elementId}
                  onClick={(e) => handleSolutionClick(s.elementId, e, s.href)}
                  className="no-underline text-black text-base flex items-center gap-2"
                >
                  {s.label}
                  {s.tag && (
                    <span className="text-[10px] font-bold text-brand bg-brand/10 rounded px-1.5 py-0.5 uppercase tracking-wide">
                      {s.tag}
                    </span>
                  )}
                </a>
              ))}
              <hr className="border-gray-100" />
              <a
                href="https://widde.io/cases"
                onClick={(e) => handleNavClick("https://widde.io/cases", e)}
                className="no-underline text-black text-base"
              >
                {t("nav.results")}
              </a>
              <a
                href="#planos"
                onClick={(e) => handleNavClick("#planos", e)}
                className="no-underline text-black text-base"
              >
                {t("nav.plans")}
              </a>
              <a
                href="https://widde.io/blog"
                onClick={(e) => handleNavClick("https://widde.io/blog", e)}
                className="no-underline text-black text-base"
              >
                {t("nav.blog")}
              </a>
              {/* <LanguageSwitcher /> */}
            </div>
          )}

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
