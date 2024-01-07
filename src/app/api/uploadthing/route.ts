import { createNextRouteHandler } from "uploadthing/next"

import { uploadFilesRouter } from "@/app/api/uploadthing/core"

export const { GET, POST } = createNextRouteHandler({
  router: uploadFilesRouter,
})
