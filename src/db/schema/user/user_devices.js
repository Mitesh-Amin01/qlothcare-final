import {
  pgTable,
  serial,
  integer,
  varchar,
  boolean,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const userDevices = pgTable(
  "user_devices",
  {
    id: serial("id").primaryKey(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),

    deviceType: varchar("device_type", { length: 50 }).notNull(), // ANDROID | IOS | WEB
    deviceId: varchar("device_id", { length: 255 }).notNull(),
    deviceName: varchar("device_name", { length: 255 }),
    deviceToken: varchar("device_token", { length: 255 }), // FCM token

    osVersion: varchar("os_version", { length: 50 }),
    appVersion: varchar("app_version", { length: 50 }),

    isActive: boolean("is_active").default(true),

    lastActiveAt: timestamp("last_active_at"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    userIdx: index("idx_devices_user").on(table.userId),

    userDeviceUnique: uniqueIndex("idx_devices_unique").on(
      table.userId,
      table.deviceId
    ),

    deviceTokenIdx: index("idx_devices_token").on(table.deviceToken),

    userActiveIdx: index("idx_devices_active").on(
      table.userId,
      table.isActive
    ),
  })
);
