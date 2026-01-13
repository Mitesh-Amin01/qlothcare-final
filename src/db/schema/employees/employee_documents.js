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
import { users } from "./users";

export const employee_documents = pgTable(
  "employee_documents",
  {
    id: serial("id").primaryKey(),

    employee_id: integer("employee_id")
      .notNull()
      .references(() => employees.id),

    document_type: varchar("document_type", { length: 50 }).notNull(), // AADHAR | PAN | DRIVING_LICENSE | ADDRESS_PROOF | EDUCATION | CONTRACT | OTHER
    document_name: varchar("document_name", { length: 255 }).notNull(),
    document_url: varchar("document_url", { length: 500 }).notNull(),
    document_number: varchar("document_number", { length: 255 }),

    expiry_date: date("expiry_date"),

    is_verified: boolean("is_verified").default(false),
    verified_at: timestamp("verified_at"),
    verified_by: integer("verified_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    employee_idx: index("idx_emp_docs_emp").on(table.employee_id),

    document_type_idx: index("idx_emp_docs_type").on(
      table.document_type
    ),

    expiry_idx: index("idx_emp_docs_expiry").on(table.expiry_date),
  })
);
