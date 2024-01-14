import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppSalesCustomersNewCustomerPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales Customers NewCustomer Page</div>
}
