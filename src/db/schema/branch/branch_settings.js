import {
  pgTable,
  serial,
  integer,
  boolean,
  decimal,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";

export const branchSettings = pgTable(
  "branch_settings",
  {
    id: serial("id").primaryKey(),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    allowOnlineOrders: boolean("allow_online_orders").default(true),
    allowWalkinOrders: boolean("allow_walkin_orders").default(true),
    allowPickup: boolean("allow_pickup").default(true),
    allowDelivery: boolean("allow_delivery").default(true),

    minOrderAmount: decimal("min_order_amount").default("0"),
    maxDailyOrders: integer("max_daily_orders").default(1000),

    defaultPickupTimeMinutes: integer(
      "default_pickup_time_minutes"
    ).default(60),
    defaultDeliveryTimeMinutes: integer(
      "default_delivery_time_minutes"
    ).default(1440),

    deliveryRadiusKm: decimal("delivery_radius_km").default("10"),

    autoAssignRider: boolean("auto_assign_rider").default(false),
    autoAcceptOrders: boolean("auto_accept_orders").default(false),

    acceptsExpressOrders: boolean("accepts_express_orders").default(true),
    expressSurchargePercentage: decimal(
      "express_surcharge_percentage"
    ).default("50"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    branchUnique: uniqueIndex("idx_branch_settings_branch").on(table.branchId),
  })
);
