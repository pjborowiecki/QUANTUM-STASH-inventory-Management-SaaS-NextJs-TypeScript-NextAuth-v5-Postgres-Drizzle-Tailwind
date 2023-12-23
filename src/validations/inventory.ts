import * as z from "zod"

export const addCategorySchema = z.object({
  name: z.string(),
  description: z.string(),
})

export const addItemSchema = z.object({
  category: z.string(),
  name: z.string(),
  description: z.string(),
  brand: z.string(),
  sku: z.string(),
  barcode: z.string(),
  unit: z.string(),
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .positive({ message: "Quantity must greater than 0" })
    .min(1, {
      message: "Quantity must greater than 0",
    }),
  sellingPrice: z
    .number({
      required_error: "Selling Price is required",
      invalid_type_error: "Selling Price must be a number",
    })
    .positive({ message: "Selling Price must greater than 0" })
    .min(1, {
      message: "Selling Price must greater than 0",
    }),
  purchasePrice: z
    .number({
      required_error: "Purchase Price is required",
      invalid_type_error: "Purchase Price must be a number",
    })
    .positive({ message: "Purchase Price must greater than 0" })
    .min(1, {
      message: "Purchase Price must greater than 0",
    }),
  supplier: z.string(),
  reorderPoint: z
    .number({
      required_error: "Reorder Point is required",
      invalid_type_error: "Reorder Point must be a number",
    })
    .positive({ message: "Reorder Point must greater than 0" })
    .min(1, {
      message: "Reorder Point must greater than 0",
    }),
  warehouse: z.string(),
  weight: z
    .number({
      required_error: "Weigth is required",
      invalid_type_error: "Weight must be a number",
    })
    .positive({ message: "Weight must greater than 0" })
    .min(1, {
      message: "Weight must greater than 0",
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
  width: z
    .number({
      required_error: "Width is required",
      invalid_type_error: "Width must be a number",
    })
    .positive({ message: "Width must greater than 0" })
    .min(1, {
      message: "Width must greater than 0",
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
  weightUnit: z.string(),
  taxRate: z
    .number({
      required_error: "Tax Reate is required",
      invalid_type_error: "Tax Rate must be a number",
    })
    .positive({ message: "Tax Rate must greater than 0" })
    .min(1, {
      message: "Tax Rate must greater than 0",
    }),
  notes: z.string(),
  images: z.string(),
})

export const addUnitSchema = z.object({
  name: z.string(),
  abbreviation: z.string(),
})

export const addBrandSchema = z.object({
  name: z.string(),
})
