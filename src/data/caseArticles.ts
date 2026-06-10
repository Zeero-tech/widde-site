export const caseArticleSlugs: string[] = [
  "mamo",
  "john-john",
  "majeste",
  "maximum-boxing",
  "pa-concept",
  "alanis",
  "shop-emme",
  "lv-store",
]

export type CaseRef = { href: string; img: string; title: string }

export const allCases: CaseRef[] = [
  { href: "/case/mamo", img: "/assets/cases/mamo/695d2d0b1016c8df8923096d_capa-youtube-1.webp", title: "Construindo narrativas com Video Commerce" },
  { href: "/case/john-john", img: "/assets/cases/john-john/68c2cc161322055b66b7b9b9_Capa-John-John.webp", title: "Agregando valor ao produto com o Video Commerce" },
  { href: "/case/majeste", img: "/assets/cases/majeste/6836d7610a4f73f81a121f54_capa-majeste-.avif", title: "Desafios da Moda Festa no E-commerce" },
  { href: "/case/maximum-boxing", img: "/assets/cases/maximum-boxing/689de10eed3215b5ef778578_Maximum-Boxing-capa-case.webp", title: "Mais vendas, menos demanda para o SAC" },
  { href: "/case/pa-concept", img: "/assets/cases/pa-concept/682e157501d9ccc3cad72f62_capa-PA.avif", title: "Experiência de Loja Física no E-commerce" },
  { href: "/case/alanis", img: "/assets/cases/alanis/682f47b93d9c5f901231e51b_Capa-Case-Alanis.avif", title: "Impacto do Video Commerce na categoria Plus Size" },
  { href: "/case/shop-emme", img: "/assets/cases/shop-emme/682f71f1302a909a7f79efe8_Case-Shop-Emme.avif", title: "Mais de R$ 1 milhão em vendas com o Video Commerce na Black Friday" },
  { href: "/case/lv-store", img: "/assets/cases/lv-store/682f79295c6f9c8a6fa9eeaa_lvstore.avif", title: "Video Commerce em Moda Feminina" },
]

export function getOtherCases(excludeHref?: string, count = 4): CaseRef[] {
  return allCases
    .filter((c) => c.href !== excludeHref)
    .slice(0, count)
}
