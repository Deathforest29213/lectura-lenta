import { useEffect, useRef, useState, type PointerEvent } from 'react'
import type { ParsedReadingModule } from '../types/modules'
import type { Unit } from '../types/reading'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'

type GalleryScreenProps = {
  module: ParsedReadingModule
  unit: Unit
  images: string[]
  onBack: () => void
}

type LightboxPointerStart = {
  x: number
  y: number
  pointerType: string
}

export function GalleryScreen({ module, unit, images, onBack }: GalleryScreenProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [lightboxControlsVisible, setLightboxControlsVisible] = useState(false)
  const controlsTimer = useRef<number | null>(null)
  const lightboxPointerStart = useRef<LightboxPointerStart | null>(null)
  const ignoreNextLightboxClick = useRef(false)
  const activeImage = activeImageIndex === null ? null : images[activeImageIndex]
  const activeImageNumber = activeImageIndex === null ? null : activeImageIndex + 1
  const hasImageNavigation = images.length > 1
  const minSwipeDistance = 60

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  useEffect(
    () => () => {
      if (controlsTimer.current !== null) {
        window.clearTimeout(controlsTimer.current)
      }
    },
    [],
  )

  const showControlsTemporarily = () => {
    if (controlsTimer.current !== null) {
      window.clearTimeout(controlsTimer.current)
    }

    setLightboxControlsVisible(true)
    controlsTimer.current = window.setTimeout(() => {
      setLightboxControlsVisible(false)
      controlsTimer.current = null
    }, 1000)
  }

  const openLightbox = (imageIndex: number) => {
    setActiveImageIndex(imageIndex)
    showControlsTemporarily()
  }

  const closeLightbox = () => {
    if (controlsTimer.current !== null) {
      window.clearTimeout(controlsTimer.current)
      controlsTimer.current = null
    }

    setActiveImageIndex(null)
    setLightboxControlsVisible(false)
  }

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return currentIndex === 0 ? images.length - 1 : currentIndex - 1
    })
    showControlsTemporarily()
  }

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return currentIndex === images.length - 1 ? 0 : currentIndex + 1
    })
    showControlsTemporarily()
  }

  const onLightboxPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    lightboxPointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      pointerType: event.pointerType,
    }
  }

  const onLightboxPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!lightboxPointerStart.current || !hasImageNavigation) {
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
      showNextImage()
    } else {
      showPreviousImage()
    }
  }

  const shouldIgnoreLightboxClick = () => {
    if (!ignoreNextLightboxClick.current) return false

    ignoreNextLightboxClick.current = false
    return true
  }

  return (
    <div className="gallery-screen">
      <div className="top-row">
        <TopButton onClick={onBack}>Unidad</TopButton>
      </div>

      <TitleBar>Galeria</TitleBar>
      <p className="intro">{unit.title}</p>

      <div className="gallery-grid" aria-label={`Galeria de ${unit.title}`}>
        {images.map((image, index) => (
          <button
            aria-label={`Ampliar imagen ${index + 1} de ${unit.title}`}
            className="gallery-card"
            key={image}
            onClick={() => openLightbox(index)}
            type="button"
          >
            <img
              alt={`Galeria de ${module.title} / ${unit.title}, imagen ${index + 1}`}
              className="gallery-image"
              decoding="async"
              loading="lazy"
              src={image}
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          aria-label="Imagen ampliada de galeria"
          aria-modal="true"
          className={`gallery-lightbox${lightboxControlsVisible ? '' : ' is-controls-hidden'}`}
          onClick={() => {
            if (shouldIgnoreLightboxClick()) return
            closeLightbox()
          }}
          onPointerCancel={() => {
            lightboxPointerStart.current = null
          }}
          onPointerDown={onLightboxPointerDown}
          onPointerMove={showControlsTemporarily}
          onPointerUp={onLightboxPointerUp}
          role="dialog"
        >
          {hasImageNavigation && (
            <button
              aria-label="Imagen anterior"
              className="gallery-lightbox-zone gallery-lightbox-zone-left"
              onClick={(event) => {
                event.stopPropagation()
                if (shouldIgnoreLightboxClick()) return
                showPreviousImage()
              }}
              type="button"
            >
              <span className="gallery-lightbox-arrow" aria-hidden="true">
                &lt;
              </span>
            </button>
          )}

          <img
            alt={`Galeria de ${module.title} / ${unit.title}, imagen ${activeImageNumber}`}
            className="gallery-lightbox-image"
            decoding="async"
            onClick={(event) => {
              event.stopPropagation()
              shouldIgnoreLightboxClick()
            }}
            src={activeImage}
          />

          {hasImageNavigation && (
            <button
              aria-label="Imagen siguiente"
              className="gallery-lightbox-zone gallery-lightbox-zone-right"
              onClick={(event) => {
                event.stopPropagation()
                if (shouldIgnoreLightboxClick()) return
                showNextImage()
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
  )
}
