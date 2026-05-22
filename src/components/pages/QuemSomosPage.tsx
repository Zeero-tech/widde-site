import { lazyWithRetry } from "@/lib/lazyWithRetry"
import { Suspense } from "react";
import { useLenis } from "@/lib/useLenis";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import Nav from "@/components/core/Nav";
import QSHero from "@/components/quem-somos/QSHero";
import QSVideos from "@/components/quem-somos/QSVideos";
import QSManifesto from "@/components/quem-somos/QSManifesto";
import QSVejaMais from "@/components/quem-somos/QSVejaMais";

const Newsletter = lazyWithRetry(() => import("@/components/core/Newsletter"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Footer = lazyWithRetry(() => import("@/components/core/Footer"));

export default function QuemSomosPage() {
  useLenis();
  useRevealOnScroll();

  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <QSHero />
        <QSVideos />
        <QSManifesto />
        <QSVejaMais />
      </main>

      <Suspense>
        <VCCta />
      </Suspense>
      <Suspense>
        <div className="pb-15 md:pb-30 pt-15 md:pt-20 bg-ink">
          <Newsletter />
        </div>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
