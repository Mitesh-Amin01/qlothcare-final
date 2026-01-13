import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";
import { users } from "./users";

export const support_tickets = pgTable(
  "support_tickets",
  {
    id: serial("id").primaryKey(),

    ticket_number: varchar("ticket_number", { length: 100 })
      .notNull(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    branch_id: integer("branch_id").references(
      () => branches.id
    ),

    created_by_user_id: integer("created_by_user_id").references(
      () => users.id
    ),

    ticket_type: varchar("ticket_type", { length: 50 }).notNull(),
    // ORDER | PAYMENT | DELIVERY | APP | GENERAL | COMPLAINT

    priority: varchar("priority", { length: 50 }).default("MEDIUM"),
    // LOW | MEDIUM | HIGH | URGENT

    subject: varchar("subject", { length: 255 }).notNull(),

    description: text("description").notNull(),

    related_entity_type: varchar("related_entity_type", { length: 50 }),
    // ORDER | PAYMENT | DELIVERY

    related_entity_id: integer("related_entity_id"),

    status: varchar("status", { length: 50 }).default("OPEN"),
    // OPEN | IN_PROGRESS | RESOLVED | CLOSED | CANCELLED

    resolution_notes: text("resolution_notes"),

    created_at: timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow(),

    resolved_at: timestamp("resolved_at"),

    closed_at: timestamp("closed_at"),
  },
  (table) => ({
    ticket_number_unique: uniqueIndex("idx_ticket_number").on(
      table.ticket_number
    ),

    creator_idx: index("idx_ticket_creator").on(
      table.created_by_user_id
    ),

    status_idx: index("idx_ticket_status").on(
      table.status
    ),

    priority_idx: index("idx_ticket_priority").on(
      table.priority
    ),

    status_priority_idx: index("idx_ticket_status_priority").on(
      table.status,
      table.priority
    ),

    created_idx: index("idx_ticket_created").on(
      table.created_at
    ),
  })
);
