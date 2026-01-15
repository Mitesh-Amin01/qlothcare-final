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
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const dashboard_widgets = pgTable(
  "dashboard_widgets",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    widget_code: varchar("widget_code", { length: 100 }).notNull(),
    // TOTAL_ORDERS | TODAY_REVENUE | PENDING_ORDERS

    widget_type: varchar("widget_type", { length: 50 }).notNull(),
    // KPI | CHART | TABLE | GAUGE

    title: varchar("title", { length: 255 }).notNull(),

    description: text("description"),

    data_source: varchar("data_source", { length: 50 }).notNull(),
    // ORDERS | PAYMENTS | INVENTORY | USERS

    query_definition: jsonb("query_definition"),

    chart_type: varchar("chart_type", { length: 50 }),
    // LINE | BAR | PIE | DOUGHNUT | AREA

    refresh_interval_seconds: integer("refresh_interval_seconds").default(300),

    display_order: integer("display_order").default(0),

    is_active: boolean("is_active").default(true),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    org_code_idx: index("idx_widget_org_code").on(
      table.organization_id,
      table.widget_code
    ),

    active_idx: index("idx_widget_active").on(
      table.is_active
    ),

    order_idx: index("idx_widget_order").on(
      table.display_order
    ),
  })
);
