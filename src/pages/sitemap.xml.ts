import type { APIRoute } from 'astro'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const site = 'https://widde.io'
const root = resolve('.')

const pages = import.meta.glob('./**/*.astro', { eager: false })

function pathToUrl(path: string): string | null {
  if (path.includes('[')) return null
  if (path.includes('404') || path.includes('500')) return null

  return path
    .replace(/^\.\//, '/')
    .replace(/\/index\.astro$/, '/')
    .replace(/\.astro$/, '')
}

function urlToFilePath(url: string): string {
  if (url === '/') return `src/pages/index.astro`
  const stripped = url.replace(/\/$/, '')
  return `src/pages${stripped}.astro`
}

function normalizeUrl(url: string): string {
  return url.replace(/\/$/, '').replace(/^https?:\/\/[^/]+/, '')
}

function youtubeEmbedUrl(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([A-Za-z0-9_-]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

function absoluteImageUrl(src: string): string {
  if (src.startsWith('http')) return src
  return `${site}${src}`
}

interface PageMeta {
  noindex: boolean
  canonicalIsExternal: boolean
  datePublished: string | null
  ogImage: string | null
  ogTitle: string | null
  ogDescription: string | null
  youtubeUrl: string | null
  heroImage: string | null
}

function getPageMeta(filePath: string, pageUrl: string): PageMeta {
  try {
    const content = readFileSync(resolve(root, filePath), 'utf8')
    const noindex = /noindex=\{true\}/.test(content)
    const canonicalMatch = content.match(/canonical="([^"]+)"/)
    const dateMatch = content.match(/datePublished="(\d{4}-\d{2}-\d{2})"/)
    const ogImageMatch = content.match(/ogImage="([^"]+)"/)
    const titleMatch = content.match(/title="([^"]+)"/)
    const descMatch = content.match(/description="([^"]+)"/)
    const youtubeMatch = content.match(/youtubeUrl:\s*["']([^"']+)["']/)
    const heroImageMatch = content.match(/heroImage:\s*["']([^"']+)["']/)

    let canonicalIsExternal = false
    if (canonicalMatch) {
      const canonicalPath = normalizeUrl(canonicalMatch[1])
      const ownPath = normalizeUrl(pageUrl)
      canonicalIsExternal = canonicalPath !== ownPath
    }

    return {
      noindex,
      canonicalIsExternal,
      datePublished: dateMatch?.[1] ?? null,
      ogImage: ogImageMatch?.[1] ?? null,
      ogTitle: titleMatch?.[1] ?? null,
      ogDescription: descMatch?.[1] ?? null,
      youtubeUrl: youtubeMatch?.[1] ?? null,
      heroImage: heroImageMatch?.[1] ?? null,
    }
  } catch {
    return { noindex: false, canonicalIsExternal: false, datePublished: null, ogImage: null, ogTitle: null, ogDescription: null, youtubeUrl: null, heroImage: null }
  }
}

function getGitLastMod(filePath: string): string {
  try {
    const date = execSync(
      `git log --format="%ad" --date=short -1 -- "${filePath}"`,
      { encoding: 'utf8', cwd: root }
    ).trim()
    return date || new Date().toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

export const GET: APIRoute = async () => {
  const entries = Object.keys(pages)
    .map(pathToUrl)
    .filter((url): url is string => url !== null)
    .sort()
    .flatMap(url => {
      const filePath = urlToFilePath(url)
      const fullUrl = `${site}${url}`
      const meta = getPageMeta(filePath, fullUrl)

      if (meta.noindex || meta.canonicalIsExternal) return []

      const isBlog = url.startsWith('/blog/')
      const lastmod = isBlog
        ? (meta.datePublished ?? getGitLastMod(filePath))
        : getGitLastMod(filePath)

      const imageTags = meta.ogImage
        ? `\n    <image:image><image:loc>${absoluteImageUrl(meta.ogImage)}</image:loc></image:image>`
        : ''

      let videoTag = ''
      if (meta.youtubeUrl) {
        const thumbnail = meta.heroImage
          ? absoluteImageUrl(meta.heroImage)
          : (meta.ogImage ? absoluteImageUrl(meta.ogImage) : '')
        const title = (meta.ogTitle ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        const desc = (meta.ogDescription ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        videoTag = `
    <video:video>
      <video:thumbnail_loc>${thumbnail}</video:thumbnail_loc>
      <video:title>${title}</video:title>
      <video:description>${desc}</video:description>
      <video:player_loc>${youtubeEmbedUrl(meta.youtubeUrl)}</video:player_loc>
    </video:video>`
      }

      return [`  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${lastmod}</lastmod>${imageTags}${videoTag}\n  </url>`]
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
