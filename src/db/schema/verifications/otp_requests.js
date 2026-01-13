import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const otp_requests = pgTable(
  "otp_requests",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id").references(() => users.id),

    purpose: varchar("purpose", { length: 50 }).notNull(), // LOGIN | PICKUP | DELIVERY | ORDER_CONFIRMATION | PASSWORD_RESET | PHONE_VERIFY
    channel: varchar("channel", { length: 50 }).notNull(), // SMS | EMAIL | WHATSAPP

    identifier: varchar("identifier", { length: 255 }).notNull(), // phone or email
    otp_hash: varchar("otp_hash", { length: 255 }).notNull(),

    expires_at: timestamp("expires_at").notNull(),
    used_at: timestamp("used_at"),

    is_used: boolean("is_used").default(false),

    attempt_count: integer("attempt_count").default(0),
    max_attempts: integer("max_attempts").default(3),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_otp_user").on(table.user_id),

    identifier_purpose_idx: index("idx_otp_identifier").on(
      table.identifier,
      table.purpose
    ),

    expires_idx: index("idx_otp_expires").on(table.expires_at),

    otp_used_idx: index("idx_otp_hash").on(
      table.otp_hash,
      table.is_used
    ),
  })
);
