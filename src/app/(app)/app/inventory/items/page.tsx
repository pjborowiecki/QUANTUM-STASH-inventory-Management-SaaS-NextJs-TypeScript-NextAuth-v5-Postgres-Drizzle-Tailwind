import Link from "next/link"

import { inventoryItemsSelectOptions, inventoryOptions } from "@/data/constants"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { OptionCard } from "@/components/inventory/option-card"

export default function AppInventoryItemsPage(): JSX.Element {
  return (
    <div>
      <div className="flex h-20 w-full items-center justify-between border-b bg-tertiary px-5">
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Items"></SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-tertiary">
            <SelectGroup>
              {inventoryItemsSelectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <CustomTooltip text="Add New Item">
            <Link
              href="/app/inventory/items/new-item"
              className={cn(buttonVariants(), "gap-1")}
              aria-label="Add new item"
            >
              <Icons.plus aria-hidden="true" className="h-4 w-4" />
              <span>New</span>
            </Link>
          </CustomTooltip>

          <div className="flex">
            <CustomTooltip text="List View">
              <Button
                variant="user"
                size="icon"
                className="rounded-r-none border hover:bg-secondary/80"
                aria-label="List view"
              >
                <Icons.list className="h-4 w-4" aria-hidden="true" />
              </Button>
            </CustomTooltip>

            <CustomTooltip text="Grid View">
              <Button
                variant="user"
                size="icon"
                className="rounded-l-none border bg-secondary hover:bg-secondary/80"
                aria-label="Grid view"
              >
                <Icons.layoutGrid className="h-4 w-4" aria-hidden="true" />
              </Button>
            </CustomTooltip>
          </div>

          <CustomTooltip text="More Options">
            <Button variant="outline" className="p-3" aria-label="More options">
              <Icons.moreHorizontal className="h-4 w-4" aria-hidden="true" />
            </Button>
          </CustomTooltip>

          <CustomTooltip text="Instant Helper">
            <Button className="bg-orange-600 p-3 hover:bg-orange-600/80">
              <Icons.helpBadge className="h-5 w-5 text-foreground" />
            </Button>
          </CustomTooltip>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 p-5  lg:grid-cols-2">
        {inventoryOptions.map((option) => (
          <OptionCard key={option.title} option={option} />
        ))}
      </div>
    </div>
  )
}
