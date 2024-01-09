import { auth } from "@/auth"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignOutButton } from "@/components/auth/signout-button"
import { Icons } from "@/components/icons"

export async function UserMenu(): Promise<JSX.Element> {
  const session = await auth()
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "user", size: "icon" }),
          "transition-all duration-300 ease-in-out hover:opacity-70"
        )}
      >
        <Avatar className="h-9 w-9 rounded-md">
          {session?.user.image ? (
            <AvatarImage src={session.user.image} className="h-9 w-9" />
          ) : (
            <AvatarFallback className="h-9 w-9 rounded-md">
              <Icons.user className="h-4 w-4" />
            </AvatarFallback>
          )}
        </Avatar>
      </SheetTrigger>
      <SheetContent className="z-[99]">
        <SheetHeader>
          <SheetTitle>TODO: User Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <SignOutButton />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
