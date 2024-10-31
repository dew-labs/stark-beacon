import { pgTable, varchar } from "drizzle-orm/pg-core";

export const metadata = pgTable("metadata", {
  id: varchar({ length: 256 }).primaryKey(),
  value: varchar({ length: 256 }),
});
