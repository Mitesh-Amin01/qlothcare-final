import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { cloth_categories } from "./cloth_categories";

export const cloth_items = pgTable(
  "cloth_items",
  {
    id: serial("id").primaryKey(),

    category_id: integer("category_id")
      .notNull()
      .references(() => cloth_categories.id),

    name: varchar("name", { length: 255 }).notNull(),

    description: text("description"),

    image_url: varchar("image_url", { length: 500 }),

    is_delicate: boolean("is_delicate").default(false),
    requires_special_care: boolean("requires_special_care").default(false),

    display_order: integer("display_order").default(0),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    category_idx: index("idx_cloth_item_cat").on(table.category_id),

    category_active_idx: index("idx_cloth_item_active").on(
      table.category_id,
      table.is_active
    ),
  })
);
