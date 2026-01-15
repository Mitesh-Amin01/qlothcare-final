import {
  pgTable,
  serial,
  integer,
  boolean,
  decimal,
  varchar,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const organizationSettings = pgTable(
  "organization_settings",
  {
    id: serial("id").primaryKey(),

    organizationId: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    allowFranchise: boolean("allow_franchise").default(false),
    allowOnlineOrders: boolean("allow_online_orders").default(true),
    allowCashPayment: boolean("allow_cash_payment").default(true),
    allowWalletPayment: boolean("allow_wallet_payment").default(true),
    allowCardPayment: boolean("allow_card_payment").default(true),
    allowUpiPayment: boolean("allow_upi_payment").default(true),

    defaultPickupTimeMinutes: integer("default_pickup_time_minutes").default(
      60
    ),
    defaultDeliveryTimeMinutes: integer(
      "default_delivery_time_minutes"
    ).default(1440),

    otpExpiryMinutes: integer("otp_expiry_minutes").default(10),
    orderConfirmationRequired: boolean("order_confirmation_required").default(
      true
    ),

    minOrderAmount: decimal("min_order_amount").default("0"),
    deliveryCharge: decimal("delivery_charge").default("0"),
    freeDeliveryAbove: decimal("free_delivery_above").default("500"),

    brandingLogoUrl: varchar("branding_logo_url", { length: 255 }),
    brandingPrimaryColor: varchar("branding_primary_color", {
      length: 50,
    }).default("#1976d2"),
    brandingSecondaryColor: varchar("branding_secondary_color", {
      length: 50,
    }).default("#dc004e"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    orgUnique: uniqueIndex("idx_org_settings_org").on(table.organizationId),
  })
);
