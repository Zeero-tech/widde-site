import type { APIRoute } from 'astro'

const site = 'https://widde.io'

const pages = import.meta.glob('./**/*.astro', { eager: false })

function pathToUrl(path: string): string | null {
  // skip dynamic routes
  if (path.includes('[')) return null
  // skip internal/utility pages
  if (path.includes('404') || path.includes('500')) return null

  let url = path
    .replace(/^\.\//, '/')
    .replace(/\/index\.astro$/, '/')
    .replace(/\.astro$/, '/')

  return url
}

export const GET: APIRoute = async () => {
  const urls = Object.keys(pages)
    .map(pathToUrl)
    .filter((url): url is string => url !== null)
    .sort()
    .map(url => `  <url><loc>${site}${url}</loc></url>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
