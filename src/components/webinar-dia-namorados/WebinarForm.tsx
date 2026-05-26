import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const FORM_ID = "webinar-dia-dos-namorados-27-05-c7e6488e37d086da8074";
const FLAG_KEY = "__rdform_created__" + FORM_ID;

export default function WebinarForm() {
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
      ref={formColRef}
      className="flex-1 min-w-0 flex flex-col items-center justify-center webinar-form-col"
      style={{ willChange: "opacity, transform, filter" }}
    >
      <div role="main" className="w-full max-w-[760px]">
        <div id={FORM_ID} />
      </div>
    </div>
  );
}
