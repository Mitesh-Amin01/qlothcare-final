import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  jsonb,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { notification_channels } from "./notification_channels";
import { branches } from "./branches";
import { users } from "./users";

export const broadcast_messages = pgTable(
  "broadcast_messages",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    title: varchar("title", { length: 255 }).notNull(),

    message: text("message").notNull(),

    channel_id: integer("channel_id").references(
      () => notification_channels.id
    ),

    target_audience: varchar("target_audience", { length: 50 }).notNull(),
    // ALL | CUSTOMERS | EMPLOYEES | RIDERS

    target_branch_id: integer("target_branch_id").references(
      () => branches.id
    ),

    target_user_ids: jsonb("target_user_ids"),
    // Array of specific user IDs

    scheduled_at: timestamp("scheduled_at"),

    sent_at: timestamp("sent_at"),

    total_recipients: integer("total_recipients").default(0),

    total_sent: integer("total_sent").default(0),

    total_failed: integer("total_failed").default(0),

    created_by: integer("created_by").references(
      () => users.id
    ),

    status: varchar("status", { length: 50 }).default("DRAFT"),
    // DRAFT | SCHEDULED | SENT | CANCELLED

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    org_idx: index("idx_broadcast_org").on(
      table.organization_id
    ),

    status_idx: index("idx_broadcast_status").on(
      table.status
    ),

    scheduled_idx: index("idx_broadcast_scheduled").on(
      table.scheduled_at
    ),
  })
);
