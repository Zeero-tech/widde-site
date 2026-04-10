export default function Newsletter() {
  return (
    <section
      className="overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="newsletter-heading"
    >
      <div className="relative flex items-center min-h-[480px] bg-white/25 rounded-3xl my-12 mx-auto max-w-[1200px] overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0 z-0">
          {/* Front image (desktop) */}
          <img
            className="w-full h-full object-cover absolute inset-0 hidden sm:block"
            style={{ clipPath: 'polygon(20% 0%,100% 0%,100% 100%,0% 100%)' }}
            src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/68e81d8c3c0d2b7ed848b263_8fcdc379e523ad2795a89e7894669bd0_IMG_8663%20%281%29.png"
            alt="Time Widde"
            loading="lazy"
          />
          {/* Mobile image */}
          <img
            className="w-full h-full object-cover absolute inset-0 sm:hidden"
            src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/68e81fa28d3dcbd8c3df8864_Time%20Widde%20site.jpg"
            alt="Time Widde"
            loading="lazy"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: 'linear-gradient(90deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.55) 50%,rgba(0,0,0,0.15) 100%)' }}
          />
        </div>

        {/* Form */}
        <div className="relative z-[2] px-12 py-16 max-w-[520px]">
          <h2 id="newsletter-heading" className="text-[28px] font-black text-white leading-[1.25] mb-6">
            Assine a nossa newsletter
          </h2>
          <form
            action="https://cta-redirect.rdstation.com/v2/conversions"
            className="flex flex-col gap-[10px]"
            aria-label="Formulário de newsletter"
          >
            <label htmlFor="nl-name" className="sr-only">Seu nome</label>
            <input
              id="nl-name"
              type="text"
              placeholder="Nome *"
              autoComplete="name"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <label htmlFor="nl-email" className="sr-only">Seu e-mail</label>
            <input
              id="nl-email"
              type="email"
              placeholder="Email *"
              autoComplete="email"
              required
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-brand/70 transition-colors"
            />
            <button
              type="submit"
              className="bg-brand text-white text-[16px] font-bold px-7 py-[14px] rounded-[9px] border-none cursor-pointer w-[250px] mt-2 hover:opacity-90 transition-opacity"
            >
              Realizar inscrição
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
