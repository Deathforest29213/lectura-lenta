import { useEffect, useState } from 'react'
import type { ProgressRecord } from '../types/progress'

const STORAGE_KEY = 'lectura-lenta:reading-progress'

const readProgress = (): ProgressRecord[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ProgressRecord[]) : []
  } catch {
    return []
  }
}

const keyFor = (moduleId: string, themeId: string) => `${moduleId}:${themeId}`

export function useReadingProgress() {
  const [records, setRecords] = useState<ProgressRecord[]>(readProgress)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  }, [records])

  const getThemeRecord = (moduleId: string, themeId: string) =>
    records.find((record) => keyFor(record.moduleId, record.themeId) === keyFor(moduleId, themeId)) ??
    null

  const getThemePercent = (moduleId: string, themeId: string, totalBlocks: number) => {
    const record = getThemeRecord(moduleId, themeId)
    if (!record || totalBlocks <= 0) return 0
    return Math.min(100, Math.round((record.completedBlockIds.length / totalBlocks) * 100))
  }

  const saveProgress = (next: Omit<ProgressRecord, 'updatedAt'>) => {
    setRecords((current) => {
      const existing = getThemeRecord(next.moduleId, next.themeId)
      const completedBlockIds = Array.from(
        new Set([...(existing?.completedBlockIds ?? []), ...next.completedBlockIds]),
      )
      const record: ProgressRecord = {
        ...next,
        completedBlockIds,
        updatedAt: new Date().toISOString(),
      }
      return [
        ...current.filter(
          (item) => keyFor(item.moduleId, item.themeId) !== keyFor(record.moduleId, record.themeId),
        ),
        record,
      ]
    })
  }

  return {
    records,
    getThemeRecord,
    getThemePercent,
    saveProgress,
  }
}
