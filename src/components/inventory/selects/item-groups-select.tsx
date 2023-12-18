import { inventoryItemGroupsSelectOptions } from "@/data/constants/inventory"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ItemGroupsSelect(): JSX.Element {
  return (
    <Select>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="All Item Groups"></SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-tertiary">
        <SelectGroup>
          {inventoryItemGroupsSelectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
