"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopListingVideo = void 0;
var tslib_1 = require("tslib");
var http_client_1 = require("./http-client");
var ShopListingVideo = /** @class */ (function () {
    function ShopListingVideo(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to delete a listing video. A copy of the video remains on our servers, and so a deleted video may be re-associated with the listing without re-uploading the original video; see uploadListingVideo.
         *
         * @tags ShopListing Video
         * @name DeleteListingVideo
         * @request DELETE:/v3/application/shops/{shop_id}/listings/{listing_id}/videos/{video_id}
         * @secure
         * @response `204` `void` The ListingVideo resource was correctly deleted
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.deleteListingVideo = function (shopId, listingId, videoId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId, "/videos/").concat(videoId), method: "DELETE", secure: true }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a single video associated with the given listing. Requesting a video from a listing returns an empty result.
         *
         * @tags ShopListing Video
         * @name GetListingVideo
         * @request GET:/v3/application/listings/{listing_id}/videos/{video_id}
         * @secure
         * @response `200` `IListingVideo` The metatdata for a video associated with a listing.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingVideo = function (videoId, listingId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId, "/videos/").concat(videoId), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves all listing video resources for a listing with a specific listing ID.
         *
         * @tags ShopListing Video
         * @name GetListingVideos
         * @request GET:/v3/application/listings/{listing_id}/videos
         * @secure
         * @response `200` `IListingVideos` A list of videos for a listing
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getListingVideos = function (listingId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/listings/".concat(listingId, "/videos"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Uploads a new video for a listing, or associates an existing video with a specific listing. You must either provide the `video_id` of an existing video, or the name and binary file data for a video to upload.
         *
         * @tags ShopListing Video
         * @name UploadListingVideo
         * @request POST:/v3/application/shops/{shop_id}/listings/{listing_id}/videos
         * @secure
         * @response `201` `IListingVideo` The metadata for a file associated with a digital listing.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.uploadListingVideo = function (shopId, listingId, data, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/listings/").concat(listingId, "/videos"), method: "POST", body: data, secure: true, type: http_client_1.ContentType.FormData, format: "json" }, params));
        };
        this.http = http;
    }
    return ShopListingVideo;
}());
exports.ShopListingVideo = ShopListingVideo;
