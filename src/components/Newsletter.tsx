import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Newsletter() {
  const circleRef = useRef<HTMLImageElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!circleRef.current) return
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <section
      className="overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="newsletter-heading"
    >
      <div
        className="relative flex items-stretch min-h-[480px] rounded-3xl my-12 mx-auto max-w-[1200px] overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.25)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left: Form */}
        <div className="relative z-[2] flex flex-col justify-center px-12 py-16 w-1/2 shrink-0">
          <h2 id="newsletter-heading" className="text-[32px] font-normal text-white leading-[1.25] mb-6">
            Assine a nossa newsletter
          </h2>
          <form
            action="https://cta-redirect.rdstation.com/v2/conversions"
            className="flex flex-col gap-[10px]"
            aria-label="Newsletter form"
          >
            <label htmlFor="nl-name" className="sr-only">Seu nome</label>
            <input
              id="nl-name"
              type="text"
              placeholder="Nome"
              autoComplete="name"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <label htmlFor="nl-email" className="sr-only">Seu e-mail</label>
            <input
              id="nl-email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <button
              type="submit"
              className="bg-brand text-white text-[16px] font-bold px-7 py-[14px] rounded-[9px] border-none cursor-pointer w-full mt-2 hover:opacity-90 transition-opacity"
            >
              Realizar inscrição
            </button>
          </form>
        </div>

        {/* Right: Image (desktop) */}
        <div className="hidden sm:block relative w-1/2 shrink-0 overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: 'polygon(8% 0%,100% 0%,100% 100%,0% 100%)', opacity: 0.65 }}
            src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/68e81d8c3c0d2b7ed848b263_8fcdc379e523ad2795a89e7894669bd0_IMG_8663%20%281%29.png"
            alt="Time Widde"
            loading="lazy"
          />
        </div>

        {/* Mobile: full-width image behind form */}
        <img
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
          src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/68e81fa28d3dcbd8c3df8864_Time%20Widde%20site.jpg"
          alt="Time Widde"
          loading="lazy"
        />
        {/* Mobile overlay */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{ background: 'rgba(0,0,0,0.65)' }}
        />

        {/* Widde circle — rotating, bottom-right */}
        <img
          ref={circleRef}
          src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/680a51736c23104ce2446416_widde%20circle%20white.avif"
          alt=""
          aria-hidden="true"
          className="widde-cicle is--large absolute z-[3] object-contain pointer-events-none"
          style={{ width: 250, height: 250, bottom: -60, right: -80, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />
      </div>
    </section>
  )
}
