import { AxiosInstance } from "axios";
import { ISecurityDataStorage } from "../types/ISecurityDataStorage";
export declare class TokenRefresher {
    private readonly apiKey;
    private readonly httpClientInstance;
    private readonly securityDataStorage;
    constructor(apiKey: string, httpClientInstance: AxiosInstance, securityDataStorage: ISecurityDataStorage);
    init(): void;
    private refreshAuthLogic;
    private getNewToken;
}
