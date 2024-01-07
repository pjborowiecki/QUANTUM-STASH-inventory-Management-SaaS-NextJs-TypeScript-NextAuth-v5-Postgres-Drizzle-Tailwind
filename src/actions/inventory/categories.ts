"use server"

import type { categorySchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addCategory(input: z.infer<typeof categorySchema>) {
  console.log(input.name, input.description)
  console.log("Adding new category to the database")
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Category added to the database")
      resolve("success")
    }, 1000)
  })
}
