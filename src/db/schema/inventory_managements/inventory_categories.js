import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

export const inventory_categories = pgTable(
  "inventory_categories",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 100 }).notNull(),
    // CHEMICALS | PACKAGING | SPARES | CONSUMABLES

    description: text("description"),

    is_consumable: boolean("is_consumable").default(true),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    active_idx: index("idx_inv_cat_active").on(table.is_active),
  })
);
