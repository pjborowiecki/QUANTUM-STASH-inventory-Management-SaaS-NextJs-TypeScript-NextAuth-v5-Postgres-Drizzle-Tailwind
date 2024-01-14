import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesPackagesNewPackagePage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales Packages NewPackage Page</div>
}
