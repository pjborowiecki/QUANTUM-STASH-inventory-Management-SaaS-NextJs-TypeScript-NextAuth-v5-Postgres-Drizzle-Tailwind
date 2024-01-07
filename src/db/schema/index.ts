import { relations } from "drizzle-orm"
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 127 }).notNull(),
})

export type Item = typeof items.$inferSelect
export type NewItem = typeof items.$inferInsert
