import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { InstantHelperMenu } from "@/components/nav/app/menus/instant-helper-menu"

export function CategoriesSubheader(): JSX.Element {
  return (
    <div className="flex h-20 w-full items-center justify-end border-b bg-tertiary px-5">
      <div className="flex items-center gap-2">
        <CustomTooltip text="Add New Category">
          <Link
            href="/app/inventory/categories/new-category"
            className={cn(buttonVariants(), "gap-1")}
            aria-label="Add new item"
          >
            <Icons.plus aria-hidden="true" className="h-4 w-4" />
            <span>New Category</span>
          </Link>
        </CustomTooltip>
        <InstantHelperMenu />
      </div>
    </div>
  )
}
