import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { riders } from "./riders";

export const rider_wallets = pgTable(
  "rider_wallets",
  {
    id: serial("id").primaryKey(),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    current_balance: decimal("current_balance").default("0"),
    total_earnings: decimal("total_earnings").default("0"),
    total_payouts: decimal("total_payouts").default("0"),

    payout_method: varchar("payout_method", { length: 50 }).default(
      "BANK"
    ), // BANK | WALLET | CASH

    bank_account_number: varchar("bank_account_number", { length: 255 }),
    bank_ifsc: varchar("bank_ifsc", { length: 50 }),
    bank_account_holder_name: varchar(
      "bank_account_holder_name",
      { length: 255 }
    ),

    upi_id: varchar("upi_id", { length: 255 }),

    last_payout_at: timestamp("last_payout_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    rider_unique: uniqueIndex("idx_rider_wallet_rider").on(
      table.rider_id
    ),
  })
);
