import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { NotificationsMenu } from "@/components/nav/app/menus/notifications-menu"
import { OrganizationMenu } from "@/components/nav/app/menus/organization-menu"
import { ReferAndEarnMenu } from "@/components/nav/app/menus/refer-and-earn-menu"
import { UserMenu } from "@/components/nav/app/menus/user-menu"
import { Search } from "@/components/search"

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-[50] flex h-20 items-center justify-between gap-8 border-b bg-tertiary px-5">
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
          <ReferAndEarnMenu />
          <NotificationsMenu />

          <CustomTooltip text="Settings">
            <Link
              href="/app/settings"
              aria-label="Settings"
              className={cn(buttonVariants({ variant: "ghost" }), "p-3")}
            >
              <Icons.settings aria-hidden="true" className="h-4 w-4" />
            </Link>
          </CustomTooltip>
        </div>

        <OrganizationMenu />
        <UserMenu />

        <div className="flex items-center justify-center">
          <Button variant="outline" aria-label="TODO" className="p-2">
            <Icons.layoutGrid className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}
