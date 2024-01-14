import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesCreditNotesNewNotePage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales CreditNotes NewNote Page</div>
}
