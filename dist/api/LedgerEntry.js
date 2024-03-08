"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntry = void 0;
var tslib_1 = require("tslib");
var LedgerEntry = /** @class */ (function () {
    function LedgerEntry(http) {
        var _this = this;
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a single Shop Payment Account Ledger's Entry
         *
         * @tags Ledger Entry
         * @name GetShopPaymentAccountLedgerEntry
         * @request GET:/v3/application/shops/{shop_id}/payment-account/ledger-entries/{ledger_entry_id}
         * @secure
         * @response `200` `IPaymentAccountLedgerEntry` A single of PaymentAccountLedgerEntry
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopPaymentAccountLedgerEntry = function (shopId, ledgerEntryId, params) {
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/payment-account/ledger-entries/").concat(ledgerEntryId), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a Shop Payment Account Ledger's Entries
         *
         * @tags Ledger Entry
         * @name GetShopPaymentAccountLedgerEntries
         * @request GET:/v3/application/shops/{shop_id}/payment-account/ledger-entries
         * @secure
         * @response `200` `IPaymentAccountLedgerEntries` A list of PaymentAccountLedgerEntries
         * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
         * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
         * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
         * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
         */
        this.getShopPaymentAccountLedgerEntries = function (_a, params) {
            var shopId = _a.shopId, query = tslib_1.__rest(_a, ["shopId"]);
            if (params === void 0) { params = {}; }
            return _this.http.request(tslib_1.__assign({ path: "/v3/application/shops/".concat(shopId, "/payment-account/ledger-entries"), method: "GET", query: query, secure: true, format: "json" }, params));
        };
        this.http = http;
    }
    return LedgerEntry;
}());
exports.LedgerEntry = LedgerEntry;
