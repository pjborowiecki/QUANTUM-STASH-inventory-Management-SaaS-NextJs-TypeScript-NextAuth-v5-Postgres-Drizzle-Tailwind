import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppHomeGettingStartedPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div className="p-5">App Home Getting Started Page</div>
}
