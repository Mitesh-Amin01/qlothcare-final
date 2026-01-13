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
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { branches } from "./branches";

export const franchiseAgreements = pgTable(
  "franchise_agreements",
  {
    id: serial("id").primaryKey(),

    organizationId: integer("organization_id")
      .notNull()
      .references(() => organizations.id),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    agreementNumber: varchar("agreement_number", { length: 255 }).notNull(),

    franchiseeName: varchar("franchisee_name", { length: 255 }).notNull(),
    franchiseeContact: varchar("franchisee_contact", { length: 50 }),
    franchiseeEmail: varchar("franchisee_email", { length: 255 }),

    startDate: date("start_date").notNull(),
    endDate: date("end_date"),

    securityDeposit: decimal("security_deposit"),
    revenueSharePercentage: decimal("revenue_share_percentage").default("0"),
    royaltyFee: decimal("royalty_fee").default("0"),

    status: varchar("status", { length: 50 }).default("ACTIVE"),

    termsDocumentUrl: varchar("terms_document_url", { length: 500 }),

    isDeleted: boolean("is_deleted").default(false),
    deletedAt: timestamp("deleted_at"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    // Unique index
    agreementNumberUnique: uniqueIndex("idx_franchise_agreement_num").on(
      table.agreementNumber
    ),

    // Composite index
    orgBranchIdx: index("idx_franchise_org_branch").on(
      table.organizationId,
      table.branchId
    ),

    // Status index
    statusIdx: index("idx_franchise_status").on(table.status),
  })
);
