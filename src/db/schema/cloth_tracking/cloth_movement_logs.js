import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { cloth_instances } from "./cloth_instances";
import { branches } from "./branches";
import { users } from "./users";

export const cloth_movement_logs = pgTable(
  "cloth_movement_logs",
  {
    id: serial("id").primaryKey(),

    cloth_instance_id: integer("cloth_instance_id")
      .notNull()
      .references(() => cloth_instances.id),

    from_status: varchar("from_status", { length: 50 }),
    to_status: varchar("to_status", { length: 50 }).notNull(),

    from_branch_id: integer("from_branch_id").references(
      () => branches.id
    ),

    to_branch_id: integer("to_branch_id").references(
      () => branches.id
    ),

    from_holder_type: varchar("from_holder_type", { length: 50 }),
    // BRANCH | RIDER | CUSTOMER

    from_holder_id: integer("from_holder_id"),

    to_holder_type: varchar("to_holder_type", { length: 50 }),
    // BRANCH | RIDER | CUSTOMER

    to_holder_id: integer("to_holder_id"),

    action: varchar("action", { length: 50 }).notNull(),
    // INTAKE | PICKUP | TRANSFER | PROCESS | QC | DELIVERY | RETURN | LOST | DAMAGED

    performed_by: integer("performed_by").references(() => users.id),

    remarks: text("remarks"),

    occurred_at: timestamp("occurred_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    instance_idx: index("idx_cloth_move_instance").on(
      table.cloth_instance_id
    ),

    time_idx: index("idx_cloth_move_time").on(table.occurred_at),

    instance_time_idx: index("idx_cloth_move_inst_time").on(
      table.cloth_instance_id,
      table.occurred_at
    ),

    action_idx: index("idx_cloth_move_action").on(table.action),
  })
);
