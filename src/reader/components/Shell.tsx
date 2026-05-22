import type { PropsWithChildren } from 'react'

export function Shell({ children }: PropsWithChildren) {
  return (
    <section className="shell panel-outline">
      <div className="shell-accent" />
      <div className="mesh" />
      {children}
    </section>
  )
}
