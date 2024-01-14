import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppPurchasesExpensesNewExpensePage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Purchases Expenses NewExpense Page</div>
}
