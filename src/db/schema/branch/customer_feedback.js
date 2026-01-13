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
import { customers } from "./customers";
import { orders } from "./orders";

export const customer_feedback = pgTable(
  "customer_feedback",
  {
    id: serial("id").primaryKey(),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    order_id: integer("order_id").references(() => orders.id),

    rating: integer("rating").notNull(), // 1–5 stars

    comment: text("comment"),

    feedback_type: varchar("feedback_type", { length: 50 }).notNull(), 
    // SERVICE | DELIVERY | QUALITY | APP | SUPPORT

    is_published: boolean("is_published").default(false),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    customer_idx: index("idx_cust_feedback_cust").on(table.customer_id),

    order_idx: index("idx_cust_feedback_order").on(table.order_id),

    rating_idx: index("idx_cust_feedback_rating").on(table.rating),

    created_idx: index("idx_cust_feedback_created").on(table.created_at),
  })
);
