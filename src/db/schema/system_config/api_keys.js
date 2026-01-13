import {
  pgTable,
  serial,
  integer,
  varchar,
  jsonb,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const api_keys = pgTable(
  "api_keys",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    key_name: varchar("key_name", { length: 255 }).notNull(),

    api_key_hash: varchar("api_key_hash", { length: 255 }).notNull(),

    scopes: jsonb("scopes"),
    // orders:read, payments:write, customers:manage

    status: varchar("status", { length: 50 }).default("ACTIVE"),
    // ACTIVE | REVOKED | EXPIRED

    rate_limit_per_minute: integer("rate_limit_per_minute").default(60),

    last_used_at: timestamp("last_used_at"),

    expires_at: timestamp("expires_at"),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),

    revoked_at: timestamp("revoked_at"),
  },
  (table) => ({
    key_hash_unique: uniqueIndex("idx_api_key_hash").on(
      table.api_key_hash
    ),

    org_idx: index("idx_api_key_org").on(
      table.organization_id
    ),

    status_idx: index("idx_api_key_status").on(
      table.status
    ),

    expires_idx: index("idx_api_key_expires").on(
      table.expires_at
    ),
  })
);
