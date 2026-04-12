export default function Newsletter() {
  return (
    <section
      className="overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="newsletter-heading"
    >
      <div className="relative flex items-stretch min-h-[480px] bg-white/15 rounded-3xl my-12 mx-auto max-w-[1200px] overflow-hidden">
        {/* Left: Form */}
        <div className="relative z-[2] flex flex-col justify-center px-12 py-16 w-1/2 shrink-0">
          <h2 id="newsletter-heading" className="text-[32px] font-normal text-white leading-[1.25] mb-6">
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
      </div>
    </section>
  )
}
