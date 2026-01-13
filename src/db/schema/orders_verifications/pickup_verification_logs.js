import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  decimal,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { order_otps } from "./order_otps";
import { riders } from "./riders";
import { customers } from "./customers";
import { branches } from "./branches";
import { user_devices } from "./user_devices";

export const pickup_verification_logs = pgTable(
  "pickup_verification_logs",
  {
    id: serial("id").primaryKey(),

    order_id: integer("order_id")
      .notNull()
      .references(() => orders.id),

    order_otp_id: integer("order_otp_id")
      .notNull()
      .references(() => order_otps.id),

    rider_id: integer("rider_id")
      .notNull()
      .references(() => riders.id),

    customer_id: integer("customer_id")
      .notNull()
      .references(() => customers.id),

    branch_id: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    verification_result: varchar("verification_result", {
      length: 50,
    }).notNull(),
    // SUCCESS | FAILED | EXPIRED

    failure_reason: varchar("failure_reason", { length: 100 }),
    // WRONG_OTP | OTP_EXPIRED | MAX_ATTEMPTS_EXCEEDED

    verified_at: timestamp("verified_at").defaultNow(),

    verification_location_lat: decimal("verification_location_lat", {
      precision: 10,
      scale: 8,
    }),

    verification_location_lng: decimal("verification_location_lng", {
      precision: 11,
      scale: 8,
    }),

    verified_device_id: integer("verified_device_id").references(
      () => user_devices.id
    ),

    remarks: text("remarks"),

    created_at: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_pickup_verify_order").on(table.order_id),

    rider_idx: index("idx_pickup_verify_rider").on(table.rider_id),

    time_idx: index("idx_pickup_verify_time").on(table.verified_at),
  })
);
