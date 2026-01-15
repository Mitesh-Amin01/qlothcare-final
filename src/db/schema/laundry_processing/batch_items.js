import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { laundry_batches } from "./laundry_batches";
import { orders } from "./orders";
import { order_items } from "./order_items";
import { cloth_instances } from "./cloth_instances";

export const batch_items = pgTable(
  "batch_items",
  {
    id: serial("id").primaryKey(),

    batch_id: integer("batch_id")
      .notNull()
      .references(() => laundry_batches.id),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    order_item_id: integer("order_item_id")
      .notNull()
      .references(() => order_items.id),

    cloth_instance_id: integer("cloth_instance_id")
      .notNull()
      .references(() => cloth_instances.id),

    quantity: integer("quantity").default(1),

    processing_status: varchar("processing_status", { length: 50 }).default(
      "PENDING"
    ),
    // PENDING | IN_PROCESS | DONE | DAMAGED | LOST

    remarks: text("remarks"),

    added_at: timestamp("added_at").defaultNow(),
    removed_at: timestamp("removed_at"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    batch_idx: index("idx_batch_item_batch").on(table.batch_id),

    order_idx: index("idx_batch_item_order").on(table.order_id),

    cloth_idx: index("idx_batch_item_cloth").on(
      table.cloth_instance_id
    ),

    batch_status_idx: index("idx_batch_item_status").on(
      table.batch_id,
      table.processing_status
    ),
  })
);
