import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IGuest {
    /**
     * The ID that associates to the guest - a random 13-digit hash. Validated by the regular expression '/^[a-zA-Z0-9-_]+$/'. Each ID is identified internally to the Application that created it, meaning that other applications will not have access to this guest, even with the same ID.
     */
    guest_id: any,
    /**
     * The URL to send the user's browser to on checkout. This will allow them to use this guest ID to check out with the carts associated. Please note that a guest cart's data are undefined after being merged on checkout.
     */
    checkout_url: string
}

//parameters types
export interface IGetGuestParameters {
    guest_id: any
}

export interface IGenerateGuestParameters {

}

export interface IClaimGuestParameters {
    guest_id: any
}

export interface IMergeGuestParameters {
    guest_id: any,
    target_guest_id: any
}

//methods class
export class Guest {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get a guest by ID.
     */
    async getGuest<TResult>(
        params: IGetGuestParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetGuestParameters, TResult>>> {
        return request<IGetGuestParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
     */
    async generateGuest<TResult>(
        params: IGenerateGuestParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGenerateGuestParameters, TResult>>> {
        return request<IGenerateGuestParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/generator",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
     */
    async claimGuest<TResult>(
        params: IClaimGuestParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IClaimGuestParameters, TResult>>> {
        return request<IClaimGuestParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/claim",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
     */
    async mergeGuest<TResult>(
        params: IMergeGuestParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IMergeGuestParameters, TResult>>> {
        return request<IMergeGuestParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/merge",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
