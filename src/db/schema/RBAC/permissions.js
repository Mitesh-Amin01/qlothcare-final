import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const permissions = pgTable(
  "permissions",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),

    code: varchar("code", { length: 255 }).notNull(), // orders.create | orders.view | branches.manage

    module: varchar("module", { length: 50 }).notNull(), // ORDERS | USERS | PAYMENTS | INVENTORY | REPORTS

    description: text("description"),

    isActive: boolean("is_active").default(true),

    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    codeUnique: uniqueIndex("idx_permissions_code").on(table.code),
    moduleIdx: index("idx_permissions_module").on(table.module),
    activeIdx: index("idx_permissions_active").on(table.isActive),
  })
);
