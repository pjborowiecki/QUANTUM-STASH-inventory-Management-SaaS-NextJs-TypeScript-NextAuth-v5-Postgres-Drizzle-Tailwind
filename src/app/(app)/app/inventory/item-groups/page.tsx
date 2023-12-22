import { OptionCards } from "@/components/inventory/option-cards"
import { ItemGroupsSubheader } from "@/components/inventory/subheaders/item-groups-subheader"

export default function AppInventoryItemGroupsPage(): JSX.Element {
  return (
    <div>
      <ItemGroupsSubheader />
      <OptionCards />
    </div>
  )
}
