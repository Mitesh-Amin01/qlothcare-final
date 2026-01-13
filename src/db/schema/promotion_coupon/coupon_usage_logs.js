import {
  pgTable,
  serial,
  integer,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { coupons } from "./coupons";
import { customers } from "./customers";
import { orders } from "./orders";

export const coupon_usage_logs = pgTable(
  "coupon_usage_logs",
  {
    id: serial("id").primaryKey(),

    coupon_id: integer("coupon_id")
      .notNull()
      .references(() => coupons.id),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    discount_amount: decimal("discount_amount", {
      precision: 12,
      scale: 2,
    }).notNull(),

    used_at: timestamp("used_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    coupon_idx: index("idx_coupon_usage_coupon").on(table.coupon_id),

    customer_idx: index("idx_coupon_usage_customer").on(table.customer_id),

    order_idx: index("idx_coupon_usage_order").on(table.order_id),

    time_idx: index("idx_coupon_usage_time").on(table.used_at),
  })
);
