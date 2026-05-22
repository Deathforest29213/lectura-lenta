import './styles.css'
import { useMemo, useState } from 'react'
import { areas } from './data/areas'
import { modules } from './data/modules'
import { AreaMenu } from './reader/components/AreaMenu'
import { MainMenu } from './reader/components/MainMenu'
import { ModuleMenu } from './reader/components/ModuleMenu'
import { ReaderScreen } from './reader/components/ReaderScreen'
import { Shell } from './reader/components/Shell'
import { ThemeMenu } from './reader/components/ThemeMenu'
import { useOfflineModules } from './reader/hooks/useOfflineModules'
import { useReadingProgress } from './reader/hooks/useReadingProgress'
import { useReadingSession } from './reader/hooks/useReadingSession'
import type { Area, ParsedReadingModule } from './reader/types/modules'
import type { Theme, Unit } from './reader/types/reading'

type View =
  | { name: 'home' }
  | { name: 'area'; area: Area }
  | { name: 'module'; module: ParsedReadingModule }
  | { name: 'unit'; module: ParsedReadingModule; unit: Unit }
  | { name: 'reader'; module: ParsedReadingModule; unit: Unit; theme: Theme | null }

const routeModuleId = () => {
  const match = window.location.hash.match(/^#\/lectura\/([^/]+)/)
  return match?.[1] ?? null
}

function App() {
  const initialModule = modules.find((module) => module.id === routeModuleId()) ?? null
  const [view, setView] = useState<View>(
    initialModule ? { name: 'module', module: initialModule } : { name: 'home' },
  )
  const offline = useOfflineModules(modules)
  const progress = useReadingProgress()

  const session = useReadingSession({
    onProgress: progress.saveProgress,
  })

  const alerts = useMemo(() => offline.versionAlerts, [offline.versionAlerts])
  const hasGlobalAlert = alerts.length > 0

  const openHome = () => {
    window.location.hash = ''
    session.resetReader()
    setView({ name: 'home' })
  }

  const openArea = (area: Area) => {
    session.resetReader()
    setView({ name: 'area', area })
  }

  const openModule = (module: ParsedReadingModule) => {
    window.location.hash = `#/lectura/${module.id}`
    session.resetReader()
    setView({ name: 'module', module })
  }

  const openUnit = (module: ParsedReadingModule, unit: Unit) => {
    session.resetReader()
    setView({ name: 'unit', module, unit })
  }

  const openTheme = (module: ParsedReadingModule, unit: Unit, theme: Theme) => {
    const saved = progress.getThemeRecord(module.id, theme.id)
    session.startTheme(module, unit, theme, saved?.blockId)
    setView({ name: 'reader', module, unit, theme })
  }

  const openWholeUnit = (module: ParsedReadingModule, unit: Unit) => {
    session.startUnit(module, unit)
    setView({ name: 'reader', module, unit, theme: null })
  }

  return (
    <main className="app">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <Shell>
        {view.name === 'home' && (
          <MainMenu
            areas={areas}
            modules={modules}
            offline={offline}
            progress={progress}
            hasGlobalAlert={hasGlobalAlert}
            onOpenArea={openArea}
          />
        )}

        {view.name === 'area' && (
          <AreaMenu
            area={view.area}
            modules={modules.filter((module) => module.areaId === view.area.id)}
            offline={offline}
            progress={progress}
            onBack={openHome}
            onOpenModule={openModule}
          />
        )}

        {view.name === 'module' && (
          <ModuleMenu
            module={view.module}
            offline={offline}
            progress={progress}
            onBack={() => openArea(areas.find((area) => area.id === view.module.areaId) ?? areas[0])}
            onOpenUnit={(unit) => openUnit(view.module, unit)}
          />
        )}

        {view.name === 'unit' && (
          <ThemeMenu
            module={view.module}
            unit={view.unit}
            offline={offline}
            progress={progress}
            onBack={() => openModule(view.module)}
            onSelectTheme={(theme) => openTheme(view.module, view.unit, theme)}
            onSelectAll={() => openWholeUnit(view.module, view.unit)}
          />
        )}

        {view.name === 'reader' && (
          <ReaderScreen
            module={view.module}
            unit={view.unit}
            title={session.readerTitle}
            currentBlock={session.currentBlock}
            currentIndex={session.currentBlockIndex}
            totalBlocks={session.totalBlocks}
            revealedSentences={session.revealedSentences}
            typingSentence={session.typingSentence}
            completed={session.completed}
            onAdvance={session.advance}
            onRetreat={session.retreatBlock}
            onBack={() =>
              view.theme ? setView({ name: 'unit', module: view.module, unit: view.unit }) : openModule(view.module)
            }
            availableSections={session.availableSections}
            onJumpToSection={session.jumpToSection}
            compactText={session.compactText}
            onToggleTextSize={session.toggleTextSize}
          />
        )}
      </Shell>
    </main>
  )
}

export default App
