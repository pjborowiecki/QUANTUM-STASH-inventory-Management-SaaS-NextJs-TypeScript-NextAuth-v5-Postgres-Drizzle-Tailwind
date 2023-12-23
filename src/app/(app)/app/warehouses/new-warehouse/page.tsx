import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddWarehouseForm } from "@/components/forms/warehouses/add-warehouse-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default function AppWarehousesNewWarehousePage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-4xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Warehouse</CardTitle>
            <CardDescription className="text-base">
              Add new warehouse
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddWarehouseForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
