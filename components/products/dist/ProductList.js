"use strict";
exports.__esModule = true;
exports.ProductList = void 0;
var material_1 = require("@mui/material");
var react_1 = require("react");
var ProductCard_1 = require("./ProductCard");
exports.ProductList = function (_a) {
    var products = _a.products;
    return (react_1["default"].createElement(material_1.Grid, { container: true, spacing: 4 }, products.map(function (product) { return (react_1["default"].createElement(material_1.Grid, { item: true, sm: 4, key: product.slug },
        react_1["default"].createElement(ProductCard_1.ProductCard, { product: product }))); })));
};
