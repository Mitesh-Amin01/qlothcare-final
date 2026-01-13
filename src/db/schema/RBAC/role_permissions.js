import {
  pgTable,
  serial,
  integer,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { roles } from "./roles";
import { permissions } from "./permissions";

export const rolePermissions = pgTable(
  "role_permissions",
  {
    id: serial("id").primaryKey(),

    roleId: integer("role_id")
      .notNull()
      .references(() => roles.id),

    permissionId: integer("permission_id")
      .notNull()
      .references(() => permissions.id),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    rolePermUnique: uniqueIndex("idx_role_perms_unique").on(
      table.roleId,
      table.permissionId
    ),

    roleIdx: index("idx_role_perms_role").on(table.roleId),

    permissionIdx: index("idx_role_perms_permission").on(table.permissionId),
  })
);
