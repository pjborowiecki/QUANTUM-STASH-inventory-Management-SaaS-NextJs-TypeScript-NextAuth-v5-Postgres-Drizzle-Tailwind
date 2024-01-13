import * as z from "zod"

// CATEGORIES
export const categorySchema = z.object({
  name: z.string(),
  description: z.string(),
})

export const deleteCategorySchema = z.object({
  id: z.number(),
})

export const getCategoryByIdSchema = z.object({
  id: z.number(),
})

export const getCategoryByNameSchema = z.object({
  name: z.string(),
})

export const updateCategorySchema = categorySchema.extend({
  id: z.number(),
})

export type AddCategoryFormInput = z.infer<typeof categorySchema>
export type UpdateCategoryFormInput = z.infer<typeof updateCategorySchema>
export type DeleteCategoryFormInput = z.infer<typeof deleteCategorySchema>
export type GetCategoryByNameFormInput = z.infer<typeof getCategoryByNameSchema>
export type GetCategoryByIdFormInput = z.infer<typeof getCategoryByIdSchema>

// ITEMS
export const itemSchema = z.object({
  name: z.string(),
  category: z.string(),
  brand: z.string(),
  barcode: z.string(),
  description: z.string(),
  sellingPrice: z
    .string({
      required_error: "Selling Price is required",
      invalid_type_error: "Selling Price must be a string",
    })
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: "Invalid format",
    }),
  purchasePrice: z
    .string({
      required_error: "Purchase Price is required",
      invalid_type_error: "Purchase Price must be a string",
    })
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: "Invalid format",
    }),
  taxRate: z
    .number({
      required_error: "Tax Reate is required",
      invalid_type_error: "Tax Rate must be a number",
    })
    .positive({ message: "Tax Rate must greater than 0" })
    .min(1, {
      message: "Tax Rate must greater than 0",
    }),
  width: z
    .number({
      required_error: "Width is required",
      invalid_type_error: "Width must be a number",
    })
    .positive({ message: "Width must greater than 0" })
    .min(1, {
      message: "Width must greater than 0",
    }),
  height: z
    .number({
      required_error: "Height is required",
      invalid_type_error: "Height must be a number",
    })
    .positive({ message: "Height must greater than 0" })
    .min(1, {
      message: "Height must greater than 0",
    }),
  depth: z
    .number({
      required_error: "Depth is required",
      invalid_type_error: "Depth must be a number",
    })
    .positive({ message: "Depth must greater than 0" })
    .min(1, {
      message: "Depth must greater than 0",
    }),
  dimensionsUnit: z.string(),
  weight: z
    .number({
      required_error: "Weigth is required",
      invalid_type_error: "Weight must be a number",
    })
    .positive({ message: "Weight must greater than 0" })
    .min(1, {
      message: "Weight must greater than 0",
    }),
  weightUnit: z.string(),
  warehouse: z.string(),
  sku: z.string(),
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .positive({ message: "Quantity must greater than 0" })
    .min(1, {
      message: "Quantity must greater than 0",
    }),
  unit: z.string(),
  reorderPoint: z
    .number({
      required_error: "Reorder Point is required",
      invalid_type_error: "Reorder Point must be a number",
    })
    .positive({ message: "Reorder Point must greater than 0" })
    .min(1, {
      message: "Reorder Point must greater than 0",
    }),
  supplier: z.string(),
  notes: z.string(),
  images: z
    .unknown()
    .refine((val) => {
      if (!Array.isArray(val)) return false
      if (val.some((file) => !(file instanceof File))) return false
      return true
    }, "Images must be an array of Files")
    .optional()
    .nullable()
    .default(null),
})

export const extendedItemSchema = itemSchema.extend({
  images: z
    .array(z.object({ id: z.string(), name: z.string(), url: z.string() }))
    .nullable(),
})

export type AddItemFormInput = z.infer<typeof itemSchema>

// UNITS
export const unitSchema = z.object({
  name: z.string(),
  abbreviation: z.string(),
})

export type AddUnitFormInput = z.infer<typeof unitSchema>

// BRANDS
export const brandSchema = z.object({
  name: z.string(),
})

export type AddBrandFormInput = z.infer<typeof brandSchema>
