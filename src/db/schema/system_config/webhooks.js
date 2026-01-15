import {
  pgTable,
  serial,
  integer,
  varchar,
  jsonb,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const webhooks = pgTable(
  "webhooks",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    event_type: varchar("event_type", { length: 100 }).notNull(),
    // ORDER_CREATED | PAYMENT_SUCCESS | ORDER_DELIVERED

    target_url: varchar("target_url", { length: 2048 }).notNull(),

    http_method: varchar("http_method", { length: 10 }).default("POST"),
    // POST | PUT

    headers: jsonb("headers"),

    secret_token: varchar("secret_token", { length: 255 }),

    retry_policy: varchar("retry_policy", { length: 50 }).default("SIMPLE"),
    // NONE | SIMPLE | EXPONENTIAL

    max_retries: integer("max_retries").default(3),

    is_active: boolean("is_active").default(true),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    org_idx: index("idx_webhook_org").on(
      table.organization_id
    ),

    event_idx: index("idx_webhook_event").on(
      table.event_type
    ),

    active_idx: index("idx_webhook_active").on(
      table.is_active
    ),
  })
);
