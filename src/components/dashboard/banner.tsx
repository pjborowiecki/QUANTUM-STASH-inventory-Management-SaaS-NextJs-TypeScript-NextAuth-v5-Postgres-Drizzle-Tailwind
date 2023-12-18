"use client"

import * as React from "react"
import Balancer from "react-wrap-balancer"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Banner(): JSX.Element {
  const [hidden, setHidden] = React.useState<boolean>(false)

  return (
    <div
      className={
        hidden
          ? "hidden"
          : "relative flex w-full gap-4 border-b bg-accent/50 p-5"
      }
    >
      <div className="flex w-1/2 items-center gap-5">
        <Icons.creditCard
          className="h-20 w-20 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
        <div className="max-w-md space-y-2">
          <h2 className="whitespace-nowrap text-2xl font-bold tracking-wide">
            Start accepting online payments
          </h2>
          <p className="text-muted-foreground">
            <Balancer>
              Businesses are moving towards online payments as they are easy,
              secure and fast. Try them for your business today.
            </Balancer>
          </p>
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-center gap-4">
        <Button
          size="lg"
          className="px-8 font-semibold uppercase"
          aria-label="Enable online payments"
        >
          enable now
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="px-8 font-semibold uppercase"
          aria-label="Hide promotional banner"
          onClick={() => setHidden(true)}
        >
          hide banner
        </Button>
      </div>
    </div>
  )
}
