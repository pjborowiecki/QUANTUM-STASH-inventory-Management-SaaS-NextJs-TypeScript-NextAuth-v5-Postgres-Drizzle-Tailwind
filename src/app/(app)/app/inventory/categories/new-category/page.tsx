import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { env } from "@/env.mjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddCategoryForm } from "@/components/forms/inventory/categories/add-category-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "New Category",
  description: "Define new category of items",
}

export default async function AppInventoryCategoriesNewCategoryPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-5xl rounded-md bg-tertiary">
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
