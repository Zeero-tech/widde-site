// Vídeos organizados por proporção
// O componente Showcase vai alternar entre os vídeos de cada lista em sequência

export type ShowcaseVideos = {
  // Desktop: vídeo grande (575x375) — ocupa 2 colunas x 2 linhas
  desktop_large: string[]
  // Desktop: vídeo pequeno (280x180) — ocupa 1 coluna x 1 linha
  desktop_small: string[]
  // Mobile: vídeo grande (315x375) — ocupa 2 colunas x 2 linhas
  mobile_large: string[]
  // Mobile: vídeo médio (150x180) — ocupa 1 coluna x 1 linha (linhas 1 e 2)
  mobile_medium: string[]
  // Mobile: vídeo pequeno (150x100) — ocupa 1 coluna x 1 linha (linha 3)
  mobile_small: string[]
}

const v1 = '/show-cases/Cajubrasil-web.mp4'
const v2 = '/show-cases/Camys - Story-web.mp4'
const v3 = '/show-cases/Ferragens floresta - Destaques de produto-web.mp4'
const v4 = '/show-cases/Majesté (1)-web.mp4'
const v5 = '/show-cases/Mamô Carrossel (sem zoom)-web.mp4'

export const showcaseVideos: ShowcaseVideos = {
  desktop_large: [v1, v4, v2, v3, v5],
  desktop_small: [v2, v3, v5, v1, v4],
  mobile_large: [v1, v4, v2, v3, v5],
  mobile_medium: [v2, v3, v5, v1, v4],
  mobile_small: [v3, v5, v1, v4, v2],
}
