import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductDetails(): JSX.Element {
  return (
    <Card className="h-64 w-1/2 rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold capitalize tracking-wide">
          Product Details
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
