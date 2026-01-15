import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  date,
  timestamp,
  jsonb,
  index,
} from "drizzle-orm/pg-core";
import { employees } from "./employees";

export const employee_salary_profiles = pgTable(
  "employee_salary_profiles",
  {
    id: serial("id").primaryKey(),

    employee_id: integer("employee_id")
      .notNull()
      .references(() => employees.id),

    salary_type: varchar("salary_type", { length: 50 }).notNull(), // MONTHLY | DAILY | HOURLY
    base_salary: decimal("base_salary").notNull(),

    overtime_rate: decimal("overtime_rate"),
    bonus_percentage: decimal("bonus_percentage"),

    allowances: jsonb("allowances"), // HRA, DA, Transport, etc
    deductions: jsonb("deductions"), // PF, ESI, Tax, etc

    payment_method: varchar("payment_method", { length: 50 }).default(
      "BANK"
    ), // BANK | WALLET | CASH

    bank_account_number: varchar("bank_account_number", { length: 255 }),
    bank_ifsc: varchar("bank_ifsc", { length: 50 }),
    bank_account_holder_name: varchar(
      "bank_account_holder_name",
      { length: 255 }
    ),

    effective_from: date("effective_from").notNull(),
    effective_to: date("effective_to"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    employee_idx: index("idx_emp_salary_emp").on(table.employee_id),

    employee_active_idx: index("idx_emp_salary_active").on(
      table.employee_id,
      table.is_active
    ),

    effective_idx: index("idx_emp_salary_effective").on(
      table.effective_from
    ),
  })
);
