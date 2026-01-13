import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";

export const order_confirmations = pgTable(
  "order_confirmations",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    confirmation_code: varchar("confirmation_code", { length: 255 })
      .notNull(),

    confirmation_type: varchar("confirmation_type", { length: 50 })
      .notNull(),
    // OTP | PIN | QR

    channel: varchar("channel", { length: 50 })
      .notNull(),
    // SMS | EMAIL | WHATSAPP

    sent_to: varchar("sent_to", { length: 255 }).notNull(),

    sent_at: timestamp("sent_at").defaultNow(),
    confirmed_at: timestamp("confirmed_at"),

    is_confirmed: boolean("is_confirmed").default(false),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_confirm_order").on(table.order_id),

    code_unique: uniqueIndex("idx_order_confirm_code").on(
      table.confirmation_code
    ),
  })
);
