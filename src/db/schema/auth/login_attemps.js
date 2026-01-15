import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const loginAttempts = pgTable(
  "login_attempts",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id").references(() => users.id),

    identifier: varchar("identifier", { length: 255 }).notNull(), // email or phone used

    failureReason: varchar("failure_reason", { length: 100 }),

    ipAddress: varchar("ip_address", { length: 50 }),
    userAgent: varchar("user_agent", { length: 500 }),

    attemptedAt: timestamp("attempted_at").defaultNow(),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdx: index("idx_login_attempts_user").on(table.userId),

    identifierIdx: index("idx_login_attempts_identifier").on(
      table.identifier
    ),

    attemptedAtIdx: index("idx_login_attempts_time").on(
      table.attemptedAt
    ),

    ipAttemptIdx: index("idx_login_attempts_ip").on(
      table.ipAddress,
      table.attemptedAt
    ),
  })
);
