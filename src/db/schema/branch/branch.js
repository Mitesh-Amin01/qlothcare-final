import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  decimal,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const branches = pgTable(
  "branches",
  {
    id: serial("id").primaryKey(),

    organizationId: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    name: varchar("name", { length: 255 }).notNull(),

    code: varchar("code", { length: 100 }).notNull(),

    type: varchar("type", { length: 50 }).notNull().default("NORMAL"),

    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 50 }).notNull(),

    address: text("address").notNull(),
    city: varchar("city", { length: 100 }).notNull(),
    state: varchar("state", { length: 100 }).notNull(),
    country: varchar("country", { length: 100 }).default("India"),
    pincode: varchar("pincode", { length: 20 }).notNull(),

    latitude: decimal("latitude", { precision: 10, scale: 8 }),
    longitude: decimal("longitude", { precision: 11, scale: 8 }),

    googleMapsLink: varchar("google_maps_link", { length: 500 }),

    status: varchar("status", { length: 50 }).notNull().default("ACTIVE"),

    isDeleted: boolean("is_deleted").default(false),
    deletedAt: timestamp("deleted_at"),
    deletedBy: integer("deleted_by").references(() => users.id),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    // Unique index
    codeUnique: uniqueIndex("idx_branch_code").on(table.code),

    // Composite indexes
    orgStatusIdx: index("idx_branch_org_status").on(
      table.organizationId,
      table.status
    ),

    locationIdx: index("idx_branch_location").on(
      table.latitude,
      table.longitude
    ),

    activeIdx: index("idx_branch_active").on(table.isDeleted, table.status),

    phoneIdx: index("idx_branch_phone").on(table.phone),
  })
);
