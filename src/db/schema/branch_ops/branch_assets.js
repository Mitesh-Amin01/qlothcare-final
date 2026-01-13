import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  date,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";

export const branch_assets = pgTable(
  "branch_assets",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    asset_name: varchar("asset_name", { length: 255 }).notNull(),

    asset_type: varchar("asset_type", { length: 50 }).notNull(),
    // WASHER | DRYER | IRON | GENERATOR | BOILER | PRESS

    asset_code: varchar("asset_code", { length: 100 }).notNull(),

    manufacturer: varchar("manufacturer", { length: 255 }),
    model: varchar("model", { length: 255 }),

    serial_number: varchar("serial_number", { length: 255 }),

    purchase_date: date("purchase_date"),
    purchase_cost: decimal("purchase_cost"),
    warranty_expiry: date("warranty_expiry"),

    asset_status: varchar("asset_status", { length: 50 }).default("ACTIVE"),
    // ACTIVE | UNDER_MAINTENANCE | RETIRED | DAMAGED

    location_description: varchar("location_description", { length: 255 }),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    asset_code_unique: uniqueIndex("idx_asset_code").on(
      table.asset_code
    ),

    branch_idx: index("idx_asset_branch").on(table.branch_id),

    status_idx: index("idx_asset_status").on(table.asset_status),

    branch_status_idx: index("idx_asset_branch_status").on(
      table.branch_id,
      table.asset_status
    ),
  })
);
