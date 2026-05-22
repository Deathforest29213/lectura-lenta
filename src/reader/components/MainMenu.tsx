import { areaHasAlert, moduleBlockCount, moduleThemeCount } from '../lib/moduleStats'
import type { Area, ParsedReadingModule } from '../types/modules'
import type { useOfflineModules } from '../hooks/useOfflineModules'
import type { useReadingProgress } from '../hooks/useReadingProgress'
import { DownloadManagerPanel } from './DownloadManagerPanel'
import { MenuCard } from './MenuCard'
import { TitleBar } from './TitleBar'

type OfflineApi = ReturnType<typeof useOfflineModules>
type ProgressApi = ReturnType<typeof useReadingProgress>

type MainMenuProps = {
  areas: Area[]
  modules: ParsedReadingModule[]
  offline: OfflineApi
  progress: ProgressApi
  hasGlobalAlert: boolean
  onOpenArea: (area: Area) => void
}

const areaProgress = (area: Area, modules: ParsedReadingModule[], progress: ProgressApi) => {
  const areaModules = modules.filter((module) => module.areaId === area.id)
  const totals = areaModules.flatMap((module) =>
    module.library.flatMap((unit) =>
      unit.themes.map((theme) => ({
        moduleId: module.id,
        themeId: theme.id,
        total: theme.sections.reduce((sum, section) => sum + section.blocks.length, 0),
      })),
    ),
  )
  if (!totals.length) return 0
  const sum = totals.reduce(
    (acc, item) => acc + progress.getThemePercent(item.moduleId, item.themeId, item.total),
    0,
  )
  return Math.round(sum / totals.length)
}

export function MainMenu({
  areas,
  modules,
  offline,
  progress,
  hasGlobalAlert,
  onOpenArea,
}: MainMenuProps) {
  return (
    <div className="main-menu">
      <TitleBar warning={hasGlobalAlert}>Lectura Lenta</TitleBar>
      <p className="intro">
        Biblioteca modular de estudio. Descarga los modulos desde Inicio y abre cada lectura por
        area, unidad y tema.
      </p>

      <DownloadManagerPanel modules={modules} offline={offline} />

      <div className="dashboard-grid" aria-label="Areas disponibles">
        {areas.map((area) => {
          const areaModules = modules.filter((module) => module.areaId === area.id)
          const downloaded = areaModules.filter(
            (module) => offline.getStatus(module.id) !== 'not-downloaded',
          ).length
          const topics = areaModules.reduce((sum, module) => sum + moduleThemeCount(module), 0)
          const blocks = areaModules.reduce((sum, module) => sum + moduleBlockCount(module), 0)

          return (
            <MenuCard
              key={area.id}
              title={area.title}
              description={area.description}
              meta={`${areaModules.length} modulos · ${topics} temas · ${blocks} bloques`}
              progress={areaProgress(area, modules, progress)}
              status={`${downloaded} descargados`}
              ready={downloaded > 0}
              warning={areaHasAlert(area, modules, offline.versionAlerts)}
              onClick={() => onOpenArea(area)}
            />
          )
        })}
      </div>
    </div>
  )
}
