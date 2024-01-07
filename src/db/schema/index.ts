import { type StoredFile } from "@/types"
import {
  decimal,
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const warehouses = pgTable("warehouses", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
  type: varchar("type", { length: 32 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 32 }).notNull(),
})

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).unique().notNull(),
  description: text("description"),
})

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).unique().notNull(),
})

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  // TODO: Link to category id, define relations
  category: varchar("category", { length: 64 }).notNull(),
  // TODO: Link to brand id, define relations
  brand: varchar("brand", { length: 64 }).notNull(),
  barcode: varchar("barcode", { length: 64 }).notNull(),
  description: text("description"),
  sellingPrice: decimal("selling_price", { precision: 10, scale: 2 })
    .notNull()
    .default("0"),
  purchasePrice: decimal("purchase_price", { precision: 10, scale: 2 })
    .notNull()
    .default("0"),
  taxRate: decimal("tax_rate", { precision: 3, scale: 1 })
    .notNull()
    .default("0"),
  width: decimal("width", { precision: 10, scale: 2 }).notNull().default("0"),
  height: decimal("height", { precision: 10, scale: 2 }).notNull().default("0"),
  depth: decimal("depth", { precision: 10, scale: 2 }).notNull().default("0"),
  // TODO: Link to unit id, define relations
  dimensionsUnit: varchar("dimensions_unit", { length: 8 }).notNull(),
  weight: decimal("weight", { precision: 10, scale: 2 }).notNull().default("0"),
  // TODO: Link to unit id, define relations
  weightUnit: varchar("dimensions_unit", { length: 8 }).notNull(),
  // TODO: Link to warehouse id, define relations
  warehouse: varchar("warehouse").notNull(),
  sku: varchar("sku", { length: 128 }).notNull(),
  quantity: integer("quantity").notNull(),
  // TODO: Link to unit id, define relations
  unit: varchar("unit", { length: 8 }).notNull(),
  reorderPoint: integer("reorder_point").notNull(),
  // TODO: Possibly add suppliers table, link id, define relations
  supplier: varchar("supplier", { length: 64 }).notNull(),
  notes: text("notes"),
  images: json("images").$type<StoredFile[] | null>().default(null),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
})

export const units = pgTable("units", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 24 }).unique().notNull(),
  abbreviation: varchar("abbreviation", { length: 8 }).notNull().unique(),
})

export type Warehouse = typeof warehouses.$inferSelect
export type NewWarehouse = typeof warehouses.$inferInsert

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert

export type Brand = typeof brands.$inferSelect
export type NewBrand = typeof brands.$inferInsert

export type Item = typeof items.$inferSelect
export type NewItem = typeof items.$inferInsert

export type Unit = typeof units.$inferSelect
export type NewUnit = typeof units.$inferInsert
