"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"

export function ViewToggle(): JSX.Element {
  const [active, setActive] = React.useState<"list" | "grid">("grid")

  return (
    <div className="flex">
      <CustomTooltip text="List View">
        <Button
          variant="user"
          size="icon"
          className={cn(
            "rounded-r-none border hover:bg-secondary/80",
            active === "list" && "bg-secondary"
          )}
          aria-label="List view"
          onClick={() => setActive("list")}
        >
          <Icons.list className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CustomTooltip>

      <CustomTooltip text="Grid View">
        <Button
          variant="user"
          size="icon"
          className={cn(
            "rounded-l-none border hover:bg-secondary/80",
            active === "grid" && "bg-secondary"
          )}
          aria-label="Grid view"
          onClick={() => setActive("grid")}
        >
          <Icons.layoutGrid className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CustomTooltip>
    </div>
  )
}
