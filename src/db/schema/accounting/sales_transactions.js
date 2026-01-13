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
import { invoices } from "./invoices";
import { organizations } from "./organizations";
import { branches } from "./branches";

export const sales_transactions = pgTable(
  "sales_transactions",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    invoice_id: integer("invoice_id")
      .notNull()
      .references(() => invoices.id),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    gross_amount: decimal("gross_amount").notNull(),
    discount_amount: decimal("discount_amount").default("0"),
    tax_amount: decimal("tax_amount").default("0"),
    net_amount: decimal("net_amount").notNull(),

    payment_status: varchar("payment_status", { length: 50 }).notNull(),
    // PAID | PARTIAL | UNPAID

    sale_status: varchar("sale_status", { length: 50 }).notNull(),
    // COMPLETED | CANCELLED | REFUNDED

    recognized_at: timestamp("recognized_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_sales_txn_order").on(table.order_id),

    invoice_idx: index("idx_sales_txn_invoice").on(table.invoice_id),

    branch_date_idx: index("idx_sales_txn_branch_date").on(
      table.branch_id,
      table.recognized_at
    ),

    date_idx: index("idx_sales_txn_date").on(table.recognized_at),
  })
);
