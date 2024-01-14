import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { OptionCards } from "@/components/inventory/option-cards"
import { CompositeItemsSubheader } from "@/components/inventory/subheaders/compoite-items-subheader"

export default async function AppInventoryCompositeItemsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <CompositeItemsSubheader />
      <OptionCards />
    </div>
  )
}
