import { IStandardResponse } from "./IStandardResponse";
export interface IHttpClientOptions {
    baseUrl: string;
}
export declare class HttpClient {
    private fetch;
    private options;
    constructor(fetch: any, options?: IHttpClientOptions);
    http<TParameters, TResult>(url: string, parameters: TParameters, method?: string): Promise<IStandardResponse<TParameters, TResult>>;
}
