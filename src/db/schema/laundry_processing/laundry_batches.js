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
import { process_stages } from "./process_stages";
import { users } from "./users";

export const laundry_batches = pgTable(
  "laundry_batches",
  {
    id: serial("id").primaryKey(),

    batch_code: varchar("batch_code", { length: 100 })
      .notNull(), // BAT-XXXXXX

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    batch_type: varchar("batch_type", { length: 50 })
      .notNull(),
    // WASH | DRY | IRON | CLEANING | DRY_CLEAN

    total_items: integer("total_items").default(0),
    total_weight: decimal("total_weight"),

    current_stage_id: integer("current_stage_id").references(
      () => process_stages.id
    ),

    batch_status: varchar("batch_status", { length: 50 }).default(
      "CREATED"
    ),
    // CREATED | IN_PROGRESS | COMPLETED | ON_HOLD | CANCELLED

    started_at: timestamp("started_at"),
    completed_at: timestamp("completed_at"),

    created_by: integer("created_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    batch_code_unique: uniqueIndex("idx_batch_code").on(
      table.batch_code
    ),

    branch_idx: index("idx_batch_branch").on(table.branch_id),

    status_idx: index("idx_batch_status").on(table.batch_status),

    branch_status_idx: index("idx_batch_branch_status").on(
      table.branch_id,
      table.batch_status
    ),

    started_idx: index("idx_batch_started").on(table.started_at),
  })
);
