import { redirect } from "next/navigation"
import { auth } from "@/auth"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddUnitForm } from "@/components/forms/inventory/units/add-unit-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default async function AppInventoryUnitsNewUnitPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-5xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Unit</CardTitle>
            <CardDescription className="text-base">
              Define new unit
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddUnitForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
