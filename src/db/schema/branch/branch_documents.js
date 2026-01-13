import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  date,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";
import { users } from "./users";

export const branchDocuments = pgTable(
  "branch_documents",
  {
    id: serial("id").primaryKey(),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    documentType: varchar("document_type", { length: 50 }).notNull(),
    documentName: varchar("document_name", { length: 255 }).notNull(),
    documentUrl: varchar("document_url", { length: 500 }).notNull(),
    documentNumber: varchar("document_number", { length: 255 }),

    issueDate: date("issue_date"),
    expiryDate: date("expiry_date"),

    isVerified: boolean("is_verified").default(false),
    verifiedAt: timestamp("verified_at"),
    verifiedBy: integer("verified_by").references(() => users.id),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    branchIdx: index("idx_branch_docs_branch").on(table.branchId),
    expiryIdx: index("idx_branch_docs_expiry").on(table.expiryDate),
    typeIdx: index("idx_branch_docs_type").on(table.documentType),
  })
);
