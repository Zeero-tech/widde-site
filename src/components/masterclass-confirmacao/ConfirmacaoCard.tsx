import AnimatedButton from "@/components/core/AnimatedButton";

export default function ConfirmacaoCard() {
  return (
    <div className="flex-1 min-w-0 flex flex-col items-center justify-center">
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
  );
}
