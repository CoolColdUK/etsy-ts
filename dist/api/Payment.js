"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var tslib_1 = require("tslib");
var Payment = /** @class */ (function () {
    function Payment(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
         *
         * @tags Payment
         * @name GetPaymentAccountLedgerEntryPayments
         * @request GET:/v3/application/shops/{shop_id}/payment-account/ledger-entries/payments
         * @secure
         * @response `200` `IPayments` A list of Payments
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getPaymentAccountLedgerEntryPayments = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/payment-account/ledger-entries/payments"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a payment from a specific receipt, identified by `receipt_id`, from a specific shop, identified by `shop_id`
         *
         * @tags Payment
         * @name GetShopPaymentByReceiptId
         * @request GET:/v3/application/shops/{shop_id}/receipts/{receipt_id}/payments
         * @secure
         * @response `200` `IPayments` A single payment
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopPaymentByReceiptId = function (shopId, receiptId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/receipts/").concat(receiptId, "/payments"), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of payments from a shop identified by `shop_id`. You can also filter results using a list of payment IDs.
         *
         * @tags Payment
         * @name GetPayments
         * @request GET:/v3/application/shops/{shop_id}/payments
         * @secure
         * @response `200` `IPayments` A list of payments from a specific shop.
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getPayments = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/payments"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        this.http = http;
    }
    return Payment;
}());
exports.Payment = Payment;
