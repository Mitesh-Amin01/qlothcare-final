import {
  pgTable,
  serial,
  integer,
  decimal,
  boolean,
  date,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { services } from "./services";
import { service_variants } from "./service_variants";
import { cloth_items } from "./cloth_items";

export const service_pricing = pgTable(
  "service_pricing",
  {
    id: serial("id").primaryKey(),

    service_id: integer("service_id")
      .notNull()
      .references(() => services.id),

    variant_id: integer("variant_id")
      .notNull()
      .references(() => service_variants.id),

    cloth_item_id: integer("cloth_item_id")
      .notNull()
      .references(() => cloth_items.id),

    price: decimal("price").notNull(),

    effective_from: date("effective_from").notNull(),
    effective_to: date("effective_to"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    svc_price_unique: uniqueIndex("idx_svc_price_unique").on(
      table.service_id,
      table.variant_id,
      table.cloth_item_id,
      table.effective_from
    ),

    service_idx: index("idx_svc_price_service").on(table.service_id),

    cloth_idx: index("idx_svc_price_cloth").on(table.cloth_item_id),

    effective_idx: index("idx_svc_price_effective").on(table.effective_from),
  })
);
