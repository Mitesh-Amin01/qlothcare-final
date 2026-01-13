import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  pgEnum,
  integer,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

/**
 * Status enum
 * ACTIVE | SUSPENDED | CLOSED
 */
export const organizationStatusEnum = pgEnum("organization_status", [
  "ACTIVE",
  "SUSPENDED",
  "CLOSED",
]);

export const organizations = pgTable(
  "organizations",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),
    legalName: varchar("legal_name", { length: 255 }),
    registrationNumber: varchar("registration_number", { length: 255 }),

    gstNumber: varchar("gst_number", { length: 255 }),
    panNumber: varchar("pan_number", { length: 255 }),

    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 50 }),
    website: varchar("website", { length: 255 }),

    address: text("address"),
    country: varchar("country", { length: 100 }).default("India"),
    state: varchar("state", { length: 100 }),
    city: varchar("city", { length: 100 }),
    pincode: varchar("pincode", { length: 20 }),

    status: organizationStatusEnum("status").notNull().default("ACTIVE"),
    timezone: varchar("timezone", { length: 50 }).default("Asia/Kolkata"),
    currency: varchar("currency", { length: 10 }).default("INR"),

    logoUrl: varchar("logo_url", { length: 500 }),

    isDeleted: boolean("is_deleted").default(false),
    deletedAt: timestamp("deleted_at"),
    deletedBy: integer("deleted_by").references(() => users.id),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    // Unique indexes
    gstUnique: uniqueIndex("idx_org_gst").on(table.gstNumber),
    panUnique: uniqueIndex("idx_org_pan").on(table.panNumber),
    registrationUnique: uniqueIndex(
      "organizations_registration_number_unique"
    ).on(table.registrationNumber),

    // Regular indexes
    statusIdx: index("idx_org_status").on(table.status),
    activeIdx: index("idx_org_active").on(table.isDeleted, table.status),
  })
);
