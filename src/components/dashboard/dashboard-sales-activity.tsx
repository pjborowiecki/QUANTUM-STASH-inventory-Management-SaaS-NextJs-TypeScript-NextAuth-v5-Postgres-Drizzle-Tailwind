import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardSalesActivity(): JSX.Element {
  return (
    <Card className="h-48 w-2/3 rounded-md bg-secondary/10">
      <CardHeader className="bg-secondary/20 py-4">
        <CardTitle className="font-semibold tracking-wide">
          Sales Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between whitespace-nowrap border-t py-6">
        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Qty</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be packed
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Pkgs</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be shipped
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 border-r px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Pkgs</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be delivered
          </p>
        </div>

        <div className="flex h-full w-1/4 flex-col items-center justify-center gap-1 px-4">
          <p className="text-3xl font-semibold">0</p>
          <p className="text-xs text-muted-foreground/80">Qty</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            To be invoiced
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
