import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { riders } from "./riders";
import { users } from "./users";

export const delivery_routes = pgTable(
  "delivery_routes",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    route_date: date("route_date").notNull(),

    route_type: varchar("route_type", { length: 50 })
      .notNull(),
    // PICKUP | DELIVERY

    total_tasks: integer("total_tasks").default(0),
    completed_tasks: integer("completed_tasks").default(0),

    total_distance_km: decimal("total_distance_km"),

    estimated_duration_minutes: integer("estimated_duration_minutes"),
    actual_duration_minutes: integer("actual_duration_minutes"),

    route_status: varchar("route_status", { length: 50 }).default("PLANNED"),
    // PLANNED | IN_PROGRESS | COMPLETED | CANCELLED

    created_by: integer("created_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    unique_idx: index("idx_route_unique").on(
      table.branch_id,
      table.rider_id,
      table.route_date
    ),

    rider_idx: index("idx_route_rider").on(table.rider_id),

    date_idx: index("idx_route_date").on(table.route_date),

    status_idx: index("idx_route_status").on(table.route_status),
  })
);
