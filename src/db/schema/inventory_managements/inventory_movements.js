import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { inventory_items } from "./inventory_items";
import { users } from "./users";

export const inventory_movements = pgTable(
  "inventory_movements",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    inventory_item_id: integer("inventory_item_id")
      .notNull()
      .references(() => inventory_items.id),

    movement_type: varchar("movement_type", { length: 50 })
      .notNull(),
    // IN | OUT | ADJUSTMENT | TRANSFER

    quantity: decimal("quantity").notNull(),

    reference_type: varchar("reference_type", { length: 50 }),
    // BATCH | ORDER | DAMAGE | MANUAL | PURCHASE | TRANSFER

    reference_id: integer("reference_id"),

    reason: varchar("reason", { length: 100 }),
    // CONSUMPTION | EXPIRED | WASTAGE | PURCHASE | DAMAGE | ADJUSTMENT

    performed_by: integer("performed_by").references(() => users.id),

    previous_quantity: decimal("previous_quantity"),
    new_quantity: decimal("new_quantity"),

    movement_at: timestamp("movement_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    branch_idx: index("idx_inv_move_branch").on(table.branch_id),

    item_idx: index("idx_inv_move_item").on(table.inventory_item_id),

    type_idx: index("idx_inv_move_type").on(table.movement_type),

    time_idx: index("idx_inv_move_time").on(table.movement_at),

    branch_time_idx: index("idx_inv_move_branch_time").on(
      table.branch_id,
      table.movement_at
    ),
  })
);
