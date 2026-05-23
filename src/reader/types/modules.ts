import type { Unit } from './reading'

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
  topicVersionOverrides?: Record<string, string>
}

export type ParsedReadingModule = RawReadingModule & {
  library: Unit[]
  topicVersions: Record<string, string>
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
