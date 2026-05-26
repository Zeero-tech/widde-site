import { useEffect } from "react";
import Nav from "@/components/core/Nav";
import Footer from "@/components/core/Footer";
import WebinarHero from "@/components/webinar-dia-namorados/WebinarHero";
import WebinarForm from "@/components/webinar-dia-namorados/WebinarForm";

const BG = "rgb(115, 11, 0)";
const BG_SCROLLED = "rgb(0, 0, 0)";

export default function WebinarDiaNamoradosPage() {
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement | null;
    if (!header) return;

    const apply = () => {
      header.style.setProperty(
        "background-color",
        window.scrollY > 0 ? BG_SCROLLED : BG,
        "important",
      );
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    const observer = new MutationObserver(apply);
    observer.observe(header, { attributes: true, attributeFilter: ["style"] });

    document.documentElement.style.setProperty(
      "--nav-height",
      `${header.offsetHeight}px`,
    );

    return () => {
      window.removeEventListener("scroll", apply);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      <Nav isDark={true} />
      <div
        id="subscription-webinar"
        className="flex flex-col min-[880px]:flex-row justify-center items-center w-full gap-16 px-8 md:px-16 py-15 min-[880px]:py-0"
        style={{
          minHeight: "calc(100svh - var(--nav-height, 64px))",
          backgroundColor: BG,
        }}
      >
        <WebinarHero />
        <WebinarForm />
      </div>
      <Footer />
    </div>
  );
}
