"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopListing = void 0;
var tslib_1 = require("tslib");
var http_client_1 = require("./http-client");
var ShopListing = /** @class */ (function () {
    function ShopListing(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a physical draft [listing](/documentation/reference#tag/ShopListing) product in a shop on the Etsy channel.
         *
         * @tags ShopListing
         * @name CreateDraftListing
         * @request POST:/v3/application/shops/{shop_id}/listings
         * @secure
         * @response `201` `IShopListing` A single ShopListing
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.createDraftListing = function (shopId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings"), method: "POST", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Endpoint to list Listings that belong to a Shop. Listings can be filtered using the 'state' param.
         *
         * @tags ShopListing
         * @name GetListingsByShop
         * @request GET:/v3/application/shops/{shop_id}/listings
         * @secure
         * @response `200` `IShopListingsWithAssociations` A list of Listings
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingsByShop = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to delete a ShopListing. A ShopListing can be deleted only if the state is one of the following:  SOLD_OUT, DRAFT, EXPIRED, INACTIVE, ACTIVE and is_available or ACTIVE and has seller flags:  SUPRESSED (frozen), VACATION, CUSTOM_SHOPS (pattern), SELL_ON_FACEBOOK
         *
         * @tags ShopListing
         * @name DeleteListing
         * @request DELETE:/v3/application/listings/{listing_id}
         * @secure
         * @response `204` `void` The Listing resource was correctly deleted
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteListing = function (listingId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a listing record by listing ID.
         *
         * @tags ShopListing
         * @name GetListing
         * @request GET:/v3/application/listings/{listing_id}
         * @secure
         * @response `200` `IShopListingWithAssociations` A single Listing.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListing = function (_a, params) {
            var listingId = _a.listingId, query = tslib_1.__rest(_a, ["listingId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.
         *
         * @tags ShopListing
         * @name FindAllListingsActive
         * @request GET:/v3/application/listings/active
         * @secure
         * @response `200` `IShopListings` A list of all active listings on Etsy paginated by their creation date. Without sort_order listings will be returned newest-first by default.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.findAllListingsActive = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/active", method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of all active listings on Etsy in a specific shop, paginated by listing creation date.
         *
         * @tags ShopListing
         * @name FindAllActiveListingsByShop
         * @request GET:/v3/application/shops/{shop_id}/listings/active
         * @secure
         * @response `200` `IShopListings` Retrieves a list of all active listings on Etsy in a specific shop, paginated by listing creation date.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.findAllActiveListingsByShop = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/active"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Allows to query multiple listing ids at once. Limit 100 ids maximum per query.
         *
         * @tags ShopListing
         * @name GetListingsByListingIds
         * @request GET:/v3/application/listings/batch
         * @secure
         * @response `200` `IShopListingsWithAssociations` A list of Listings
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingsByListingIds = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/batch", method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves Listings associated to a Shop that are featured.
         *
         * @tags ShopListing
         * @name GetFeaturedListingsByShop
         * @request GET:/v3/application/shops/{shop_id}/listings/featured
         * @secure
         * @response `200` `IShopListings` A list of Listings
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getFeaturedListingsByShop = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/featured"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a property for a Listing.
         *
         * @tags ShopListing
         * @name DeleteListingProperty
         * @request DELETE:/v3/application/shops/{shop_id}/listings/{listing_id}/properties/{property_id}
         * @secure
         * @response `204` `void` The ListingProperty resource was correctly deleted
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteListingProperty = function (shopId, listingId, propertyId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId, "/properties/").concat(propertyId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates or populates the properties list defining product offerings for a listing. Each offering requires both a `value` and a `value_id` that are valid for a `scale_id` assigned to the listing or that you assign to the listing with this request.
         *
         * @tags ShopListing
         * @name UpdateListingProperty
         * @request PUT:/v3/application/shops/{shop_id}/listings/{listing_id}/properties/{property_id}
         * @secure
         * @response `200` `IListingPropertyValue` A single listing property.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateListingProperty = function (shopId, listingId, propertyId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId, "/properties/").concat(propertyId), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-01 wt-mr-xs-2"> Feedback only </span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">Development for this endpoint is in progress. It will only return a 501 response.</p></div> Retrieves a listing's property
         *
         * @tags ShopListing
         * @name GetListingProperty
         * @request GET:/v3/application/listings/{listing_id}/properties/{property_id}
         * @secure
         * @response `200` `IListingPropertyValue` A single ListingProperty.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         * @response `501` `IErrorSchema` This endpoint is not functional at this time.
         */
        this.getListingProperty = function (listingId, propertyId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId, "/properties/").concat(propertyId), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a listing's properties
         *
         * @tags ShopListing
         * @name GetListingProperties
         * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/properties
         * @secure
         * @response `200` `IListingPropertyValues` A Listing's Properties
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingProperties = function (shopId, listingId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId, "/properties"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a listing, identified by a listing ID, for a specific shop identified by a shop ID. Note that this is a PATCH method type.
         *
         * @tags ShopListing
         * @name UpdateListing
         * @request PATCH:/v3/application/shops/{shop_id}/listings/{listing_id}
         * @secure
         * @response `200` `IShopListing` A single ShopListing
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateListing = function (shopId, listingId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId), method: "PATCH", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a listing, identified by a listing ID, for a specific shop identified by a shop ID. This endpoint will be removed in the near future in favor of `updateListing` PATCH version.
         *
         * @tags ShopListing
         * @name UpdateListingDeprecated
         * @request PUT:/v3/application/shops/{shop_id}/listings/{listing_id}
         * @secure
         * @response `200` `IShopListing` A single ShopListing
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateListingDeprecated = function (shopId, listingId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Gets all listings associated with a receipt.
         *
         * @tags ShopListing
         * @name GetListingsByShopReceipt
         * @request GET:/v3/application/shops/{shop_id}/receipts/{receipt_id}/listings
         * @secure
         * @response `200` `IShopListings` A set of ShopListing resources.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingsByShopReceipt = function (_a, params) {
            var receiptId = _a.receiptId, shopId = _a.shopId, query = tslib_1.__rest(_a, ["receiptId", "shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/receipts/").concat(receiptId, "/listings"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Gets all listings associated with a Return Policy.
         *
         * @tags ShopListing
         * @name GetListingsByShopReturnPolicy
         * @request GET:/v3/application/shops/{shop_id}/policies/return/{return_policy_id}/listings
         * @secure
         * @response `200` `IShopListings` A set of ShopListing resources.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingsByShopReturnPolicy = function (returnPolicyId, shopId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/policies/return/").concat(returnPolicyId, "/listings"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves all the listings from the section of a specific shop.
         *
         * @tags ShopListing
         * @name GetListingsByShopSectionId
         * @request GET:/v3/application/shops/{shop_id}/shop-sections/listings
         * @secure
         * @response `200` `IShopListings` A list of listings from a shop section.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingsByShopSectionId = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shop-sections/listings"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        this.http = http;
    }
    return ShopListing;
}());
exports.ShopListing = ShopListing;
