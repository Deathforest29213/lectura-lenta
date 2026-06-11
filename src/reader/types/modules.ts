import type { Unit } from './reading'
import type { RelevantQuestionMap } from './questions'

export type Area = {
  id: string
  title: string
  description: string
}

export type RawReadingModule = {
  id: string
  areaId: string
  title: string
  description: string
  version: string
  markdown: string
  assets: string[]
  theme: string
  visualSummaries?: Record<string, string[]>
  relevantQuestionsMarkdown?: string
  topicVersionOverrides?: Record<string, string>
}

export type IllustrationLink = {
  unitId: string
  themeId: string
  sectionId: string
  unitTitle: string
  themeTitle: string
  sectionTitle: string
  images: string[]
  sourceParagraphs: string[]
}

export type SectionIllustrations = {
  unitTitle: string
  themeTitle: string
  sectionTitle: string
  images: string[]
  sourceParagraphs: string[]
}

export type ParsedReadingModule = RawReadingModule & {
  library: Unit[]
  relevantQuestions: RelevantQuestionMap
  topicVersions: Record<string, string>
  illustrationsBySection: Record<string, SectionIllustrations>
}

export type OfflineModuleRecord = {
  moduleId: string
  moduleVersion: string
  downloadedAt: string
  topicVersions: Record<string, string>
  assetUrls: string[]
}

export type VersionAlert = {
  moduleId: string
  unitId: string
  themeId: string
}

export type ModuleDownloadStatus =
  | 'not-downloaded'
  | 'downloading'
  | 'downloaded'
  | 'outdated'
  | 'error'
