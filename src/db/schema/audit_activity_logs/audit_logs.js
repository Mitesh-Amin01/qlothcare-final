import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const audit_logs = pgTable(
  "audit_logs",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    actor_user_id: integer("actor_user_id").references(
      () => users.id
    ),

    actor_role: varchar("actor_role", { length: 100 }),

    action: varchar("action", { length: 100 }).notNull(),
    // LOGIN | LOGOUT | PASSWORD_CHANGE | ROLE_ASSIGN | PERMISSION_CHANGE | STATUS_CHANGE | DELETE

    target_entity: varchar("target_entity", { length: 100 }),
    // USER | ROLE | ORDER | PAYMENT | BRANCH

    target_entity_id: integer("target_entity_id"),

    ip_address: varchar("ip_address", { length: 100 }),

    user_agent: varchar("user_agent", { length: 255 }),

    result: varchar("result", { length: 50 }).notNull(),
    // SUCCESS | FAILURE

    failure_reason: varchar("failure_reason", { length: 255 }),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    actor_user_idx: index("idx_audit_user").on(
      table.actor_user_id
    ),

    action_idx: index("idx_audit_action").on(
      table.action
    ),

    date_idx: index("idx_audit_date").on(
      table.occurred_at
    ),

    org_date_idx: index("idx_audit_org_date").on(
      table.organization_id,
      table.occurred_at
    ),

    entity_idx: index("idx_audit_entity").on(
      table.target_entity
    ),
  })
);
