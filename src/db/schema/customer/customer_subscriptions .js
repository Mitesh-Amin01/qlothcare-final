import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { customers } from "./customers";

export const customer_subscriptions = pgTable(
  "customer_subscriptions",
  {
    id: serial("id").primaryKey(),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    plan_name: varchar("plan_name", { length: 255 }).notNull(),

    plan_type: varchar("plan_type", { length: 50 }).notNull(),
    // MONTHLY | QUARTERLY | YEARLY | QUANTITY_BASED

    total_quantity: integer("total_quantity"),
    remaining_quantity: integer("remaining_quantity"),
    used_quantity: integer("used_quantity").default(0),

    price: decimal("price").notNull(),
    discount_percentage: decimal("discount_percentage").default("0"),

    start_date: date("start_date").notNull(),
    end_date: date("end_date"),

    status: varchar("status", { length: 50 }).default("ACTIVE"),
    // ACTIVE | PAUSED | EXPIRED | CANCELLED

    auto_renew: boolean("auto_renew").default(false),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    customer_idx: index("idx_cust_sub_cust").on(table.customer_id),

    customer_status_idx: index("idx_cust_sub_active").on(
      table.customer_id,
      table.status
    ),

    end_date_idx: index("idx_cust_sub_end").on(table.end_date),
  })
);
