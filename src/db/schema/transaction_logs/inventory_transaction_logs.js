import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { inventory_items } from "./inventory_items";
import { users } from "./users";

export const inventory_transaction_logs = pgTable(
  "inventory_transaction_logs",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    inventory_item_id: integer("inventory_item_id")
      .notNull()
      .references(() => inventory_items.id),

    transaction_type: varchar("transaction_type", { length: 50 }).notNull(),
    // IN | OUT | ADJUSTMENT | TRANSFER

    quantity: decimal("quantity").notNull(),

    unit: varchar("unit", { length: 50 }).notNull(),

    reference_type: varchar("reference_type", { length: 50 }),
    // ORDER | BATCH | DAMAGE | PURCHASE

    reference_id: integer("reference_id"),

    opening_quantity: decimal("opening_quantity").notNull(),

    closing_quantity: decimal("closing_quantity").notNull(),

    performed_by: integer("performed_by").references(() => users.id),

    reason: varchar("reason", { length: 100 }),
    // CONSUMPTION | WASTAGE | EXPIRED | MANUAL

    remarks: text("remarks"),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    branch_idx: index("idx_inv_txn_branch").on(
      table.branch_id
    ),

    item_idx: index("idx_inv_txn_item").on(
      table.inventory_item_id
    ),

    date_idx: index("idx_inv_txn_date").on(
      table.occurred_at
    ),

    branch_date_idx: index("idx_inv_txn_branch_date").on(
      table.branch_id,
      table.occurred_at
    ),
  })
);
