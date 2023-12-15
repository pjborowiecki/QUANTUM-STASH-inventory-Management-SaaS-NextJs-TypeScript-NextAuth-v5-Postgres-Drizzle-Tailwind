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
          : "relative flex gap-4 border-b bg-accent/50 px-7 py-5"
      }
    >
      <div className="flex shrink-0 items-center gap-5">
        <Icons.creditCard
          className="h-20 w-20 text-muted-foreground"
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

      <div className="flex flex-1 grow items-center justify-center">
        <Button
          className="px-8 font-semibold uppercase"
          aria-label="Enable online payments"
        >
          enable
        </Button>

        <Button
          variant="ghost"
          className="absolute right-0 top-2"
          onClick={() => setHidden(true)}
          aria-label="Close the promo banner"
        >
          <Icons.close aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
