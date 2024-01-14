import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getWarehouseById } from "@/actions/warehouses"
import { auth } from "@/auth"
import { env } from "@/env.mjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UpdateWarehouseForm } from "@/components/forms/warehouses/update-warehouse-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Update Warehouse",
  description: "Update warehouse information",
}

interface AppWarehousesUpdateWarehousePageProps {
  params: {
    warehouseId: number
  }
}

export default async function AppWarehousesUpdateWarehousePage({
  params,
}: AppWarehousesUpdateWarehousePageProps): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  const warehouse = await getWarehouseById({ id: Number(params.warehouseId) })
  if (!warehouse) redirect("/app/warehouses")

  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-5xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">Update</CardTitle>
            <CardDescription className="text-base">
              Update warehouse information
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <UpdateWarehouseForm warehouse={warehouse} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
