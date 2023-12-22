import {
  type InventoryCompositeItemSelectOption,
  type InventoryItemGroupsSelectOption,
  type InventoryItemsSelectOption,
  type InventoryOption,
} from "@/types"

export const inventoryOptions = [
  {
    title: "Items",
    description: "Create standalone items and services that you buy and sell",
    buttonText: "New Item",
    icon: "items",
    href: "/app/inventory/items/new-item",
  },
  {
    title: "Item groups",
    description: "Create multiple variants of the same item using Item Groups",
    buttonText: "New Item Group",
    icon: "itemGroups",
    href: "/app/inventory/item-groups/new-item-group",
  },
  {
    title: "Composite Items",
    description: "Bundle different items together and sell them as kits",
    buttonText: "New Composite Item",
    icon: "compositeItems",
    href: "/app/inventory/composite-items/new-composite-item",
  },
  {
    title: "Price Lists",
    description: "Tweak your item prices for specific contacts or transactions",
    buttonText: "New Price List",
    icon: "priceLists",
    href: "/app/inventory/price-lists/new-list",
  },
] satisfies InventoryOption[]

export const inventoryItemsSelectOptions = [
  {
    value: "all-items",
    title: "All Items",
  },
  {
    value: "active-items",
    title: "Active Items",
  },
  {
    value: "ungrouped-items",
    title: "Ungrouped Items",
  },
  {
    value: "low-stock-items",
    title: "Low Stock Items",
  },
  {
    value: "sales",
    title: "Sales",
  },
  {
    value: "purchases",
    title: "Purchases",
  },
  {
    value: "inventory-items",
    title: "Inventory Items",
  },
  {
    value: "non-inventory-items",
    title: "Non-Inventory Items",
  },
  {
    value: "services",
    title: "Services",
  },
  {
    value: "inactive-items",
    title: "Inactive Items",
  },
  {
    value: "returnable-items",
    title: "Returnable Items",
  },
  {
    value: "non-returnable-items",
    title: "Non Returnable Items",
  },
] satisfies InventoryItemsSelectOption[]

export const inventoryItemGroupsSelectOptions = [
  {
    value: "all-item-groups",
    title: "All Item Groups",
  },
  {
    value: "active-item-groups",
    title: "Active Item Groups",
  },
  {
    value: "inactive-item-groups",
    title: "Inactive Item Groups",
  },
] satisfies InventoryItemGroupsSelectOption[]

export const inventoryCompoiteItemsSelectOption = [
  {
    value: "all-composite-items",
    title: "All Composite Items",
  },
  {
    value: "ungrouped-items",
    title: "Ungrouped Items",
  },
  {
    value: "active",
    title: "Active",
  },
  {
    value: "low-stock",
    title: "Low Stock",
  },
  {
    value: "inactive",
    title: "Inactive",
  },
] satisfies InventoryCompositeItemSelectOption[]
