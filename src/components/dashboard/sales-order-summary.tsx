import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesOrderSummary(): JSX.Element {
  return (
    <Card className="h-96 w-full rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold capitalize tracking-wide">
          Sales Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
