import * as React from "react"

import { Header } from "@/components/nav/app/header"
import { Sidebar } from "@/components/nav/app/sidebar"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
