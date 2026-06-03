interface SectionHeaderProps {
  index: string
  label: string
  children?: React.ReactNode
}

export function SectionHeader({ index, label, children }: SectionHeaderProps) {
  return (
    <div className="mb-8 grid grid-cols-1 items-center gap-4 md:grid-cols-[200px_1fr]">
      <div className="text-xs tracking-widest text-muted-foreground uppercase">
        <span className="text-primary">{index}</span> / {label}
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}
