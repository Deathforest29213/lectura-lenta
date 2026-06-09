import { useEffect } from 'react'
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

export function GalleryScreen({ module, unit, images, onBack }: GalleryScreenProps) {
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  return (
    <div className="gallery-screen">
      <div className="reader-toolbar">
        <div className="reader-actions">
          <TopButton onClick={onBack}>Unidad</TopButton>
        </div>
      </div>

      <TitleBar>Galeria</TitleBar>
      <p className="intro">{unit.title}</p>

      <div className="gallery-grid" aria-label={`Galeria de ${unit.title}`}>
        {images.map((image, index) => (
          <figure className="gallery-card" key={image}>
            <img
              alt={`Galeria de ${module.title} / ${unit.title}, imagen ${index + 1}`}
              className="gallery-image"
              decoding="async"
              loading="lazy"
              src={image}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
