export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-10 pt-12 pb-8 text-white" role="contentinfo">
      <div className="max-w-[900px] mx-auto">
        <div className="text-[18px] font-black tracking-[2px] mb-6">WIDDE</div>

        <div className="flex gap-4 mb-6" aria-label="Redes sociais">
          <a
            href="https://www.youtube.com/@widde.videocommerce"
            className="text-white/60 no-underline flex items-center hover:text-white transition-colors"
            aria-label="YouTube"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.27V8.73L15.8 12l-6.05 3.27z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/widde.io"
            className="text-white/60 no-underline flex items-center hover:text-white transition-colors"
            aria-label="Instagram"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.6-.1 4.8-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.4 1.3 20.7.9 19.9.6 19.1.3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/widde"
            className="text-white/60 no-underline flex items-center hover:text-white transition-colors"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@widde.io"
            className="text-white/60 no-underline flex items-center hover:text-white transition-colors"
            aria-label="TikTok"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.6 5.9a5.3 5.3 0 0 1-3.1-2.6A5.2 5.2 0 0 1 16 1h-3.7v14.4a3.2 3.2 0 0 1-3.2 3 3.2 3.2 0 0 1-3.2-3.2 3.2 3.2 0 0 1 3.2-3.2c.3 0 .7 0 1 .1V8.3c-.3 0-.7-.1-1-.1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7V9.4a9 9 0 0 0 5.3 1.7V7.4a5.3 5.3 0 0 1-1.8-1.5z" />
            </svg>
          </a>
        </div>

        <div className="h-px bg-white/[0.12] mb-6" />

        <nav className="flex gap-7 mb-6 flex-wrap" aria-label="Links do rodapé">
          <a href="/#planos" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">Planos e Preços</a>
          <a href="https://widde.io/quem-somos?utm_medium=cpc&utm_source=google&utm_campaign=01" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">Quem Somos</a>
          <a href="https://carreirawidde.lovable.app/" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">Portal de Vagas</a>
          <a href="https://widde.io/blog?utm_medium=cpc&utm_source=google&utm_campaign=01" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">Blog</a>
          <a href="https://intercom.help/widde/pt-BR/" className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">Central de Ajuda</a>
        </nav>

        <div className="flex justify-between items-center text-[12px] text-white/35 flex-wrap gap-3">
          <span>© 2025 Widde | todos os direitos reservados.</span>
          <a
            href="https://widde.io/politica-de-privacidade?utm_medium=cpc&utm_source=google&utm_campaign=01"
            className="no-underline text-white/50 hover:text-white transition-colors"
          >
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
