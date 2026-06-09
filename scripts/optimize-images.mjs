import { createRequire } from 'module'
import { readdirSync, statSync, writeFileSync } from 'fs'
import { join, extname, relative } from 'path'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const ASSETS_DIR = 'public/assets'
const MAX_WIDTH = 1200
const MIN_SIZE_KB = 100 // skip files already under this
const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg']

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...walk(full))
    else if (SUPPORTED_EXTS.includes(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

async function optimizeFile(filePath) {
  const before = statSync(filePath).size
  const beforeKB = (before / 1024).toFixed(0)

  if (before < MIN_SIZE_KB * 1024) {
    return { path: filePath, skipped: true, reason: `already small (${beforeKB}KB)` }
  }

  try {
    const img = sharp(filePath)
    const meta = await img.metadata()
    const needsResize = meta.width && meta.width > MAX_WIDTH

    let pipeline = sharp(filePath)
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    }

    const ext = extname(filePath).toLowerCase()
    if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 9, quality: 80 })
    } else {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true })
    }

    const buf = await pipeline.toBuffer()
    const after = buf.length
    const afterKB = (after / 1024).toFixed(0)
    const saved = before - after
    const savedKB = (saved / 1024).toFixed(0)
    const pct = ((saved / before) * 100).toFixed(0)

    if (saved > 0) {
      writeFileSync(filePath, buf)
      return { path: filePath, beforeKB, afterKB, savedKB, pct, resized: needsResize }
    } else {
      return { path: filePath, skipped: true, reason: `already optimized (${beforeKB}KB)` }
    }
  } catch (err) {
    return { path: filePath, error: err.message }
  }
}

const files = walk(ASSETS_DIR)
console.log(`Found ${files.length} images to check...\n`)

let totalSaved = 0
let optimized = 0
let skipped = 0
let errors = 0

for (const f of files) {
  const result = await optimizeFile(f)
  const rel = relative(ASSETS_DIR, result.path)

  if (result.error) {
    console.log(`  ERROR  ${rel}: ${result.error}`)
    errors++
  } else if (result.skipped) {
    skipped++
  } else {
    const resizeTag = result.resized ? ' [resized]' : ''
    console.log(`  ✓  ${rel}: ${result.beforeKB}KB → ${result.afterKB}KB  (-${result.pct}%${resizeTag})`)
    totalSaved += parseInt(result.savedKB)
    optimized++
  }
}

console.log(`\n─────────────────────────────────────`)
console.log(`Optimized: ${optimized} files`)
console.log(`Skipped:   ${skipped} files`)
console.log(`Errors:    ${errors} files`)
console.log(`Total saved: ${(totalSaved / 1024).toFixed(1)} MB`)
