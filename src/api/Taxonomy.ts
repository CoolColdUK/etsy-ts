import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ITaxonomy {
    /**
     * The unique ID of this taxonomy node.
     */
    id: number,
    /**
     * Depth in the taxonomy, roots are at level 0.
     */
    level: number,
    /**
     * Human readable name for this taxonomy node.
     */
    name: string,
    /**
     * Path of our parent node.
     */
    parent: string,
    /**
     * ID of our parent node.
     */
    parent_id: number,
    /**
     * Path from the root to this node, separated by periods.
     */
    path: string,
    /**
     * The corresponding ID in Etsy's Category API resource.
     */
    category_id: number,
    /**
     * The child Taxonomy nodes, embedded directly in the response.
     */
    children: any[],
    /**
     * The taxonomy_ids of our child nodes.
     */
    children_ids: number[],
    /**
     * The taxonomy_ids of this node and all its parents. They are listed in order from root to leaf.
     */
    full_path_taxonomy_ids: number[]
}

//parameters types
export interface IGetBuyerTaxonomyParameters {

}

export interface IGetSellerTaxonomyParameters {

}

export interface IGetSellerTaxonomyVersionParameters {

}

//methods class
export class Taxonomy {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    async getBuyerTaxonomy<TResult>(
        params: IGetBuyerTaxonomyParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>> {
        return request<IGetBuyerTaxonomyParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/taxonomy/buyer/get",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    async getSellerTaxonomy<TResult>(
        params: IGetSellerTaxonomyParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>> {
        return request<IGetSellerTaxonomyParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/taxonomy/seller/get",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Get the current version of the seller taxonomy
     */
    async getSellerTaxonomyVersion<TResult>(
        params: IGetSellerTaxonomyVersionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetSellerTaxonomyVersionParameters, TResult>>> {
        return request<IGetSellerTaxonomyVersionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/taxonomy/seller/version",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
