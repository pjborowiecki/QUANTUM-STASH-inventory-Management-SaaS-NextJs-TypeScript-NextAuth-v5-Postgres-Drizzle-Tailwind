import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddCategoryForm } from "@/components/forms/inventory/categories/add-category-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default function AppInventoryCategoriesNewCategoryPage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-4xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Category</CardTitle>
            <CardDescription className="text-base">
              Define new category of items
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddCategoryForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
