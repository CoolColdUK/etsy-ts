"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRefresher = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var axios_auth_refresh_1 = tslib_1.__importDefault(require("axios-auth-refresh"));
var TokenRefresher = /** @class */ (function () {
    function TokenRefresher(apiKey, httpClientInstance, securityDataStorage) {
        this.apiKey = apiKey;
        this.httpClientInstance = httpClientInstance;
        this.securityDataStorage = securityDataStorage;
    }
    TokenRefresher.prototype.init = function () {
        var _this = this;
        (0, axios_auth_refresh_1.default)(this.httpClientInstance, function (error) { return _this.refreshAuthLogic(_this.apiKey, error.config); }, { pauseInstanceWhileRefreshing: true });
    };
    TokenRefresher.prototype.refreshAuthLogic = function (apiKey, failedRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authHeader, accessToken, etsyUserId, refreshToken, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHeader = failedRequest.headers.Authorization;
                        accessToken = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace("Bearer ", "");
                        if (!accessToken) {
                            return [2 /*return*/];
                        }
                        etsyUserId = parseInt(accessToken.split(".")[0]);
                        return [4 /*yield*/, this.securityDataStorage.findAccessToken({ etsyUserId: etsyUserId })];
                    case 1:
                        refreshToken = (_a.sent()).refreshToken;
                        return [4 /*yield*/, this.getNewToken(apiKey, refreshToken)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, this.securityDataStorage.storeAccessToken({ etsyUserId: etsyUserId }, {
                                accessToken: response.access_token,
                                refreshToken: response.refresh_token,
                                expiresIn: response.expires_in,
                                tokenType: response.token_type
                            })];
                    case 3:
                        _a.sent();
                        failedRequest.headers.Authorization = "Bearer ".concat(response.access_token);
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenRefresher.prototype.getNewToken = function (apiKey, refreshToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.request({
                            method: "POST",
                            url: "https://api.etsy.com/v3/public/oauth/token",
                            data: {
                                grant_type: "refresh_token",
                                client_id: apiKey,
                                refresh_token: refreshToken
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return TokenRefresher;
}());
exports.TokenRefresher = TokenRefresher;
