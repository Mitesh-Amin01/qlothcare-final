import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";

export const ledger_accounts = pgTable(
  "ledger_accounts",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(() => branches.id),
    // NULL = organization level

    account_code: varchar("account_code", { length: 100 }).notNull(),

    account_name: varchar("account_name", { length: 255 }).notNull(),

    account_type: varchar("account_type", { length: 50 }).notNull(),
    // ASSET | LIABILITY | INCOME | EXPENSE | EQUITY

    account_category: varchar("account_category", { length: 100 }),
    // CASH | BANK | GST | SALES | REFUND | COMMISSION | INVENTORY

    parent_account_id: integer("parent_account_id").references(
      () => ledger_accounts.id
    ),

    current_balance: decimal("current_balance").default("0"),

    is_system_account: boolean("is_system_account").default(false),
    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    code_unique: uniqueIndex("idx_ledger_code").on(table.account_code),

    org_idx: index("idx_ledger_org").on(table.organization_id),

    org_active_idx: index("idx_ledger_org_active").on(
      table.organization_id,
      table.is_active
    ),

    type_idx: index("idx_ledger_type").on(table.account_type),
  })
);
