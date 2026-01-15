import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { notification_channels } from "./notification_channels";
import { notification_templates } from "./notification_templates";

export const notification_deliveries = pgTable(
  "notification_deliveries",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id").references(() => users.id),

    channel_id: integer("channel_id")
      .notNull()
      .references(() => notification_channels.id),

    template_id: integer("template_id").references(
      () => notification_templates.id
    ),

    recipient: varchar("recipient", { length: 255 }).notNull(),
    // email | phone | device_token

    entity_type: varchar("entity_type", { length: 50 }),
    // ORDER | PAYMENT | TICKET | OTP | BROADCAST

    entity_id: integer("entity_id"),

    delivery_status: varchar("delivery_status", { length: 50 }).default(
      "PENDING"
    ),
    // PENDING | SENT | FAILED | DELIVERED | BOUNCED

    provider_message_id: varchar("provider_message_id", { length: 255 }),

    failure_reason: varchar("failure_reason", { length: 255 }),

    sent_at: timestamp("sent_at"),

    delivered_at: timestamp("delivered_at"),

    retry_count: integer("retry_count").default(0),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_notif_delivery_user").on(
      table.user_id
    ),

    status_idx: index("idx_notif_delivery_status").on(
      table.delivery_status
    ),

    sent_idx: index("idx_notif_delivery_sent").on(
      table.sent_at
    ),

    entity_idx: index("idx_notif_delivery_entity").on(
      table.entity_type,
      table.entity_id
    ),
  })
);
