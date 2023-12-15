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

export interface DashboardCardSelectOption {
  value: string
  title: string
}

export interface DashboardSalesActivityItem {
  quantity: 0
  unit: string
  label: string
}
