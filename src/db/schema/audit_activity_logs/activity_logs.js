import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const activity_logs = pgTable(
  "activity_logs",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    user_id: integer("user_id").references(
      () => users.id
    ),

    activity_type: varchar("activity_type", { length: 50 }).notNull(),
    // CREATE | UPDATE | DELETE | VIEW | EXPORT

    module: varchar("module", { length: 50 }),
    // ORDERS | CUSTOMERS | INVENTORY | PAYMENTS | REPORTS

    entity_type: varchar("entity_type", { length: 100 }),

    entity_id: integer("entity_id"),

    description: text("description"),

    ip_address: varchar("ip_address", { length: 100 }),

    user_agent: varchar("user_agent", { length: 255 }),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_activity_user").on(
      table.user_id
    ),

    type_idx: index("idx_activity_type").on(
      table.activity_type
    ),

    module_idx: index("idx_activity_module").on(
      table.module
    ),

    date_idx: index("idx_activity_date").on(
      table.occurred_at
    ),

    user_date_idx: index("idx_activity_user_date").on(
      table.user_id,
      table.occurred_at
    ),
  })
);
