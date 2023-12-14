"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { sidebarItems } from "@/data/nav-items-app"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Icons } from "@/components/icons"

export function SidebarNav(): JSX.Element {
  const pathname = usePathname()
  const [openCollapsible, setOpenCollapsible] = React.useState<string | null>(
    null
  )

  const handleCollapsibleToggle = (href: string): void => {
    setOpenCollapsible((prev) => (prev === href ? null : href))
  }

  React.useEffect((): void => {
    const collapsibleItem = sidebarItems.find(
      (item) =>
        item.subitems &&
        item.subitems.some((subitem) => subitem.href === pathname)
    )

    if (collapsibleItem) {
      setOpenCollapsible(collapsibleItem.href)
    } else {
      setOpenCollapsible(null)
    }

    return
  }, [pathname])

  return (
    <nav className="space-y-2 px-2 py-3">
      {sidebarItems.map((item) => {
        const Icon = Icons[item.icon as keyof typeof Icons]

        const isCollapsibleOpen = openCollapsible === item.href

        return (
          <div key={item.href}>
            {item.subitems && item.subitems.length > 0 ? (
              <Collapsible
                open={isCollapsibleOpen}
                onOpenChange={() => handleCollapsibleToggle(item.href)}
              >
                <CollapsibleTrigger className="w-full" asChild>
                  <Button
                    variant="ghost"
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="text-muted-foreground">
                        {item.title}
                      </span>
                    </div>

                    {isCollapsibleOpen ? (
                      <Icons.chevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Icons.chevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full pl-6">
                  {item.subitems.map((subitem) => (
                    <Button
                      variant={
                        pathname === subitem.href ? "secondary" : "ghost"
                      }
                      key={subitem.href}
                      className="group flex w-full items-center justify-between gap-2 text-muted-foreground"
                    >
                      <Link
                        href={subitem.href}
                        className="flex flex-1 items-start"
                      >
                        {subitem.title}
                      </Link>

                      {subitem.hrefPlus && (
                        <Link
                          href={subitem.hrefPlus}
                          className="hidden text-muted-foreground hover:text-foreground group-hover:flex"
                        >
                          <Icons.plusCircle className="h-4 w-4" />
                        </Link>
                      )}
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? buttonVariants({ variant: "secondary" })
                    : buttonVariants({ variant: "ghost" }),
                  "flex w-full justify-start gap-2"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="text-muted-foreground">{item.title}</span>
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
