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
import { organizations } from "./organizations";
import { branches } from "./branches";
import { customers } from "./customers";
import { customer_addresses } from "./customer_addresses";

export const orders = pgTable(
  "orders",
  {
    id: serial("id").primaryKey(),

    order_number: varchar("order_number", { length: 100 })
      .notNull(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    pickup_address_id: integer("pickup_address_id").references(
      () => customer_addresses.id
    ),

    delivery_address_id: integer("delivery_address_id").references(
      () => customer_addresses.id
    ),

    order_type: varchar("order_type", { length: 50 }).notNull(), // ONLINE | WALKIN
    order_channel: varchar("order_channel", { length: 50 }).notNull(), // APP | WEB | CRM | STORE

    total_items: integer("total_items").default(0),
    subtotal_amount: decimal("subtotal_amount").default("0"),
    discount_amount: decimal("discount_amount").default("0"),
    tax_amount: decimal("tax_amount").default("0"),
    delivery_charge: decimal("delivery_charge").default("0"),
    total_amount: decimal("total_amount").notNull(),

    payment_status: varchar("payment_status", { length: 50 }).default(
      "PENDING"
    ), // PENDING | PAID | PARTIAL | REFUNDED | FAILED

    order_status: varchar("order_status", { length: 50 }).default(
      "CREATED"
    ), // CREATED | CONFIRMED | PICKED_UP | IN_PROCESS | READY | OUT_FOR_DELIVERY | DELIVERED | CANCELLED | FAILED

    scheduled_pickup_at: timestamp("scheduled_pickup_at"),
    scheduled_delivery_at: timestamp("scheduled_delivery_at"),

    actual_pickup_at: timestamp("actual_pickup_at"),
    actual_delivery_at: timestamp("actual_delivery_at"),

    placed_at: timestamp("placed_at").defaultNow(),
    completed_at: timestamp("completed_at"),
    cancelled_at: timestamp("cancelled_at"),
    cancellation_reason: varchar("cancellation_reason", { length: 255 }),

    is_express: boolean("is_express").default(false),

    is_deleted: boolean("is_deleted").default(false),
    deleted_at: timestamp("deleted_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    order_number_unique: uniqueIndex("idx_order_number").on(
      table.order_number
    ),

    org_branch_idx: index("idx_order_org_branch").on(
      table.organization_id,
      table.branch_id
    ),

    customer_idx: index("idx_order_customer").on(table.customer_id),

    status_idx: index("idx_order_status").on(table.order_status),

    payment_idx: index("idx_order_payment").on(table.payment_status),

    placed_idx: index("idx_order_placed").on(table.placed_at),

    branch_status_idx: index("idx_order_branch_status").on(
      table.branch_id,
      table.order_status
    ),

    customer_status_idx: index("idx_order_cust_status").on(
      table.customer_id,
      table.order_status
    ),

    active_idx: index("idx_order_active").on(
      table.is_deleted,
      table.order_status
    ),
  })
);
