export type Block = {
  id: string
  order: number
  lines: string[]
}

export type Section = {
  id: string
  title: string
  blocks: Block[]
}

export type Theme = {
  id: string
  title: string
  shortTitle: string
  description: string
  enabled: boolean
  version: string
  sections: Section[]
}

export type Unit = {
  id: string
  title: string
  enabled: boolean
  themes: Theme[]
}

export type ReaderBlock = {
  id: string
  sectionTitle: string
  blockLabel: string
  orderLabel: string
  moduleId: string
  unitId: string
  themeId: string | null
  sentences: string[]
}
