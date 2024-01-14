import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppPurchasesVendorCreditsNewCreditPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Purchases VendorCredits NewCredit Page</div>
}
