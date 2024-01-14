import type { StoredFile } from "@/types"
import type { AdapterAccount } from "@auth/core/adapters"
import { relations } from "drizzle-orm"
import {
  decimal,
  integer,
  json,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const userRoleEnum = pgEnum("user_role", ["user", "admin"])

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}))

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  surname: text("surname"),
  username: text("username").unique(),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  emailVerificationToken: text("emailVerificationToken").unique(),
  passwordHash: text("passwordHash"),
  resetPasswordToken: text("resetPasswordToken").unique(),
  resetPasswordTokenExpiry: timestamp("resetPasswordTokenExpiry", {
    mode: "date",
  }),
  image: text("image"),
  role: userRoleEnum("user"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
})

export const usersRelations = relations(users, ({ one, many }) => ({
  account: one(accounts, {
    fields: [users.id],
    references: [accounts.userId],
  }),
  session: many(sessions),
}))

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
)

export const warehouses = pgTable("warehouse", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
  type: varchar("type", { length: 24 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 64 }).notNull(),
})

export const categories = pgTable("category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).unique().notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
})

export const brands = pgTable("brand", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).unique().notNull(),
})

export const items = pgTable("item", {
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

export const units = pgTable("unit", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 24 }).unique().notNull(),
  abbreviation: varchar("abbreviation", { length: 8 }).notNull().unique(),
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Account = typeof accounts.$inferSelect
export type NewAccount = typeof accounts.$inferInsert

export type Session = typeof sessions.$inferSelect
export type NewSession = typeof sessions.$inferInsert

export type VerificationToken = typeof verificationTokens.$inferSelect
export type NewVerificationToken = typeof verificationTokens.$inferInsert

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
