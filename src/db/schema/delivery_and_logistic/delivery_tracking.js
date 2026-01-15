import {
  pgTable,
  serial,
  integer,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { delivery_tasks } from "./delivery_tasks";
import { riders } from "./riders";

export const delivery_tracking = pgTable(
  "delivery_tracking",
  {
    id: serial("id").primaryKey(),

    delivery_task_id: integer("delivery_task_id")
      .notNull()
      .references(() => delivery_tasks.id),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    latitude: decimal("latitude", {
      precision: 10,
      scale: 8,
    }).notNull(),

    longitude: decimal("longitude", {
      precision: 11,
      scale: 8,
    }).notNull(),

    speed_kmph: decimal("speed_kmph"),
    accuracy_meters: decimal("accuracy_meters"),

    tracked_at: timestamp("tracked_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    task_idx: index("idx_tracking_task").on(
      table.delivery_task_id
    ),

    rider_idx: index("idx_tracking_rider").on(table.rider_id),

    time_idx: index("idx_tracking_time").on(table.tracked_at),

    task_time_idx: index("idx_tracking_task_time").on(
      table.delivery_task_id,
      table.tracked_at
    ),
  })
);
