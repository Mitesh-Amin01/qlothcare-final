import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  jsonb,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { notification_channels } from "./notification_channels";

export const notification_templates = pgTable(
  "notification_templates",
  {
    id: serial("id").primaryKey(),

    channel_id: integer("channel_id")
      .notNull()
      .references(() => notification_channels.id),

    code: varchar("code", { length: 100 }).notNull(),
    // ORDER_CONFIRMATION | PICKUP_OTP | DELIVERY_OTP

    title: varchar("title", { length: 255 }),

    body: text("body").notNull(),

    variables: jsonb("variables"),
    // {order_number, otp, customer_name, amount}

    language: varchar("language", { length: 10 }).default("en"),
    // en | hi | gu

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    code_unique: uniqueIndex("idx_notif_template_code").on(
      table.code
    ),

    channel_idx: index("idx_notif_template_channel").on(
      table.channel_id
    ),

    active_idx: index("idx_notif_template_active").on(
      table.is_active
    ),
  })
);
