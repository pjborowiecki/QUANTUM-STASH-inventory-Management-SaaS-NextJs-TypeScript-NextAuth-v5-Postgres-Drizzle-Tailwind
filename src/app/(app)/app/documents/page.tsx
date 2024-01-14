import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppDocumentsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div className="p-5">TODO: App Documents Page</div>
}
