import {
  pgTable,
  serial,
  integer,
  boolean,
  time,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";

export const branchOperatingHours = pgTable(
  "branch_operating_hours",
  {
    id: serial("id").primaryKey(),

    branchId: integer("branch_id")
      .notNull()
      .references(() => branches.id),

    dayOfWeek: integer("day_of_week").notNull(), // 0=Sunday ... 6=Saturday

    openTime: time("open_time"),
    closeTime: time("close_time"),

    isClosed: boolean("is_closed").default(false),
    is24Hours: boolean("is_24_hours").default(false),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    // Composite unique index
    branchDayUnique: uniqueIndex("idx_branch_hours_unique").on(
      table.branchId,
      table.dayOfWeek
    ),

    // Branch index
    branchIdx: index("idx_branch_hours_branch").on(table.branchId),
  })
);
