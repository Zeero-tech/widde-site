import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const FORM_ID = "webinar-dia-dos-namorados-27-05-c7e6488e37d086da8074";
const FLAG_KEY = "__rdform_created__" + FORM_ID;

export default function WebinarDiaNamoradosContent() {
  const formColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = formColRef.current;
    if (!el) return;

    const animate = () => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24, filter: "blur(4px)", scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          force3D: true,
          clearProps: "willChange",
        }
      );
    };

    const formEl = document.getElementById(FORM_ID);
    if (formEl && formEl.children.length > 0) {
      animate();
      return;
    }

    const observer = new MutationObserver(() => {
      const target = document.getElementById(FORM_ID);
      if (target && target.children.length > 0) {
        observer.disconnect();
        animate();
      }
    });

    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if ((window as any)[FLAG_KEY]) return;

    const tryInit = () => {
      // @ts-ignore
      if (typeof window.RDStationForms !== "function") return;
      if ((window as any)[FLAG_KEY]) return;
      (window as any)[FLAG_KEY] = true;
      // @ts-ignore
      new window.RDStationForms(FORM_ID, "null").createForm();
    };

    // @ts-ignore
    if (typeof window.RDStationForms === "function") {
      tryInit();
    } else {
      const script = document.querySelector(`script[src*="rdstation-forms"]`);
      if (script) {
        script.addEventListener("load", tryInit, { once: true });
      }
    }
  }, []);

  return (
    <div
      id="subscription-webinar"
      className="flex flex-col min-[880px]:flex-row justify-center items-center w-full gap-16 px-8 md:px-16 py-15 md:py-0"
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

        <div className="flex gap-6 mb-8">
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

        <p className="text-[24px] leading-[1.4] tracking-[-0.01em] bg-[#f5f5f5] text-black border-[20px] border-[#f5f5f5] rounded-[14px] flex flex-row justify-center items-center text-center">
          <strong>28 de maio (quinta-feira), às 11:00</strong>
        </p>
      </div>

      {/* Right col — RD Station form */}
      <div
        ref={formColRef}
        className="flex-1 min-w-0 flex flex-col items-center justify-center"
        style={{ willChange: "opacity, transform, filter" }}
        data-form-reveal=""
      >
        <style>{`
          #${FORM_ID} h2 {
            color: #000 !important;
            font-size: 1.6rem !important;
            margin-bottom: 1.2rem !important;
          }
          #${FORM_ID} .bricks-form__label {
            color: #000 !important;
            font-size: 0.9rem !important;
          }
          #${FORM_ID} .bricks-form__input {
            background-color: #e9e9e9 !important;
            color: #000 !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 10px 14px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          #${FORM_ID} input.bricks-form__input::placeholder {
            color: transparent !important;
          }
          #${FORM_ID} .rd-button {
            background-color: #000 !important;
            color: #fff !important;
            border: 1px solid rgba(255,255,255,0.3) !important;
            border-radius: 9999px !important;
            padding: 12px 28px !important;
            font-weight: 700 !important;
            font-size: 1rem !important;
            cursor: pointer !important;
            width: 100% !important;
            margin-top: 8px !important;
          }
          #${FORM_ID} .rd-button:hover {
            background-color: #333 !important;
          }
          #${FORM_ID} .bricks-form__fieldset {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
          }
          #${FORM_ID} select.bricks-form__input {
            background-color: rgba(255,255,255,0.12) !important;
            color: #000 !important;
            height: 48px !important;
            padding: 10px 14px !important;
            background-color: #e9e9e9 !important;
          }
          #${FORM_ID} .bricks-form__field__option label {
            color: #000 !important;
          }
          #${FORM_ID} .bricks-form__field:has(input[name="cf_cliente_da_widde"]) {
            display: flex !important;
            flex-direction: column !important;
            flex-wrap: wrap !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          @media (min-width: 880px) {
            #${FORM_ID} .bricks-form__field:has(input[name="cf_cliente_da_widde"]) {
              flex-direction: row !important;
              align-items: center !important;
              gap: 16px !important;
            }
          }
          #${FORM_ID} .bricks-form__field:has(input[name="cf_cliente_da_widde"]) .always-visible {
            margin-bottom: 0 !important;
            white-space: nowrap !important;
          }
          #${FORM_ID} .bricks-form__field:has(input[name="cf_cliente_da_widde"]) .bricks-form__field__option {
            margin: 0 !important;
          }
          #${FORM_ID} .phone-input-group {
            display: flex !important;
            align-items: center !important;
          }
          #${FORM_ID} .select2-container.phone-country {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 70px !important;
          }
          #${FORM_ID} .select2-choice {
            display: flex !important;
            align-items: center !important;
            height: 100% !important;
          }
        `}</style>
        <div role="main" className="w-full max-w-[760px]">
          <div id={FORM_ID} />
        </div>
      </div>
    </div>
  );
}
