import type { Metadata } from "next"
import { env } from "@/env.mjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UpdateCategoryForm } from "@/components/forms/inventory/categories/update-category-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Update Category",
  description: "Update your category",
}

export default function AppInventoryCategoriesUpdateCategoryPage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-4xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">Update Category</CardTitle>
            <CardDescription className="text-base">
              Update this category of items
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <UpdateCategoryForm category={category} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
