import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";

export const dashboard_metrics = pgTable(
  "dashboard_metrics",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    metric_code: varchar("metric_code", { length: 100 }).notNull(),
    // AVG_TAT | TOTAL_REVENUE | ORDER_COUNT

    metric_name: varchar("metric_name", { length: 255 }).notNull(),

    metric_category: varchar("metric_category", { length: 50 }).notNull(),
    // SALES | OPERATIONS | FINANCE | CUSTOMER

    metric_value: decimal("metric_value").notNull(),

    metric_unit: varchar("metric_unit", { length: 50 }),
    // COUNT | AMOUNT | PERCENTAGE | HOURS | MINUTES

    calculated_at: timestamp("calculated_at").defaultNow(),

    source_reference: varchar("source_reference", { length: 50 }),
    // ORDER | INVOICE | INVENTORY

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    org_code_date_idx: index("idx_metric_org_code_date").on(
      table.organization_id,
      table.metric_code,
      table.calculated_at
    ),

    calculated_idx: index("idx_metric_calculated").on(
      table.calculated_at
    ),

    category_idx: index("idx_metric_category").on(
      table.metric_category
    ),
  })
);
