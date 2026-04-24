import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";

export default function VCFeatures() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="func-heading" className="bg-surface-dark py-8 md:py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-3 md:px-6 lg:px-8 xl:px-2">
        <SectionTitle
          label={t("vc.features.label")}
          title={t("vc.features.title")}
          id="func-heading"
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 lg:gap-6 mt-8">
          <div className="bg-surface border border-neutral-200 rounded-2xl p-6 md:p-6 lg:p-8 hover:border-neutral-400 transition-all">
            <svg className="w-10 h-10 text-neutral-900 mb-6 lg:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
            <h4 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3">{t("vc.features.card1.title")}</h4>
            <p className="text-base md:text-base lg:text-lg text-neutral-600 leading-relaxed">{t("vc.features.card1.description")}</p>
          </div>
          <div className="bg-surface border border-neutral-200 rounded-2xl p-6 md:p-6 lg:p-8 hover:border-neutral-400 transition-all">
            <svg className="w-10 h-10 text-neutral-900 mb-6 lg:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            <h4 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3">{t("vc.features.card2.title")}</h4>
            <p className="text-base md:text-base lg:text-lg text-neutral-600 leading-relaxed">{t("vc.features.card2.description")}</p>
          </div>
          <div className="bg-surface border border-neutral-200 rounded-2xl p-6 md:p-6 lg:p-8 hover:border-neutral-400 transition-all">
            <svg className="w-10 h-10 text-neutral-900 mb-6 lg:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            <h4 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3">{t("vc.features.card3.title")}</h4>
            <p className="text-base md:text-base lg:text-lg text-neutral-600 leading-relaxed">{t("vc.features.card3.description")}</p>
          </div>
          <div className="bg-surface border border-neutral-200 rounded-2xl p-6 md:p-6 lg:p-8 hover:border-neutral-400 transition-all">
            <svg className="w-10 h-10 text-neutral-900 mb-6 lg:mb-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228v-6.018c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
            <h4 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3">{t("vc.features.card4.title")}</h4>
            <p className="text-base md:text-base lg:text-lg text-neutral-600 leading-relaxed">{t("vc.features.card4.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
