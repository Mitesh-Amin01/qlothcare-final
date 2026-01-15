import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const data_access_logs = pgTable(
  "data_access_logs",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id").references(() => users.id),

    access_type: varchar("access_type", { length: 50 }).notNull(),
    // READ | EXPORT | DOWNLOAD | PRINT

    entity_type: varchar("entity_type", { length: 50 }).notNull(),
    // CUSTOMER | PAYMENT | WALLET | INVOICE | REPORT

    entity_id: integer("entity_id"),

    data_scope: varchar("data_scope", { length: 50 }),
    // FULL | PARTIAL | MASKED

    purpose: varchar("purpose", { length: 100 }),
    // SUPPORT | AUDIT | REPORTING | OPERATIONS

    ip_address: varchar("ip_address", { length: 100 }),

    user_agent: varchar("user_agent", { length: 255 }),

    accessed_at: timestamp("accessed_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_data_access_user").on(
      table.user_id
    ),

    entity_idx: index("idx_data_access_entity").on(
      table.entity_type
    ),

    date_idx: index("idx_data_access_date").on(
      table.accessed_at
    ),

    type_idx: index("idx_data_access_type").on(
      table.access_type
    ),
  })
);
