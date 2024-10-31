import type { Orm } from "../orm";

export const getContracts = async (orm: Orm): Promise<any> => {
  return orm.query.contracts.findMany({
    columns: {
      address: true,
      name: true,
      deployedAt: true,
    },
  });
};
