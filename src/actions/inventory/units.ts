"use server"

import { type addUnitSchema } from "@/validations/inventory"
import type { z } from "zod"

export async function addNewUnit(input: z.infer<typeof addUnitSchema>) {
  console.log(input.name, input.abbreviation)
  return "success"
}
