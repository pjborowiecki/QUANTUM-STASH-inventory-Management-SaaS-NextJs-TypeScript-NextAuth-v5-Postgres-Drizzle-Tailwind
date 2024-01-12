"use server"

import { db } from "@/db"
import { categories, type NewCategory } from "@/db/schema"
import {
  categorySchema,
  type AddCategoryFormInput,
} from "@/validations/inventory"

export async function getCategoryByName() {}

export async function addCategory(
  rawInput: AddCategoryFormInput
): Promise<"invalid-input"> {
  const validatedInput = categorySchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  const existingCategory = getCategoryByName()

  try {
  } catch (error) {
    console.error(error)
    throw new Error("Error adding new category")
  }
}
