"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { sidebarItems } from "@/data/nav-items-app"
import { cn } from "@/lib/utils"

export function SubheaderNav(): JSX.Element {
  const pathname = usePathname()

  return (
    <nav className="sticky flex gap-3 text-sm tracking-wide">
      {sidebarItems[0]?.subitems?.map((subitem) => (
        <Link
          key={subitem.href}
          href={subitem.href}
          className={cn(
            "p-3 text-muted-foreground",
            pathname === subitem.href &&
              "border-b-2 border-foreground text-foreground"
          )}
        >
          {subitem.title}
        </Link>
      ))}
    </nav>
  )
}
