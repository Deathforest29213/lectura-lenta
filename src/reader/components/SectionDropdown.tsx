import { useEffect, useRef, useState } from 'react'

type SectionDropdownProps = {
  currentSectionName?: string
  availableSections: string[]
  onSelect: (sectionName: string) => void
}

export function SectionDropdown({
  currentSectionName,
  availableSections,
  onSelect,
}: SectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="section-dropdown" ref={dropdownRef}>
      <button
        className="section-dropdown-trigger panel-outline"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span>{currentSectionName || 'Lectura completada'}</span>
        <svg
          aria-hidden="true"
          className={`dropdown-icon ${isOpen ? 'is-open' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      </button>

      {isOpen && (
        <div className="section-dropdown-menu">
          {availableSections.map((sectionName) => (
            <button
              className={`section-dropdown-item ${
                currentSectionName === sectionName ? 'is-current' : ''
              }`}
              key={sectionName}
              onClick={() => {
                onSelect(sectionName)
                setIsOpen(false)
              }}
              type="button"
            >
              {sectionName}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
