import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CustomTooltipProps {
  children: React.ReactNode
  text: string
  triggerStyles?: string
  contentStyles?: string
}

export function CustomTooltip({
  children,
  text,
  triggerStyles,
  contentStyles,
}: CustomTooltipProps): JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={triggerStyles}>
          {children}
        </TooltipTrigger>
        <TooltipContent className={cn("z-[99]", contentStyles)}>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
