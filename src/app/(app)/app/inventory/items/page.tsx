import { OptionCards } from "@/components/inventory/option-cards"
import { ItemsSubheader } from "@/components/inventory/subheaders/items-subheader"

export default function AppInventoryItemsPage(): JSX.Element {
  return (
    <div>
      <ItemsSubheader />
      <OptionCards />
    </div>
  )
}
