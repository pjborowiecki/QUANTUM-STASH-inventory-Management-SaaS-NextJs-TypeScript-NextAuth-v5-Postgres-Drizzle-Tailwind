import { AddCompositeItemForm } from "@/components/forms/inventory/composite-items/add-composite-item-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

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
