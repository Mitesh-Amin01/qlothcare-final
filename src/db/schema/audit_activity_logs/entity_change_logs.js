import {
  pgTable,
  serial,
  integer,
  varchar,
  jsonb,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const entity_change_logs = pgTable(
  "entity_change_logs",
  {
    id: serial("id").primaryKey(),

    entity_type: varchar("entity_type", { length: 100 }).notNull(),
    // ORDER | USER | BRANCH | INVENTORY_ITEM | CUSTOMER

    entity_id: integer("entity_id").notNull(),

    operation: varchar("operation", { length: 50 }).notNull(),
    // INSERT | UPDATE | DELETE

    changed_fields: jsonb("changed_fields"),

    old_values: jsonb("old_values"),

    new_values: jsonb("new_values"),

    changed_by: integer("changed_by").references(() => users.id),

    change_reason: varchar("change_reason", { length: 255 }),

    ip_address: varchar("ip_address", { length: 100 }),

    user_agent: varchar("user_agent", { length: 255 }),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    entity_idx: index("idx_change_log_entity").on(
      table.entity_type,
      table.entity_id
    ),

    user_idx: index("idx_change_log_user").on(
      table.changed_by
    ),

    date_idx: index("idx_change_log_date").on(
      table.occurred_at
    ),

    operation_idx: index("idx_change_log_operation").on(
      table.operation
    ),
  })
);
