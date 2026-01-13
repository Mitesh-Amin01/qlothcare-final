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
import { branches } from "./branches";

export const branchFinancialSettings = pgTable(
  "branch_financial_settings",
  {
    id: serial("id").primaryKey(),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    gstNumber: varchar("gst_number", { length: 50 }),
    panNumber: varchar("pan_number", { length: 50 }),

    taxPercentage: decimal("tax_percentage").default("18"),
    serviceChargePercentage: decimal(
      "service_charge_percentage"
    ).default("0"),

    payoutCycleDays: integer("payout_cycle_days").default(7),
    settlementMethod: varchar("settlement_method", { length: 50 }).default(
      "BANK"
    ),

    bankName: varchar("bank_name", { length: 255 }),
    bankAccountNumber: varchar("bank_account_number", { length: 255 }),
    bankAccountHolderName: varchar("bank_account_holder_name", {
      length: 255,
    }),
    bankIfsc: varchar("bank_ifsc", { length: 50 }),
    bankBranch: varchar("bank_branch", { length: 255 }),

    upiId: varchar("upi_id", { length: 255 }),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    branchUnique: uniqueIndex("idx_branch_finance_branch").on(table.branchId),
    gstIdx: index("idx_branch_finance_gst").on(table.gstNumber),
  })
);
