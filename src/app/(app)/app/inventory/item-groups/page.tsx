import { inventoryOptions } from "@/data/constants"
import { OptionCard } from "@/components/inventory/option-card"
import { ItemGroupsSubheader } from "@/components/inventory/subheaders/item-groups-subheader"

export default function AppInventoryItemGroupsPage(): JSX.Element {
  return (
    <div>
      <ItemGroupsSubheader />

      <div className="grid grid-cols-1 gap-5 p-5  lg:grid-cols-2">
        {inventoryOptions.map((option) => (
          <OptionCard key={option.title} option={option} />
        ))}
      </div>
    </div>
  )
}
