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
import { service_categories } from "./service_categories";

export const services = pgTable(
  "services",
  {
    id: serial("id").primaryKey(),

    category_id: integer("category_id")
      .notNull()
      .references(() => service_categories.id),

    name: varchar("name", { length: 255 }).notNull(),

    description: text("description"),

    icon_url: varchar("icon_url", { length: 500 }),

    base_duration_minutes: integer("base_duration_minutes").default(1440),

    is_express_available: boolean("is_express_available").default(true),
    express_duration_minutes: integer("express_duration_minutes").default(480),

    display_order: integer("display_order").default(0),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    category_idx: index("idx_svc_category").on(table.category_id),

    category_active_idx: index("idx_svc_cat_active").on(
      table.category_id,
      table.is_active
    ),

    order_idx: index("idx_svc_order").on(table.display_order),
  })
);
