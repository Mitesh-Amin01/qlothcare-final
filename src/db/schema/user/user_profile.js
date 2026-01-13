import {
  pgTable,
  serial,
  integer,
  varchar,
  date,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const userProfiles = pgTable(
  "user_profiles",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    fullName: varchar("full_name", { length: 255 }).notNull(),
    avatarUrl: varchar("avatar_url", { length: 500 }),

    gender: varchar("gender", { length: 50 }),
    dateOfBirth: date("date_of_birth"),

    preferredLanguage: varchar("preferred_language", { length: 10 }).default(
      "en"
    ),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    userUnique: uniqueIndex("idx_profile_user").on(table.userId),
    nameIdx: index("idx_profile_name").on(table.fullName),
  })
);
