type WarningIconProps = {
  label?: string
}

export function WarningIcon({ label = 'Actualizacion pendiente' }: WarningIconProps) {
  return (
    <span aria-label={label} className="warning-icon" role="img" title={label}>
      !
    </span>
  )
}
