import * as HoverCard from "@radix-ui/react-hover-card";
import { tickerLogos } from "@/data/logos";

export default function LogoTicker2() {
  const doubled = [
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
    ...tickerLogos,
  ];

  return (
    <section
      className="bg-[#f6f6f6] py-7 overflow-hidden border-t border-b border-[#E9E9E9]"
      aria-label="Marcas que usam Widde"
    >
      <div className="flex">
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((logo, i) => (
            <HoverCard.Root key={i} openDelay={1000} closeDelay={100}>
              <HoverCard.Trigger asChild>
                <div className="inline-flex items-center justify-center gap-2 px-8 border-r border-[#eee] flex-shrink-0 h-10 opacity-50 hover:opacity-100 transition-opacity cursor-default">
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
                    <span className="font-black text-[#bbb] uppercase tracking-[1px]">
                      {logo.name}
                    </span>
                  )}
                </div>
              </HoverCard.Trigger>

              <HoverCard.Portal>
                <HoverCard.Content
                  side="top"
                  sideOffset={12}
                  className="w-[240px] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden z-[999] whitespace-normal animate-in fade-in-0 zoom-in-95"
                >
                  <div className="relative">
                    {/* Video determines height */}
                    {logo.demoUrl && (
                      <video
                        className="w-full block"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={logo.demoUrl} type="video/mp4" />
                      </video>
                    )}
                    <div className="absolute inset-0 flex flex-col justify-end rounded-md overflow-hidden">
                      <div className="relative">
                        <div className="p-4 z-20 rounded-md bg-black/60 backdrop-blur-md">
                          <p className="text-sm font-bold text-white mb-1">
                            {logo.name}
                          </p>
                          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                            {logo.platform && (
                              <span className="text-[10px] font-bold text-white bg-white/20 rounded px-1.5 py-0.5 uppercase tracking-wide">
                                {logo.platform}
                              </span>
                            )}
                            {logo.segment && (
                              <span className="text-[10px] font-bold text-white bg-white/20 rounded px-1.5 py-0.5 uppercase tracking-wide">
                                {logo.segment}
                              </span>
                            )}
                          </div>
                          <a
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold cursor-pointer text-white no-underline hover:underline"
                          >
                            Ir para o site →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <HoverCard.Arrow className="fill-white" />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
