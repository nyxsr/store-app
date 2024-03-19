import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { categories } from "./category";
import { relations } from "drizzle-orm";

export const products = pgTable("products", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }),
    categoryId: uuid("category_id").notNull().references(() => categories.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    deletedAt: timestamp("deleted_at"),
})

export const productsRelations = relations(products, ({ one }) => ({
    category: one(categories,{
        fields: [products.categoryId],
        references: [categories.id],
    })
}))

export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert