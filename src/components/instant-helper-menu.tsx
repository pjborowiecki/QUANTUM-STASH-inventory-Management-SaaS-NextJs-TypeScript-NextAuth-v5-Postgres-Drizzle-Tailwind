import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"

export function InstantHelperMenu(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-600 hover:bg-orange-600/80">
        <CustomTooltip text="Instant Helper">
          <Icons.helpBadge className="h-5 w-5 text-foreground" />
        </CustomTooltip>
      </SheetTrigger>
      <SheetContent className="z-[99]">
        <SheetHeader>
          <SheetTitle>Instant Helper</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
