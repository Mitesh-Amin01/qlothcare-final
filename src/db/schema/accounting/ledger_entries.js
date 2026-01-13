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
import { ledger_accounts } from "./ledger_accounts";
import { users } from "./users";

export const ledger_entries = pgTable(
  "ledger_entries",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(() => branches.id),

    account_id: integer("account_id")
      .notNull()
      .references(() => ledger_accounts.id),

    reference_type: varchar("reference_type", { length: 50 }),
    // INVOICE | PAYMENT | REFUND | ADJUSTMENT

    reference_id: integer("reference_id"),

    entry_type: varchar("entry_type", { length: 50 }).notNull(),
    // DEBIT | CREDIT

    amount: decimal("amount").notNull(),

    narration: text("narration"),

    entry_date: timestamp("entry_date").defaultNow(),

    created_by: integer("created_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    account_idx: index("idx_ledger_entry_account").on(
      table.account_id
    ),

    date_idx: index("idx_ledger_entry_date").on(
      table.entry_date
    ),

    account_date_idx: index("idx_ledger_entry_account_date").on(
      table.account_id,
      table.entry_date
    ),

    ref_type_idx: index("idx_ledger_entry_ref_type").on(
      table.reference_type
    ),
  })
);
