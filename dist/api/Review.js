"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var tslib_1 = require("tslib");
var Review = /** @class */ (function () {
    function Review(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 to retrieve the reviews for a listing given its ID.
         *
         * @tags Review
         * @name GetReviewsByListing
         * @request GET:/v3/application/listings/{listing_id}/reviews
         * @secure
         * @response `200` `IListingReviews` A set of Transaction Reviews by Listing ID
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getReviewsByListing = function (_a, params) {
            var listingId = _a.listingId, query = tslib_1.__rest(_a, ["listingId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId, "/reviews"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 to retrieve the reviews from a shop given its ID.
         *
         * @tags Review
         * @name GetReviewsByShop
         * @request GET:/v3/application/shops/{shop_id}/reviews
         * @secure
         * @response `200` `ITransactionReviews` A set of Transaction Reviews By Shop ID
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getReviewsByShop = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/reviews"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        this.http = http;
    }
    return Review;
}());
exports.Review = Review;
