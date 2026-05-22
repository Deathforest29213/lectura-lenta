import { moduleBlockCount, moduleHasAlert, moduleThemeCount } from '../lib/moduleStats'
import type { Area, ParsedReadingModule } from '../types/modules'
import type { useOfflineModules } from '../hooks/useOfflineModules'
import type { useReadingProgress } from '../hooks/useReadingProgress'
import { MenuCard } from './MenuCard'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'

type OfflineApi = ReturnType<typeof useOfflineModules>
type ProgressApi = ReturnType<typeof useReadingProgress>

type AreaMenuProps = {
  area: Area
  modules: ParsedReadingModule[]
  offline: OfflineApi
  progress: ProgressApi
  onBack: () => void
  onOpenModule: (module: ParsedReadingModule) => void
}

const moduleProgress = (module: ParsedReadingModule, progress: ProgressApi) => {
  const themes = module.library.flatMap((unit) => unit.themes)
  if (!themes.length) return 0
  const sum = themes.reduce(
    (acc, theme) =>
      acc +
      progress.getThemePercent(
        module.id,
        theme.id,
        theme.sections.reduce((total, section) => total + section.blocks.length, 0),
      ),
    0,
  )
  return Math.round(sum / themes.length)
}

export function AreaMenu({ area, modules, offline, progress, onBack, onOpenModule }: AreaMenuProps) {
  return (
    <div className="area-menu">
      <div className="top-row">
        <TopButton onClick={onBack}>Inicio</TopButton>
      </div>
      <TitleBar warning={modules.some((module) => moduleHasAlert(module.id, offline.versionAlerts))}>
        {area.title}
      </TitleBar>
      <p className="intro">{area.description}</p>

      <div className="unit-grid" aria-label="Modulos disponibles">
        {modules.map((module) => {
          const status = offline.getStatus(module.id)
          return (
            <MenuCard
              key={module.id}
              title={module.title}
              description={module.description}
              meta={`${module.library.length} unidades · ${moduleThemeCount(module)} temas · ${moduleBlockCount(module)} bloques`}
              progress={moduleProgress(module, progress)}
              status={status === 'downloaded' ? 'offline' : status === 'outdated' ? 'actualizar' : 'online'}
              ready={status === 'downloaded'}
              warning={moduleHasAlert(module.id, offline.versionAlerts)}
              onClick={() => onOpenModule(module)}
            />
          )
        })}
      </div>
    </div>
  )
}
