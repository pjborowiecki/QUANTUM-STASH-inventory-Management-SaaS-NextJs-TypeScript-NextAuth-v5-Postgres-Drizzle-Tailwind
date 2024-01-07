import "react-medium-image-zoom/dist/styles.css"

import * as React from "react"
import MediumZoom from "react-medium-image-zoom"

export function Zoom({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <MediumZoom zoomMargin={80} classDialog="zoom-image">
      {children}
    </MediumZoom>
  )
}
