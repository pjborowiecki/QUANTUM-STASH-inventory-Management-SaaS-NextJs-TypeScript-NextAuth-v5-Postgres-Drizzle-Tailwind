"use server"

import { type addWarehouseSchema } from "@/validations/warehouses"
import type { z } from "zod"

export async function addNewWarehouse(
  input: z.infer<typeof addWarehouseSchema>
) {
  console.log(input.name)
  console.log(input.type)
  console.log(input.description)
  console.log(input.location)
  return "success"
}
