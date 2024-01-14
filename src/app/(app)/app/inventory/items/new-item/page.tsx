import { redirect } from "next/navigation"
import { auth } from "@/auth"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddItemForm } from "@/components/forms/inventory/items/add-item-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default async function AppInventoryItemsNewItemPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div className="relative">
      <SubSubHeader />

      <div className="p-5">
        <Card className="max-w-5xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Inventory Item</CardTitle>
            <CardDescription className="text-base">
              Add new inventory item
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddItemForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
