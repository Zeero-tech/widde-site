import { tickerLogos } from '@/data/logos'

export default function LogoTicker() {
  const doubled = [...tickerLogos, ...tickerLogos]

  return (
    <section
      className="bg-[#f6f6f6] py-7 overflow-hidden border-t border-b border-[#E9E9E9]"
      aria-label="Marcas que usam Widde"
    >
      <div className="flex">
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 text-[13px] font-black text-[#bbb] uppercase tracking-[1px] border-r border-[#eee] flex-shrink-0 h-10 no-underline hover:text-[#1a1a2e] transition-colors"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
