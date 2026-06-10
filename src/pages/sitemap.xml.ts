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
    .replace(/\.astro$/, '/')
}

function urlToFilePath(url: string): string {
  if (url === '/') return `src/pages/index.astro`
  const stripped = url.replace(/\/$/, '')
  return `src/pages${stripped}.astro`
}

function normalizeUrl(url: string): string {
  return url.replace(/\/$/, '').replace(/^https?:\/\/[^/]+/, '')
}

interface PageMeta {
  noindex: boolean
  canonicalIsExternal: boolean
  datePublished: string | null
}

function getPageMeta(filePath: string, pageUrl: string): PageMeta {
  try {
    const content = readFileSync(resolve(root, filePath), 'utf8')
    const noindex = /noindex=\{true\}/.test(content)
    const canonicalMatch = content.match(/canonical="([^"]+)"/)
    const dateMatch = content.match(/datePublished="(\d{4}-\d{2}-\d{2})"/)

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
    }
  } catch {
    return { noindex: false, canonicalIsExternal: false, datePublished: null }
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
  const urls = Object.keys(pages)
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

      return [`  <url><loc>${fullUrl}</loc><lastmod>${lastmod}</lastmod></url>`]
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
