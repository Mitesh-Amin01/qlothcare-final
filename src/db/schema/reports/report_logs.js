import {
  pgTable,
  serial,
  integer,
  varchar,
  jsonb,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { reports } from "./reports";
import { users } from "./users";

export const report_logs = pgTable(
  "report_logs",
  {
    id: serial("id").primaryKey(),

    report_id: integer("report_id")
      .notNull()
      .references(() => reports.id),

    executed_by: integer("executed_by").references(
      () => users.id
    ),

    execution_type: varchar("execution_type", { length: 50 }).notNull(),
    // MANUAL | SCHEDULED

    execution_status: varchar("execution_status", { length: 50 }).notNull(),
    // SUCCESS | FAILED

    parameters_used: jsonb("parameters_used"),

    generated_file_url: varchar("generated_file_url", { length: 255 }),

    execution_time_ms: integer("execution_time_ms"),

    failure_reason: varchar("failure_reason", { length: 255 }),

    executed_at: timestamp("executed_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    report_idx: index("idx_report_log_report").on(
      table.report_id
    ),

    user_idx: index("idx_report_log_user").on(
      table.executed_by
    ),

    date_idx: index("idx_report_log_date").on(
      table.executed_at
    ),

    status_idx: index("idx_report_log_status").on(
      table.execution_status
    ),
  })
);
