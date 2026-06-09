import { themeBlockCount, themeHasAlert } from '../lib/moduleStats'
import type { ParsedReadingModule } from '../types/modules'
import type { Theme, Unit } from '../types/reading'
import type { useOfflineModules } from '../hooks/useOfflineModules'
import type { useReadingProgress } from '../hooks/useReadingProgress'
import { MenuCard } from './MenuCard'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'

type OfflineApi = ReturnType<typeof useOfflineModules>
type ProgressApi = ReturnType<typeof useReadingProgress>

type ThemeMenuProps = {
  module: ParsedReadingModule
  unit: Unit
  offline: OfflineApi
  progress: ProgressApi
  onBack: () => void
  onSelectTheme: (theme: Theme) => void
  onSelectAll: () => void
  onOpenRelevantQuestions: () => void
  onOpenGallery: () => void
}

export function ThemeMenu({
  module,
  unit,
  offline,
  progress,
  onBack,
  onSelectTheme,
  onSelectAll,
  onOpenRelevantQuestions,
  onOpenGallery,
}: ThemeMenuProps) {
  const hasGallery = Boolean(module.visualSummaries?.[unit.title]?.length)
  const hasRelevantQuestions = module.relevantQuestions.units.length > 0

  return (
    <div className="theme-menu">
      <div className="top-row">
        <TopButton onClick={onBack}>Unidad</TopButton>
      </div>
      <TitleBar warning={unit.themes.some((theme) => themeHasAlert(module.id, theme.id, offline.versionAlerts))}>
        {unit.title}
      </TitleBar>
      <p className="intro">
        Entra a un tema puntual o recorre la unidad completa de forma secuencial.
      </p>

      <div className="unit-grid" aria-label="Temas disponibles">
        {unit.themes.map((theme) => (
          <MenuCard
            key={theme.id}
            title={theme.shortTitle}
            description={theme.description}
            meta={`${theme.sections.length} secciones · v${theme.version}`}
            progress={progress.getThemePercent(module.id, theme.id, themeBlockCount(theme))}
            warning={themeHasAlert(module.id, theme.id, offline.versionAlerts)}
            onClick={() => onSelectTheme(theme)}
          />
        ))}
      </div>

      <div className="all-themes-row">
        <button
          className="all-themes-button panel-outline"
          disabled={!hasRelevantQuestions}
          onClick={onOpenRelevantQuestions}
          type="button"
        >
          Preguntas relevantes
        </button>
        <button className="all-themes-button panel-outline" onClick={onSelectAll} type="button">
          Leer unidad completa
        </button>
        <button
          className="all-themes-button panel-outline"
          disabled={!hasGallery}
          onClick={onOpenGallery}
          type="button"
        >
          Galeria
        </button>
      </div>
    </div>
  )
}
