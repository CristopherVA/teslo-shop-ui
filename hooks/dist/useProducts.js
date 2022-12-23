"use strict";
exports.__esModule = true;
exports.useProducts = void 0;
var swr_1 = require("swr");
var fetcher = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return fetch.apply(void 0, args).then(function (res) { return res.json(); });
};
exports.useProducts = function (url, config) {
    if (config === void 0) { config = {}; }
    var _a = swr_1["default"]("/api" + url, fetcher, config), data = _a.data, error = _a.error;
    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error
    };
};
