import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { resolve, join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const BLOG_DIR = resolve(__dirname, '..', 'src', 'content', 'blog')
const CASES_DIR = resolve(__dirname, '..', 'src', 'content', 'cases')

// Meta tags por rota estática
const STATIC_ROUTES = [
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

// Lê os posts de blog do diretório content/blog
function getBlogRoutes() {
  const files = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const slug = data.slug ?? file.replace(/\.md$/, '')
    return {
      path: `/blog/${slug}`,
      title: `${data.title} | Widde Blog`,
      description: data.description ?? '',
      canonical: `https://widde.io/blog/${slug}`,
      ogTitle: data.title,
      ogDescription: data.description ?? '',
      ogImage: data.image ? `https://widde.io${data.image}` : undefined,
    }
  })
}

// Lê os cases do diretório content/cases
function getCaseRoutes() {
  const files = readdirSync(CASES_DIR).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = readFileSync(join(CASES_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const slug = data.slug ?? file.replace(/\.md$/, '')
    const title = `${data.brand}: ${data.title} | Widde Cases`
    return {
      path: `/case/${slug}`,
      title,
      description: data.description ?? '',
      canonical: `https://widde.io/case/${slug}`,
      ogTitle: title,
      ogDescription: data.description ?? '',
      ogImage: data.image ? `https://widde.io${data.image}` : undefined,
    }
  })
}

function generateHtml(template, route) {
  let html = template

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  )
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${route.canonical}">`
  )
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
  const blogRoutes = getBlogRoutes()
  const caseRoutes = getCaseRoutes()
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes, ...caseRoutes]

  for (const route of allRoutes) {
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

  console.log(`\nPrerender complete! ${allRoutes.length} páginas geradas.`)
}

prerender()
