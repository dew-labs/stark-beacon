import { Elysia } from "elysia";
import { config } from "./config";
import { contractsRoute } from "./routes";

const app = new Elysia()
  .get("/", () => "Hello")
  .get("/health_check", () => "OK")
  .group("/api/v1", (app) => app.use(contractsRoute))
  .listen(config.BACKEND_PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
