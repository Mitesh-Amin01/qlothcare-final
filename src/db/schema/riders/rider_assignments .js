import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { riders } from "./riders";
import { branches } from "./branches";
import { users } from "./users";

export const rider_assignments = pgTable(
  "rider_assignments",
  {
    id: serial("id").primaryKey(),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    is_primary: boolean("is_primary").default(false),

    assignment_status: varchar("assignment_status", { length: 50 }).default(
      "ACTIVE"
    ), // ACTIVE | ENDED

    start_date: date("start_date").notNull(),
    end_date: date("end_date"),

    assigned_by: integer("assigned_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    rider_idx: index("idx_rider_assign_rider").on(table.rider_id),

    branch_idx: index("idx_rider_assign_branch").on(table.branch_id),

    primary_idx: index("idx_rider_assign_primary").on(
      table.rider_id,
      table.is_primary
    ),

    status_idx: index("idx_rider_assign_status").on(
      table.rider_id,
      table.assignment_status
    ),
  })
);
