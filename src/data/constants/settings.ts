import { type SettingsOption } from "@/types"

export const settingsOptions = [
  {
    title: "Organization",
    icon: "organization",
    items: [
      {
        title: "Profile",
        href: "/settings/organization/profile",
      },
      {
        title: "Warehouses",
        href: "/settings/organization/warehouses",
      },
      {
        title: "Branding",
        href: "/settings/organization/branding",
      },
      {
        title: "Branches",
        href: "/settings/organization/branches",
      },
      {
        title: "Currencies",
        href: "/settings/organization/currencies",
      },
      {
        title: "Approvals",
        href: "/settings/organization/approvals",
      },
      {
        title: "Manage Subscriptions",
        href: "/settings/organization/manage-subscriptions",
      },
    ],
  },
  {
    title: "Taxes & Compliance",
    icon: "taxes",
    items: [
      {
        title: "Taxes",
        href: "",
      },
    ],
  },
  {
    title: "Preferences",
    icon: "preferences",
    items: [
      {
        title: "General",
        href: "",
      },
      {
        title: "Customers and Vendors",
        href: "",
      },
      {
        title: "Customer Portal",
        href: "",
      },
      {
        title: "Vendor Portal",
        href: "",
      },
    ],
  },
  {
    title: "Items",
    icon: "items",
    items: [
      {
        title: "Items",
        href: "",
      },
      {
        title: "Units of Measurement",
        href: "",
      },
      {
        title: "Inventory Adjustments",
        href: "",
      },
    ],
  },
  {
    title: "Sales",
    icon: "shoppingCart",
    items: [
      {
        title: "Sales Orders",
        href: "",
      },
      {
        title: "Packages",
        href: "",
      },
      {
        title: "Shipments",
        href: "",
      },
      {
        title: "Invoices",
        href: "",
      },
      {
        title: "Sales Receipt",
        href: "",
      },
      {
        title: "Payments Received",
        href: "",
      },
      {
        title: "Sales Returns",
        href: "",
      },
      {
        title: "Credit Notes",
        href: "",
      },
    ],
  },
  {
    title: "Purchases",
    icon: "shoppingBasket",
    items: [
      {
        title: "Expenses",
        href: "",
      },
      {
        title: "Bills",
        href: "",
      },
      {
        title: "Payments Made",
        href: "",
      },
      {
        title: "Purchase Orders",
        href: "",
      },
      {
        title: "Purchase Receive",
        href: "",
      },
      {
        title: "Vendor Credits",
        href: "",
      },
    ],
  },
  {
    title: "Reminders & Notifications",
    icon: "notifications",
    items: [
      {
        title: "Reminders",
        href: "",
      },
      {
        title: "Email Notifications",
        href: "",
      },
    ],
  },
  {
    title: "Users & Roles",
    icon: "users",
    items: [
      {
        title: "Users",
        href: "",
      },
      {
        title: "Roles",
        href: "",
      },
      {
        title: "User Preferences",
        href: "",
      },
    ],
  },
  {
    title: "Customisation",
    icon: "customisations",
    items: [
      {
        title: "Reporting Tags",
        href: "",
      },
      {
        title: "Web Tabs",
        href: "",
      },
      {
        title: "Transaction Number Series",
        href: "",
      },
      {
        title: "PDF Templates",
        href: "",
      },
    ],
  },
  {
    title: "Online Payments",
    icon: "creditCard",
    items: [
      {
        title: "Payment Gateways",
        href: "",
      },
    ],
  },
  {
    title: "Integrations & Marketplace",
    icon: "integrations",
    items: [
      {
        title: "Shipping",
        href: "",
      },
      {
        title: "Shopping Card",
        href: "",
      },
      {
        title: "eCommerce",
        href: "",
      },
      {
        title: "Accounting",
        href: "",
      },
      {
        title: "Sales & Marketing",
        href: "",
      },
      {
        title: "SMS Integrations",
        href: "",
      },
      {
        title: "Apps",
        href: "",
      },
      {
        title: "ZSC Key",
        href: "",
      },
      {
        title: "Marketplace",
        href: "",
      },
    ],
  },
  {
    title: "Automation",
    icon: "automation",
    items: [
      {
        title: "Workflow Rules",
        href: "",
      },
      {
        title: "Workflow Actions",
        href: "",
      },
      {
        title: "Workflow Logs",
        href: "",
      },
      {
        title: "Schedules",
        href: "",
      },
    ],
  },
  {
    title: "Developer Space",
    icon: "devSpace",
    items: [
      {
        title: "Incoming Webhooks",
        href: "",
      },
      {
        title: "Connections",
        href: "",
      },
      {
        title: "API Usage",
        href: "",
      },
      {
        title: "Signals",
        href: "",
      },
      {
        title: "data Backup",
        href: "",
      },
    ],
  },
  {
    title: "Custom Models",
    icon: "customModels",
    items: [
      {
        title: "Overview",
        href: "",
      },
    ],
  },
] satisfies SettingsOption[]
