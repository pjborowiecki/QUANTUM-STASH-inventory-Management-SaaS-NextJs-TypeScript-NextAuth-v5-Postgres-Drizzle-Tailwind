import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { Banner } from "@/components/dashboard/banner"
import { Footer } from "@/components/dashboard/footer"
import { InventorySummary } from "@/components/dashboard/inventory-summary"
import { ProductDetails } from "@/components/dashboard/product-details"
import { PurchaseOrder } from "@/components/dashboard/purchase-order"
import { SalesActivity } from "@/components/dashboard/sales-activity"
import { SalesOrder } from "@/components/dashboard/sales-order"
import { SalesOrderSummary } from "@/components/dashboard/sales-order-summary"
import { TopSellingItems } from "@/components/dashboard/top-selling-items"

export default async function AppHomeDashboardPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <div className="flex w-full max-w-8xl flex-col gap-5 p-5">
        <Banner />

        <div className="flex w-full flex-col gap-5 xl:flex-row">
          <SalesActivity />
          <InventorySummary />
        </div>

        <div className="flex w-full flex-col gap-5 xl:flex-row">
          <ProductDetails />
          <TopSellingItems />
        </div>

        <div className="flex w-full flex-col gap-5 xl:flex-row">
          <PurchaseOrder />
          <SalesOrder />
        </div>

        <div className="flex w-full">
          <SalesOrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  )
}
