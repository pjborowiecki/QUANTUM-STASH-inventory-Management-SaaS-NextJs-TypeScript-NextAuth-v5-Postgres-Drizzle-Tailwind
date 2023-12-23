import { AddItemGroupForm } from "@/components/forms/inventory/item-group/add-item-group-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

export default function AppInventoryItemGroupsNewItemGroupPage(): JSX.Element {
  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <AddItemGroupForm />
      </div>
    </div>
  )
}
