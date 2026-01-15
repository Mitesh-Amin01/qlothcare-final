import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const passwordResetRequests = pgTable(
  "password_reset_requests",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    resetMethod: varchar("reset_method", { length: 50 }).notNull(), // EMAIL | PHONE
    resetTokenHash: varchar("reset_token_hash", { length: 255 }).notNull(),

    expiresAt: timestamp("expires_at").notNull(),
    usedAt: timestamp("used_at"),

    isUsed: boolean("is_used").default(false),

    requestedIp: varchar("requested_ip", { length: 50 }),
    requestedUserAgent: varchar("requested_user_agent", { length: 500 }),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdx: index("idx_password_reset_user").on(table.userId),

    tokenUnique: uniqueIndex("idx_password_reset_token").on(
      table.resetTokenHash
    ),

    expiresIdx: index("idx_password_reset_expires").on(table.expiresAt),
  })
);
