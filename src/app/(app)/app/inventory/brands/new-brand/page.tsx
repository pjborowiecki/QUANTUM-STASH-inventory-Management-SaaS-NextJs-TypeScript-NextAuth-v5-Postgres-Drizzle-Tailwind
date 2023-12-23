import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddBrandForm } from "@/components/forms/inventory/brands/add-brand-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default function AppInventoryBrandsNewBrandPage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-6xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Brand</CardTitle>
            <CardDescription className="text-base">
              Add new brand
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddBrandForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
