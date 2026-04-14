import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')

// Meta tags por rota
const ROUTES = [
  {
    path: '/',
    title: 'Video Commerce para E-commerce | Widde',
    description: 'Acelere a decisão de compra do seu consumidor com Video Commerce, Live Commerce e TryOn. Plataforma líder para e-commerces no Brasil. Comece agora.',
    canonical: 'https://widde.io/',
    ogTitle: 'Video Commerce para E-commerce | Widde',
    ogDescription: 'Acelere a decisão de compra do seu consumidor com Video Commerce, Live Commerce e TryOn. Plataforma líder para e-commerces no Brasil.',
  },
  {
    path: '/video-commerce',
    title: 'Video Commerce | Widde',
    description: 'Transforme seus vídeos em vendas. Plataforma de Video Commerce líder para e-commerces no Brasil. Shoppable videos, stories e carrosséis integrados à sua loja.',
    canonical: 'https://widde.io/video-commerce',
    ogTitle: 'Video Commerce | Widde',
    ogDescription: 'Transforme seus vídeos em vendas. Plataforma de Video Commerce líder para e-commerces no Brasil.',
  },
]

function generateHtml(template, route) {
  let html = template

  // Atualiza <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)

  // Atualiza meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  )

  // Atualiza canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${route.canonical}">`
  )

  // Atualiza OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${route.ogTitle}">`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${route.ogDescription}">`
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${route.canonical}">`
  )

  // Atualiza Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${route.ogTitle}">`
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${route.ogDescription}">`
  )

  return html
}

function prerender() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

  for (const route of ROUTES) {
    const html = generateHtml(template, route)

    if (route.path === '/') {
      writeFileSync(join(DIST, 'index.html'), html)
      console.log(`  -> dist/index.html (${route.title})`)
    } else {
      const outDir = join(DIST, route.path)
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html)
      console.log(`  -> dist${route.path}/index.html (${route.title})`)
    }
  }

  console.log('Prerender complete!')
}

prerender()
