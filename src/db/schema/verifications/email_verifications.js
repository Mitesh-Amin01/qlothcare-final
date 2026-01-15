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

export const email_verifications = pgTable(
  "email_verifications",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    email: varchar("email", { length: 255 }).notNull(),
    verification_token_hash: varchar("verification_token_hash", {
      length: 255,
    }).notNull(),

    expires_at: timestamp("expires_at").notNull(),
    verified_at: timestamp("verified_at"),

    is_verified: boolean("is_verified").default(false),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_email_verify_user").on(table.user_id),

    token_unique: uniqueIndex("idx_email_verify_token").on(
      table.verification_token_hash
    ),

    expires_idx: index("idx_email_verify_expires").on(table.expires_at),
  })
);
