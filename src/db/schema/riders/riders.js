import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  date,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const riders = pgTable(
  "riders",
  {
    id: serial("id").primaryKey(),

    user_id: integer("user_id")
      .notNull()
      .references(() => users.id),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    rider_code: varchar("rider_code", { length: 100 }).notNull(), // RDR-XXXX

    vehicle_type: varchar("vehicle_type", { length: 50 }).notNull(), // BIKE | SCOOTER | CYCLE | VAN | CAR
    vehicle_number: varchar("vehicle_number", { length: 50 }),
    vehicle_model: varchar("vehicle_model", { length: 255 }),

    license_number: varchar("license_number", { length: 100 }),
    license_expiry: date("license_expiry"),

    insurance_number: varchar("insurance_number", { length: 100 }),
    insurance_expiry: date("insurance_expiry"),

    rider_status: varchar("rider_status", { length: 50 })
      .notNull()
      .default("ACTIVE"), // ACTIVE | INACTIVE | SUSPENDED | OFFLINE

    joining_date: date("joining_date").notNull(),
    exit_date: date("exit_date"),

    emergency_contact_name: varchar("emergency_contact_name", { length: 255 }),
    emergency_contact_phone: varchar("emergency_contact_phone", {
      length: 50,
    }),

    is_deleted: boolean("is_deleted").default(false),
    deleted_at: timestamp("deleted_at"),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    user_unique: uniqueIndex("idx_rider_user").on(table.user_id),

    rider_code_unique: uniqueIndex("idx_rider_code").on(
      table.rider_code
    ),

    vehicle_number_unique: uniqueIndex("idx_rider_vehicle").on(
      table.vehicle_number
    ),

    org_status_idx: index("idx_rider_org_status").on(
      table.organization_id,
      table.rider_status
    ),

    active_idx: index("idx_rider_active").on(
      table.is_deleted,
      table.rider_status
    ),
  })
);
