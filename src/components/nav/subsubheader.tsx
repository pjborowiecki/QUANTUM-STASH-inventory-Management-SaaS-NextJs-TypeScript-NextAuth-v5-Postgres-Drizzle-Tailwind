"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function SubSubHeader(): JSX.Element {
  const paths = usePathname()
  const pathNames = paths
    .split("/")
    .filter((path) => path)
    .slice(1)

  return (
    <ul className="flex h-20 w-full items-center gap-1 border-b bg-tertiary px-5">
      {pathNames.length > 3 && <Icons.chevronRight className="h-4 w-4" />}
      {pathNames.map((link, index) => {
        const href = `/app/${pathNames.slice(0, index + 1).join("/")}`

        return (
          <React.Fragment key={index}>
            <li
              className={cn(
                buttonVariants({ variant: "ghost" }),
                index === 0 && "cursor-default hover:bg-transparent",
                "px-2 capitalize"
              )}
            >
              {index === 0 ? (
                <p>{pathNames[0]}</p>
              ) : (
                <Link href={href} className="tracking-wide">
                  {link.replace(/-/g, " ")}
                </Link>
              )}
            </li>
            {pathNames.length !== index + 1 && (
              <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </React.Fragment>
        )
      })}
    </ul>
  )
}
