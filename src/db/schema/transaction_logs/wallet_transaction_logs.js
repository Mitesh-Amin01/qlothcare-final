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
import { customers } from "./customers";
import { riders } from "./riders";
import { users } from "./users";

export const wallet_transaction_logs = pgTable(
  "wallet_transaction_logs",
  {
    id: serial("id").primaryKey(),

    wallet_type: varchar("wallet_type", { length: 50 }).notNull(),
    // CUSTOMER | RIDER

    customer_id: integer("customer_id").references(() => customers.id),

    rider_id: integer("rider_id").references(() => riders.id),

    transaction_type: varchar("transaction_type", { length: 50 }).notNull(),
    // CREDIT | DEBIT

    reason: varchar("reason", { length: 50 }).notNull(),
    // PAYMENT | REFUND | INCENTIVE | PENALTY | ADJUSTMENT | CASHBACK

    reference_type: varchar("reference_type", { length: 50 }),
    // ORDER | PAYMENT | REFUND | DELIVERY

    reference_id: integer("reference_id"),

    amount: decimal("amount").notNull(),

    opening_balance: decimal("opening_balance").notNull(),

    closing_balance: decimal("closing_balance").notNull(),

    status: varchar("status", { length: 50 }).default("SUCCESS"),
    // SUCCESS | FAILED | REVERSED

    processed_by: integer("processed_by").references(() => users.id),

    remarks: text("remarks"),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    customer_idx: index("idx_wallet_txn_customer").on(
      table.customer_id
    ),

    rider_idx: index("idx_wallet_txn_rider").on(
      table.rider_id
    ),

    date_idx: index("idx_wallet_txn_date").on(
      table.occurred_at
    ),

    wallet_type_idx: index("idx_wallet_txn_type").on(
      table.wallet_type
    ),
  })
);
