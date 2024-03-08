"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopShippingProfile = void 0;
var tslib_1 = require("tslib");
var http_client_1 = require("./http-client");
var ShopShippingProfile = /** @class */ (function () {
    function ShopShippingProfile(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of available shipping carriers and the mail classes associated with them for a given country
         *
         * @tags Shop ShippingProfile
         * @name GetShippingCarriers
         * @request GET:/v3/application/shipping-carriers
         * @secure
         * @response `200` `IShippingCarriers` A set of ShippingCarriers
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShippingCarriers = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shipping-carriers", method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a new ShippingProfile. You can pass a country iso code or a region when creating a ShippingProfile, but not both. Only one is required. You must pass either a shipping_carrier_id AND mail_class, or both min and max_delivery_days.
         *
         * @tags Shop ShippingProfile
         * @name CreateShopShippingProfile
         * @request POST:/v3/application/shops/{shop_id}/shipping-profiles
         * @secure
         * @response `200` `IShopShippingProfile` A single ShippingProfile
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.createShopShippingProfile = function (shopId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles"), method: "POST", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of shipping profiles available in the specific Etsy shop identified by its shop ID.
         *
         * @tags Shop ShippingProfile
         * @name GetShopShippingProfiles
         * @request GET:/v3/application/shops/{shop_id}/shipping-profiles
         * @secure
         * @response `200` `IShopShippingProfiles` A list of shipping profiles
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopShippingProfiles = function (shopId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a ShippingProfile by given id.
         *
         * @tags Shop ShippingProfile
         * @name DeleteShopShippingProfile
         * @request DELETE:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}
         * @secure
         * @response `204` `void` The ShopShippingProfile resource was correctly deleted
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteShopShippingProfile = function (shopId, shippingProfileId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a Shipping Profile referenced by shipping profile ID.
         *
         * @tags Shop ShippingProfile
         * @name GetShopShippingProfile
         * @request GET:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}
         * @secure
         * @response `200` `IShopShippingProfile` A single ShippingProfile
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopShippingProfile = function (shopId, shippingProfileId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Changes the settings in a shipping profile. You can pass a country iso code or a region when updating a ShippingProfile, but not both. Only one is required. You must pass either a shipping_carrier_id AND mail_class, or both min and max_delivery_days.
         *
         * @tags Shop ShippingProfile
         * @name UpdateShopShippingProfile
         * @request PUT:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}
         * @secure
         * @response `200` `IShopShippingProfile` The updated shipping profile.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateShopShippingProfile = function (shopId, shippingProfileId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a new shipping destination, which sets the shipping cost, carrier, and class for a destination in a [shipping profile](/documentation/reference/#tag/Shop-ShippingProfile). createShopShippingProfileDestination assigns costs using the currency of the associated shop. Set the destination using either `destination_country_iso` or `destination_region`; `destination_country_iso` and `destination_region` are mutually exclusive — set one or the other. Setting both triggers error 400. If the request sets neither `destination_country_iso` nor `destination_region`, the default destination is "everywhere". You must also either assign both a `shipping_carrier_id` AND `mail_class` or both `min_delivery_days` AND `max_delivery_days`.
         *
         * @tags Shop ShippingProfile
         * @name CreateShopShippingProfileDestination
         * @request POST:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/destinations
         * @secure
         * @response `201` `IShopShippingProfileDestination` A single shipping destination.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.createShopShippingProfileDestination = function (shopId, shippingProfileId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/destinations"), method: "POST", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of shipping destination objects associated with a shipping profile.
         *
         * @tags Shop ShippingProfile
         * @name GetShopShippingProfileDestinationsByShippingProfile
         * @request GET:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/destinations
         * @secure
         * @response `200` `IShopShippingProfileDestinations` A list of shipping destination objects.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopShippingProfileDestinationsByShippingProfile = function (_a, params) {
            var shopId = _a.shopId, shippingProfileId = _a.shippingProfileId, query = tslib_1.__rest(_a, ["shopId", "shippingProfileId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/destinations"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a shipping destination and removes the destination option from every listing that uses the associated shipping profile. A shipping profile requires at least one shipping destination, so this endpoint cannot delete the final shipping destination for any shipping profile. To delete the final shipping destination from a shipping profile, you must [delete the entire shipping profile](/documentation/reference/#operation/deleteShopShippingProfile).
         *
         * @tags Shop ShippingProfile
         * @name DeleteShopShippingProfileDestination
         * @request DELETE:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/destinations/{shipping_profile_destination_id}
         * @secure
         * @response `204` `void` Etsy deleted the shipping profile destination.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteShopShippingProfileDestination = function (shopId, shippingProfileId, shippingProfileDestinationId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/destinations/").concat(shippingProfileDestinationId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates an existing shipping destination, which can set or reassign the shipping cost, carrier, and class for a destination.
         *
         * @tags Shop ShippingProfile
         * @name UpdateShopShippingProfileDestination
         * @request PUT:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/destinations/{shipping_profile_destination_id}
         * @secure
         * @response `200` `IShopShippingProfileDestination` A single shipping destination.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateShopShippingProfileDestination = function (shopId, shippingProfileId, shippingProfileDestinationId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/destinations/").concat(shippingProfileDestinationId), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a new shipping profile upgrade, which can establish a price for a shipping option, such as an alternate carrier or faster delivery.
         *
         * @tags Shop ShippingProfile
         * @name CreateShopShippingProfileUpgrade
         * @request POST:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/upgrades
         * @secure
         * @response `200` `IShopShippingProfileUpgrade` A single shipping profile upgrade.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.createShopShippingProfileUpgrade = function (shopId, shippingProfileId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/upgrades"), method: "POST", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the list of shipping profile upgrades assigned to a specific shipping profile.
         *
         * @tags Shop ShippingProfile
         * @name GetShopShippingProfileUpgrades
         * @request GET:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/upgrades
         * @secure
         * @response `200` `IShopShippingProfileUpgrades` A list of shipping profile upgrades.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopShippingProfileUpgrades = function (shopId, shippingProfileId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/upgrades"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a shipping profile upgrade and removes the upgrade option from every listing that uses the associated shipping profile.
         *
         * @tags Shop ShippingProfile
         * @name DeleteShopShippingProfileUpgrade
         * @request DELETE:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/upgrades/{upgrade_id}
         * @secure
         * @response `204` `void` Etsy deleted the shipping profile upgrade.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteShopShippingProfileUpgrade = function (shopId, shippingProfileId, upgradeId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/upgrades/").concat(upgradeId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a shipping profile upgrade and updates any listings that use the shipping profile.
         *
         * @tags Shop ShippingProfile
         * @name UpdateShopShippingProfileUpgrade
         * @request PUT:/v3/application/shops/{shop_id}/shipping-profiles/{shipping_profile_id}/upgrades/{upgrade_id}
         * @secure
         * @response `200` `IShopShippingProfileUpgrade` A single shipping profile upgrade.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.updateShopShippingProfileUpgrade = function (shopId, shippingProfileId, upgradeId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/shipping-profiles/").concat(shippingProfileId, "/upgrades/").concat(upgradeId), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.UrlEncoded, format: "json" }, params));
        };
        this.http = http;
    }
    return ShopShippingProfile;
}());
exports.ShopShippingProfile = ShopShippingProfile;
