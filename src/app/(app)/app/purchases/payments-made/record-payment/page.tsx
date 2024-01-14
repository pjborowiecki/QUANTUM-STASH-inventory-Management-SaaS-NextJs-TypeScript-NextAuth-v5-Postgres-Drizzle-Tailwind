import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppPurchasesPaymentsMadeRecordPaymentPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Purchases PaymentsMade RecordPayment Page</div>
}
