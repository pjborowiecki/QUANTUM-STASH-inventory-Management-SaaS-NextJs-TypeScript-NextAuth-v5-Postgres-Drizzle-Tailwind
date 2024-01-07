"use server"

import { type brandSchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addBrand(input: z.infer<typeof brandSchema>) {
  console.log(input.name)
  console.log("Adding brand to the database...")
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Brand added to the database")
      resolve("success")
    }, 1000)
  })
}
