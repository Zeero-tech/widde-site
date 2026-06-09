#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync, copyFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const BLOG_DIR = path.join(ROOT, 'src/pages/blog')
const CASE_DIR = path.join(ROOT, 'src/pages/case')
const BRAIN_POSTS = path.join(ROOT, 'brain/posts')
const BRAIN_CASES = path.join(ROOT, 'brain/cases')
const PUBLIC = path.join(ROOT, 'public')

function findAstroFiles(dir) {
  const result = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) result.push(...findAstroFiles(full))
    else if (entry.endsWith('.astro')) result.push(full)
  }
  return result
}

function htmlToMd(html) {
  if (!html) return ''
  return html
    .replace(/<h1[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h1>/g, '# $1\n\n')
    .replace(/<h2[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h2>/g, '## $1\n\n')
    .replace(/<h3[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/h3>/g, '### $1\n\n')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, '# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, '## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, '### $1\n\n')
    .replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**')
    .replace(/<em>([\s\S]*?)<\/em>/g, '*$1*')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g, '![$2]($1)')
    .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/g, '![$1]($2)')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1')
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, '$1')
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, '$1')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n')
    .replace(/<figure[^>]*>[\s\S]*?<\/figure>/g, '')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function copyImages(srcDir, destDir) {
  if (!existsSync(srcDir)) return
  for (const file of readdirSync(srcDir)) {
    const src = path.join(srcDir, file)
    const dest = path.join(destDir, file)
    if (!existsSync(dest)) copyFileSync(src, dest)
  }
}

function extractStrProp(content, prop) {
  const m = content.match(new RegExp(`\\b${prop}="([^"]*)"` ))
  return m ? m[1] : ''
}

// Extract template literal content (backtick strings in case data)
function extractTmplProp(content, prop) {
  const idx = content.indexOf(`${prop}: \``)
  if (idx === -1) return ''
  let start = content.indexOf('`', idx + prop.length + 2) + 1
  let depth = 0
  let i = start
  while (i < content.length) {
    if (content[i] === '`' && content[i - 1] !== '\\') break
    i++
  }
  return content.slice(start, i)
}

function extractQuotedProp(content, prop) {
  const m = content.match(new RegExp(`\\b${prop}:\\s*"((?:[^"\\\\]|\\\\.)*)"` ))
  return m ? m[1] : ''
}

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

function processBlogPosts() {
  const files = findAstroFiles(BLOG_DIR)
  console.log(`\n=== POSTS (${files.length}) ===\n`)

  for (const file of files) {
    const content = readFileSync(file, 'utf-8')

    const rel = path.relative(BLOG_DIR, file)
    const parts = rel.split(path.sep)
    const slug = parts.length === 1 ? path.basename(parts[0], '.astro') : parts[0]

    const title = extractStrProp(content, 'title')
    const category = extractStrProp(content, 'category')
    const date = extractStrProp(content, 'date')
    const readingTime = extractStrProp(content, 'readingTime')
    const coverImage = extractStrProp(content, 'coverImage')

    // Body HTML — between BlogArticle children div
    const bodyMatch = content.match(/<BlogArticle[^>]*>\s*<div>([\s\S]*?)<\/div>\s*<\/BlogArticle>/)
    const bodyMd = bodyMatch ? htmlToMd(bodyMatch[1]) : ''

    const coverLocal = coverImage ? `./${path.basename(coverImage)}` : ''

    const md = `---
title: "${title.replace(/"/g, '\\"')}"
category: "${category}"
date: "${date}"
readingTime: "${readingTime}"
coverImage: "${coverLocal}"
---

${bodyMd}
`
    const dir = path.join(BRAIN_POSTS, slug)
    mkdirSync(dir, { recursive: true })
    writeFileSync(path.join(dir, 'content.md'), md, 'utf-8')
    copyImages(path.join(PUBLIC, 'assets/blog', slug), dir)

    console.log(`  ✓ ${slug}`)
  }
}

// ─── CASES ───────────────────────────────────────────────────────────────────

function processCases() {
  const files = findAstroFiles(CASE_DIR)
  console.log(`\n=== CASES (${files.length}) ===\n`)

  for (const file of files) {
    const content = readFileSync(file, 'utf-8')
    const slug = path.basename(file, '.astro')

    function qProp(field) { return extractQuotedProp(content, field) }
    function tProp(field) { return extractTmplProp(content, field) }

    const heroImage    = qProp('heroImage')
    const tag          = qProp('tag')
    const title        = qProp('title')
    const cliente      = qProp('cliente')
    const repNome      = qProp('representanteNome')
    const repCargo     = qProp('representanteCargo')
    const youtubeUrl   = qProp('youtubeUrl')
    const conhecaTtl   = qProp('conhecaTitle')
    const conhecaBody  = tProp('conhecaBody')
    const dep1Quote    = qProp('depoimento1Quote')
    const dep1Nome     = qProp('depoimento1Nome')
    const dep1Cargo    = qProp('depoimento1Cargo')
    const desafioBody  = tProp('desafioBody')
    const resultBody   = tProp('resultadosBody')
    const dep2Quote    = qProp('depoimento2Quote')
    const dep2Nome     = qProp('depoimento2Nome')
    const dep2Cargo    = qProp('depoimento2Cargo')
    const stickyBody   = tProp('greyStickyBody')

    const heroLocal = heroImage ? `./${path.basename(heroImage)}` : ''

    const md = `---
title: "${title.replace(/"/g, '\\"')}"
tag: "${tag}"
cliente: "${cliente}"
representante: "${repNome}"
cargo: "${repCargo}"
heroImage: "${heroLocal}"
youtubeUrl: "${youtubeUrl}"
---

# ${title}

## ${conhecaTtl || `Conheça ${cliente}`}

${htmlToMd(conhecaBody)}

---

> "${dep1Quote}"
>
> — ${dep1Nome}, ${dep1Cargo}

---

## O Desafio

${htmlToMd(desafioBody)}

---

${htmlToMd(stickyBody)}

---

## Resultados

${htmlToMd(resultBody)}

---

> "${dep2Quote}"
>
> — ${dep2Nome}, ${dep2Cargo}
`
    const dir = path.join(BRAIN_CASES, slug)
    mkdirSync(dir, { recursive: true })
    writeFileSync(path.join(dir, 'content.md'), md, 'utf-8')
    copyImages(path.join(PUBLIC, 'assets/cases', slug), dir)

    console.log(`  ✓ ${slug}`)
  }
}

processBlogPosts()
processCases()
console.log('\nDone!')
