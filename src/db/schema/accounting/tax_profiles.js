import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  boolean,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";

export const tax_profiles = pgTable(
  "tax_profiles",
  {
    id: serial("id").primaryKey(),

    organization_id: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branch_id: integer("branch_id").references(() => branches.id),

    tax_name: varchar("tax_name", { length: 255 }).notNull(),

    tax_type: varchar("tax_type", { length: 50 }).notNull(),
    // GST | VAT | SERVICE_TAX

    gst_number: varchar("gst_number", { length: 50 }),

    tax_registration_type: varchar("tax_registration_type", { length: 50 }),
    // REGULAR | COMPOSITION

    is_inter_state: boolean("is_inter_state").default(false),

    cgst_percentage: decimal("cgst_percentage"),
    sgst_percentage: decimal("sgst_percentage"),
    igst_percentage: decimal("igst_percentage"),

    effective_from: date("effective_from").notNull(),
    effective_to: date("effective_to"),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    org_idx: index("idx_tax_prof_org").on(table.organization_id),

    gst_idx: index("idx_tax_prof_gst").on(table.gst_number),

    effective_idx: index("idx_tax_prof_effective").on(
      table.effective_from
    ),
  })
);
