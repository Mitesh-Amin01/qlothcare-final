import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  jsonb,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { jobs } from "./jobs";

export const job_logs = pgTable(
  "job_logs",
  {
    id: serial("id").primaryKey(),

    job_id: integer("job_id")
      .notNull()
      .references(() => jobs.id),

    log_level: varchar("log_level", { length: 20 }).notNull(),
    // INFO | WARNING | ERROR | DEBUG

    message: text("message").notNull(),

    context: jsonb("context"),

    logged_at: timestamp("logged_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    job_idx: index("idx_job_log_job").on(
      table.job_id
    ),

    level_idx: index("idx_job_log_level").on(
      table.log_level
    ),

    time_idx: index("idx_job_log_time").on(
      table.logged_at
    ),
  })
);
