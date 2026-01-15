import {
  pgTable,
  serial,
  integer,
  decimal,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { inventory_items } from "./inventory_items";

export const inventory_stock = pgTable(
  "inventory_stock",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    inventory_item_id: integer("inventory_item_id")
      .notNull()
      .references(() => inventory_items.id),

    quantity: decimal("quantity").default("0"),
    reserved_quantity: decimal("reserved_quantity").default("0"),
    available_quantity: decimal("available_quantity").default("0"),

    last_updated_at: timestamp("last_updated_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    unique_stock: uniqueIndex("idx_inv_stock_unique").on(
      table.branch_id,
      table.inventory_item_id
    ),

    branch_idx: index("idx_inv_stock_branch").on(table.branch_id),

    item_idx: index("idx_inv_stock_item").on(table.inventory_item_id),
  })
);
