"use server"

import type { unitSchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addUnit(input: z.infer<typeof unitSchema>) {
  console.log(input.name, input.abbreviation)
  console.log("Adding unit to the database...")
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Unit added to the database")
      resolve("success")
    }, 1000)
  })
}
