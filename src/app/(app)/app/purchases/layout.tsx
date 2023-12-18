import * as React from "react"

interface AppPurchasesLayoutProps {
  children: React.ReactNode
}

export default function AppPurchasesLayout({
  children,
}: AppPurchasesLayoutProps): JSX.Element {
  return <div className="p-5">{children}</div>
}
