import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { invoices } from "./invoices";
import { order_items } from "./order_items";

export const invoice_items = pgTable(
  "invoice_items",
  {
    id: serial("id").primaryKey(),

    invoice_id: integer("invoice_id")
      .notNull()
      .references(() => invoices.id),

    order_item_id: integer("order_item_id").references(
      () => order_items.id
    ),

    description: varchar("description", { length: 255 }).notNull(),

    quantity: integer("quantity").notNull(),

    unit_price: decimal("unit_price").notNull(),

    total_price: decimal("total_price").notNull(),

    tax_percentage: decimal("tax_percentage").default("0"),
    tax_amount: decimal("tax_amount").default("0"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    invoice_idx: index("idx_invoice_item_invoice").on(
      table.invoice_id
    ),

    order_item_idx: index("idx_invoice_item_order").on(
      table.order_item_id
    ),
  })
);
