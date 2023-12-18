import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

export function UserMenu(): JSX.Element {
  const user = {
    email: "user@test.com",
    image: null,
  }

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "user", size: "icon" }),
          "transition-all duration-300 ease-in-out hover:opacity-70"
        )}
      >
        <Avatar className="rounded-md">
          {user.image ? (
            <AvatarImage src={user.image} className="" />
          ) : (
            <AvatarFallback className="rounded-md">
              <Icons.user className="h-4 w-4" />
            </AvatarFallback>
          )}
        </Avatar>
      </SheetTrigger>
      <SheetContent className="z-[99]">
        <SheetHeader>
          <SheetTitle>TODO: User Menu</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
