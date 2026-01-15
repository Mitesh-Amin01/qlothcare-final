import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const service_categories = pgTable(
  "service_categories",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),

    description: text("description"),

    icon_url: varchar("icon_url", { length: 500 }),

    display_order: integer("display_order").default(0),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    name_unique: uniqueIndex("idx_svc_cat_name").on(table.name),

    active_idx: index("idx_svc_cat_active").on(table.is_active),

    order_idx: index("idx_svc_cat_order").on(table.display_order),
  })
);
