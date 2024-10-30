import { contracts } from "../schema";
import type { Orm } from "../orm";

export const getContracts = async (orm: Orm): Promise<any> => {
  return orm.query.contracts.findMany({
    columns: {
      address: true,
      name: true,
      tx_count: true,
      deployed_at: true,
    },
  });
};
