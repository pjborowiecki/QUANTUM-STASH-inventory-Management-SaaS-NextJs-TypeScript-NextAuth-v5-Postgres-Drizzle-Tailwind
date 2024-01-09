import * as React from "react"
import { redirect } from "next/navigation"
import { auth } from "@/auth"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({
  children,
}: AppLayoutProps): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>{children}</div>
}
