import { AddItemGroupForm } from "@/components/forms/inventory/add-item-group-form"
import { SubSubHeader } from "@/components/inventory/subheaders/subsubheader"

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
