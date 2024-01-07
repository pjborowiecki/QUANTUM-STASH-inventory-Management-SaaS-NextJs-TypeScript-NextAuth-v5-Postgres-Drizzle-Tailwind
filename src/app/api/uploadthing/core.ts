import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const uploadFilesRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
    .middleware(
      // TODO: async
      (_req) => {
        // const user = await currentUser()
        const user = {
          id: "abc",
          name: "sampleUser",
          email: "sampleuser@test.com",
        }
        if (!user) throw new Error("Unauthorized")
        return { userId: user.id }
      }
    )
    // eslint-disable-next-line @typescript-eslint/require-await
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("file url", file.url)
    }),
} satisfies FileRouter

export type UploadFilesRouter = typeof uploadFilesRouter
