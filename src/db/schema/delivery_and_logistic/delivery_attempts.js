import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { delivery_tasks } from "./delivery_tasks";

export const delivery_attempts = pgTable(
  "delivery_attempts",
  {
    id: serial("id").primaryKey(),

    delivery_task_id: integer("delivery_task_id")
      .notNull()
      .references(() => delivery_tasks.id),

    attempt_number: integer("attempt_number").notNull(),

    attempt_status: varchar("attempt_status", { length: 50 }).notNull(),
    // SUCCESS | FAILED

    failure_reason: varchar("failure_reason", { length: 100 }),
    // CUSTOMER_NOT_AVAILABLE | WRONG_ADDRESS | OTP_FAILED | WEATHER | CUSTOMER_REFUSED

    remarks: text("remarks"),

    attempted_at: timestamp("attempted_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    task_idx: index("idx_delivery_attempt_task").on(
      table.delivery_task_id
    ),

    time_idx: index("idx_delivery_attempt_time").on(
      table.attempted_at
    ),
  })
);
