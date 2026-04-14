import * as HoverCard from "@radix-ui/react-hover-card";
import { tickerLogos } from "@/data/logos";

interface TickerLogoExtra {
  name: string;
  url: string;
  img?: string;
  width?: number;
  platform: string;
  usage: string;
}

const DEMO_VIDEO =
  "https://gifs.widde.io/lg/widde-bucket-sp/25683992-f5b2-438d-a72c-646e89bee038/videos/461addf4-f181-4a9d-9c86-1f91e5038e91-1775771808305-3230957/video.mp4?v=12345";

const logosWithInfo: TickerLogoExtra[] = tickerLogos.map((logo) => ({
  ...logo,
  platform: "VTEX",
  usage: "Video Commerce na página de produto",
}));

export default function LogoTicker2() {
  const doubled = [
    ...logosWithInfo,
    ...logosWithInfo,
    ...logosWithInfo,
    ...logosWithInfo,
    ...logosWithInfo,
  ];

  return (
    <section
      className="bg-[#f6f6f6] py-7 overflow-hidden border-t border-b border-[#E9E9E9]"
      aria-label="Marcas que usam Widde"
    >
      <div className="flex">
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((logo, i) => (
            <HoverCard.Root key={i} openDelay={200} closeDelay={100}>
              <HoverCard.Trigger asChild>
                <div className="inline-flex items-center justify-center px-8 border-r border-[#eee] flex-shrink-0 h-10 opacity-50 hover:opacity-100 transition-opacity cursor-default">
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
                  className="w-[240px] h-[320px] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden z-[999] whitespace-normal animate-in fade-in-0 zoom-in-95 relative"
                >
                  {/* Video background */}
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={DEMO_VIDEO} type="video/mp4" />
                  </video>

                  {/* Gradient + blur only at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-[110px] rounded-md bg-black/60 backdrop-blur-md" />

                  {/* Content on top */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-4">
                    <p className="text-sm font-bold text-white mb-1">
                      {logo.name}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-white bg-white/20 rounded px-1.5 py-0.5 uppercase tracking-wide">
                        {logo.platform}
                      </span>
                    </div>
                    <a
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white no-underline hover:underline"
                    >
                      Ir para o site →
                    </a>
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
