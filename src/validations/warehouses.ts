import * as z from "zod"

export const warehouseSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string(),
  location: z.string(),
})

export const deleteWarehouseSchema = z.object({
  id: z.number(),
})

export const getWarehouseByIdSchema = z.object({
  id: z.number(),
})

export const getWarehouseByNameSchema = z.object({
  name: z.string(),
})

export const updateWarehouseSchema = warehouseSchema.extend({
  id: z.number(),
})

export type AddWarehouseFormInput = z.infer<typeof warehouseSchema>
export type UpdateWarehouseFormInput = z.infer<typeof updateWarehouseSchema>
export type DeleteWarehouseFormInput = z.infer<typeof deleteWarehouseSchema>
export type GetWarehouseByNameFormInput = z.infer<
  typeof getWarehouseByNameSchema
>
export type GetWarehouseByIdFormInput = z.infer<typeof getWarehouseByIdSchema>
