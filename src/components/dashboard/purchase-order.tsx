import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PurchaseOrder(): JSX.Element {
  return (
    <Card className="h-48 w-1/3 rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold capitalize tracking-wide">
          Purchase Order
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
