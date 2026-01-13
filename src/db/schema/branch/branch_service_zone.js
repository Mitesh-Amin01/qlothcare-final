import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";

export const branchServiceZones = pgTable(
  "branch_service_zones",
  {
    id: serial("id").primaryKey(),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    zoneName: varchar("zone_name", { length: 255 }).notNull(),
    city: varchar("city", { length: 255 }),
    pincode: varchar("pincode", { length: 20 }),
    areaName: varchar("area_name", { length: 255 }),

    radiusKm: decimal("radius_km"),

    deliveryCharge: decimal("delivery_charge").default("0"),
    minOrderAmount: decimal("min_order_amount").default("0"),

    estimatedDeliveryMinutes: integer(
      "estimated_delivery_minutes"
    ).default(120),

    isActive: boolean("is_active").default(true),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    branchIdx: index("idx_zone_branch").on(table.branchId),
    pincodeIdx: index("idx_zone_pincode").on(table.pincode),
    activeIdx: index("idx_zone_active").on(table.branchId, table.isActive),
  })
);
