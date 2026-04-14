import { tickerLogos } from "@/data/logos";

export default function LogoTicker() {
  const doubled = [
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
  ];

  return (
    <section
      id="logo-ticker"
      className="bg-[#f6f6f6] py-7 overflow-hidden border-t border-b border-[#E9E9E9]"
      aria-label="Brands using Widde"
    >
      <div className="flex">
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 border-r border-[#eee] flex-shrink-0 h-10 no-underline opacity-50 hover:opacity-100 transition-opacity"
            >
              {logo.img ? (
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="h-6 w-auto object-contain"
                  style={
                    logo.width ? { width: logo.width, height: "auto" } : {}
                  }
                />
              ) : (
                <span className=" font-black text-[#bbb] uppercase tracking-[1px]">
                  {logo.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
