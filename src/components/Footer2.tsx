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

export default function Footer2() {
  return (
    <footer className="bg-[#f6f6f6] text-black" role="contentinfo">
      <div className="px-3 md:px-2 max-w-screen-xl mx-auto pt-16 pb-8">
        {/* Logo */}
        <a
          href="/"
          className="no-underline inline-flex mb-10"
          style={{ color: "black" }}
        >
          <Logo />
        </a>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-black mb-4">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#666] no-underline hover:text-black transition-colors"
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
        <div className="flex items-center pt-6 border-t border-black/10">
          <p className="text-xs text-[#999]">
            &copy;2026 Widde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
