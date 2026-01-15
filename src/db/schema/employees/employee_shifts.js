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
import { employees } from "./employees";
import { branches } from "./branches";

export const employee_shifts = pgTable(
  "employee_shifts",
  {
    id: serial("id").primaryKey(),

    employee_id: integer("employee_id")
      .notNull()
      .references(() => employees.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    shift_name: varchar("shift_name", { length: 50 }).notNull(), // MORNING | AFTERNOON | EVENING | NIGHT

    start_time: time("start_time").notNull(),
    end_time: time("end_time").notNull(),

    effective_from: date("effective_from").notNull(),
    effective_to: date("effective_to"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    employee_idx: index("idx_emp_shift_emp").on(table.employee_id),

    employee_active_idx: index("idx_emp_shift_active").on(
      table.employee_id,
      table.is_active
    ),

    branch_shift_idx: index("idx_emp_shift_branch").on(
      table.branch_id,
      table.shift_name
    ),
  })
);
