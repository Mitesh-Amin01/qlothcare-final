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
import { users } from "./users";

export const notifications = pgTable(
  "notifications",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    title: varchar("title", { length: 255 }).notNull(),
    message: text("message").notNull(),

    type: varchar("type", { length: 50 }).default("INFO"), // INFO | ALERT | ACTION | SUCCESS | WARNING
    category: varchar("category", { length: 50 }), // ORDER | PAYMENT | SYSTEM | PROMOTION | DELIVERY

    action_url: varchar("action_url", { length: 500 }),

    is_read: boolean("is_read").default(false),
    read_at: timestamp("read_at"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    user_idx: index("idx_notif_user").on(table.user_id),

    user_read_idx: index("idx_notif_user_read").on(
      table.user_id,
      table.is_read
    ),

    created_idx: index("idx_notif_created").on(table.created_at),

    category_idx: index("idx_notif_category").on(table.category),
  })
);
