import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesPackagesPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales Packages Page</div>
}
