import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { users } from "./users";

export const order_otps = pgTable(
  "order_otps",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    purpose: varchar("purpose", { length: 50 }).notNull(),
    // PICKUP | DELIVERY | ORDER_CONFIRMATION

    otp_hash: varchar("otp_hash", { length: 255 }).notNull(),

    channel: varchar("channel", { length: 50 }).notNull(),
    // SMS | EMAIL | WHATSAPP

    sent_to: varchar("sent_to", { length: 255 }).notNull(),
    // customer phone or email

    expires_at: timestamp("expires_at").notNull(),
    used_at: timestamp("used_at"),

    is_used: boolean("is_used").default(false),

    max_attempts: integer("max_attempts").default(3),
    attempt_count: integer("attempt_count").default(0),

    generated_by: integer("generated_by").references(() => users.id),
    // system or staff

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_otp_order").on(table.order_id),

    order_purpose_idx: index("idx_order_otp_purpose").on(
      table.order_id,
      table.purpose
    ),

    expires_idx: index("idx_order_otp_expires").on(table.expires_at),

    otp_used_idx: index("idx_order_otp_hash").on(
      table.otp_hash,
      table.is_used
    ),
  })
);
