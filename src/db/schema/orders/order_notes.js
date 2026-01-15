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

export const order_notes = pgTable(
  "order_notes",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    note: text("note").notNull(),

    note_type: varchar("note_type", { length: 50 }).notNull(),
    // INTERNAL | CUSTOMER | SYSTEM

    added_by: integer("added_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_note_order").on(table.order_id),

    type_idx: index("idx_order_note_type").on(table.note_type),

    time_idx: index("idx_order_note_time").on(table.created_at),
  })
);
