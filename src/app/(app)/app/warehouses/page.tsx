import * as React from "react"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getAllWarehouses } from "@/actions/warehouses"
import { auth } from "@/auth"
import { env } from "@/env.mjs"

import { Subheader } from "@/components/nav/subheader"
import { WarehouseCardSkeleton } from "@/components/skeletons/warehouse-card-skeleton"
import { WarehouseCard } from "@/components/warehouses/warehouse-card"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Warehouses",
  description: "Manage your warehouses",
}

export default async function AppWarehousesPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  const warehouses = await getAllWarehouses()

  return (
    <div>
      <Subheader
        buttonText="New Warehouse"
        buttonLink="/app/warehouses/new-warehouse"
      />
      <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <WarehouseCardSkeleton key={i} />
          ))}
        >
          {warehouses?.map((warehouse) => (
            <WarehouseCard
              key={warehouse.id}
              warehouse={warehouse}
              href={`/app/warehouses/${warehouse.id}`}
            />
          ))}
        </React.Suspense>
      </div>
    </div>
  )
}
