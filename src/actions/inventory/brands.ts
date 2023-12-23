"use server"

import { type addBrandSchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addNewBrand(input: z.infer<typeof addBrandSchema>) {
  console.log(input.name)
  return "success"
}
