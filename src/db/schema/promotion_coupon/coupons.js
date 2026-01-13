import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  jsonb,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const coupons = pgTable(
  "coupons",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id").references(
      () => organizations.id
    ),

    coupon_code: varchar("coupon_code", { length: 100 }).notNull(),

    coupon_name: varchar("coupon_name", { length: 255 }).notNull(),

    discount_type: varchar("discount_type", { length: 50 }).notNull(),
    // PERCENTAGE | FLAT | FREE_DELIVERY

    discount_value: decimal("discount_value", {
      precision: 12,
      scale: 2,
    }).notNull(),

    min_order_amount: decimal("min_order_amount", {
      precision: 12,
      scale: 2,
    }).default("0"),

    max_discount_amount: decimal("max_discount_amount", {
      precision: 12,
      scale: 2,
    }),

    valid_from: timestamp("valid_from").notNull(),
    valid_to: timestamp("valid_to").notNull(),

    usage_limit: integer("usage_limit"),

    usage_count: integer("usage_count").default(0),

    per_user_limit: integer("per_user_limit").default(1),

    applicable_branches: jsonb("applicable_branches"),
    // Array of branch IDs

    applicable_services: jsonb("applicable_services"),
    // Array of service IDs

    is_active: boolean("is_active").default(true),

    created_by: integer("created_by").references(
      () => users.id
    ),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    code_unique: uniqueIndex("idx_coupon_code").on(
      table.coupon_code
    ),

    org_idx: index("idx_coupon_org").on(
      table.organization_id
    ),

    active_idx: index("idx_coupon_active").on(
      table.is_active
    ),

    validity_idx: index("idx_coupon_validity").on(
      table.valid_from,
      table.valid_to
    ),
  })
);
