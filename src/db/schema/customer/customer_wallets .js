import {
  pgTable,
  serial,
  integer,
  decimal,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { customers } from "./customers";

export const customer_wallets = pgTable(
  "customer_wallets",
  {
    id: serial("id").primaryKey(),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    current_balance: decimal("current_balance").default("0"),
    total_credited: decimal("total_credited").default("0"),
    total_debited: decimal("total_debited").default("0"),

    last_transaction_at: timestamp("last_transaction_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    customer_unique: uniqueIndex("idx_cust_wallet_cust").on(
      table.customer_id
    ),
  })
);
