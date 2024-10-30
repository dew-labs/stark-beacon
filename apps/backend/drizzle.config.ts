import { defineConfig } from "drizzle-kit";
import { config } from "./src/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema",
  dbCredentials: {
    url: config.DATABASE_URL,
  },
  out: "./drizzle",
});
