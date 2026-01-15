import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { cloth_instances } from "./cloth_instances";

export const cloth_barcodes = pgTable(
  "cloth_barcodes",
  {
    id: serial("id").primaryKey(),

    cloth_instance_id: integer("cloth_instance_id")
      .notNull()
      .references(() => cloth_instances.id),

    barcode_value: varchar("barcode_value", { length: 255 }).notNull(),

    barcode_type: varchar("barcode_type", { length: 50 }).notNull(),
    // QR | CODE128 | RFID | NFC

    printed_at: timestamp("printed_at"),
    scanned_at: timestamp("scanned_at"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    barcode_unique: uniqueIndex("idx_barcode_value").on(table.barcode_value),

    instance_idx: index("idx_barcode_instance").on(table.cloth_instance_id),

    active_idx: index("idx_barcode_active").on(table.is_active),
  })
);
