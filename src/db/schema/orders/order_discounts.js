import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { users } from "./users";

export const order_discounts = pgTable(
  "order_discounts",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    discount_type: varchar("discount_type", { length: 50 }).notNull(),
    // FLAT | PERCENTAGE | PROMO | COUPON | LOYALTY

    discount_code: varchar("discount_code", { length: 100 }),

    discount_value: decimal("discount_value").notNull(),

    applied_by: integer("applied_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_disc_order").on(table.order_id),

    code_idx: index("idx_order_disc_code").on(table.discount_code),
  })
);
