import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@/auth"

import { settingsOptions } from "@/data/constants/settings"
import { Icons } from "@/components/icons"

export default async function SettingsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div className="grid max-w-8xl grid-flow-row grid-cols-1 gap-5 p-5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {settingsOptions.map((option) => {
        const Icon = Icons[option.icon as keyof typeof Icons]

        return (
          <div
            key={option.title}
            className="h-full w-full min-w-[300px] space-y-2 rounded-md border bg-tertiary"
          >
            <div className="flex items-center gap-2 border-b px-5 py-3">
              <Icon className="h-5 w-5 text-muted-foreground" />
              <h2 className="whitespace-nowrap text-lg font-semibold tracking-wide">
                {option.title}
              </h2>
            </div>

            <div className="flex flex-col gap-3 px-5 py-3">
              {option.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-muted-foreground underline-offset-8 hover:text-foreground hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
