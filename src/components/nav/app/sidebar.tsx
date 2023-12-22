"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { SidebarNav } from "@/components/nav/app/sidebar-nav"
import { SubscriptionPrompt } from "@/components/subscription-prompt"

export function Sidebar(): JSX.Element {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  return (
    <aside
      className={cn(
        "flex h-screen flex-col justify-between border-r bg-tertiary transition-all duration-300 ease-in-out",
        collapsed ? "w-fit" : "w-66 shrink-0"
      )}
    >
      <div>
        <div className="flex h-20 items-center">
          <Link
            href="/app/home/dashboard"
            className="flex w-full items-center justify-center gap-2"
          >
            <Icons.logo className="h-5 w-5" />
            <span
              className={cn(
                "whitespace-nowrap font-bold leading-none tracking-wide",
                collapsed && "hidden"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <SidebarNav collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div>
        {!collapsed && <SubscriptionPrompt />}

        <div className="flex h-16 items-center justify-center border-t px-2">
          <CustomTooltip text={collapsed ? "Expand Navbar" : "Collapse Navbar"}>
            <Button
              variant="secondary"
              aria-label="Expand or collapse sidebar"
              className="w-full transition-all duration-300 ease-in-out"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </CustomTooltip>
        </div>
      </div>
    </aside>
  )
}
