import { db } from "@/db"
import { warehouses } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

export const psGetWarehouseByName = db
  .select()
  .from(warehouses)
  .where(eq(warehouses.name, sql.placeholder("name")))
  .prepare("psGetWarehouseyNyName")

export const psGetWarehouseById = db
  .select()
  .from(warehouses)
  .where(eq(warehouses.id, sql.placeholder("id")))
  .prepare("psGetWarehouseById")

export const psGetAllWarehouses = db
  .select()
  .from(warehouses)
  .prepare("psGetAllWarehouses")
