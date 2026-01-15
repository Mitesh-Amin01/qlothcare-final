import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

export const process_stages = pgTable(
  "process_stages",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 50 }).notNull(),
    // INTAKE | WASHING | DRYING | IRONING | FOLDING | QC | PACKING

    sequence_order: integer("sequence_order").notNull(),

    stage_type: varchar("stage_type", { length: 50 }).notNull(),
    // WASH | DRY | IRON | QC | PACK | SPECIAL

    default_duration_minutes: integer("default_duration_minutes").notNull(),

    requires_qc: boolean("requires_qc").default(false),
    requires_approval: boolean("requires_approval").default(false),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    order_idx: index("idx_stage_order").on(table.sequence_order),

    active_idx: index("idx_stage_active").on(table.is_active),
  })
);
