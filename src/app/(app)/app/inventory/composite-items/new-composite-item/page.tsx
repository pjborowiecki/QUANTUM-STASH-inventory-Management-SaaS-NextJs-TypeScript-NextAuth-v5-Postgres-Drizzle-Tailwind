import { AddCompositeItemForm } from "@/components/forms/inventory/add-composite-item-form"
import { SubSubHeader } from "@/components/inventory/subheaders/subsubheader"

export default function AppInventoryCompositeItemsNewCompositeItemPage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <AddCompositeItemForm />
      </div>
    </div>
  )
}
