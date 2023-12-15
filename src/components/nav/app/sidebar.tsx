import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { SidebarNav } from "@/components/nav/app/sidebar-nav"
import { SubscriptionPrompt } from "@/components/subscription-prompt"

export function Sidebar(): JSX.Element {
  return (
    <aside className="flex min-h-[100vh] w-60 shrink-0 flex-col justify-between border-r bg-accent/20">
      <div>
        <div className="flex h-20 items-center">
          <Link
            href="/app/home/dashboard"
            className="flex w-full items-center justify-center gap-2"
          >
            <Icons.logo className="h-5 w-5" />
            <span className="whitespace-nowrap font-bold leading-none tracking-wide">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <SidebarNav />
      </div>

      <div>
        <SubscriptionPrompt />
        <div className="flex h-16 items-center justify-center border-t px-2">
          <Button
            variant="secondary"
            aria-label="Expand or collapse sidebar"
            className="w-full"
          >
            <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </aside>
  )
}
