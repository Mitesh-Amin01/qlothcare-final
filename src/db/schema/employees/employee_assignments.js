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
import { employees } from "./employees";
import { branches } from "../branch/branch";
import { roles } from "../RBAC/role";
import { users } from "../user/user";

export const employee_assignments = pgTable(
  "employee_assignments",
  {
    id: serial("id").primaryKey(),

    employee_id: integer("employee_id")
      .notNull()
      .references(() => employees.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    role_id: integer("role_id")
      .notNull()
      .references(() => roles.id),

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
    employee_idx: index("idx_emp_assign_emp").on(table.employee_id),

    branch_idx: index("idx_emp_assign_branch").on(table.branch_id),

    primary_idx: index("idx_emp_assign_primary").on(
      table.employee_id,
      table.is_primary
    ),

    status_idx: index("idx_emp_assign_status").on(
      table.employee_id,
      table.assignment_status
    ),
  })
);
