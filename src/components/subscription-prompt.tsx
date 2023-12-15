import { Button } from "@/components/ui/button"

export function SubscriptionPrompt(): JSX.Element {
  return (
    <div className="w-full space-y-3 px-2 py-3">
      <p className="text-sm text-muted-foreground">
        Your trial expires in{" "}
        <span className="font-bold text-foreground">14 days</span>
      </p>

      <div className="flex w-full gap-2">
        <Button variant="outline" size="sm" className="w-full">
          Change plan
        </Button>
        <Button variant="secondary" size="sm" className="w-full">
          Upgrade
        </Button>
      </div>
    </div>
  )
}
