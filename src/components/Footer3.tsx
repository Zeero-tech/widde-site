import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const footerColumns = [
  {
    title: "Produto",
    links: [
      { label: "Video Commerce", href: "/video-commerce" },
      { label: "Live Commerce", href: "#live-commerce" },
      { label: "Provador IA", href: "#try-on" },
      { label: "Planos", href: "/#planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "https://widde.io/quem-somos?utm_medium=cpc&utm_source=google&utm_campaign=01" },
      { label: "Carreiras", href: "https://carreirawidde.lovable.app/" },
      { label: "Contato", href: "https://widde.io/contato-vendas?utm_medium=cpc&utm_source=google&utm_campaign=01" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "https://widde.io/blog?utm_medium=cpc&utm_source=google&utm_campaign=01" },
      { label: "Cases", href: "https://widde.io/cases" },
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
      { label: "Privacidade", href: "https://widde.io/politica-de-privacidade?utm_medium=cpc&utm_source=google&utm_campaign=01" },
      { label: "Termos de Uso", href: "https://widde.io/termos-de-uso" },
    ],
  },
];

export default function Footer3() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0A0A0A] text-white" role="contentinfo">
      <div className="px-5 md:px-2 max-w-screen-xl mx-auto pt-16 pb-8">
        {/* Newsletter row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {t("newsletter.title", "Assine nossa newsletter")}
            </h3>
            <p className="text-sm text-white/50">
              Receba tendências de experiência em e-commerce — sem spam.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              className="w-full md:w-[280px] bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-black text-sm font-bold px-5 py-2.5 rounded-lg border-none cursor-pointer whitespace-nowrap hover:bg-white/90 transition-colors"
            >
              Inscrever-se
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-10">
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <a
            href="/"
            className="no-underline inline-flex"
            style={{ color: "white" }}
          >
            <Logo />
          </a>
          <p className="text-xs text-white/35">
            &copy;2026 Widde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
