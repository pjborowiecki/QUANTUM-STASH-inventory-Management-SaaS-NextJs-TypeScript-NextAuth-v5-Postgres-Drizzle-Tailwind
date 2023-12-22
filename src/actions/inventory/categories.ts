"use server"

import { type addCategorySchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addNewCategory(input: z.infer<typeof addCategorySchema>) {
  console.log(input.name, input.description)
  return "success"
}
