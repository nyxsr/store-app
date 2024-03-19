import { relations } from "drizzle-orm";
import { pgTable, timestamp, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";
import { products } from "./product";

export const categories = pgTable("categories", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
    products: many(products)
}))

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert