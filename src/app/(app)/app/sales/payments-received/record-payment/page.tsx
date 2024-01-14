import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesPaymentsReceivedRecordPaymentPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales PaymentsReceived RecordPayment Page</div>
}
