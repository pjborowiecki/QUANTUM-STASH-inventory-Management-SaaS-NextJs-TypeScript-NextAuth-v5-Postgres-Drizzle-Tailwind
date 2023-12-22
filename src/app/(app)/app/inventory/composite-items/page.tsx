import { OptionCards } from "@/components/inventory/option-cards"
import { CompositeItemsSubheader } from "@/components/inventory/subheaders/compoite-items-subheader"

export default function AppInventoryCompositeItemsPage(): JSX.Element {
  return (
    <div>
      <CompositeItemsSubheader />
      <OptionCards />
    </div>
  )
}
