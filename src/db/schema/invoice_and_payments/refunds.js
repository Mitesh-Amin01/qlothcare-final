import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { payments } from "./payments";
import { invoices } from "./invoices";
import { users } from "./users";

export const refunds = pgTable(
  "refunds",
  {
    id: serial("id").primaryKey(),

    payment_id: integer("payment_id")
      .notNull()
      .references(() => payments.id),

    invoice_id: integer("invoice_id")
      .notNull()
      .references(() => invoices.id),

    refund_amount: decimal("refund_amount").notNull(),

    refund_reason: varchar("refund_reason", { length: 255 }).notNull(),

    refund_status: varchar("refund_status", { length: 50 }).default(
      "INITIATED"
    ),
    // INITIATED | SUCCESS | FAILED

    refund_method: varchar("refund_method", { length: 50 }),
    // ORIGINAL | WALLET | BANK

    gateway_refund_id: varchar("gateway_refund_id", { length: 255 }),

    processed_by: integer("processed_by").references(() => users.id),

    refunded_at: timestamp("refunded_at"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    payment_idx: index("idx_refund_payment").on(table.payment_id),

    invoice_idx: index("idx_refund_invoice").on(table.invoice_id),

    status_idx: index("idx_refund_status").on(table.refund_status),
  })
);
