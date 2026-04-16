export type VCFormatVideo = {
  src: string
}

// Um vídeo por formato, na mesma ordem do VCFormats.tsx:
// Stories | Carousel | Highlights | Product Highlights | Explore
export const vcFormatVideos: VCFormatVideo[] = [
  { src: '/formats/Story.mp4' },
  { src: '/formats/Carrossel.mp4' },
  { src: '/formats/Destaques-de-categori.mp4' },
  { src: '/formats/Destaques-do-produt.mp4' },
  { src: '/formats/Explorar.mp4' },
]
