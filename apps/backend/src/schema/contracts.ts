import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const contracts = pgTable("contracts", {
  address: varchar({ length: 256 }).primaryKey(),
  name: varchar({ length: 256 }),
  tx_count: integer().notNull().default(0),
  deployed_at: timestamp().notNull(),
});
