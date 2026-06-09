import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const visualRoot = path.join(publicDir, 'resumen-visual')
const outputFile = path.join(root, 'src', 'data', 'visualSummaries.ts')
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'])

const toPublicPath = (filePath) => {
  const relativePath = path.relative(publicDir, filePath).split(path.sep).join('/')
  return `/${relativePath}`
}

const readDirectories = async (dir) => {
  try {
    const entries = await readdir(dir, { withFileTypes: true })
    return entries.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    if (error?.code === 'ENOENT') return []
    throw error
  }
}

const readImages = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((entry) => toPublicPath(path.join(dir, entry.name)))
}

const summaries = {}
const moduleDirs = await readDirectories(visualRoot)

for (const moduleDir of moduleDirs) {
  const modulePath = path.join(visualRoot, moduleDir.name)
  const unitDirs = await readDirectories(modulePath)
  const moduleSummaries = {}

  for (const unitDir of unitDirs) {
    const unitPath = path.join(modulePath, unitDir.name)
    const images = await readImages(unitPath)
    if (images.length) {
      moduleSummaries[unitDir.name] = images
    }
  }

  if (Object.keys(moduleSummaries).length) {
    summaries[moduleDir.name] = moduleSummaries
  }
}

const content = `export const visualSummaries: Record<string, Record<string, string[]>> = ${JSON.stringify(
  summaries,
  null,
  2,
)}
`

await writeFile(outputFile, content, 'utf8')
console.log(`Generated ${path.relative(root, outputFile)}`)
