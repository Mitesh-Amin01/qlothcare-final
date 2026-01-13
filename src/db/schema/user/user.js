import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),

    organizationId: integer("organization_id").references(
      () => organizations.id
    ), // NULL for customers

    type: varchar("type", { length: 50 }).notNull(), // CUSTOMER | EMPLOYEE | RIDER | ADMIN | SUPER_ADMIN

    status: varchar("status", { length: 50 })
      .notNull()
      .default("ACTIVE"), // ACTIVE | INACTIVE | BLOCKED | DELETED

    isDeleted: boolean("is_deleted").default(false),
    deletedAt: timestamp("deleted_at"),
    deletedBy: integer("deleted_by").references(() => users.id),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    orgTypeIdx: index("idx_users_org_type").on(
      table.organizationId,
      table.type
    ),

    typeStatusIdx: index("idx_users_type_status").on(
      table.type,
      table.status
    ),

    activeIdx: index("idx_users_active").on(
      table.isDeleted,
      table.status
    ),
  })
);
