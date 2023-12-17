import {
  type DashboardCardSelectOption,
  type DashboardSalesActivityItem,
  type InventoryItemGroupsSelectOption,
  type InventoryItemsSelectOption,
  type InventoryOption,
} from "@/types"

export const dashboardCardSelectOptions = [
  {
    value: "today",
    title: "Today",
  },
  {
    value: "yesterday",
    title: "Yesterday",
  },
  {
    value: "this-week",
    title: "This Week",
  },
  {
    value: "this-month",
    title: "this Month",
  },
  {
    value: "this-year",
    title: "This Year",
  },
  {
    value: "previous-week",
    title: "Previous Week",
  },
  {
    value: "previous-year",
    title: "Previous Year",
  },
  {
    value: "custom",
    title: "Custom",
  },
] satisfies DashboardCardSelectOption[]

export const dashboardSalesOrderSummaryCardSelectOptions = [
  {
    value: "this-week",
    title: "This week",
  },
  {
    value: "previous-week",
    title: "Previous Week",
  },
  {
    value: "this-month",
    title: "This Month",
  },
  {
    value: "previous-month",
    title: "Previous Month",
  },
  {
    value: "this-quarter",
    title: "This Quarter",
  },
  {
    value: "previous-quarter",
    title: "Previous Quarter",
  },
  {
    value: "this-year",
    title: "This Year",
  },
  {
    value: "previous-year",
    title: "Previous Year",
  },
] satisfies DashboardCardSelectOption[]

export const dashboardSalesActivityItems = [
  {
    quantity: 0,
    unit: "Qty",
    label: "To be packed",
  },
  {
    quantity: 0,
    unit: "Pkgs",
    label: "To be shipped",
  },
  {
    quantity: 0,
    unit: "Pkgs",
    label: "To be delivered",
  },
  {
    quantity: 0,
    unit: "Qty",
    label: "To be invoiced",
  },
] satisfies DashboardSalesActivityItem[]

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
    href: "/app/inventory/item-groups/new-group",
  },
  {
    title: "Composite Items",
    description: "Bundle different items together and sell them as kits",
    buttonText: "Enable Now",
    icon: "compositeItems",
    href: "/app/inventory/TODO",
  },
  {
    title: "Price Lists",
    description: "Tweak your item prices for specific contacts or transactions",
    buttonText: "Enable Now",
    icon: "priceLists",
    href: "/app/inventory/TODO",
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
  }
] satisfies InventoryItemGroupsSelectOption[]
