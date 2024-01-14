import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppPurchasesVendorsNewVendorPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Purchases Vendors NewVendor Page</div>
}
