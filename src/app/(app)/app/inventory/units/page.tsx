import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppInventoryUnitsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div className="p-5">App Inventory Units Page</div>
}
