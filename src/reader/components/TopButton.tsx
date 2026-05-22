import type { PropsWithChildren } from 'react'

type TopButtonProps = PropsWithChildren<{
  onClick: () => void
}>

export function TopButton({ children, onClick }: TopButtonProps) {
  return (
    <button className="top-button panel-outline" onClick={onClick} type="button">
      {children}
    </button>
  )
}
