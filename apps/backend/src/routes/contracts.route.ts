import { Elysia, t } from "elysia";
import { ormPlugin } from "../orm";
import { getContracts } from "src/services/contracts.service";

export const contractsRoute = new Elysia()
  .use(ormPlugin)
  .get("/contracts", ({ orm }) => getContracts(orm), {
    detail: {
      summary: "GetContracts",
      operationId: "GetContracts",
      description: "Get contracts",
      tags: ["Contract"],
    },
  });
