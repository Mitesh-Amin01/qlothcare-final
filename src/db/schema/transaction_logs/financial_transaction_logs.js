import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const financial_transaction_logs = pgTable(
  "financial_transaction_logs",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(() => branches.id),

    transaction_type: varchar("transaction_type", { length: 50 })
      .notNull(),
    // INVOICE | PAYMENT | REFUND | ADJUSTMENT

    reference_type: varchar("reference_type", { length: 50 }),
    // ORDER | INVOICE | PAYMENT

    reference_id: integer("reference_id"),

    amount: decimal("amount").notNull(),

    currency: varchar("currency", { length: 10 }).default("INR"),

    direction: varchar("direction", { length: 50 }).notNull(),
    // INFLOW | OUTFLOW

    payment_method: varchar("payment_method", { length: 50 }),
    // CASH | BANK | WALLET | UPI | CARD

    status: varchar("status", { length: 50 }).notNull(),
    // INITIATED | SUCCESS | FAILED | REVERSED

    initiated_by: integer("initiated_by").references(() => users.id),

    remarks: text("remarks"),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    org_idx: index("idx_fin_txn_org").on(table.organization_id),

    branch_idx: index("idx_fin_txn_branch").on(table.branch_id),

    type_idx: index("idx_fin_txn_type").on(table.transaction_type),

    date_idx: index("idx_fin_txn_date").on(table.occurred_at),

    branch_date_idx: index("idx_fin_txn_branch_date").on(
      table.branch_id,
      table.occurred_at
    ),
  })
);
