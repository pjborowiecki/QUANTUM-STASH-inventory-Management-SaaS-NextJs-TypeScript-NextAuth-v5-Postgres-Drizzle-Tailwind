import { DashboardBanner } from "@/components/dashboard/dashboard-banner"
import { DashboardInventorySummary } from "@/components/dashboard/dashboard-inventory-summary"
import { DashboardSalesActivity } from "@/components/dashboard/dashboard-sales-activity"

export default function AppHomeDashboardPage(): JSX.Element {
  return (
    <div>
      <DashboardBanner />
      <div className="w-full max-w-8xl px-4 py-5">
        <div className="flex w-full gap-5">
          <DashboardSalesActivity />
          <DashboardInventorySummary />
        </div>
      </div>
    </div>
  )
}
