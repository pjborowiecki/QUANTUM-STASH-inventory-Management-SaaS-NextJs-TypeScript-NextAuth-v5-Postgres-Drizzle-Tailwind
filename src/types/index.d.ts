import { type FileWithPath } from "react-dropzone"

import { type dashboardCardSelectOptions } from "@/data/constants/dashboard"

export interface SearchParams {
  [key: string]: string | string[] | undefined
}
export interface NavItem {
  title: string
  href: string
  hrefPlus?: string
  disabled?: boolean
  external?: boolean
  icon?: string
}

export interface NavItemWithChildren extends NavItem {
  subitems?: NavItemWithChildren[]
}

export type AppSidebarNavItem = NavItemWithChildren

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData
  title: string
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[]
}

export interface DashboardCardSelectOption {
  value: string
  title: string
}

export type InventoryItemsSelectOption = DashboardCardSelectOption
export type InventoryItemGroupsSelectOption = DashboardCardSelectOption
export type InventoryCompositeItemSelectOption = dashboardCardSelectOptions
export type QuickCreateItem = NavItemWithChildren

export interface DashboardSalesActivityItem {
  quantity: 0
  unit: string
  label: string
}

export interface InventoryOption {
  title: string
  description: string
  buttonText: string
  icon: string
  href: string
}

export interface SettingsOptionItem {
  title: string
  href: string
}

export interface SettingsOption {
  title: string
  icon: string
  items: SettingsOptionItem[]
}

export type FileWithPreview = FileWithPath & {
  preview: string
}

export interface StoredFile {
  id: string
  name: string
  url: string
}
