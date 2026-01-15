import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  date,
  time,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { riders } from "./riders";
import { branches } from "./branches";

export const rider_shifts = pgTable(
  "rider_shifts",
  {
    id: serial("id").primaryKey(),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    shift_name: varchar("shift_name", { length: 50 }).notNull(),

    start_time: time("start_time").notNull(),
    end_time: time("end_time").notNull(),

    effective_from: date("effective_from").notNull(),
    effective_to: date("effective_to"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    rider_idx: index("idx_rider_shift_rider").on(table.rider_id),

    rider_active_idx: index("idx_rider_shift_active").on(
      table.rider_id,
      table.is_active
    ),
  })
);
