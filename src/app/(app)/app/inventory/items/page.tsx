import { inventoryOptions } from "@/data/constants"
import { OptionCard } from "@/components/inventory/option-card"
import { ItemsSubheader } from "@/components/inventory/subheaders/items-subheader"

export default function AppInventoryItemsPage(): JSX.Element {
  return (
    <div>
      <ItemsSubheader />
      <div className="grid grid-cols-1 gap-5 p-5  lg:grid-cols-2">
        {inventoryOptions.map((option) => (
          <OptionCard key={option.title} option={option} />
        ))}
      </div>
    </div>
  )
}
