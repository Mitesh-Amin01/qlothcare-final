import {
  pgTable,
  serial,
  integer,
  varchar,
  jsonb,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const jobs = pgTable(
  "jobs",
  {
    id: serial("id").primaryKey(),

    job_name: varchar("job_name", { length: 255 }).notNull(),

    job_type: varchar("job_type", { length: 50 }).notNull(),
    // EMAIL | NOTIFICATION | REPORT | WEBHOOK | CLEANUP | SYNC

    payload: jsonb("payload"),

    priority: integer("priority").default(0),

    status: varchar("status", { length: 50 }).default("PENDING"),
    // PENDING | RUNNING | COMPLETED | FAILED | CANCELLED

    scheduled_at: timestamp("scheduled_at"),
    started_at: timestamp("started_at"),
    completed_at: timestamp("completed_at"),

    retry_count: integer("retry_count").default(0),
    max_retries: integer("max_retries").default(3),

    error_message: text("error_message"),

    created_by: integer("created_by").references(() => users.id),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    status_idx: index("idx_job_status").on(table.status),

    type_idx: index("idx_job_type").on(table.job_type),

    scheduled_idx: index("idx_job_scheduled").on(table.scheduled_at),

    status_scheduled_idx: index("idx_job_status_scheduled").on(
      table.status,
      table.scheduled_at
    ),

    priority_idx: index("idx_job_priority").on(table.priority),
  })
);
