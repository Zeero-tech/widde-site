import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { getLenis } from "@/lib/lenis";
import { easeOutQuint } from "@/lib/easing";

const footerColumns = [
  {
    title: "Produto",
    links: [
      { label: "Video Commerce", href: "/video-commerce" },
      { label: "Live Commerce", href: "#live-commerce", scrollTo: "live-commerce" },
      { label: "Provador IA", href: "#provador-ia", scrollTo: "provador-ia" },
      { label: "Planos", href: "#planos", scrollTo: "planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "https://widde.io/quem-somos?utm_medium=cpc&utm_source=google&utm_campaign=01" },
      { label: "Carreiras", href: "https://carreirawidde.lovable.app/" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "https://widde.io/blog?utm_medium=cpc&utm_source=google&utm_campaign=01" },
      { label: "Cases", href: "https://widde.io/cases?" },
      { label: "Central de Ajuda", href: "https://intercom.help/widde/pt-BR/" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/channel/UCjCWd1RNzStYUU5IKJ4DRdA" },
      { label: "Instagram", href: "https://www.instagram.com/widde.io/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/widde/" },
      { label: "TikTok", href: "https://www.tiktok.com/@widde.io" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidade", href: "https://widde.io/politica-de-privacidade?utm_medium=cpc&utm_source=google&utm_campaign=01" }
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; scrollTo?: string }) {
    if (!link.scrollTo) return;
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on home — scroll directly with Lenis
      getLenis().scrollTo(`#${link.scrollTo}`, {
        duration: 3.5,
        offset: -70,
        easing: easeOutQuint,
      });
    } else {
      // Navigate to home with scrollTo param — App.tsx handles the scroll
      navigate(`/?scrollTo=${link.scrollTo}`);
    }
  }

  return (
    <footer className="bg-ink text-white" role="contentinfo">
      <div className="px-3 md:px-2 max-w-screen-xl mx-auto pt-16 pb-8">
        {/* Logo */}
        <a
          href="/"
          className="no-underline inline-flex mb-10 text-white"
        >
          <Logo />
        </a>

        {/* Link columns */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-6 lg:gap-8 pt-4 pb-10 md:py-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white mb-4">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 no-underline hover:text-white transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleClick(e, link)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center pt-6 border-t border-white/10">
          <p className="text-xs text-white/35">
            &copy;2026 Widde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
