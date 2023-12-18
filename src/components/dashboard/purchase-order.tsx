import { dashboardCardSelectOptions } from "@/data/constants/dashboard"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PurchaseOrder(): JSX.Element {
  return (
    <div className="flex h-80 w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30 xl:w-1/3">
      <div className="flex h-16 items-center justify-between bg-secondary/20 px-5">
        <h3 className="shrink-0 font-semibold capitalize tracking-wide">
          Purchase Order
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
      <div className="flex h-full flex-col justify-center border-t px-5">
        <div className="flex items-center justify-between border-b py-8">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Quantity Ordered
          </p>
          <p className="px-1 text-xl font-semibold">0</p>
        </div>
        <div className="flex items-center justify-between py-8">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Total Cost
          </p>
          <p className="px-1 text-xl font-semibold">
            <span className="mr-2 text-base text-muted-foreground">PLN </span>0
          </p>
        </div>
      </div>
    </div>
  )
}
