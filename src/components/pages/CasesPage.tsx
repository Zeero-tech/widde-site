import { lazyWithRetry } from "@/lib/lazyWithRetry"
import { Suspense } from "react";
import { useLenis } from "@/lib/useLenis";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

import Nav from "@/components/core/Nav";
import CasesHero from "@/components/cases/CasesHero";
import CasesGrid from "@/components/cases/CasesGrid";

const Newsletter = lazyWithRetry(() => import("@/components/core/Newsletter"));
const VCCta = lazyWithRetry(() => import("@/components/VideoCommerce/VCCta"));
const Footer = lazyWithRetry(() => import("@/components/core/Footer"));

export default function CasesPage() {
  useLenis();
  useRevealOnScroll();

  return (
    <>
      <Nav />
      <main className="bg-[#f6f6f6]">
        <CasesHero />
        <CasesGrid />
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
