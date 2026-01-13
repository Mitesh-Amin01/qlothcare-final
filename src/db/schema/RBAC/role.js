import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const roles = pgTable(
  "roles",
  {
    id: serial("id").primaryKey(),

    organizationId: integer("organization_id").references(
      () => organizations.id
    ), // NULL for system roles

    name: varchar("name", { length: 255 }).notNull(),

    code: varchar("code", { length: 100 }).notNull(),

    scope: varchar("scope", { length: 50 })
      .notNull()
      .default("BRANCH"), // GLOBAL | ORGANIZATION | BRANCH

    description: text("description"),

    isSystemRole: boolean("is_system_role").default(false),
    isActive: boolean("is_active").default(true),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    codeUnique: uniqueIndex("idx_roles_code").on(table.code),

    orgActiveIdx: index("idx_roles_org_active").on(
      table.organizationId,
      table.isActive
    ),

    scopeIdx: index("idx_roles_scope").on(table.scope),
  })
);
