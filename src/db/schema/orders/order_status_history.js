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
import { users } from "./users";

export const order_status_history = pgTable(
  "order_status_history",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    from_status: varchar("from_status", { length: 50 }),

    to_status: varchar("to_status", { length: 50 }).notNull(),

    changed_by: integer("changed_by").references(() => users.id),

    change_reason: varchar("change_reason", { length: 255 }),

    remarks: text("remarks"),

    changed_at: timestamp("changed_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_hist_order").on(table.order_id),

    time_idx: index("idx_order_hist_time").on(table.changed_at),

    order_time_idx: index("idx_order_hist_order_time").on(
      table.order_id,
      table.changed_at
    ),
  })
);
