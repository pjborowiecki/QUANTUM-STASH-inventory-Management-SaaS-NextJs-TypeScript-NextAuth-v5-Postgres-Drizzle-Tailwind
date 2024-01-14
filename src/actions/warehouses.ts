"use server"

import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/db"
import {
  psGetAllWarehouses,
  psGetWarehouseById,
  psGetWarehouseByName,
} from "@/db/prepared/warehouses.statements"
import { warehouses, type Warehouse } from "@/db/schema"
import {
  deleteWarehouseSchema,
  getWarehouseByIdSchema,
  getWarehouseByNameSchema,
  updateWarehouseSchema,
  warehouseSchema,
  type AddWarehouseFormInput,
  type DeleteWarehouseFormInput,
  type GetWarehouseByIdFormInput,
  type GetWarehouseByNameFormInput,
  type UpdateWarehouseFormInput,
} from "@/validations/warehouses"
import { eq } from "drizzle-orm"

export async function getWarehouseByName(
  rawInput: GetWarehouseByNameFormInput
): Promise<Warehouse | null> {
  const validatedInput = getWarehouseByNameSchema.safeParse(rawInput)
  if (!validatedInput.success) return null

  try {
    noStore()
    const [warehouse] = await psGetWarehouseByName.execute({
      name: validatedInput.data.name.toLowerCase().trim(),
    })

    return warehouse || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting warehouse by name")
  }
}

export async function getWarehouseById(
  rawInput: GetWarehouseByIdFormInput
): Promise<Warehouse | null> {
  const validatedInput = getWarehouseByIdSchema.safeParse(rawInput)
  if (!validatedInput.success) return null

  try {
    noStore()
    const [warehouse] = await psGetWarehouseById.execute({
      id: validatedInput.data.id,
    })

    return warehouse || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting warehouse by id")
  }
}

export async function getAllWarehouses(): Promise<Warehouse[] | null> {
  try {
    noStore()
    const warehouses = await psGetAllWarehouses.execute()
    return warehouses || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting all warehouses")
  }
}

export async function addWarehouse(
  rawInput: AddWarehouseFormInput
): Promise<"invalid-input" | "exists" | "error" | "success"> {
  const validatedInput = warehouseSchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    const existingWarehouse = await getWarehouseByName({
      name: validatedInput.data.name.toLowerCase().trim(),
    })
    if (existingWarehouse) return "exists"

    // TODO: Replace with prepared statement
    const newWarehouse = await db
      .insert(warehouses)
      .values({
        name: validatedInput.data.name.toLowerCase().trim(),
        type: validatedInput.data.type,
        description: validatedInput.data.description,
        location: validatedInput.data.location,
      })
      .returning()

    return newWarehouse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error adding new warehouse")
  }
}

export async function deleteWarehouse(
  rawInput: DeleteWarehouseFormInput
): Promise<"invalid-input" | "success" | "error"> {
  const validatedInput = deleteWarehouseSchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    // TODO: Replace with prepared statement
    const deletedWarehouse = await db
      .delete(warehouses)
      .where(eq(warehouses.id, validatedInput.data.id))

    return deletedWarehouse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error deleting warehouse")
  }
}

export async function updateWarehouse(
  rawInput: UpdateWarehouseFormInput
): Promise<"invalid-input" | "exists" | "success" | "error"> {
  const validatedInput = updateWarehouseSchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    const existingWarehouse = await getWarehouseByName({
      name: validatedInput.data.name.toLowerCase().trim(),
    })

    if (
      existingWarehouse &&
      existingWarehouse.name !== validatedInput.data.name.toLowerCase().trim()
    )
      return "exists"

    const newWarehouse = await db
      .update(warehouses)
      .set({
        name: validatedInput.data.name.toLowerCase().trim(),
        type: validatedInput.data.type,
        description: validatedInput.data.description,
        location: validatedInput.data.location,
      })
      .where(eq(warehouses.id, validatedInput.data.id))
      .returning()

    return newWarehouse ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error updating warehouse")
  }
}
