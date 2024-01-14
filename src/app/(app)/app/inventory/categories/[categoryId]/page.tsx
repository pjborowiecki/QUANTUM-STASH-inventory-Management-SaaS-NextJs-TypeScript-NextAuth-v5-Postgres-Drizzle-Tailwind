import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCategoryById } from "@/actions/inventory/categories"
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

interface AppInventoryCategoriesUpdateCategoryPageProps {
  params: {
    categoryId: number
  }
}

export default async function AppInventoryCategoriesUpdateCategoryPage({
  params,
}: AppInventoryCategoriesUpdateCategoryPageProps): Promise<JSX.Element> {
  const category = await getCategoryById({ id: Number(params.categoryId) })
  if (!category) redirect("/app/inventory/categories")

  console.log("CATEGORY FROM THE CATEGORY PAGE", category)

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
