import Link from "next/link"
import type { Warehouse } from "@/db/schema"

import { getRandomPatternStyle } from "@/lib/patterns"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface WarehouseCardProps {
  warehouse: Warehouse
  href: string
}

export function WarehouseCard({
  warehouse,
  href,
}: WarehouseCardProps): JSX.Element {
  return (
    <Link href={href}>
      <span className="sr-only">{warehouse.name}</span>
      <Card className="h-full overflow-hidden transition-colors hover:bg-muted/50">
        <AspectRatio ratio={21 / 9}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-zinc-950/50" />

          <div
            className="h-full rounded-t-md border-b"
            style={getRandomPatternStyle(String(warehouse.id))}
          />
        </AspectRatio>
        <CardHeader className="space-y-2">
          <CardTitle className="line-clamp-1">{warehouse.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {warehouse.description?.length
              ? warehouse.description
              : `Explore ${warehouse.name} products`}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
