import {
  pgTable,
  serial,
  integer,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { roles } from "./roles";
import { branches } from "./branches";

export const user_roles = pgTable(
  "user_roles",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    role_id: integer("role_id")
      .notNull()
      .references(() => roles.id),

    branch_id: integer("branch_id").references(() => branches.id), // required if role scope is BRANCH

    assigned_by: integer("assigned_by").references(() => users.id),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    user_role_branch_unique: uniqueIndex("idx_user_roles_unique").on(
      table.user_id,
      table.role_id,
      table.branch_id
    ),

    user_idx: index("idx_user_roles_user").on(table.user_id),

    role_idx: index("idx_user_roles_role").on(table.role_id),

    user_active_idx: index("idx_user_roles_active").on(
      table.user_id,
      table.is_active
    ),
  })
);
