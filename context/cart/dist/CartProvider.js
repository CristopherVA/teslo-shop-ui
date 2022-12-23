"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.UIProvider = void 0;
var react_1 = require("react");
var _1 = require(".");
var CART_INITIAL_STATE = {
    cart: []
};
exports.UIProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(_1.cartReducer, CART_INITIAL_STATE), state = _b[0], dispatch = _b[1];
    var toggleSideMenu = function () {
        dispatch({
            type: "[CART] - LoadCart from cookies | localstorage",
            payload: []
        });
    };
    return (react_1["default"].createElement(_1.CartContext.Provider, { value: __assign({}, state) }, children));
};
