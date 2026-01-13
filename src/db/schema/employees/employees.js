import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  date,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "../user/user";
import { organizations } from "../organization/organization";

export const employees = pgTable(
  "employees",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    employee_code: varchar("employee_code", { length: 100 }).notNull(), // EMP-XXXX
    designation: varchar("designation", { length: 255 }).notNull(),

    employment_type: varchar("employment_type", { length: 50 }).notNull(), // FULL_TIME | PART_TIME | CONTRACT | INTERN
    employment_status: varchar("employment_status", { length: 50 })
      .notNull()
      .default("ACTIVE"), // ACTIVE | SUSPENDED | TERMINATED | RESIGNED

    joining_date: date("joining_date").notNull(),
    exit_date: date("exit_date"),

    probation_end_date: date("probation_end_date"),

    emergency_contact_name: varchar("emergency_contact_name", { length: 255 }),
    emergency_contact_phone: varchar("emergency_contact_phone", {
      length: 50,
    }),

    is_deleted: boolean("is_deleted").default(false),
    deleted_at: timestamp("deleted_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    user_unique: uniqueIndex("idx_emp_user").on(table.user_id),

    employee_code_unique: uniqueIndex("idx_emp_code").on(table.employee_code),

    org_status_idx: index("idx_emp_org_status").on(
      table.organization_id,
      table.employment_status
    ),

    active_idx: index("idx_emp_active").on(
      table.is_deleted,
      table.employment_status
    ),
  })
);
