import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { laundry_batches } from "./laundry_batches";
import { cloth_instances } from "./cloth_instances";
import { process_stages } from "./process_stages";
import { users } from "./users";

export const order_process_logs = pgTable(
  "order_process_logs",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    batch_id: integer("batch_id").references(
      () => laundry_batches.id
    ),

    cloth_instance_id: integer("cloth_instance_id").references(
      () => cloth_instances.id
    ),

    from_stage_id: integer("from_stage_id").references(
      () => process_stages.id
    ),

    to_stage_id: integer("to_stage_id").references(
      () => process_stages.id
    ),

    process_status: varchar("process_status", { length: 50 })
      .notNull(),
    // STARTED | COMPLETED | FAILED | SKIPPED

    handled_by: integer("handled_by").references(() => users.id),

    machine_id: varchar("machine_id", { length: 100 }),
    machine_name: varchar("machine_name", { length: 255 }),

    started_at: timestamp("started_at"),
    completed_at: timestamp("completed_at"),

    duration_minutes: integer("duration_minutes"),

    delay_reason: varchar("delay_reason", { length: 255 }),
    damage_note: text("damage_note"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_process_log_order").on(table.order_id),

    batch_idx: index("idx_process_log_batch").on(table.batch_id),

    cloth_idx: index("idx_process_log_cloth").on(
      table.cloth_instance_id
    ),

    started_idx: index("idx_process_log_started").on(
      table.started_at
    ),
  })
);
