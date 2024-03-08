"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.ContentType = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var form_data_1 = tslib_1.__importDefault(require("form-data"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        var _this = this;
        var securityWorker = _a.securityWorker, secure = _a.secure, format = _a.format, axiosConfig = tslib_1.__rest(_a, ["securityWorker", "secure", "format"]);
        this.request = function (_a) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, responseFormat;
            var secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, body = _a.body, etsyUserId = _a.etsyUserId, params = tslib_1.__rest(_a, ["secure", "path", "type", "query", "format", "body", "etsyUserId"]);
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker({ etsyUserId: etsyUserId })];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        responseFormat = format || this.format || undefined;
                        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                            body = this.createFormData(body);
                        }
                        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
                            body = JSON.stringify(body);
                        }
                        return [2 /*return*/, this.instance.request(tslib_1.__assign(tslib_1.__assign({}, requestParams), { headers: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (body instanceof form_data_1.default ? body.getHeaders() : {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios_1.default.create(tslib_1.__assign(tslib_1.__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "https://openapi.etsy.com" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        var method = params1.method || (params2 && params2.method);
        return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this.instance.defaults), params1), (params2 || {})), { headers: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    HttpClient.prototype.createFormData = function (input) {
        var formData = new form_data_1.default();
        for (var _i = 0, _a = Object.keys(input || {}); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = input[key];
            if (value instanceof Array) {
                formData.append(key, JSON.stringify(value));
            }
            else if (typeof value === "boolean") {
                formData.append(key, value ? "true" : "false");
            }
            else {
                formData.append(key, value);
            }
        }
        return formData;
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
