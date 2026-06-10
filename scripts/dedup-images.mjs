import { createHash } from 'crypto'
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from 'fs'
import { join, extname, relative } from 'path'
import { execSync } from 'child_process'

const ASSETS_DIR = 'public/assets'
const SRC_DIR = 'src'
const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg']

// Canonical path priority — lower index = higher priority
const CANONICAL_PRIORITY = [
  'cases/',
  'blog/',
  'components/',
  'logos/',
  'data/',
]

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

function md5(filePath) {
  return createHash('md5').update(readFileSync(filePath)).digest('hex')
}

function canonicalScore(path) {
  for (let i = 0; i < CANONICAL_PRIORITY.length; i++) {
    if (path.includes(CANONICAL_PRIORITY[i])) return i
  }
  return CANONICAL_PRIORITY.length
}

function folderMatchScore(filePath) {
  // prefer path whose folder name appears in the filename
  const parts = filePath.split('/')
  const filename = parts[parts.length - 1].toLowerCase()
  const folder = parts[parts.length - 2]?.toLowerCase() ?? ''
  // strip hyphens for comparison
  const folderClean = folder.replace(/-/g, '')
  const filenameClean = filename.replace(/-/g, '').replace(/_/g, '')
  return filenameClean.includes(folderClean) || folderClean.includes(filenameClean.slice(0, 6)) ? 0 : 1
}

function pickCanonical(paths) {
  return paths.slice().sort((a, b) => {
    const scoreDiff = canonicalScore(a) - canonicalScore(b)
    if (scoreDiff !== 0) return scoreDiff
    // prefer path whose folder matches the filename
    const matchDiff = folderMatchScore(a) - folderMatchScore(b)
    if (matchDiff !== 0) return matchDiff
    // fallback: shorter path
    return a.length - b.length
  })[0]
}

function walkSrc(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...walkSrc(full))
    else if (['.tsx', '.ts', '.astro', '.css'].includes(extname(e.name))) files.push(full)
  }
  return files
}

// Build hash map
console.log('Scanning images...')
const files = walk(ASSETS_DIR)
console.log(`Found ${files.length} images\n`)

const hashMap = new Map() // hash -> [paths]
for (const f of files) {
  const hash = md5(f)
  if (!hashMap.has(hash)) hashMap.set(hash, [])
  hashMap.get(hash).push(f)
}

const duplicateGroups = [...hashMap.values()].filter(g => g.length > 1)
console.log(`Found ${duplicateGroups.length} groups of duplicate images\n`)

if (duplicateGroups.length === 0) {
  console.log('No duplicates found.')
  process.exit(0)
}

// Collect all source files
const srcFiles = walkSrc(SRC_DIR)

let totalRemoved = 0
let totalSavedBytes = 0

for (const group of duplicateGroups) {
  const canonical = pickCanonical(group)
  const dupes = group.filter(p => p !== canonical)
  const canonicalRel = '/' + relative('public', canonical)

  console.log(`CANONICAL: ${canonicalRel}`)

  for (const dupe of dupes) {
    const dupeRel = '/' + relative('public', dupe)
    console.log(`  DUPE: ${dupeRel}`)

    // Update all source references
    let refsUpdated = 0
    for (const srcFile of srcFiles) {
      const content = readFileSync(srcFile, 'utf8')
      if (content.includes(dupeRel)) {
        const updated = content.replaceAll(dupeRel, canonicalRel)
        writeFileSync(srcFile, updated)
        refsUpdated++
      }
    }

    if (refsUpdated > 0) {
      console.log(`    → Updated ${refsUpdated} source file(s)`)
    }

    // Delete duplicate
    const size = statSync(dupe).size
    unlinkSync(dupe)
    totalSavedBytes += size
    totalRemoved++
    console.log(`    → Deleted (${(size / 1024).toFixed(0)}KB)`)
  }
  console.log()
}

console.log('─────────────────────────────────────')
console.log(`Removed: ${totalRemoved} duplicate files`)
console.log(`Saved:   ${(totalSavedBytes / 1024 / 1024).toFixed(1)} MB`)
