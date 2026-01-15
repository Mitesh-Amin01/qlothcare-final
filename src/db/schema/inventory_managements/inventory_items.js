import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { inventory_categories } from "./inventory_categories";

export const inventory_items = pgTable(
  "inventory_items",
  {
    id: serial("id").primaryKey(),

    category_id: integer("category_id")
      .notNull()
      .references(() => inventory_categories.id),

    name: varchar("name", { length: 255 }).notNull(),

    sku: varchar("sku", { length: 100 })
      .notNull(),

    unit: varchar("unit", { length: 50 }).notNull(),
    // KG | LITER | PIECE | BOX

    reorder_level: decimal("reorder_level").default("10"),

    has_expiry: boolean("has_expiry").default(false),

    shelf_life_days: integer("shelf_life_days"),

    is_hazardous: boolean("is_hazardous").default(false),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    sku_unique: uniqueIndex("idx_inv_item_sku").on(table.sku),

    category_idx: index("idx_inv_item_cat").on(table.category_id),

    active_idx: index("idx_inv_item_active").on(table.is_active),
  })
);
