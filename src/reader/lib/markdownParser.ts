import type { Block, ReaderBlock, Section, Theme, Unit } from '../types/reading'
import { SECTION_DELIMITER } from './readingFlow'

type MarkdownFrontmatter = Record<string, string | string[]>

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const summarizeSections = (sections: Section[]) =>
  sections
    .slice(0, 3)
    .map((section) => section.title)
    .join(' · ')

export const parseFrontmatter = (markdown: string) => {
  const lines = markdown.replace(/\r/g, '').split('\n')

  if (lines[0]?.trim() !== '---') {
    return { metadata: {}, body: markdown }
  }

  const metadata: MarkdownFrontmatter = {}
  let currentArrayKey: string | null = null
  let index = 1

  for (; index < lines.length; index += 1) {
    const line = lines[index]
    const trimmed = line.trim()

    if (trimmed === '---') {
      index += 1
      break
    }

    const keyMatch = line.match(/^([a-zA-Z_][\w-]*):\s*(.*)$/)
    if (keyMatch) {
      const [, key, value] = keyMatch
      if (value.trim()) {
        metadata[key] = value.trim()
        currentArrayKey = null
      } else {
        metadata[key] = []
        currentArrayKey = key
      }
      continue
    }

    const arrayMatch = line.match(/^\s*-\s+(.*)$/)
    const currentArray = currentArrayKey ? metadata[currentArrayKey] : null
    if (arrayMatch && Array.isArray(currentArray)) {
      currentArray.push(arrayMatch[1].trim())
    }
  }

  return {
    metadata,
    body: lines.slice(index).join('\n'),
  }
}

const unitIdFromTitle = (title: string, index: number) => slugify(title) || `unit-${index + 1}`

const uniqueId = (base: string, existing: Set<string>, fallback: string) => {
  const normalized = base || fallback
  if (!existing.has(normalized)) {
    existing.add(normalized)
    return normalized
  }

  let index = 2
  while (existing.has(`${normalized}-${index}`)) {
    index += 1
  }
  const next = `${normalized}-${index}`
  existing.add(next)
  return next
}

export const parseMarkdownLibrary = (
  markdown: string,
  topicVersions: Record<string, string> = {},
  defaultVersion = '1.0.0',
): Unit[] => {
  const { body } = parseFrontmatter(markdown)
  const library: Unit[] = []
  const unitIds = new Set<string>()
  const themeIds = new Set<string>()
  let currentUnit: Unit | null = null
  let currentTheme: Theme | null = null
  let currentSection: Section | null = null
  let currentBlock: Block | null = null

  const commitBlock = () => {
    if (currentSection && currentBlock && currentBlock.lines.length) {
      currentSection.blocks.push(currentBlock)
    }
    currentBlock = null
  }

  const commitSection = () => {
    commitBlock()
    if (currentTheme && currentSection && currentSection.blocks.length) {
      currentTheme.sections.push(currentSection)
    }
    currentSection = null
  }

  const commitTheme = () => {
    commitSection()
    if (currentUnit && currentTheme && currentTheme.sections.length) {
      currentTheme.enabled = true
      currentTheme.shortTitle = currentTheme.title
      currentTheme.description = summarizeSections(currentTheme.sections)
      currentTheme.version = topicVersions[currentTheme.id] ?? defaultVersion
      currentUnit.themes.push(currentTheme)
    }
    currentTheme = null
  }

  const commitUnit = () => {
    commitTheme()
    if (currentUnit && currentUnit.themes.length) {
      library.push(currentUnit)
    }
    currentUnit = null
  }

  body
    .replace(/\r/g, '')
    .split('\n')
    .forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed) return

      if (/^# unit:/i.test(trimmed)) {
        commitUnit()
        const title = trimmed.replace(/^# unit:/i, '').trim()
        currentUnit = {
          id: uniqueId(unitIdFromTitle(title, library.length), unitIds, `unit-${library.length + 1}`),
          title,
          enabled: true,
          themes: [],
        }
        return
      }

      if (/^## theme:/i.test(trimmed)) {
        commitTheme()
        const title = trimmed.replace(/^## theme:/i, '').trim()
        const id = uniqueId(slugify(title), themeIds, `theme-${themeIds.size + 1}`)
        currentTheme = {
          id,
          title,
          shortTitle: title,
          description: '',
          enabled: true,
          version: topicVersions[id] ?? defaultVersion,
          sections: [],
        }
        return
      }

      if (/^### section:/i.test(trimmed)) {
        commitSection()
        const title = trimmed.replace(/^### section:/i, '').trim()
        currentSection = {
          id: slugify(title) || `section-${currentTheme?.sections.length ?? 0}`,
          title,
          blocks: [],
        }
        return
      }

      if (/^#### block:/i.test(trimmed)) {
        commitBlock()
        const sectionId = currentSection?.id ?? 'orphan-section'
        currentBlock = {
          id: `${sectionId}-${currentSection?.blocks.length ?? 0}`,
          order: (currentSection?.blocks.length ?? 0) + 1,
          lines: [],
        }
        return
      }

      if (currentBlock) {
        currentBlock.lines.push(line.trimEnd())
      }
    })

  commitUnit()
  return library
}

export const flattenTheme = (moduleId: string, unitId: string, theme: Theme): ReaderBlock[] =>
  flattenSections(moduleId, unitId, theme.id, theme.sections)

export const flattenSections = (
  moduleId: string,
  unitId: string,
  themeId: string | null,
  sections: Section[],
): ReaderBlock[] =>
  sections.flatMap((section, sectionIndex) => {
    const contentBlocks = section.blocks.map((block, blockIndex) => ({
      id: `${themeId ?? 'all'}-${block.id}-${blockIndex}`,
      sectionTitle: section.title,
      blockLabel: `Bloque ${blockIndex + 1}`,
      orderLabel: `${sectionIndex + 1}.${blockIndex + 1}`,
      moduleId,
      unitId,
      themeId,
      sentences: [block.lines.join('\n')],
    }))

    return [
      ...contentBlocks,
      {
        id: `${themeId ?? 'all'}-${section.id}-delimiter`,
        sectionTitle: section.title,
        blockLabel: 'Delimitador',
        orderLabel: `${sectionIndex + 1}.x`,
        moduleId,
        unitId,
        themeId,
        sentences: [SECTION_DELIMITER],
      },
    ]
  })
