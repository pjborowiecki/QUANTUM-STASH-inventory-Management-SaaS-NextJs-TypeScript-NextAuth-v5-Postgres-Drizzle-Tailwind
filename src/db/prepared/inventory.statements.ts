import { db } from "@/db"
import { brands, categories, items, units } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

// CATEGORIES
export const psGetCategoryByName = db
  .select()
  .from(categories)
  .where(eq(categories.name, sql.placeholder("name")))
  .prepare("psGetCategoryNyName")

export const psGetCategoryById = db
  .select()
  .from(categories)
  .where(eq(categories.id, sql.placeholder("id")))
  .prepare("psGetCategoryById")

export const psGetAllCategories = db
  .select()
  .from(categories)
  .prepare("psGetAllCategories")

// BRANDS
export const psGetBrandByName = db
  .select()
  .from(brands)
  .where(eq(brands.name, sql.placeholder("name")))
  .prepare("psGetBrandByName")

export const psGetBrandById = db
  .select()
  .from(brands)
  .where(eq(brands.id, sql.placeholder("id")))
  .prepare("psGetBrandById")

export const psGetAllBrands = db.select().from(brands).prepare("psGetAllBrands")

// UNITS
export const psGetUnitByName = db
  .select()
  .from(units)
  .where(eq(units.name, sql.placeholder("name")))
  .prepare("psGetUnitByName")

export const psGetUnitById = db
  .select()
  .from(units)
  .where(eq(units.id, sql.placeholder("id")))
  .prepare("psGetUnitById")

export const psGetAllUnits = db.select().from(units).prepare("psGetAllUnits")

// ITEMS
export const psGetItemByName = db
  .select()
  .from(items)
  .where(eq(items.name, sql.placeholder("name")))
  .prepare("psGetItemByName")

export const psGetItemById = db
  .select()
  .from(items)
  .where(eq(items.id, sql.placeholder("id")))
  .prepare("psGetItemById")

export const psGetAllItems = db.select().from(items).prepare("psGetAllItems")
