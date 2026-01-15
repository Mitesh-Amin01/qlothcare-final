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
import { jobs } from "./jobs";

export const failed_jobs = pgTable(
  "failed_jobs",
  {
    id: serial("id").primaryKey(),

    job_id: integer("job_id").references(
      () => jobs.id
    ),

    job_name: varchar("job_name", { length: 255 }).notNull(),

    payload: jsonb("payload"),

    failure_reason: text("failure_reason"),
    error_stack: text("error_stack"),

    failed_at: timestamp("failed_at").defaultNow(),

    retry_count: integer("retry_count").default(0),

    last_retry_at: timestamp("last_retry_at"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    job_idx: index("idx_failed_job_id").on(
      table.job_id
    ),

    time_idx: index("idx_failed_job_time").on(
      table.failed_at
    ),

    retry_idx: index("idx_failed_job_retry").on(
      table.retry_count
    ),
  })
);
