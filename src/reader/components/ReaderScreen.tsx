import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { isDelimiterBlock, renderInlineMarkdown, stripInlineMarkdown } from '../lib/inlineMarkdown'
import type { ParsedReadingModule, SectionIllustrations } from '../types/modules'
import type { ReaderBlock, Unit } from '../types/reading'
import { SectionDropdown } from './SectionDropdown'
import { TopButton } from './TopButton'
import type { BlockReviewStatus } from '../types/questions'

type ReaderScreenProps = {
  module: ParsedReadingModule
  unit: Unit
  title: string
  currentBlock: ReaderBlock | null
  currentIndex: number
  totalBlocks: number
  revealedSentences: { block: ReaderBlock | null; sentence: string }[]
  typingSentence: string
  completed: boolean
  onAdvance: () => void
  onRetreat: () => void
  onBack: () => void
  availableSections: string[]
  onJumpToSection: (sectionName: string) => void
  compactText: boolean
  onToggleTextSize: () => void
  getBlockStatus: (blockRef: string | null | undefined) => BlockReviewStatus
  illustrations: SectionIllustrations | null
}

type PointerStart = {
  x: number
  y: number
  moved: boolean
  pointerType: string
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
  getBlockStatus,
  illustrations,
}: ReaderScreenProps) {
  const [illustrationModalBlockId, setIllustrationModalBlockId] = useState<string | null>(null)
  const touchStart = useRef<PointerStart | null>(null)
  const panelScrollRef = useRef<HTMLDivElement | null>(null)
  const minSwipeDistance = 60
  const tapTolerance = 8
  const scrollTolerance = 10
  const percent = totalBlocks ? Math.min(100, Math.round(((currentIndex + 1) / totalBlocks) * 100)) : 0

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touchStart.current = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
      pointerType: event.pointerType,
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
    const isTouch = touchStart.current.pointerType === 'touch'
    const scrollDelta = Math.abs(
      (panelScrollRef.current?.scrollTop ?? 0) - touchStart.current.scrollTop,
    )
    touchStart.current = null
    if (scrollDelta > scrollTolerance) return
    const horizontalDominates = Math.abs(distanceX) > Math.abs(distanceY) * 1.35
    if (isTouch && distanceX > minSwipeDistance && horizontalDominates) onAdvance()
    else if (isTouch && distanceX < -minSwipeDistance && horizontalDominates) onRetreat()
    else if (!moved && Math.abs(distanceX) < tapTolerance && Math.abs(distanceY) < tapTolerance) {
      onAdvance()
    }
  }

  const readerTextClass = compactText ? 'reader-text is-compact' : 'reader-text'
  const illustrationCount = illustrations?.images.length ?? 0
  const illustrationModalOpen = Boolean(
    illustrations && currentBlock && illustrationModalBlockId === currentBlock.id,
  )

  useEffect(() => {
    if (!illustrationModalOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIllustrationModalBlockId(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [illustrationModalOpen])

  return (
    <div className="reader-screen">
      <div className="reader-toolbar">
        <div className="reader-actions">
          <TopButton onClick={onBack}>Temas</TopButton>
          <TopButton onClick={onRetreat}>Retroceder</TopButton>
          <TopButton onClick={onToggleTextSize}>{compactText ? 'Texto normal' : 'Texto -25%'}</TopButton>
          {illustrations && illustrationCount > 0 && (
            <TopButton onClick={() => setIllustrationModalBlockId(currentBlock?.id ?? null)}>
              Ilustración ({illustrationCount})
            </TopButton>
          )}
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
              {revealedSentences.map(({ block, sentence }, index) => {
                const reviewStatus = getBlockStatus(block?.sourceBlockRefId)
                return (
                <p
                  className={`reader-block ${isDelimiterBlock(sentence) ? 'is-delimiter' : ''} ${
                    reviewStatus !== 'normal' ? `is-${reviewStatus}` : ''
                  }`}
                  key={`${index}-${sentence.slice(0, 20)}`}
                >
                  {renderInlineMarkdown(sentence)}
                </p>
                )
              })}

              {typingSentence && (
                <p
                  className={`reader-block ${isDelimiterBlock(typingSentence) ? 'is-delimiter' : ''} ${
                    getBlockStatus(currentBlock?.sourceBlockRefId) !== 'normal'
                      ? `is-${getBlockStatus(currentBlock?.sourceBlockRefId)}`
                      : ''
                  }`}
                >
                  {stripInlineMarkdown(typingSentence)}
                  <span className="typing-cursor" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {illustrationModalOpen && illustrations && (
        <div
          aria-labelledby="illustration-modal-title"
          aria-modal="true"
          className="illustration-modal-backdrop"
          onClick={() => setIllustrationModalBlockId(null)}
          role="dialog"
        >
          <div
            className="illustration-modal panel-outline"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="illustration-modal-header">
              <div>
                <p>{module.title} / {unit.title}</p>
                <h2 id="illustration-modal-title">{illustrations.sectionTitle}</h2>
              </div>
              <button
                aria-label="Cerrar ilustraciones"
                className="illustration-close panel-outline"
                onClick={() => setIllustrationModalBlockId(null)}
                type="button"
              >
                Cerrar
              </button>
            </div>

            <div className="illustration-grid" aria-label={`Ilustraciones de ${illustrations.sectionTitle}`}>
              {illustrations.images.map((image, index) => (
                <figure className="illustration-card" key={image}>
                  <img
                    alt={`${illustrations.sectionTitle}, ilustracion ${index + 1}`}
                    className="illustration-image"
                    decoding="async"
                    loading="lazy"
                    src={image}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
