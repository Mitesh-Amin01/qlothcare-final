import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "../user/user";

export const customers = pgTable(
  "customers",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    customer_code: varchar("customer_code", { length: 100 }).notNull(), // CUST-XXXX

    customer_type: varchar("customer_type", { length: 50 }).default(
      "INDIVIDUAL"
    ), // INDIVIDUAL | BUSINESS

    company_name: varchar("company_name", { length: 255 }),
    gst_number: varchar("gst_number", { length: 50 }),

    status: varchar("status", { length: 50 }).default("ACTIVE"), // ACTIVE | BLOCKED | DELETED

    total_orders: integer("total_orders").default(0),
    total_spent: decimal("total_spent").default("0"),

    registered_at: timestamp("registered_at").defaultNow(),
    last_order_at: timestamp("last_order_at"),

    is_deleted: boolean("is_deleted").default(false),
    deleted_at: timestamp("deleted_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    user_unique: uniqueIndex("idx_cust_user").on(table.user_id),

    customer_code_unique: uniqueIndex("idx_cust_code").on(
      table.customer_code
    ),

    status_idx: index("idx_cust_status").on(table.status),

    active_idx: index("idx_cust_active").on(
      table.is_deleted,
      table.status
    ),
  })
);
