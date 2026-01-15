import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { branches } from "./branches";
import { users } from "./users";

export const order_live_queue = pgTable(
  "order_live_queue",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    priority: integer("priority").default(0),

    queue_status: varchar("queue_status", { length: 50 }).default("NEW"),
    // NEW | ACCEPTED | REJECTED | TIMEOUT

    appeared_at: timestamp("appeared_at").defaultNow(),
    handled_at: timestamp("handled_at"),

    handled_by: integer("handled_by").references(() => users.id),

    timeout_at: timestamp("timeout_at"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_unique: uniqueIndex("idx_queue_order").on(table.order_id),

    branch_status_idx: index("idx_queue_branch_status").on(
      table.branch_id,
      table.queue_status
    ),

    priority_idx: index("idx_queue_priority").on(table.priority),

    appeared_idx: index("idx_queue_appeared").on(table.appeared_at),
  })
);
