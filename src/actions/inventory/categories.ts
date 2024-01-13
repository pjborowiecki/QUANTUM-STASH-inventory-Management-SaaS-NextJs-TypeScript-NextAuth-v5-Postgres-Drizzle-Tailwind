"use server"

import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/db"
import {
  psGetAllCategories,
  psGetCategoryById,
  psGetCategoryByName,
} from "@/db/prepared/inventory.statements"
import { categories, type Category } from "@/db/schema"
import {
  categorySchema,
  deleteCategorySchema,
  getCategoryByIdSchema,
  getCategoryByNameSchema,
  updateCategorySchema,
  type AddCategoryFormInput,
  type DeleteCategoryFormInput,
  type GetCategoryByIdFormInput,
  type GetCategoryByNameFormInput,
  type UpdateCategoryFormInput,
} from "@/validations/inventory"
import { eq } from "drizzle-orm"

export async function getCategoryByName(
  rawInput: GetCategoryByNameFormInput
): Promise<Category | null> {
  const validatedInput = getCategoryByNameSchema.parse(rawInput)
  if (!validatedInput) return null

  try {
    noStore()
    const [category] = await psGetCategoryByName.execute({
      name: validatedInput.name.toLowerCase().trim(),
    })

    return category || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting category by name")
  }
}

export async function getCategoryById(
  rawInput: GetCategoryByIdFormInput
): Promise<Category | null> {
  const validatedInput = getCategoryByIdSchema.parse(rawInput)
  if (!validatedInput) return null

  try {
    noStore()
    const [category] = await psGetCategoryById.execute({
      id: validatedInput.id,
    })
    return category || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting category by id")
  }
}

export async function getAllCategories(): Promise<Category[] | null> {
  try {
    noStore()
    const categories = await psGetAllCategories.execute()
    return categories || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting all categories")
  }
}

export async function addCategory(
  rawInput: AddCategoryFormInput
): Promise<"invalid-input" | "exists" | "error" | "success"> {
  const validatedInput = categorySchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    const existingCategory = await getCategoryByName({
      name: validatedInput.data.name,
    })
    if (existingCategory) return "exists"

    // TODO: Replace with prepared statement
    const newCategoryResponse = await db.insert(categories).values({
      name: validatedInput.data.name.toLowerCase().trim(),
      description: validatedInput.data.description,
    })

    return newCategoryResponse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error adding new category")
  }
}

export async function deleteCategory(
  rawInput: DeleteCategoryFormInput
): Promise<"invalid-input" | "success" | "error"> {
  const validatedInput = deleteCategorySchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    // TODO: Replace with prepared statement
    const deletedCategory = await db
      .delete(categories)
      .where(eq(categories.id, validatedInput.data.id))

    return deletedCategory ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error deleting category")
  }
}

export async function updateCategory(
  rawInput: UpdateCategoryFormInput
): Promise<"invalid-input" | "success" | "error"> {
  const validatedInput = updateCategorySchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    const existingCategory = await getCategoryById({
      id: validatedInput.data.id,
    })
    if (!existingCategory) return "error"

    // TODO: Replace with prepared statement
    const newCategoryResponse = await db
      .update(categories)
      .set(validatedInput.data)
      .where(eq(categories.id, existingCategory.id))

    return newCategoryResponse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error updating category")
  }
}
