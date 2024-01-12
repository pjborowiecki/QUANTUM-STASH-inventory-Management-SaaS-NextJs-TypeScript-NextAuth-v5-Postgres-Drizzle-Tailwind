"use server"

import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/db"
import {
  psGetAllCategories,
  psGetCategoryById,
  psGetCategoryByName,
} from "@/db/prepared/inventory.statements"
import { categories, type Category, type NewCategory } from "@/db/schema"
import {
  categorySchema,
  type AddCategoryFormInput,
} from "@/validations/inventory"

export async function getCategoryByName(
  name: string
): Promise<Category | null> {
  noStore()
  try {
    const [category] = await psGetCategoryByName.execute({
      name: name.toLowerCase().trim(),
    })
    return category || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting category by name")
  }
}

export async function getCategoryById(id: string): Promise<Category | null> {
  noStore()
  try {
    const [category] = await psGetCategoryById.execute({ id })
    return category || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting category by id")
  }
}

export async function getAllCategories(): Promise<Category[] | null> {
  noStore()
  try {
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
    const existingCategory = await getCategoryByName(validatedInput.data.name)
    if (existingCategory) return "exists"

    const newCategoryResponse = await db.insert(categories).values({
      name: validatedInput.data.name.toLowerCase().trim(),
      description: validatedInput.data.description,
    } as NewCategory)

    console.log("NEW CATEGORY RESPONSE", newCategoryResponse)

    return newCategoryResponse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error adding new category")
  }
}
