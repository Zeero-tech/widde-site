#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync, createWriteStream } from 'fs'
import { get as httpsGet } from 'https'
import { get as httpGet } from 'http'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const PUBLIC = path.join(ROOT, 'public/assets')

const CDN_REGEX = /https:\/\/cdn\.prod\.website-files\.com\/[^"'\s)<>]+/g

const EXTENSIONS = ['.astro', '.tsx', '.ts', '.jsx', '.js']

function findFiles(dir) {
  const result = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) result.push(...findFiles(full))
    else if (EXTENSIONS.some(ext => entry.endsWith(ext))) result.push(full)
  }
  return result
}

// Determine local asset dir and public ref prefix for a given source file
function getAssetPath(filePath) {
  const rel = path.relative(SRC, filePath) // e.g. pages/blog/foo.astro or components/Newsletter.tsx

  if (rel.startsWith('pages/blog/')) {
    // slug = directory name or filename without extension
    const parts = rel.replace('pages/blog/', '').split(path.sep)
    const slug = parts.length === 1 ? path.basename(parts[0], path.extname(parts[0])) : parts[0]
    return { dir: path.join(PUBLIC, 'blog', slug), prefix: `/assets/blog/${slug}` }
  }

  if (rel.startsWith('pages/case/')) {
    const slug = path.basename(filePath, path.extname(filePath))
    return { dir: path.join(PUBLIC, 'cases', slug), prefix: `/assets/cases/${slug}` }
  }

  if (rel.startsWith('data/')) {
    return { dir: path.join(PUBLIC, 'data'), prefix: '/assets/data' }
  }

  if (rel.startsWith('components/')) {
    // use component subfolder name
    const subfolder = rel.replace('components/', '').split(path.sep)[0]
    return { dir: path.join(PUBLIC, 'components', subfolder), prefix: `/assets/components/${subfolder}` }
  }

  // fallback
  const subfolder = rel.split(path.sep)[0]
  return { dir: path.join(PUBLIC, subfolder), prefix: `/assets/${subfolder}` }
}

function sanitizeFilename(rawName) {
  return decodeURIComponent(rawName)
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function downloadFile(url, dest, redirects = 0) {
  if (redirects > 5) return Promise.reject(new Error('too many redirects'))
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? httpsGet : httpGet
    const file = createWriteStream(dest)
    lib(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        return downloadFile(res.headers.location, dest, redirects + 1).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        file.close()
        return reject(new Error(`HTTP ${res.statusCode}`))
      }
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', (e) => { file.close(); reject(e) })
  })
}

async function main() {
  const files = findFiles(SRC)
  let totalImages = 0
  let totalFiles = 0

  for (const file of files) {
    let content = readFileSync(file, 'utf-8')
    const urls = [...new Set(content.match(CDN_REGEX) || [])]
    if (!urls.length) continue

    const { dir, prefix } = getAssetPath(file)
    mkdirSync(dir, { recursive: true })

    const label = path.relative(SRC, file)
    console.log(`\n[${label}] ${urls.length} imagem(ns)`)
    let changed = false

    for (const url of urls) {
      const rawName = url.split('/').pop()
      const filename = sanitizeFilename(rawName)
      const dest = path.join(dir, filename)
      const ref = `${prefix}/${filename}`

      if (existsSync(dest)) {
        process.stdout.write(`  = ${filename} (já existe)\n`)
        content = content.replaceAll(url, ref)
        changed = true
        continue
      }

      process.stdout.write(`  ↓ ${filename} ... `)
      try {
        await downloadFile(url, dest)
        console.log('✓')
        content = content.replaceAll(url, ref)
        changed = true
        totalImages++
      } catch (e) {
        console.log(`✗ ${e.message}`)
      }
    }

    if (changed) {
      writeFileSync(file, content, 'utf-8')
      totalFiles++
    }
  }

  console.log(`\n✓ ${totalImages} imagens baixadas, ${totalFiles} arquivos atualizados`)
}

main().catch(console.error)
