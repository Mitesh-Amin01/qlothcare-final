import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { payments } from "./payments";

export const payment_transactions = pgTable(
  "payment_transactions",
  {
    id: serial("id").primaryKey(),

    payment_id: integer("payment_id")
      .notNull()
      .references(() => payments.id),

    gateway: varchar("gateway", { length: 50 }).notNull(),
    // RAZORPAY | STRIPE | PAYTM | PHONEPE | CASH | WALLET

    gateway_transaction_id: varchar("gateway_transaction_id", {
      length: 255,
    }),

    transaction_type: varchar("transaction_type", { length: 50 })
      .notNull(),
    // PAYMENT | REFUND

    transaction_status: varchar("transaction_status", { length: 50 })
      .notNull(),
    // SUCCESS | FAILED | PENDING

    request_payload: text("request_payload"),
    response_payload: text("response_payload"),

    processed_at: timestamp("processed_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    payment_idx: index("idx_pay_txn_payment").on(table.payment_id),

    gateway_txn_unique: uniqueIndex("idx_pay_txn_gateway").on(
      table.gateway_transaction_id
    ),

    status_idx: index("idx_pay_txn_status").on(
      table.transaction_status
    ),
  })
);
