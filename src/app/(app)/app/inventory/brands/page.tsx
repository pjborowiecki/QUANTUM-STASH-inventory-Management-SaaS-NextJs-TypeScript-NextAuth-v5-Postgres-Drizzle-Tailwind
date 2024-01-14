import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { BrandsSubheader } from "@/components/inventory/subheaders/brands-subheader"

export default async function AppInventoryBrandsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <BrandsSubheader />
      <div className="p-5">App Inventory Brands Page</div>
    </div>
  )
}
