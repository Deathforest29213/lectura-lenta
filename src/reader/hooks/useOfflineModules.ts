import { useEffect, useMemo, useState } from 'react'
import type {
  ModuleDownloadStatus,
  OfflineModuleRecord,
  ParsedReadingModule,
  VersionAlert,
} from '../types/modules'

const STORAGE_KEY = 'lectura-lenta:offline-modules'

const readRecords = (): OfflineModuleRecord[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as OfflineModuleRecord[]) : []
  } catch {
    return []
  }
}

export function useOfflineModules(modules: ParsedReadingModule[]) {
  const [records, setRecords] = useState<OfflineModuleRecord[]>(readRecords)
  const [transientStatuses, setTransientStatuses] = useState<
    Partial<Record<string, Extract<ModuleDownloadStatus, 'downloading' | 'error'>>>
  >({})

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  }, [records])

  const versionAlerts = useMemo<VersionAlert[]>(() => {
    const alerts: VersionAlert[] = []

    for (const module of modules) {
      const record = records.find((item) => item.moduleId === module.id)
      if (!record) continue

      for (const unit of module.library) {
        for (const theme of unit.themes) {
          if (record.topicVersions[theme.id] && record.topicVersions[theme.id] !== theme.version) {
            alerts.push({ moduleId: module.id, unitId: unit.id, themeId: theme.id })
          }
        }
      }
    }

    return alerts
  }, [modules, records])

  const getRecord = (moduleId: string) => records.find((record) => record.moduleId === moduleId) ?? null

  const getStatus = (moduleId: string): ModuleDownloadStatus => {
    const transientStatus = transientStatuses[moduleId]
    if (transientStatus) return transientStatus
    const record = getRecord(moduleId)
    if (!record) return 'not-downloaded'
    return versionAlerts.some((alert) => alert.moduleId === moduleId) ? 'outdated' : 'downloaded'
  }

  const downloadModule = async (module: ParsedReadingModule) => {
    setTransientStatuses((current) => ({ ...current, [module.id]: 'downloading' }))

    try {
      if ('caches' in window) {
        const cache = await window.caches.open('lectura-lenta-modules')
        await Promise.all(module.assets.map((asset) => cache.add(asset).catch(() => undefined)))
      }

      setRecords((current) => [
        ...current.filter((record) => record.moduleId !== module.id),
        {
          moduleId: module.id,
          moduleVersion: module.version,
          downloadedAt: new Date().toISOString(),
          topicVersions: module.topicVersions,
          assetUrls: module.assets,
        },
      ])
      setTransientStatuses((current) => {
        const rest = { ...current }
        delete rest[module.id]
        return rest
      })
    } catch {
      setTransientStatuses((current) => ({ ...current, [module.id]: 'error' }))
    }
  }

  const removeModule = (moduleId: string) => {
    setRecords((current) => current.filter((record) => record.moduleId !== moduleId))
    setTransientStatuses((current) => {
      const rest = { ...current }
      delete rest[moduleId]
      return rest
    })
  }

  const downloadAll = async () => {
    for (const module of modules) {
      await downloadModule(module)
    }
  }

  const removeAll = () => {
    setRecords([])
    setTransientStatuses({})
  }

  return {
    records,
    versionAlerts,
    getRecord,
    getStatus,
    downloadModule,
    removeModule,
    downloadAll,
    removeAll,
  }
}
