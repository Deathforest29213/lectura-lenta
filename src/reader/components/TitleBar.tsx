import type { PropsWithChildren } from 'react'
import { WarningIcon } from './WarningIcon'

type TitleBarProps = PropsWithChildren<{
  eyebrow?: string
  warning?: boolean
}>

export function TitleBar({ children, eyebrow = 'Lectura lenta', warning = false }: TitleBarProps) {
  return (
    <header className="title-bar panel-outline">
      <p className="eyebrow">
        {eyebrow} {warning && <WarningIcon label="Contenido descargado desactualizado" />}
      </p>
      <h1>{children}</h1>
    </header>
  )
}
