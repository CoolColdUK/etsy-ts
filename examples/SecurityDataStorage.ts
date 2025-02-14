import fs from "fs-extra";
import { ISecurityDataStorage, Tokens } from "../src";
import { SecurityDataFilter } from "../src/types/SecurityDataFilter";

/**
 * A SecurityData model. This can be a record in a database or a file.
 */
export type SecurityDataItem = Tokens & {
  etsyUserId: number;
};

/**
 * This is an example of how to implement ISecurityDataStorage interface.
 * You can use this class to store security data in a file or in a database.
 */
export class SecurityDataStorage implements ISecurityDataStorage {
  async storeAccessToken(filter: SecurityDataFilter, accessToken: Tokens) {
    const all = await fs.readJson("./examples/security-data.json") as SecurityDataItem[];
    const etsyUserId = parseInt(accessToken.accessToken.split(".")[0]);

    const index = all.findIndex(item => item.etsyUserId === etsyUserId);

    if (index === -1) {
      all.push({
        etsyUserId,
        ...accessToken
      });
    }
    else {
      all[index] = {
        etsyUserId,
        ...accessToken
      };
    }

    await fs.writeJSON("./examples/security-data.json", all, {spaces: 2});
  }

  async findAccessToken(filter: SecurityDataFilter): Promise<Tokens> {
    const all = await fs.readJson("./examples/security-data.json") as SecurityDataItem[] || [];

    return all.find(item => item.etsyUserId === filter.etsyUserId);
  }
}
