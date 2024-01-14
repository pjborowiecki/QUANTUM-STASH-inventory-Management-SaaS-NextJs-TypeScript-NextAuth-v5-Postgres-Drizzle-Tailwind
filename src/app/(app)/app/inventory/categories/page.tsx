import * as React from "react"
import type { Metadata } from "next"
import { unstable_noStore as noStore } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { db } from "@/db/index"
import { categories, type Category } from "@/db/schema"
import { env } from "@/env.mjs"
import type { SearchParams } from "@/types"
import { categoriesSearchParamsSchema } from "@/validations/params"
import { asc, desc, like, sql } from "drizzle-orm"

import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton"
import { CategoriesTableShell } from "@/components/data-table/table-shells/categories-table-shell"
import { Subheader } from "@/components/nav/subheader"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Categories",
  description: "Manage your item categories",
}

interface AppInventoryCategoriesPageProps {
  searchParams: SearchParams
}

export default async function AppInventoryCategoriesPage({
  searchParams,
}: AppInventoryCategoriesPageProps): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  const { page, per_page, sort, name } =
    categoriesSearchParamsSchema.parse(searchParams)

  const fallbackPage = isNaN(page) || page < 1 ? 1 : page
  const limit = isNaN(per_page) ? 10 : per_page
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0

  const [column, order] = (sort?.split(".") as [
    keyof Category | undefined,
    "asc" | "desc" | undefined,
  ]) ?? ["createdAt", "desc"]

  // TODO: Convert into a prepared satement
  noStore()
  const data = await db
    .select({
      id: categories.id,
      name: categories.name,
      description: categories.description,
      createdAt: categories.createdAt,
    })
    .from(categories)
    .limit(limit)
    .offset(offset)
    .where(name ? like(categories.name, `%${name}%`) : undefined)
    .orderBy(
      column && column in categories
        ? order === "asc"
          ? asc(categories[column])
          : desc(categories[column])
        : desc(categories.createdAt)
    )

  // TODO: Convert into a prepared satement
  noStore()
  const count = await db
    .select({
      count: sql<number>`count(${categories.id})`,
    })
    .from(categories)
    .where(name ? like(categories.name, `%${name}%`) : undefined)
    .then((res) => res[0]?.count ?? 0)

  const pageCount = Math.ceil(count / limit)

  return (
    <div>
      <Subheader
        buttonText="New Category"
        buttonLink="/app/inventory/categories/new-category"
      />
      <div className="p-5">
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={5}
              isNewRowCreatable={false}
              isRowsDeletable={true}
            />
          }
        >
          <CategoriesTableShell data={data} pageCount={pageCount} />
        </React.Suspense>
      </div>
    </div>
  )
}
