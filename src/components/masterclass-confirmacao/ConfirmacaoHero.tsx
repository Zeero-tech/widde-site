export default function ConfirmacaoHero() {
  return (
    <div className="flex flex-col flex-1 min-w-0 justify-center items-center">
      <img
        src="/assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar.png"
        loading="lazy"
        width="400"
        sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 47vw, 400px"
        alt=""
        srcSet="/assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar-p-500.png 500w, /assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar-p-800.png 800w, /assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar-p-1080.png 1080w, /assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar-p-1600.png 1600w, /assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar-p-2000.png 2000w, /assets/components/webinar-dia-namorados/69ebc1ded7c37771211e96de_Logo-land-copiar.png 2417w"
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
            src="/assets/components/webinar-dia-namorados/6a0f5b5aab1e08a6850111f9_Amanda.png"
            loading="lazy"
            width="250"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 52vw, (max-width: 1439px) 24vw, 250px"
            alt=""
            srcSet="/assets/components/webinar-dia-namorados/6a0f5b5aab1e08a6850111f9_Amanda-p-500.png 500w, /assets/components/webinar-dia-namorados/6a0f5b5aab1e08a6850111f9_Amanda-p-800.png 800w, /assets/components/webinar-dia-namorados/6a0f5b5aab1e08a6850111f9_Amanda.png 1080w"
            className="max-w-full h-auto block"
          />
        </div>
        <div className="flex-1 min-w-0">
          <img
            src="/assets/components/webinar-dia-namorados/6a0f5b5a86335acc83f21013_Ju.png"
            loading="lazy"
            width="250"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 52vw, (max-width: 1439px) 24vw, 250px"
            alt=""
            srcSet="/assets/components/webinar-dia-namorados/6a0f5b5a86335acc83f21013_Ju-p-500.png 500w, /assets/components/webinar-dia-namorados/6a0f5b5a86335acc83f21013_Ju-p-800.png 800w, /assets/components/webinar-dia-namorados/6a0f5b5a86335acc83f21013_Ju.png 1080w"
            className="max-w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}
