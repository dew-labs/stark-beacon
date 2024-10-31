import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const txCount = pgTable("tx_count", {
  address: varchar({ length: 256 }).primaryKey(),
  txCount: integer("tx_count").notNull().default(0),
  countedAt: timestamp("counted_at").notNull().defaultNow(),
});
