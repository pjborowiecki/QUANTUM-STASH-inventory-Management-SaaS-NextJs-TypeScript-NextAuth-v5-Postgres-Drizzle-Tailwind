import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"

export function NotificationsMenu(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger className={cn(buttonVariants({ variant: "ghost" }), "p-3")}>
        <CustomTooltip text="Notifications">
          <Icons.notifications aria-hidden="true" className="h-4 w-4" />
        </CustomTooltip>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>TODO: Notifications Menu</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
