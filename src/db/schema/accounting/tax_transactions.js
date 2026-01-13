import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { tax_profiles } from "./tax_profiles";
import { invoices } from "./invoices";
import { payments } from "./payments";

export const tax_transactions = pgTable(
  "tax_transactions",
  {
    id: serial("id").primaryKey(),

    tax_profile_id: integer("tax_profile_id")
      .notNull()
      .references(() => tax_profiles.id),

    invoice_id: integer("invoice_id").references(() => invoices.id),

    payment_id: integer("payment_id").references(() => payments.id),

    taxable_amount: decimal("taxable_amount").notNull(),

    cgst_amount: decimal("cgst_amount").default("0"),
    sgst_amount: decimal("sgst_amount").default("0"),
    igst_amount: decimal("igst_amount").default("0"),

    total_tax_amount: decimal("total_tax_amount").notNull(),

    tax_status: varchar("tax_status", { length: 50 }).default("PENDING"),
    // PENDING | PAID | ADJUSTED

    recorded_at: timestamp("recorded_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    profile_idx: index("idx_tax_txn_profile").on(
      table.tax_profile_id
    ),

    invoice_idx: index("idx_tax_txn_invoice").on(
      table.invoice_id
    ),

    recorded_idx: index("idx_tax_txn_date").on(
      table.recorded_at
    ),
  })
);
