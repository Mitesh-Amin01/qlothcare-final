import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const loginLogs = pgTable(
  "login_logs",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    loginMethod: varchar("login_method", { length: 50 }).notNull(), // EMAIL | PHONE | OTP | PASSWORD | GOOGLE | FACEBOOK
    deviceType: varchar("device_type", { length: 50 }), // ANDROID | IOS | WEB

    ipAddress: varchar("ip_address", { length: 50 }),
    userAgent: varchar("user_agent", { length: 500 }),

    loginStatus: varchar("login_status", { length: 50 }).default("SUCCESS"),

    loggedInAt: timestamp("logged_in_at").defaultNow(),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userIdx: index("idx_login_logs_user").on(table.userId),

    loginTimeIdx: index("idx_login_logs_time").on(table.loggedInAt),

    userLoginTimeIdx: index("idx_login_logs_user_time").on(
      table.userId,
      table.loggedInAt
    ),
  })
);
