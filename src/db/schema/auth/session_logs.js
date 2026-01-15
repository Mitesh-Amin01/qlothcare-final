import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { userSessions } from "./userSessions";
import { users } from "./users";

export const sessionLogs = pgTable(
  "session_logs",
  {
    id: serial("id").primaryKey(),

    sessionId: integer("session_id")
      .notNull()
      .references(() => userSessions.id),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    eventType: varchar("event_type", { length: 50 }).notNull(), // CREATED | REFRESHED | REVOKED | EXPIRED

    ipAddress: varchar("ip_address", { length: 50 }),
    userAgent: varchar("user_agent", { length: 500 }),

    eventAt: timestamp("event_at").defaultNow(),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    sessionIdx: index("idx_session_logs_session").on(table.sessionId),
    userIdx: index("idx_session_logs_user").on(table.userId),
    eventTimeIdx: index("idx_session_logs_time").on(table.eventAt),
  })
);
