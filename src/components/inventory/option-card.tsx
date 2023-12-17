import Link from "next/link"
import { type InventoryOption } from "@/types"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { buttonVariants } from "../ui/button"

interface OptionCardProps {
  option: InventoryOption
}

export function OptionCard({ option }: OptionCardProps) {
  const Icon = Icons[option.icon as keyof typeof Icons]

  return (
    <div
      key={option.title}
      className="flex flex-col items-center justify-center gap-4 rounded-md bg-tertiary p-10 transition-all duration-300 ease-in-out hover:bg-secondary/60 xl:p-16"
    >
      <h3 className="text-xl font-semibold tracking-wide">{option.title}</h3>
      <Icon
        className="h-14 w-14 text-foreground/40 xl:h-18 xl:w-18"
        aria-hidden="true"
      />
      <p className="max-w-xs text-center text-sm tracking-wide text-muted-foreground">
        <Balancer>{option.description}</Balancer>
      </p>
      <Link
        href={option.href}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "mt-2"
        )}
        aria-label={`Select ${option.buttonText}`}
      >
        {option.buttonText}
      </Link>
    </div>
  )
}
