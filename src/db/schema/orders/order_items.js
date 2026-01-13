import {
  pgTable,
  serial,
  integer,
  decimal,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { services } from "./services";
import { service_variants } from "./service_variants";
import { cloth_items } from "./cloth_items";

export const order_items = pgTable(
  "order_items",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    service_id: integer("service_id")
      .notNull()
      .references(() => services.id),

    variant_id: integer("variant_id")
      .notNull()
      .references(() => service_variants.id),

    cloth_item_id: integer("cloth_item_id")
      .notNull()
      .references(() => cloth_items.id),

    quantity: integer("quantity").notNull(),

    unit_price: decimal("unit_price").notNull(),
    total_price: decimal("total_price").notNull(),

    special_instructions: text("special_instructions"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_item_order").on(table.order_id),

    service_idx: index("idx_order_item_service").on(table.service_id),

    cloth_idx: index("idx_order_item_cloth").on(table.cloth_item_id),
  })
);
