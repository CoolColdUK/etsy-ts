import { IListingInventoryProductOffering } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ShopListingOffering {
    http: HttpClient;
    constructor(http: HttpClient);
    /**
     * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get an Offering for a Listing
     *
     * @tags ShopListing Offering
     * @name GetListingOffering
     * @request GET:/v3/application/listings/{listing_id}/products/{product_id}/offerings/{product_offering_id}
     * @secure
     * @response `200` `IListingInventoryProductOffering` A single ListingInventoryProductOffering
     * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
     * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
     * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
     */
    getListingOffering: (listingId: number, productId: number, productOfferingId: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<IListingInventoryProductOffering, any>>;
}
