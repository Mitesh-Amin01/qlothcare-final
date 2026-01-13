import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const system_settings = pgTable(
  "system_settings",
  {
    id: serial("id").primaryKey(),

    setting_key: varchar("setting_key", { length: 255 }).notNull(),

    setting_value: text("setting_value"),

    value_type: varchar("value_type", { length: 50 }).notNull(),
    // STRING | NUMBER | BOOLEAN | JSON

    description: text("description"),

    is_public: boolean("is_public").default(false),

    is_encrypted: boolean("is_encrypted").default(false),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    key_unique: uniqueIndex("idx_setting_key").on(
      table.setting_key
    ),

    public_idx: index("idx_setting_public").on(
      table.is_public
    ),
  })
);
