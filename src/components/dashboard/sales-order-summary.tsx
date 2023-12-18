import { dashboardSalesOrderSummaryCardSelectOptions } from "@/data/constants/dashboard"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SalesOrderSummary(): JSX.Element {
  return (
    <div className="flex h-96 w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30">
      <div className="flex h-16 items-center justify-between bg-secondary/20 px-5">
        <h3 className="shrink-0 font-semibold capitalize tracking-wide">
          Sales Order Summary
        </h3>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Previous Month"></SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-tertiary">
            <SelectGroup>
              {dashboardSalesOrderSummaryCardSelectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-full flex-col items-center justify-center border-t"></div>
    </div>
  )
}
