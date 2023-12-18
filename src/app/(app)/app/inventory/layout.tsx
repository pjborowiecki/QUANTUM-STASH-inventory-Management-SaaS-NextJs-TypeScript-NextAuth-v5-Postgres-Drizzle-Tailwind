import * as React from "react"

interface AppInventoryLayoutProps {
  children: React.ReactNode
}

export default function AppInventoryLayout({
  children,
}: AppInventoryLayoutProps): JSX.Element {
  return <div className="p-5">{children}</div>
}
