import { Icons } from "@/components/icons"
import { SubheaderNav } from "@/components/nav/app/subheader-nav"

export function Subheader(): JSX.Element {
  return (
    <div className="sticky top-0 z-[48] flex flex-col justify-between gap-6 border-b bg-tertiary px-5 pt-5 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-md border bg-secondary p-3">
          <Icons.home className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold tracking-wide">
            Hello, piotr.borowiecki
          </p>
          <p className="text-xs tracking-wide text-muted-foreground">
            Piotr Borowiecki
          </p>
        </div>
      </div>

      <SubheaderNav />
    </div>
  )
}
