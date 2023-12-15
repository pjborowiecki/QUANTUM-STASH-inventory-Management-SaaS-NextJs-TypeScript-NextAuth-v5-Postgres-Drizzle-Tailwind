import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SalesOrder(): JSX.Element {
  return (
    <Card className="h-80 w-2/3 rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold capitalize tracking-wide">
          Sales Order
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
