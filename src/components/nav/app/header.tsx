import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { Search } from "@/components/search"

export function Header(): JSX.Element {
  return (
    <header className="flex h-20 items-center justify-between gap-8 border-b px-4">
      <div className="flex h-full items-center gap-2">
        <CustomTooltip text="Recent Activity">
          <Link
            aria-label="Recent Activity"
            href="/app/home/updates"
            className={cn(buttonVariants({ variant: "outline" }), "p-3")}
          >
            <Icons.recentActivities aria-hidden="true" className="h-4 w-4" />
          </Link>
        </CustomTooltip>

        <Search />
      </div>

      <div className="flex items-center justify-center gap-2">
        <CustomTooltip text="Quick Create">
          <Button variant="outline" aria-label="Quick Create" className="p-3">
            <Icons.plus aria-hidden="true" className="h-4 w-4" />
          </Button>
        </CustomTooltip>

        <div className="flex items-center justify-center">
          <CustomTooltip text="Refer and Earn">
            <Button variant="ghost" aria-label="Refer and Earn" className="p-3">
              <Icons.users aria-hidden="true" className="h-4 w-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip text="Notifications">
            <Button variant="ghost" aria-label="Notifications" className="p-3">
              <Icons.notifications aria-hidden="true" className="h-4 w-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip text="Settings">
            <Button variant="ghost" aria-label="Settings" className="p-3">
              <Icons.settings aria-hidden="true" className="h-4 w-4" />
            </Button>
          </CustomTooltip>
        </div>

        <div>
          <Button
            variant="outline"
            className="flex max-w-[160px] items-center justify-center gap-2 px-3"
            aria-label="TODO"
          >
            <span>BillQuill</span>
            <Icons.chevronDown aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="transition-all duration-300 ease-in-out hover:opacity-70"
            >
              <Button variant="user" size="icon">
                <Avatar className="h-full w-full rounded-md">
                  {/* {user.image && (
                  <AvatarImage
                    src={user.image}
                    alt={user.name ?? "user's profile picture"}
                  />
                )} */}
                  <AvatarFallback className="rounded-md text-xs capitalize">
                    {/* {user.email && user.email.charAt(0)} */}
                    PB
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  {/* <p className="text-sm font-medium leading-none">{user.name}</p> */}
                  {/* <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p> */}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* <DropdownMenuItem asChild disabled>
                <Link href="/dashboard/account">
                  <Icons.avatar className="mr-2 h-4 w-4" aria-hidden="true" />
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild disabled>
                <Link href="/dashboard/settings">
                  <Icons.settings className="mr-2 h-4 w-4" aria-hidden="true" />
                  Settings
                </Link>
              </DropdownMenuItem> */}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                {/* <SignOutButton /> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-center">
          <Button variant="outline" aria-label="TODO" className="p-2">
            <Icons.layoutGrid className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}
