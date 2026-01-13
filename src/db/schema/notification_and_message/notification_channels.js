import {
  pgTable,
  serial,
  varchar,
  jsonb,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

export const notification_channels = pgTable(
  "notification_channels",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 50 }).notNull(),
    // EMAIL | SMS | PUSH | WHATSAPP

    provider: varchar("provider", { length: 100 }),
    // RESEND | MSG91 | FCM | TWILIO | GUPSHUP

    api_credentials: jsonb("api_credentials"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    name_idx: index("idx_notif_channel_name").on(
      table.name
    ),

    active_idx: index("idx_notif_channel_active").on(
      table.is_active
    ),
  })
);
