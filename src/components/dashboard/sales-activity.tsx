export function SalesActivity(): JSX.Element {
  return (
    <div className="flex h-48 w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30 xl:w-2/3">
      <div className="flex h-16 items-center bg-secondary/20 px-5">
        <h3 className="font-semibold capitalize tracking-wide">
          Sales Activity
        </h3>
      </div>
      <div className="flex h-full items-center justify-between border-t">
        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Qty</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be packed
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Pkgs</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be shipped
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Pkgs</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be delivered
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Qty</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be invoiced
          </p>
        </div>
      </div>
    </div>
  )
}
