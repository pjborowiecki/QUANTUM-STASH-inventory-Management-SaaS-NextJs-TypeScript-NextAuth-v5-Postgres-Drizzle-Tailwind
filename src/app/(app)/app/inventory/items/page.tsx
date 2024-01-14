import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { OptionCards } from "@/components/inventory/option-cards"
import { ItemsSubheader } from "@/components/inventory/subheaders/items-subheader"

export default async function AppInventoryItemsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <ItemsSubheader />
      <OptionCards />
    </div>
  )
}
