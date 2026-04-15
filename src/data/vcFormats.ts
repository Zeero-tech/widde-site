export type VCFormatImage = {
  src: string
}

// Uma imagem por formato, na mesma ordem do VCFormats.tsx:
// Stories | Carousel | Highlights | Product Highlights | Explore
export const vcFormatVideos: VCFormatImage[] = [
  { src: '/formats/Stories.png' }, // Stories
  { src: '/formats/Carrossel-de-Videos.png' }, // Carousel
  { src: '/formats/Destaques-da-Loja.png' }, // Highlights
  { src: '/formats/Destaques-de-Produto.png' }, // Product Highlights
  { src: '/formats/Explorar.png' }, // Explore
]
