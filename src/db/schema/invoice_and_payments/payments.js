import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { invoices } from "./invoices";
import { customers } from "./customers";
import { users } from "./users";

export const payments = pgTable(
  "payments",
  {
    id: serial("id").primaryKey(),

    invoice_id: integer("invoice_id")
      .notNull()
      .references(() => invoices.id),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    payment_method: varchar("payment_method", { length: 50 })
      .notNull(),
    // CASH | CARD | UPI | WALLET | NETBANKING | CHEQUE

    payment_status: varchar("payment_status", { length: 50 }).default(
      "INITIATED"
    ),
    // INITIATED | SUCCESS | FAILED | REFUNDED | PARTIAL

    amount: decimal("amount").notNull(),

    transaction_reference: varchar("transaction_reference", {
      length: 255,
    }),

    initiated_at: timestamp("initiated_at").defaultNow(),
    completed_at: timestamp("completed_at"),

    received_by: integer("received_by").references(() => users.id),
    // for cash / manual payments

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    invoice_idx: index("idx_payment_invoice").on(table.invoice_id),

    customer_idx: index("idx_payment_customer").on(table.customer_id),

    status_idx: index("idx_payment_status").on(table.payment_status),

    method_idx: index("idx_payment_method").on(table.payment_method),

    initiated_idx: index("idx_payment_initiated").on(table.initiated_at),
  })
);
