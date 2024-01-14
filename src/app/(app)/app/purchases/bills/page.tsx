import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppPurchasesBillsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Purchases Bills Page</div>
}
