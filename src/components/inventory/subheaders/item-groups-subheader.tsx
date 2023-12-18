import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { ItemGroupsDropdown } from "@/components/inventory/dropdowns/item-groups-dropdown"
import { ItemGroupsSelect } from "@/components/inventory/selects/item-groups-select"
import { ViewToggle } from "@/components/inventory/view-toggle"
import { InstantHelperMenu } from "@/components/nav/app/menus/instant-helper-menu"

export function ItemGroupsSubheader(): JSX.Element {
  return (
    <div className="flex h-20 w-full items-center justify-between border-b bg-tertiary px-5">
      <ItemGroupsSelect />

      <div className="flex items-center gap-2">
        <CustomTooltip text="Add New Item Group">
          <Link
            href="/app/inventory/items/new-item-group"
            className={cn(buttonVariants(), "gap-1")}
            aria-label="Add new item group"
          >
            <Icons.plus aria-hidden="true" className="h-4 w-4" />
            <span>New</span>
          </Link>
        </CustomTooltip>

        <ViewToggle />
        <ItemGroupsDropdown />
        <InstantHelperMenu />
      </div>
    </div>
  )
}
