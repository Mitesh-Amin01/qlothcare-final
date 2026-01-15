import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { order_items } from "./order_items";
import { cloth_items } from "./cloth_items";
import { branches } from "./branches";

export const cloth_instances = pgTable(
  "cloth_instances",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    order_item_id: integer("order_item_id")
      .notNull()
      .references(() => order_items.id),

    cloth_item_id: integer("cloth_item_id")
      .notNull()
      .references(() => cloth_items.id),

    instance_code: varchar("instance_code", { length: 255 })
      .notNull(), // Barcode/RFID: CLT-XXXXXX

    condition_at_intake: varchar("condition_at_intake", { length: 50 }),
    // GOOD | DAMAGED | STAINED | TORN | FADED

    condition_notes: text("condition_notes"),

    current_status: varchar("current_status", { length: 50 }).default(
      "RECEIVED"
    ),
    // RECEIVED | WASHING | DRYING | IRONING | FOLDING | READY | OUT_FOR_DELIVERY | DELIVERED | LOST | DAMAGED

    current_branch_id: integer("current_branch_id").references(
      () => branches.id
    ),

    current_holder_type: varchar("current_holder_type", { length: 50 }),
    // BRANCH | RIDER | CUSTOMER

    current_holder_id: integer("current_holder_id"),

    is_damaged: boolean("is_damaged").default(false),
    is_lost: boolean("is_lost").default(false),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    instance_code_unique: uniqueIndex("idx_cloth_inst_code").on(
      table.instance_code
    ),

    order_idx: index("idx_cloth_inst_order").on(table.order_id),

    order_item_idx: index("idx_cloth_inst_item").on(
      table.order_item_id
    ),

    status_idx: index("idx_cloth_inst_status").on(
      table.current_status
    ),

    branch_status_idx: index("idx_cloth_inst_branch_status").on(
      table.current_branch_id,
      table.current_status
    ),
  })
);
