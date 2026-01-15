import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const terms_acceptance_logs = pgTable(
  "terms_acceptance_logs",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id").references(
      () => users.id
    ),

    terms_type: varchar("terms_type", { length: 50 }).notNull(),
    // TERMS_OF_SERVICE | PRIVACY_POLICY

    terms_version: varchar("terms_version", { length: 50 }).notNull(),

    accepted_at: timestamp("accepted_at").defaultNow(),

    ip_address: varchar("ip_address", { length: 45 }),
    user_agent: varchar("user_agent", { length: 512 }),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_terms_user").on(
      table.user_id
    ),

    user_type_idx: index("idx_terms_user_type").on(
      table.user_id,
      table.terms_type
    ),

    accepted_idx: index("idx_terms_accepted").on(
      table.accepted_at
    ),
  })
);
