interface SalesActivityItemProps {
  quantity: number
  unit: string
  label: string
}

export function SalesActivityItem({
  quantity,
  unit,
  label,
}: SalesActivityItemProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1 border-r p-5 xl:py-0">
      <p className="text-3xl font-semibold">{quantity}</p>
      <p className="text-xs text-muted-foreground/80">{unit}</p>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
