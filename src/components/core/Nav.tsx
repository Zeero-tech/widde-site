import React, { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import LetterButton from "@/components/core/LetterButton";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";
import Logo from "@/components/core/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      <path
        d="M20 17l11 7-11 7V17z"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function LiveCommerceIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      {/* Center dot */}
      <circle cx="24" cy="24" r="2.5" fill="var(--color-brand)" />
      {/* Inner arcs — left and right */}
      <path
        d="M19 19a7.07 7.07 0 0 0 0 10"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M29 19a7.07 7.07 0 0 1 0 10"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Outer arcs — left and right */}
      <path
        d="M14 15a13.07 13.07 0 0 0 0 18"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 15a13.07 13.07 0 0 1 0 18"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function TryOnIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="14" fill="#F0F0F0" />
      {/* Mirror frame */}
      <rect
        x="17"
        y="10"
        width="14"
        height="22"
        rx="7"
        stroke="var(--color-brand)"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Person inside mirror */}
      <circle cx="24" cy="18" r="2.5" fill="var(--color-brand)" />
      <path
        d="M20 28c0-3 1.8-5 4-5s4 2 4 5"
        stroke="var(--color-brand)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Mirror stand */}
      <path
        d="M24 32v4"
        stroke="var(--color-brand)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 36h8"
        stroke="var(--color-brand)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Person outside mirror (left side) */}
      <circle
        cx="10"
        cy="20"
        r="2.2"
        fill="var(--color-brand)"
        opacity="0.45"
      />
      <path
        d="M7 29c0-2.5 1.3-4 3-4s3 1.5 3 4"
        stroke="var(--color-brand)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Reflection arrows */}
      <path
        d="M14 22h3"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        strokeLinecap="round"
        markerEnd="url(#arrow)"
        opacity="0.5"
      />
    </svg>
  );
}

const solutions: Solution[] = [
  {
    label: "Video Commerce",
    elementId: "#video-commerce",
    href: "/video-commerce",
    tag: null,
    desc: "Carrossel, Destaques, Stories e Explorar. Vídeos interativos em todas as páginas do seu e-commerce.",
    video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
    icon: <VideoCommerceIcon />,
  },
  {
    label: "Live Commerce",
    elementId: "#live-commerce",
    tag: "Novo",
    desc: "Transmissão ao vivo dentro do site, onde o cliente engaja, tira dúvidas e compra o produto com confiança.",
    video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
    icon: <LiveCommerceIcon />,
  },
  {
    label: "Provador IA",
    elementId: "#provador-ia",
    tag: "Novo",
    desc: "Provador para Vestuário e Calçados, para seu cliente ver o produto no corpo sem sair de casa.",
    video: "https://bambuser.com/webflow/Desktop-Hero-Video-dimmed_x2.mp4",
    icon: <TryOnIcon />,
  },
];

export default function Nav({ isDark: isDarkProp }: { isDark?: boolean } = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(isDarkProp ?? false);

  useEffect(() => {
    if (isDarkProp !== undefined) return;
    setIsDark(
      window.location.pathname.replace(/\/$/, "") === "/video-commerce",
    );
  }, [isDarkProp]);

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
    if (window.location.pathname !== "/") {
      window.location.href = `/?scrollTo=${elementId.replace("#", "")}`;
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
    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }
    e.preventDefault();
    setMobileOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/?scrollTo=${href.replace("#", "")}`;
      return;
    }
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
      <div className="px-5 md:px-10 lg:px-12 xl:px-6 max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center md:px-0 py-3 relative min-h-8 overflow-visible">
          <a
            href="/"
            aria-current="page"
            className="no-underline self-center"
            style={{ color: isDark ? "white" : "black" }}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === "/") {
                getLenis().scrollTo(0, { duration: 3, easing: easeOutQuint });
              } else {
                window.location.href = "/";
              }
            }}
          >
            <span
              className="block overflow-hidden"
              style={{ paddingBottom: 7 }}
            >
              <Logo />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden bg-transparent border-none text-2xl cursor-pointer p-2 ${isDark ? "text-white" : "text-black"}`}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
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
                      "bg-transparent text-base md:text-lg font-normal",
                      isDark
                        ? "text-white hover:bg-white/10 data-[state=open]:bg-white/10"
                        : "text-black hover:bg-black/5 data-[state=open]:bg-black/5",
                    )}
                  >
                    Soluções
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
                            className="no-underline flex flex-col rounded-xl bg-surface overflow-hidden transition-colors hover:bg-[#efefef]"
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
                      href="#demo2"
                      onClick={(e) => handleNavClick("#demo2", e)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      Como funciona
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="/cases"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      Cases
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
                      Planos
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="/blog"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-black hover:bg-black/5",
                      )}
                    >
                      Blog
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu — fullscreen overlay */}
          {mobileOpen && (
            <div className="md:hidden fixed inset-0 bg-surface z-50 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center px-5 pt-8 pb-4 min-h-[60px]">
                <a
                  href="/"
                  className="no-underline flex items-center text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    if (window.location.pathname === "/") {
                      getLenis().scrollTo(0, {
                        duration: 3,
                        easing: easeOutQuint,
                      });
                    } else {
                      window.location.href = "/";
                    }
                  }}
                >
                  <Logo />
                </a>
                <button
                  className="bg-transparent border-none text-2xl cursor-pointer p-2 text-black"
                  aria-label="Fechar menu"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileSolutionsOpen(false);
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 flex flex-col px-5 pt-4 overflow-y-auto">
                {/* Soluções accordion */}
                <button
                  className="bg-transparent text-left text-black text-lg font-normal py-4 flex items-center justify-between cursor-pointer p-0 w-full border-0 border-b border-black/10"
                  onClick={() => setMobileSolutionsOpen((o) => !o)}
                >
                  Soluções
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{
                      transition: "transform 0.25s",
                      transform: mobileSolutionsOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="black"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {mobileSolutionsOpen && (
                  <div className="flex flex-col pl-4 border-b border-black/10">
                    {solutions.map((s) => (
                      <a
                        key={s.label}
                        href={s.href ?? s.elementId}
                        onClick={(e) => {
                          setMobileSolutionsOpen(false);
                          handleSolutionClick(s.elementId, e, s.href);
                        }}
                        className="no-underline text-black text-lg font-normal py-3 border-b border-black/5 last:border-b-0 flex items-center gap-2"
                      >
                        {s.label}
                        {s.tag && (
                          <span className="text-[10px] font-bold text-brand bg-brand/10 rounded px-1.5 py-0.5 uppercase tracking-wide">
                            {s.tag}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
                <a
                  href="#demo2"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick("#demo2", e);
                  }}
                  className="no-underline text-black text-lg font-normal py-4 border-b border-black/10"
                >
                  Como funciona
                </a>
                <a
                  href="/cases"
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-black text-lg font-normal py-4 border-b border-black/10"
                >
                  Cases
                </a>
                <a
                  href="#planos"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick("#planos", e);
                  }}
                  className="no-underline text-black text-lg font-normal py-4 border-b border-black/10"
                >
                  Planos
                </a>
                <a
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="no-underline text-black text-lg font-normal py-4 border-b border-black/10"
                >
                  Blog
                </a>
              </div>

              {/* Bottom CTAs */}
              <div className="px-5 pb-8 pt-4 flex flex-col gap-3">
                <a
                  href="/contato-vendas"
                  className="w-full text-center bg-brand text-white font-bold text-lg px-5 py-0 h-[38px] flex items-center justify-center rounded-full no-underline"
                >
                  Falar com vendas
                </a>
                <a
                  href="/quero-comecar"
                  className="w-full text-center bg-brand text-white font-bold text-lg px-5 py-0 h-[38px] flex items-center justify-center rounded-full no-underline border border-black/20"
                >
                  Começar agora
                </a>
                <a
                  href="#demo2"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick("#demo2", e);
                  }}
                  className="w-full text-center bg-transparent text-black font-bold text-lg px-5 py-0 h-[38px] flex items-center justify-center rounded-full no-underline border border-black/20"
                >
                  Conhecer mais
                </a>
              </div>
            </div>
          )}

          <div className="hidden md:block">
            <LetterButton
              href="/quero-comecar"
              className="bg-brand text-white text-lg font-bold px-5 py-[10px] rounded-full"
            >
              Começar agora
            </LetterButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
