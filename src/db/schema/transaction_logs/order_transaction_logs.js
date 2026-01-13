import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { branches } from "./branches";

export const order_transaction_logs = pgTable(
  "order_transaction_logs",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    event_type: varchar("event_type", { length: 50 }).notNull(),
    // CREATED | CONFIRMED | PICKED_UP | PROCESS_STARTED | READY | OUT_FOR_DELIVERY | DELIVERED | CANCELLED

    previous_status: varchar("previous_status", { length: 50 }),

    new_status: varchar("new_status", { length: 50 }).notNull(),

    triggered_by_type: varchar("triggered_by_type", { length: 50 }),
    // SYSTEM | USER | RIDER

    triggered_by_id: integer("triggered_by_id"),

    reference_type: varchar("reference_type", { length: 50 }),
    // OTP | PAYMENT | BATCH

    reference_id: integer("reference_id"),

    remarks: text("remarks"),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_txn_order").on(
      table.order_id
    ),

    date_idx: index("idx_order_txn_date").on(
      table.occurred_at
    ),

    event_idx: index("idx_order_txn_event").on(
      table.event_type
    ),
  })
);
