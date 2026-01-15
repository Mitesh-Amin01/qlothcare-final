import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  jsonb,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const reports = pgTable(
  "reports",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    name: varchar("name", { length: 255 }).notNull(),

    code: varchar("code", { length: 100 }).notNull(),
    // SALES_SUMMARY | ORDER_TAT | INVENTORY_USAGE | RIDER_PERFORMANCE

    report_type: varchar("report_type", { length: 50 }).notNull(),
    // SYSTEM | CUSTOM

    category: varchar("category", { length: 50 }).notNull(),
    // SALES | OPERATIONS | FINANCE | INVENTORY | USERS

    description: text("description"),

    query_definition: jsonb("query_definition"),
    // SQL or filter definition

    parameters: jsonb("parameters"),
    // date_range, branch_ids, status

    output_format: varchar("output_format", { length: 50 }).default("TABLE"),
    // TABLE | CHART | CSV | PDF | EXCEL

    is_active: boolean("is_active").default(true),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    code_unique: uniqueIndex("idx_report_code").on(
      table.code
    ),

    org_idx: index("idx_report_org").on(
      table.organization_id
    ),

    category_idx: index("idx_report_category").on(
      table.category
    ),

    active_idx: index("idx_report_active").on(
      table.is_active
    ),
  })
);
