import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function ItemGroupsDropdown(): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-secondary/80"
        aria-label="More Options"
      >
        <Icons.moreHorizontal className="h-4 w-4" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-tertiary">
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.download
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          Import Item Groups
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.upload
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          Export Item Groups
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.settings
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.refresh
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          Refresh List
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
