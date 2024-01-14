import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppdHomeUpdatesPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div className="p-5">App Home Updates Page</div>
}
