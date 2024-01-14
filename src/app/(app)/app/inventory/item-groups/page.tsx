import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { OptionCards } from "@/components/inventory/option-cards"
import { ItemGroupsSubheader } from "@/components/inventory/subheaders/item-groups-subheader"

export default async function AppInventoryItemGroupsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <ItemGroupsSubheader />
      <OptionCards />
    </div>
  )
}
