import AnimatedButton from "@/components/core/AnimatedButton";

export default function MasterclassConfirmacaoContent() {
  return (
    <div
      id="subscription-webinar"
      className="flex flex-col md:flex-row justify-center items-center w-full gap-16 px-8 md:px-16 py-15 md:py-0"
      style={{
        minHeight: "calc(100svh - var(--nav-height, 64px))",
        backgroundColor: "rgb(115, 11, 0)",
      }}
    >
      {/* Left col */}
      <div className="flex flex-col flex-1 min-w-0 justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar.png"
          loading="lazy"
          width="400"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 47vw, 400px"
          alt=""
          srcSet="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar-p-500.png 500w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar-p-800.png 800w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar-p-1080.png 1080w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar-p-1600.png 1600w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar-p-2000.png 2000w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/69ebc1ded7c37771211e96de_Logo%20land%20copiar.png 2417w"
          className="max-w-[80%] md:max-w-[50%] h-auto block mb-15 md:mb-8"
        />

        <h1 className="text-white font-black leading-tight mb-2 w-full max-w-full text-[clamp(2.3rem,4vw,4.2rem)] text-center">
          Dia dos Namorados:
        </h1>

        <div className="mb-10 text-white/85 italic text-[clamp(1.1rem,1.7vw,3rem)]">
          <em>O cupido tem dúvida (e seu cliente também)</em>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <img
              src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5aab1e08a6850111f9_Amanda.png"
              loading="lazy"
              width="250"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 52vw, (max-width: 1439px) 24vw, 250px"
              alt=""
              srcSet="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5aab1e08a6850111f9_Amanda-p-500.png 500w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5aab1e08a6850111f9_Amanda-p-800.png 800w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5aab1e08a6850111f9_Amanda.png 1080w"
              className="max-w-full h-auto block"
            />
          </div>
          <div className="flex-1 min-w-0">
            <img
              src="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5a86335acc83f21013_Ju.png"
              loading="lazy"
              width="250"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 52vw, (max-width: 1439px) 24vw, 250px"
              alt=""
              srcSet="https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5a86335acc83f21013_Ju-p-500.png 500w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5a86335acc83f21013_Ju-p-800.png 800w, https://cdn.prod.website-files.com/654ec481f224407ac998cfbe/6a0f5b5a86335acc83f21013_Ju.png 1080w"
              className="max-w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* Right col */}
      <div className="flex-1 min-w-0 flex flex-col items-center justify-center">
        {/* Card */}
        <div className="bg-[#f5f5f5] rounded-2xl px-10 py-9 mb-7 w-full box-border text-center">
          <h1 className="font-black leading-tight mb-5 text-[#1a1a1a] text-center w-full text-[clamp(1.6rem,2.5vw,2.5rem)]">
            <em>Presença confirmada!</em>
          </h1>

          <p className="text-[#555] text-base leading-relaxed mb-6 text-center w-full text-[clamp(1.1rem,2.5vw,1.3rem)]">
            Você receberá um e-mail com o link da sala da Webinar. Verifique sua
            caixa e spam.
          </p>

          <p className="text-center m-0">
            <strong className="text-[#1a1a1a] font-bold text-base leading-relaxed text-center text-[clamp(1.2rem,2.5vw,1.5rem)]">
              Inscrição confirmada. Veja o que outras lojas estão fazendo
              enquanto a live não começa.
            </strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full mb-10 md:mb-0">
          <AnimatedButton
            href="/cases"
            className="inline-flex items-center justify-center font-bold text-[1.1rem] px-8 py-3.5 rounded-full no-underline relative overflow-hidden transition-colors duration-300 border border-white"
            style={{ color: "#fff" }}
          >
            Explorar cases de sucesso
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
