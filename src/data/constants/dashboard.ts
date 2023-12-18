import {
  type DashboardCardSelectOption,
  type DashboardSalesActivityItem,
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
