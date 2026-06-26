import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { isDelimiterBlock, renderReaderMarkdown, stripInlineMarkdown } from '../lib/inlineMarkdown'
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

type LightboxPointerStart = {
  x: number
  y: number
  pointerType: string
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
  const [activeIllustrationIndex, setActiveIllustrationIndex] = useState<number | null>(null)
  const [lightboxControlsVisible, setLightboxControlsVisible] = useState(false)
  const touchStart = useRef<PointerStart | null>(null)
  const controlsTimer = useRef<number | null>(null)
  const lightboxPointerStart = useRef<LightboxPointerStart | null>(null)
  const ignoreNextLightboxClick = useRef(false)
  const panelScrollRef = useRef<HTMLDivElement | null>(null)
  const activeBlockRef = useRef<HTMLDivElement | null>(null)
  const minSwipeDistance = 60
  const tapTolerance = 8
  const scrollTolerance = 10
  const isTyping = typingSentence.length > 0
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
  const activeIllustration =
    illustrations && activeIllustrationIndex !== null
      ? illustrations.images[activeIllustrationIndex]
      : null
  const activeIllustrationNumber =
    activeIllustrationIndex === null ? null : activeIllustrationIndex + 1
  const hasIllustrationNavigation = illustrationCount > 1

  const showLightboxControlsTemporarily = () => {
    if (controlsTimer.current !== null) {
      window.clearTimeout(controlsTimer.current)
    }

    setLightboxControlsVisible(true)
    controlsTimer.current = window.setTimeout(() => {
      setLightboxControlsVisible(false)
      controlsTimer.current = null
    }, 1000)
  }

  const openIllustrationLightbox = (imageIndex: number) => {
    setActiveIllustrationIndex(imageIndex)
    showLightboxControlsTemporarily()
  }

  const closeIllustrationLightbox = useCallback(() => {
    if (controlsTimer.current !== null) {
      window.clearTimeout(controlsTimer.current)
      controlsTimer.current = null
    }

    setActiveIllustrationIndex(null)
    setLightboxControlsVisible(false)
  }, [])

  const closeIllustrationModal = useCallback(() => {
    closeIllustrationLightbox()
    setIllustrationModalBlockId(null)
  }, [closeIllustrationLightbox])

  const showPreviousIllustration = () => {
    setActiveIllustrationIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return currentIndex === 0 ? illustrationCount - 1 : currentIndex - 1
    })
    showLightboxControlsTemporarily()
  }

  const showNextIllustration = () => {
    setActiveIllustrationIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return currentIndex === illustrationCount - 1 ? 0 : currentIndex + 1
    })
    showLightboxControlsTemporarily()
  }

  const onLightboxPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    lightboxPointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      pointerType: event.pointerType,
    }
  }

  const onLightboxPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!lightboxPointerStart.current || !hasIllustrationNavigation) {
      lightboxPointerStart.current = null
      return
    }

    const distanceX = lightboxPointerStart.current.x - event.clientX
    const distanceY = lightboxPointerStart.current.y - event.clientY
    const isTouch = lightboxPointerStart.current.pointerType === 'touch'
    const horizontalDominates = Math.abs(distanceX) > Math.abs(distanceY) * 1.35
    lightboxPointerStart.current = null

    if (!isTouch || Math.abs(distanceX) <= minSwipeDistance || !horizontalDominates) return

    ignoreNextLightboxClick.current = true

    if (distanceX > 0) {
      showNextIllustration()
    } else {
      showPreviousIllustration()
    }
  }

  const shouldIgnoreLightboxClick = () => {
    if (!ignoreNextLightboxClick.current) return false

    ignoreNextLightboxClick.current = false
    return true
  }

  const alignActiveBlockToReadingFocus = useCallback(() => {
    const panel = panelScrollRef.current
    const activeBlock = activeBlockRef.current

    if (!panel || !activeBlock) return

    const panelRect = panel.getBoundingClientRect()
    const activeRect = activeBlock.getBoundingClientRect()
    const activeCenter = activeRect.top - panelRect.top + activeRect.height / 2
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const viewportCenterInPanel = viewportHeight / 2 - panelRect.top
    const minFocus = panel.clientHeight * 0.28
    const maxFocus = panel.clientHeight * 0.58
    const targetFocus = Math.min(Math.max(viewportCenterInPanel, minFocus), maxFocus)
    const nextScrollTop = panel.scrollTop + activeCenter - targetFocus
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    panel.scrollTo({
      top: Math.max(0, nextScrollTop),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [])

  useEffect(() => {
    if (!illustrationModalOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activeIllustration) {
          closeIllustrationLightbox()
        } else {
          closeIllustrationModal()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIllustration, closeIllustrationLightbox, closeIllustrationModal, illustrationModalOpen])

  useEffect(
    () => () => {
      if (controlsTimer.current !== null) {
        window.clearTimeout(controlsTimer.current)
      }
    },
    [],
  )

  useEffect(() => {
    if (illustrationModalOpen || activeIllustration) return

    const frameId = window.requestAnimationFrame(alignActiveBlockToReadingFocus)
    return () => window.cancelAnimationFrame(frameId)
  }, [
    activeIllustration,
    alignActiveBlockToReadingFocus,
    compactText,
    currentIndex,
    illustrationModalOpen,
    isTyping,
    revealedSentences.length,
  ])

  useEffect(() => {
    if (illustrationModalOpen || activeIllustration) return

    let frameId: number | null = null
    const realign = () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(alignActiveBlockToReadingFocus)
    }

    window.addEventListener('resize', realign)
    window.visualViewport?.addEventListener('resize', realign)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', realign)
      window.visualViewport?.removeEventListener('resize', realign)
    }
  }, [activeIllustration, alignActiveBlockToReadingFocus, illustrationModalOpen])

  return (
    <div className="reader-screen">
      <div className="reader-toolbar">
        <div className="reader-actions">
          <TopButton onClick={onBack}>Temas</TopButton>
          <TopButton onClick={onRetreat}>Retroceder</TopButton>
          <TopButton onClick={onToggleTextSize}>{compactText ? 'Texto normal' : 'Texto -25%'}</TopButton>
          {illustrations && illustrationCount > 0 && (
            <TopButton
              onClick={() => {
                closeIllustrationLightbox()
                setIllustrationModalBlockId(currentBlock?.id ?? null)
              }}
            >
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
                const isActiveBlock = !isTyping && index === revealedSentences.length - 1
                return (
                <div
                  className={`reader-block ${isDelimiterBlock(sentence) ? 'is-delimiter' : ''} ${
                    reviewStatus !== 'normal' ? `is-${reviewStatus}` : ''
                  }`}
                  key={`${index}-${sentence.slice(0, 20)}`}
                  ref={isActiveBlock ? activeBlockRef : null}
                >
                  {renderReaderMarkdown(sentence)}
                </div>
                )
              })}

              {typingSentence && (
                <div
                  className={`reader-block ${isDelimiterBlock(typingSentence) ? 'is-delimiter' : ''} ${
                    getBlockStatus(currentBlock?.sourceBlockRefId) !== 'normal'
                      ? `is-${getBlockStatus(currentBlock?.sourceBlockRefId)}`
                      : ''
                  }`}
                  ref={activeBlockRef}
                >
                  {stripInlineMarkdown(typingSentence)}
                  <span className="typing-cursor" />
                </div>
              )}
              <div className="reader-focus-spacer" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {illustrationModalOpen && illustrations && (
        <div
          aria-labelledby="illustration-modal-title"
          aria-modal="true"
          className="illustration-modal-backdrop"
          onClick={closeIllustrationModal}
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
                onClick={closeIllustrationModal}
                type="button"
              >
                Cerrar
              </button>
            </div>

            <div className="illustration-grid" aria-label={`Ilustraciones de ${illustrations.sectionTitle}`}>
              {illustrations.images.map((image, index) => (
                <button
                  aria-label={`Ampliar ilustracion ${index + 1} de ${illustrations.sectionTitle}`}
                  className="illustration-card"
                  key={image}
                  onClick={() => openIllustrationLightbox(index)}
                  type="button"
                >
                  <img
                    alt={`${illustrations.sectionTitle}, ilustracion ${index + 1}`}
                    className="illustration-image"
                    decoding="async"
                    loading="lazy"
                    src={image}
                  />
                </button>
              ))}
            </div>
          </div>

          {activeIllustration && (
            <div
              aria-label="Imagen ampliada de ilustracion"
              aria-modal="true"
              className={`gallery-lightbox${lightboxControlsVisible ? '' : ' is-controls-hidden'}`}
              onClick={(event) => {
                event.stopPropagation()
                if (shouldIgnoreLightboxClick()) return
                closeIllustrationLightbox()
              }}
              onPointerCancel={() => {
                lightboxPointerStart.current = null
              }}
              onPointerDown={onLightboxPointerDown}
              onPointerMove={showLightboxControlsTemporarily}
              onPointerUp={onLightboxPointerUp}
              role="dialog"
            >
              {hasIllustrationNavigation && (
                <button
                  aria-label="Ilustracion anterior"
                  className="gallery-lightbox-zone gallery-lightbox-zone-left"
                  onClick={(event) => {
                    event.stopPropagation()
                    if (shouldIgnoreLightboxClick()) return
                    showPreviousIllustration()
                  }}
                  type="button"
                >
                  <span className="gallery-lightbox-arrow" aria-hidden="true">
                    &lt;
                  </span>
                </button>
              )}

              <img
                alt={`${illustrations.sectionTitle}, ilustracion ampliada ${activeIllustrationNumber}`}
                className="gallery-lightbox-image"
                decoding="async"
                onClick={(event) => {
                  event.stopPropagation()
                  shouldIgnoreLightboxClick()
                }}
                src={activeIllustration}
              />

              {hasIllustrationNavigation && (
                <button
                  aria-label="Ilustracion siguiente"
                  className="gallery-lightbox-zone gallery-lightbox-zone-right"
                  onClick={(event) => {
                    event.stopPropagation()
                    if (shouldIgnoreLightboxClick()) return
                    showNextIllustration()
                  }}
                  type="button"
                >
                  <span className="gallery-lightbox-arrow" aria-hidden="true">
                    &gt;
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
