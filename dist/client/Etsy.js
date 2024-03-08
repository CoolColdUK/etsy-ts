"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etsy = void 0;
var tslib_1 = require("tslib");
var BuyerTaxonomy_1 = require("../api/BuyerTaxonomy");
var http_client_1 = require("../api/http-client");
var LedgerEntry_1 = require("../api/LedgerEntry");
var Other_1 = require("../api/Other");
var Payment_1 = require("../api/Payment");
var Review_1 = require("../api/Review");
var SellerTaxonomy_1 = require("../api/SellerTaxonomy");
var Shop_1 = require("../api/Shop");
var ShopListing_1 = require("../api/ShopListing");
var ShopListingFile_1 = require("../api/ShopListingFile");
var ShopListingImage_1 = require("../api/ShopListingImage");
var ShopListingInventory_1 = require("../api/ShopListingInventory");
var ShopListingOffering_1 = require("../api/ShopListingOffering");
var ShopListingProduct_1 = require("../api/ShopListingProduct");
var ShopListingTranslation_1 = require("../api/ShopListingTranslation");
var ShopListingVariationImage_1 = require("../api/ShopListingVariationImage");
var ShopListingVideo_1 = require("../api/ShopListingVideo");
var ShopProductionPartner_1 = require("../api/ShopProductionPartner");
var ShopReceipt_1 = require("../api/ShopReceipt");
var ShopReceiptTransactions_1 = require("../api/ShopReceiptTransactions");
var ShopReturnPolicy_1 = require("../api/ShopReturnPolicy");
var ShopSection_1 = require("../api/ShopSection");
var ShopShippingProfile_1 = require("../api/ShopShippingProfile");
var User_1 = require("../api/User");
var UserAddress_1 = require("../api/UserAddress");
var TokenRefresher_1 = require("./TokenRefresher");
var Etsy = /** @class */ (function () {
    function Etsy(_a, apiConfig) {
        var apiKey = _a.apiKey, securityDataStorage = _a.securityDataStorage, _b = _a.enableTokenRefresh, enableTokenRefresh = _b === void 0 ? true : _b;
        var _this = this;
        var securityWorker = function (filter) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var securityData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, securityDataStorage.findAccessToken(filter)];
                    case 1:
                        securityData = _a.sent();
                        return [2 /*return*/, {
                                headers: tslib_1.__assign({ "x-api-key": apiKey }, ((securityData === null || securityData === void 0 ? void 0 : securityData.accessToken) ? { "Authorization": "Bearer ".concat(securityData.accessToken) } : undefined))
                            }];
                }
            });
        }); };
        this.httpClient = new http_client_1.HttpClient(tslib_1.__assign({ secure: true, securityWorker: securityWorker }, apiConfig));
        if (enableTokenRefresh) {
            new TokenRefresher_1.TokenRefresher(apiKey, this.httpClient.instance, securityDataStorage).init();
        }
        this.BuyerTaxonomy = new BuyerTaxonomy_1.BuyerTaxonomy(this.httpClient);
        this.LedgerEntry = new LedgerEntry_1.LedgerEntry(this.httpClient);
        this.Other = new Other_1.Other(this.httpClient);
        this.Payment = new Payment_1.Payment(this.httpClient);
        this.Review = new Review_1.Review(this.httpClient);
        this.SellerTaxonomy = new SellerTaxonomy_1.SellerTaxonomy(this.httpClient);
        this.Shop = new Shop_1.Shop(this.httpClient);
        this.ShopListing = new ShopListing_1.ShopListing(this.httpClient);
        this.ShopListingFile = new ShopListingFile_1.ShopListingFile(this.httpClient);
        this.ShopListingImage = new ShopListingImage_1.ShopListingImage(this.httpClient);
        this.ShopListingInventory = new ShopListingInventory_1.ShopListingInventory(this.httpClient);
        this.ShopListingOffering = new ShopListingOffering_1.ShopListingOffering(this.httpClient);
        this.ShopListingProduct = new ShopListingProduct_1.ShopListingProduct(this.httpClient);
        this.ShopListingTranslation = new ShopListingTranslation_1.ShopListingTranslation(this.httpClient);
        this.ShopListingVariationImage = new ShopListingVariationImage_1.ShopListingVariationImage(this.httpClient);
        this.ShopListingVideo = new ShopListingVideo_1.ShopListingVideo(this.httpClient);
        this.ShopProductionPartner = new ShopProductionPartner_1.ShopProductionPartner(this.httpClient);
        this.ShopReceipt = new ShopReceipt_1.ShopReceipt(this.httpClient);
        this.ShopReceiptTransactions = new ShopReceiptTransactions_1.ShopReceiptTransactions(this.httpClient);
        this.ShopReturnPolicy = new ShopReturnPolicy_1.ShopReturnPolicy(this.httpClient);
        this.ShopSection = new ShopSection_1.ShopSection(this.httpClient);
        this.ShopShippingProfile = new ShopShippingProfile_1.ShopShippingProfile(this.httpClient);
        this.User = new User_1.User(this.httpClient);
        this.UserAddress = new UserAddress_1.UserAddress(this.httpClient);
    }
    return Etsy;
}());
exports.Etsy = Etsy;
