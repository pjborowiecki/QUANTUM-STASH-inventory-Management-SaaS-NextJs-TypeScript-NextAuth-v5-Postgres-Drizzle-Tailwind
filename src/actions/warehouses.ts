"use server"

import type { warehouseSchema } from "@/validations/warehouses"
import type { z } from "zod"

export async function addWarehouse(input: z.infer<typeof warehouseSchema>) {
  console.log(input.name)
  console.log(input.type)
  console.log(input.description)
  console.log(input.location)
  console.log("Adding warehouse to the database...")
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Warehouse added to the database")
      resolve("success")
    }, 1000)
  })
}
