import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { services } from "./services";

export const service_variants = pgTable(
  "service_variants",
  {
    id: serial("id").primaryKey(),

    service_id: integer("service_id")
      .notNull()
      .references(() => services.id),

    name: varchar("name", { length: 100 }).notNull(), // Regular | Express | Premium

    description: text("description"),

    turnaround_hours: integer("turnaround_hours").notNull(),

    is_default: boolean("is_default").default(false),
    display_order: integer("display_order").default(0),

    is_active: boolean("is_active").default(true),

    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    service_idx: index("idx_svc_var_service").on(table.service_id),

    service_active_idx: index("idx_svc_var_active").on(
      table.service_id,
      table.is_active
    ),

    service_default_idx: index("idx_svc_var_default").on(
      table.service_id,
      table.is_default
    ),
  })
);
