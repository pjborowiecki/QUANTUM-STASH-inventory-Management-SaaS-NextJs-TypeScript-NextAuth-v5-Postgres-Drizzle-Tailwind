"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { sidebarItems } from "@/data/nav-items-app"
import { cn } from "@/lib/utils"

export function SubheaderNav(): JSX.Element {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {sidebarItems[0]?.subitems?.map((subitem) => (
        <Link
          key={subitem.href}
          href={subitem.href}
          aria-label={`Got to ${subitem.title}`}
          className={cn(
            "border-b-2 border-transparent px-1 py-2 text-sm font-normal tracking-wide text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground",
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
