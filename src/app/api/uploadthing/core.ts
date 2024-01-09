import { auth } from "@/auth"
import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const uploadFilesRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
    .middleware(async (_req) => {
      const session = await auth()
      if (!session) throw new Error("Unauthorized")
      return { userId: session.user.id }
    })
    // eslint-disable-next-line @typescript-eslint/require-await
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("file url", file.url)
    }),
} satisfies FileRouter

export type UploadFilesRouter = typeof uploadFilesRouter
