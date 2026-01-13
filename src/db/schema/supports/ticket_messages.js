import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { support_tickets } from "./support_tickets";
import { users } from "./users";

export const ticket_messages = pgTable(
  "ticket_messages",
  {
    id: serial("id").primaryKey(),

    ticket_id: integer("ticket_id")
      .notNull()
      .references(() => support_tickets.id),

    sender_user_id: integer("sender_user_id").references(
      () => users.id
    ),

    sender_type: varchar("sender_type", { length: 50 }).notNull(),
    // CUSTOMER | EMPLOYEE | SYSTEM

    message: text("message").notNull(),

    attachment_url: varchar("attachment_url", { length: 255 }),

    is_internal: boolean("is_internal").default(false),

    sent_at: timestamp("sent_at").defaultNow(),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    ticket_idx: index("idx_ticket_msg_ticket").on(
      table.ticket_id
    ),

    sender_idx: index("idx_ticket_msg_sender").on(
      table.sender_user_id
    ),

    sent_idx: index("idx_ticket_msg_sent").on(
      table.sent_at
    ),
  })
);
