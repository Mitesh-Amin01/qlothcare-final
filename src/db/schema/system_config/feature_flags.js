import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  jsonb,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const feature_flags = pgTable(
  "feature_flags",
  {
    id: serial("id").primaryKey(),

    flag_key: varchar("flag_key", { length: 100 }).notNull(),
    // NEW_CHECKOUT | ENABLE_SUBSCRIPTIONS | OFFLINE_MODE

    flag_name: varchar("flag_name", { length: 255 }).notNull(),

    description: text("description"),

    is_enabled: boolean("is_enabled").default(false),

    environment: varchar("environment", { length: 20 }).default("PROD"),
    // DEV | STAGING | PROD

    rollout_percentage: integer("rollout_percentage").default(100),

    target_users: jsonb("target_users"),
    // Specific user IDs

    target_branches: jsonb("target_branches"),
    // Specific branch IDs

    enabled_from: timestamp("enabled_from"),

    disabled_at: timestamp("disabled_at"),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    key_unique: uniqueIndex("idx_flag_key").on(
      table.flag_key
    ),

    enabled_idx: index("idx_flag_enabled").on(
      table.is_enabled
    ),

    env_idx: index("idx_flag_env").on(
      table.environment
    ),
  })
);
