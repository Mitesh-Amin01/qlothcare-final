import {
  pgTable,
  serial,
  integer,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { services } from "./services";

export const service_branch_mapping = pgTable(
  "service_branch_mapping",
  {
    id: serial("id").primaryKey(),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    service_id: integer("service_id")
      .notNull()
      .references(() => services.id),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    branch_service_unique: uniqueIndex("idx_svc_branch_unique").on(
      table.branch_id,
      table.service_id
    ),

    branch_idx: index("idx_svc_branch_branch").on(table.branch_id),

    branch_active_idx: index("idx_svc_branch_active").on(
      table.branch_id,
      table.is_active
    ),
  })
);
