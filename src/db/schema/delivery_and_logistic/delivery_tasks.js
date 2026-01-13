import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { branches } from "./branches";
import { riders } from "./riders";
import { users } from "./users";

export const delivery_tasks = pgTable(
  "delivery_tasks",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    task_type: varchar("task_type", { length: 50 }).notNull(),
    // PICKUP | DELIVERY

    task_status: varchar("task_status", { length: 50 }).default("ASSIGNED"),
    // ASSIGNED | STARTED | COMPLETED | FAILED | CANCELLED

    scheduled_at: timestamp("scheduled_at"),
    started_at: timestamp("started_at"),
    completed_at: timestamp("completed_at"),

    priority: integer("priority").default(0),

    estimated_distance_km: decimal("estimated_distance_km"),
    actual_distance_km: decimal("actual_distance_km"),

    assigned_by: integer("assigned_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_delivery_task_order").on(table.order_id),

    rider_idx: index("idx_delivery_task_rider").on(table.rider_id),

    status_idx: index("idx_delivery_task_status").on(table.task_status),

    rider_status_idx: index("idx_delivery_task_rider_status").on(
      table.rider_id,
      table.task_status
    ),

    scheduled_idx: index("idx_delivery_task_scheduled").on(
      table.scheduled_at
    ),
  })
);
