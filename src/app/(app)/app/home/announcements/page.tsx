import { redirect } from "next/navigation"
import { auth } from "@/auth"
import Balancer from "react-wrap-balancer"

export default async function AppHomeAnnouncementsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div className=" flex h-full flex-1 flex-col items-center space-y-2 p-5">
      <h2 className="text-lg font-semibold">Never miss an announcement</h2>
      <p className="text-muted-foreground">
        <Balancer>
          This tab is your one-stop hub to keep track of our latest events,
          webinars, and important updates.
        </Balancer>
      </p>
    </div>
  )
}
