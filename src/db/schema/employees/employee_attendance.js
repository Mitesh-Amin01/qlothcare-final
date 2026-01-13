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
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { employees } from "./employees";
import { branches } from "./branches";

export const employee_attendance = pgTable(
  "employee_attendance",
  {
    id: serial("id").primaryKey(),

    employee_id: integer("employee_id")
      .notNull()
      .references(() => employees.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    attendance_date: date("attendance_date").notNull(),

    check_in_time: timestamp("check_in_time"),
    check_out_time: timestamp("check_out_time"),

    total_hours: decimal("total_hours"),
    overtime_hours: decimal("overtime_hours"),

    status: varchar("status", { length: 50 }).notNull(), // PRESENT | ABSENT | HALF_DAY | LEAVE | HOLIDAY

    remarks: text("remarks"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    emp_date_unique: uniqueIndex("idx_emp_attend_unique").on(
      table.employee_id,
      table.attendance_date
    ),

    employee_idx: index("idx_emp_attend_emp").on(table.employee_id),

    date_idx: index("idx_emp_attend_date").on(table.attendance_date),

    branch_date_idx: index("idx_emp_attend_branch_date").on(
      table.branch_id,
      table.attendance_date
    ),
  })
);
