import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function InventorySummary(): JSX.Element {
  return (
    <Card className="flex h-48 w-1/3 flex-col rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold capitalize tracking-wide">
          Inventory Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-center border-t py-0">
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Quantity in Hand
          </p>
          <span className="px-1 text-base font-semibold">0</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between py-4">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Quantitiy to be Received
          </p>
          <span className="px-1 text-base font-semibold">0</span>
        </div>
      </CardContent>
    </Card>
  )
}
