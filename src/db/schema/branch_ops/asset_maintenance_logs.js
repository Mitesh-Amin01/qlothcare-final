import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  decimal,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branch_assets } from "./branch_assets";
import { users } from "./users";

export const asset_maintenance_logs = pgTable(
  "asset_maintenance_logs",
  {
    id: serial("id").primaryKey(),

    asset_id: integer("asset_id")
      .notNull()
      .references(() => branch_assets.id),

    maintenance_type: varchar("maintenance_type", { length: 50 })
      .notNull(),
    // PREVENTIVE | CORRECTIVE | BREAKDOWN | INSPECTION

    description: text("description").notNull(),

    performed_by: integer("performed_by").references(() => users.id),

    vendor_name: varchar("vendor_name", { length: 255 }),
    vendor_contact: varchar("vendor_contact", { length: 255 }),

    maintenance_cost: decimal("maintenance_cost"),

    downtime_start: timestamp("downtime_start"),
    downtime_end: timestamp("downtime_end"),

    next_due_date: date("next_due_date"),

    status: varchar("status", { length: 50 }).default("COMPLETED"),
    // COMPLETED | PENDING | IN_PROGRESS

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    asset_idx: index("idx_maint_asset").on(table.asset_id),

    type_idx: index("idx_maint_type").on(table.maintenance_type),

    next_due_idx: index("idx_maint_next_due").on(table.next_due_date),

    downtime_idx: index("idx_maint_downtime").on(table.downtime_start),
  })
);
