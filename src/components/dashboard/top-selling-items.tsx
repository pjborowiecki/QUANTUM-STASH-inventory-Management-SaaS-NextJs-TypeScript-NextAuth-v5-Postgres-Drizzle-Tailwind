import { dashboardCardSelectOptions } from "@/data/constants/dashboard"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopSellingItems(): JSX.Element {
  return (
    <div className="flex h-64 w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30 xl:w-1/2">
      <div className="flex h-16 items-center justify-between bg-secondary/20 px-5">
        <h3 className="shrink-0 font-semibold capitalize tracking-wide">
          Top Selling Items
        </h3>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Previous Month"></SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-tertiary">
            <SelectGroup>
              {dashboardCardSelectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-full flex-col items-center justify-center border-t">
        <p className="text-sm tracking-wide text-muted-foreground">
          No items were invoiced in this time frame
        </p>
      </div>
    </div>
  )
}
