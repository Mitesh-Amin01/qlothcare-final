import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { support_tickets } from "./support_tickets";
import { users } from "./users";

export const ticket_assignments = pgTable(
  "ticket_assignments",
  {
    id: serial("id").primaryKey(),

    ticket_id: integer("ticket_id")
      .notNull()
      .references(() => support_tickets.id),

    assigned_to_user_id: integer("assigned_to_user_id").references(
      () => users.id
    ),

    assigned_role: varchar("assigned_role", { length: 50 }),
    // SUPPORT_AGENT | MANAGER | SPECIALIST

    assigned_by: integer("assigned_by").references(
      () => users.id
    ),

    assigned_at: timestamp("assigned_at").defaultNow(),

    unassigned_at: timestamp("unassigned_at"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    ticket_idx: index("idx_ticket_assign_ticket").on(
      table.ticket_id
    ),

    user_idx: index("idx_ticket_assign_user").on(
      table.assigned_to_user_id
    ),

    active_idx: index("idx_ticket_assign_active").on(
      table.assigned_to_user_id,
      table.is_active
    ),
  })
);
