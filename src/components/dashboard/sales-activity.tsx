import { dashboardSalesActivityItems } from "@/data/constants/dashboard"
import { cn } from "@/lib/utils"
import { SalesActivityItem } from "@/components/dashboard/sales-activity-item"

export function SalesActivity(): JSX.Element {
  return (
    <div className="flex h-auto w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30 xl:h-48 xl:w-2/3">
      <div className="flex h-16 items-center bg-secondary/20 px-5">
        <h3 className="font-semibold capitalize tracking-wide">
          Sales Activity
        </h3>
      </div>
      <div
        className={cn(
          "grid h-full grid-cols-2 border-t lg:grid-cols-4",
          "[&>*:nth-child(3)]:border-t lg:[&>*:nth-child(3)]:border-t-0",
          "[&>*:nth-child(4)]:border-t lg:[&>*:nth-child(4)]:border-t-0"
        )}
      >
        {dashboardSalesActivityItems.map((activityItem) => (
          <SalesActivityItem
            key={activityItem.label}
            quantity={activityItem.quantity}
            unit={activityItem.unit}
            label={activityItem.label}
          />
        ))}
      </div>
    </div>
  )
}
