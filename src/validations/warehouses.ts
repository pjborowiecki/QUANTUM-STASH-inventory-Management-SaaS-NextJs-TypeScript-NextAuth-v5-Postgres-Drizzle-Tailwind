import * as z from "zod"

export const addWarehouseSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string(),
  location: z.string(),
})
