import * as z from "zod"

export const addCategorySchema = z.object({
  name: z.string(),
  description: z.string(),
})

export const addItemSchema = z.object({
  type: z.string(),
  category: z.string(),
  name: z.string(),
  sku: z.string(),
  unit: z.string(),
  returnable: z.boolean(),
})

export const addUnitSchema = z.object({
  name: z.string(),
  abbreviation: z.string(),
})
