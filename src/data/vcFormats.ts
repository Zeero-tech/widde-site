export type VCFormatVideo = {
  src: string
  webm: string
}

// Um vídeo por formato, na mesma ordem do VCFormats.tsx:
// Stories | Carousel | Highlights | Product Highlights | Explore
export const vcFormatVideos: VCFormatVideo[] = [
  { src: '/formats/Story.mp4', webm: '/formats/Story.webm' },
  { src: '/formats/Carrossel.mp4', webm: '/formats/Carrossel.webm' },
  { src: '/formats/Destaques-de-categori.mp4', webm: '/formats/Destaques-de-categori.webm' },
  { src: '/formats/Destaques-do-produt.mp4', webm: '/formats/Destaques-do-produt.webm' },
  { src: '/formats/Explorar.mp4', webm: '/formats/Explorar.webm' },
]
