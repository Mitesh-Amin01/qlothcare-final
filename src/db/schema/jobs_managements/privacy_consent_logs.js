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

export const privacy_consent_logs = pgTable(
  "privacy_consent_logs",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id").references(
      () => users.id
    ),

    consent_type: varchar("consent_type", { length: 50 }).notNull(),
    // DATA_PROCESSING | MARKETING | COOKIES | ANALYTICS

    consent_version: varchar("consent_version", { length: 50 }).notNull(),

    consent_given: boolean("consent_given").notNull(),

    given_at: timestamp("given_at").defaultNow(),
    revoked_at: timestamp("revoked_at"),

    ip_address: varchar("ip_address", { length: 45 }),
    user_agent: varchar("user_agent", { length: 512 }),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_consent_user").on(
      table.user_id
    ),

    user_type_idx: index("idx_consent_user_type").on(
      table.user_id,
      table.consent_type
    ),

    given_idx: index("idx_consent_given").on(
      table.consent_given
    ),
  })
);
