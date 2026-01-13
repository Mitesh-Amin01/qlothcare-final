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

export const userCredentials = pgTable(
  "user_credentials",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 50 }),

    passwordHash: varchar("password_hash", { length: 255 }),

    emailVerified: boolean("email_verified").default(false),
    phoneVerified: boolean("phone_verified").default(false),

    emailVerifiedAt: timestamp("email_verified_at"),
    phoneVerifiedAt: timestamp("phone_verified_at"),

    lastLoginAt: timestamp("last_login_at"),
    loginCount: integer("login_count").default(0),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    userUnique: uniqueIndex("idx_cred_user").on(table.userId),
    emailUnique: uniqueIndex("idx_cred_email").on(table.email),
    phoneUnique: uniqueIndex("idx_cred_phone").on(table.phone),
  })
);
