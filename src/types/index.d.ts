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
