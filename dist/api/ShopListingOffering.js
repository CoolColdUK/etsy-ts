"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopListingOffering = void 0;
var tslib_1 = require("tslib");
var ShopListingOffering = /** @class */ (function () {
    function ShopListingOffering(http) {
        var _this = this;
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
        this.getListingOffering = function (listingId, productId, productOfferingId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId, "/products/").concat(productId, "/offerings/").concat(productOfferingId), method: "GET", secure: true, format: "json" }, params));
        };
        this.http = http;
    }
    return ShopListingOffering;
}());
exports.ShopListingOffering = ShopListingOffering;
