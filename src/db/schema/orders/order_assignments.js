import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";

export const order_assignments = pgTable(
  "order_assignments",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    assigned_to_type: varchar("assigned_to_type", { length: 50 }).notNull(),
    // EMPLOYEE | RIDER

    assigned_to_id: integer("assigned_to_id").notNull(),

    assignment_role: varchar("assignment_role", { length: 50 }).notNull(),
    // PICKUP | PROCESSING | DELIVERY | QC

    assigned_at: timestamp("assigned_at").defaultNow(),
    unassigned_at: timestamp("unassigned_at"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_order_assign_order").on(table.order_id),

    assignee_idx: index("idx_order_assign_user").on(
      table.assigned_to_type,
      table.assigned_to_id
    ),

    order_role_idx: index("idx_order_assign_role").on(
      table.order_id,
      table.assignment_role
    ),

    order_active_idx: index("idx_order_assign_active").on(
      table.order_id,
      table.is_active
    ),
  })
);
