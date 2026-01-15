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
import { userDevices } from "./userDevices";

export const userSessions = pgTable(
  "user_sessions",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    deviceId: integer("device_id").references(() => userDevices.id),

    accessTokenHash: varchar("access_token_hash", { length: 255 }).notNull(),
    refreshTokenHash: varchar("refresh_token_hash", { length: 255 }),

    ipAddress: varchar("ip_address", { length: 50 }),
    userAgent: varchar("user_agent", { length: 500 }),

    expiresAt: timestamp("expires_at").notNull(),
    revokedAt: timestamp("revoked_at"),

    isActive: boolean("is_active").default(true),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdx: index("idx_sessions_user").on(table.userId),

    accessTokenUnique: uniqueIndex("idx_sessions_access_token").on(
      table.accessTokenHash
    ),

    refreshTokenUnique: uniqueIndex("idx_sessions_refresh_token").on(
      table.refreshTokenHash
    ),

    userActiveIdx: index("idx_sessions_active").on(
      table.userId,
      table.isActive
    ),

    expiresIdx: index("idx_sessions_expires").on(table.expiresAt),
  })
);
