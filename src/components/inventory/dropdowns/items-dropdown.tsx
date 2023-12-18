import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function ItemsDropdown(): JSX.Element {
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
          <Icons.download className="h-4 w-4 text-muted-foreground" />
          Import Items
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.upload className="h-4 w-4 text-muted-foreground" />
          Export Items
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.upload className="h-4 w-4 text-muted-foreground" />
          Export Current View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.settings className="h-4 w-4 text-muted-foreground" />
          Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icons.refresh className="h-4 w-4 text-muted-foreground" />
          Refresh List
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
