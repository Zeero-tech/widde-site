// Vídeos e imagens organizados por proporção
// O componente Showcase vai alternar entre os itens de cada lista em sequência

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

// Vídeos
const v1 = '/show-cases/Cajubrasil-web.mp4'
const v2 = '/show-cases/Camys - Story-web.mp4'
const v3 = '/show-cases/Ferragens floresta - Destaques de produto-web.mp4'
const v4 = '/show-cases/Majesté (1)-web.mp4'
const v5 = '/show-cases/Mamô Carrossel (sem zoom)-web.mp4'

// Imagens
const i1 = '/show-cases/Any Any.png'
const i2 = '/show-cases/Boca Rosa.png'
const i3 = '/show-cases/Elements.png'
const i4 = '/show-cases/Lovlity.png'
const i5 = '/show-cases/Mascavo.png'

export const showcaseVideos: ShowcaseVideos = {
  desktop_large: [v1, v4, v2, v3, v5],
  desktop_small: [v2, i1, v3, i2, v5, i3, v1, i4, v4, i5],
  mobile_large: [v1, v4, v2, v3, v5],
  mobile_medium: [i1, v2, i2, v3, i3, v5, i4, v1, i5, v4],
  mobile_small: [v3, i1, v5, i2, v1, i3, v4, i4, v2, i5],
}
