import { useRef, type PointerEvent } from 'react'
import { isDelimiterBlock, renderInlineMarkdown, stripInlineMarkdown } from '../lib/inlineMarkdown'
import type { ParsedReadingModule } from '../types/modules'
import type { ReaderBlock, Unit } from '../types/reading'
import { SectionDropdown } from './SectionDropdown'
import { TopButton } from './TopButton'

type ReaderScreenProps = {
  module: ParsedReadingModule
  unit: Unit
  title: string
  currentBlock: ReaderBlock | null
  currentIndex: number
  totalBlocks: number
  revealedSentences: string[]
  typingSentence: string
  completed: boolean
  onAdvance: () => void
  onRetreat: () => void
  onBack: () => void
  availableSections: string[]
  onJumpToSection: (sectionName: string) => void
  compactText: boolean
  onToggleTextSize: () => void
}

type PointerStart = {
  x: number
  y: number
  moved: boolean
  scrollTop: number
}

export function ReaderScreen({
  module,
  unit,
  title,
  currentBlock,
  currentIndex,
  totalBlocks,
  revealedSentences,
  typingSentence,
  completed,
  onAdvance,
  onRetreat,
  onBack,
  availableSections,
  onJumpToSection,
  compactText,
  onToggleTextSize,
}: ReaderScreenProps) {
  const touchStart = useRef<PointerStart | null>(null)
  const panelScrollRef = useRef<HTMLDivElement | null>(null)
  const minSwipeDistance = 50
  const tapTolerance = 8
  const scrollTolerance = 10
  const percent = totalBlocks ? Math.min(100, Math.round(((currentIndex + 1) / totalBlocks) * 100)) : 0

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touchStart.current = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
      scrollTop: panelScrollRef.current?.scrollTop ?? 0,
    }
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!touchStart.current) return
    const distanceX = Math.abs(touchStart.current.x - event.clientX)
    const distanceY = Math.abs(touchStart.current.y - event.clientY)
    if (distanceX > tapTolerance || distanceY > tapTolerance) {
      touchStart.current.moved = true
    }
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!touchStart.current) return
    const distanceX = touchStart.current.x - event.clientX
    const distanceY = touchStart.current.y - event.clientY
    const moved = touchStart.current.moved
    const scrollDelta = Math.abs(
      (panelScrollRef.current?.scrollTop ?? 0) - touchStart.current.scrollTop,
    )
    touchStart.current = null
    if (scrollDelta > scrollTolerance) return
    if (distanceX > minSwipeDistance && Math.abs(distanceY) < 24) onAdvance()
    else if (distanceX < -minSwipeDistance && Math.abs(distanceY) < 24) onRetreat()
    else if (!moved && Math.abs(distanceX) < tapTolerance && Math.abs(distanceY) < tapTolerance) {
      onAdvance()
    }
  }

  const readerTextClass = compactText ? 'reader-text is-compact' : 'reader-text'

  return (
    <div className="reader-screen">
      <div className="reader-toolbar">
        <div className="reader-actions">
          <TopButton onClick={onBack}>Temas</TopButton>
          <TopButton onClick={onRetreat}>Retroceder</TopButton>
          <TopButton onClick={onToggleTextSize}>{compactText ? 'Texto normal' : 'Texto -25%'}</TopButton>
        </div>

        <SectionDropdown
          currentSectionName={currentBlock?.sectionTitle}
          availableSections={availableSections}
          onSelect={onJumpToSection}
        />
      </div>

      <div
        className="reader-panel"
        onPointerCancel={() => {
          touchStart.current = null
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="reader-scroll" ref={panelScrollRef}>
          <div className="reader-content">
            <div className="reader-section-heading">
              <p>{module.title} / {unit.title}</p>
              <h2>{completed ? 'Lectura completada' : currentBlock?.sectionTitle ?? title}</h2>
            </div>

            <div className="reader-progress-row">
              <span className="progress-pill">
                Bloque {Math.min(currentIndex + 1, totalBlocks)} de {totalBlocks} · {percent}%
              </span>
            </div>

            <div className={readerTextClass}>
              {revealedSentences.map((sentence, index) => (
                <p
                  className={`reader-block ${isDelimiterBlock(sentence) ? 'is-delimiter' : ''}`}
                  key={`${index}-${sentence.slice(0, 20)}`}
                >
                  {renderInlineMarkdown(sentence)}
                </p>
              ))}

              {typingSentence && (
                <p className={`reader-block ${isDelimiterBlock(typingSentence) ? 'is-delimiter' : ''}`}>
                  {stripInlineMarkdown(typingSentence)}
                  <span className="typing-cursor" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
