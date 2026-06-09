import { themeBlockCount, unitBlockCount, unitHasAlert } from '../lib/moduleStats'
import type { ParsedReadingModule } from '../types/modules'
import type { Unit } from '../types/reading'
import type { useOfflineModules } from '../hooks/useOfflineModules'
import type { useReadingProgress } from '../hooks/useReadingProgress'
import { MenuCard } from './MenuCard'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'

type OfflineApi = ReturnType<typeof useOfflineModules>
type ProgressApi = ReturnType<typeof useReadingProgress>

type ModuleMenuProps = {
  module: ParsedReadingModule
  offline: OfflineApi
  progress: ProgressApi
  onBack: () => void
  onOpenUnit: (unit: Unit) => void
}

const unitProgress = (module: ParsedReadingModule, unit: Unit, progress: ProgressApi) => {
  if (!unit.themes.length) return 0
  const sum = unit.themes.reduce(
    (acc, theme) => acc + progress.getThemePercent(module.id, theme.id, themeBlockCount(theme)),
    0,
  )
  return Math.round(sum / unit.themes.length)
}

export function ModuleMenu({ module, offline, progress, onBack, onOpenUnit }: ModuleMenuProps) {
  const status = offline.getStatus(module.id)

  return (
    <div className="module-menu">
      <div className="top-row">
        <TopButton onClick={onBack}>Area</TopButton>
      </div>
      <TitleBar warning={status === 'outdated'}>{module.title}</TitleBar>
      <p className="intro">
        {module.description.replace(/\.$/, '')}. Estado:{' '}
        {status === 'downloaded'
          ? 'disponible sin conexion'
          : status === 'outdated'
            ? 'actualizacion pendiente'
            : 'no descargada'}
        .
      </p>

      <div className="unit-grid" aria-label="Unidades disponibles">
        {module.library.map((unit) => (
          <MenuCard
            key={unit.id}
            title={unit.title}
            description={`${unit.themes.length} temas disponibles`}
            meta={`${unitBlockCount(unit)} bloques`}
            progress={unitProgress(module, unit, progress)}
            warning={unitHasAlert(module.id, unit.id, offline.versionAlerts)}
            onClick={() => onOpenUnit(unit)}
          />
        ))}
      </div>
    </div>
  )
}
