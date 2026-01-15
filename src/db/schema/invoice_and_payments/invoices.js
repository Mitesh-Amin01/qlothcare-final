import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { customers } from "./customers";
import { users } from "./users";

export const invoices = pgTable(
  "invoices",
  {
    id: serial("id").primaryKey(),

    invoice_number: varchar("invoice_number", { length: 100 })
      .notNull(),
    // Auto-generated: INV-XXXXXX

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    invoice_type: varchar("invoice_type", { length: 50 }).default("ORDER"),
    // ORDER | SUBSCRIPTION | CUSTOM

    invoice_status: varchar("invoice_status", { length: 50 }).default("DRAFT"),
    // DRAFT | ISSUED | PAID | PARTIALLY_PAID | CANCELLED | OVERDUE

    subtotal_amount: decimal("subtotal_amount").notNull(),
    discount_amount: decimal("discount_amount").default("0"),
    tax_amount: decimal("tax_amount").default("0"),
    total_amount: decimal("total_amount").notNull(),
    paid_amount: decimal("paid_amount").default("0"),
    balance_amount: decimal("balance_amount").default("0"),

    issued_at: timestamp("issued_at"),
    due_at: timestamp("due_at"),
    paid_at: timestamp("paid_at"),

    created_by: integer("created_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    invoice_number_unique: uniqueIndex("idx_invoice_number").on(
      table.invoice_number
    ),

    order_idx: index("idx_invoice_order").on(table.order_id),

    customer_idx: index("idx_invoice_customer").on(table.customer_id),

    status_idx: index("idx_invoice_status").on(table.invoice_status),

    branch_status_idx: index("idx_invoice_branch_status").on(
      table.branch_id,
      table.invoice_status
    ),

    issued_idx: index("idx_invoice_issued").on(table.issued_at),

    due_idx: index("idx_invoice_due").on(table.due_at),
  })
);
