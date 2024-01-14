import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesPaymentsReceivedPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales PaymentsReceived Page</div>
}
