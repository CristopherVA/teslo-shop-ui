"use strict";
exports.__esModule = true;
exports.CartList = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var material_1 = require("@mui/material");
var products_1 = require("../../database/products");
// import { IProduct } from "../../interfaces";
var ui_1 = require("../ui");
var icons_material_1 = require("@mui/icons-material");
var productsInCart = [
    products_1.initialData.products[0],
    products_1.initialData.products[1],
    products_1.initialData.products[2],
];
exports.CartList = function (_a) {
    var _b = _a.editable, editable = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, productsInCart.map(function (product) { return (react_1["default"].createElement(material_1.Grid, { key: product.slug, container: true, spacing: 2, sx: { mb: 1 } },
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 3 },
            react_1["default"].createElement(link_1["default"], { href: "/product/slug", passHref: true },
                react_1["default"].createElement(material_1.Link, null,
                    react_1["default"].createElement(material_1.CardActionArea, null,
                        react_1["default"].createElement(material_1.CardMedia, { className: "fadeIn", component: "img", image: "/products/" + product.images[0], alt: product.title, sx: { borderRadius: "5px" } }))))),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 7 },
            react_1["default"].createElement(material_1.Typography, { variant: "body1" }, product.title),
            react_1["default"].createElement(material_1.Typography, { variant: "body1" },
                "Talla: ",
                react_1["default"].createElement("strong", null, "M")),
            editable ? (react_1["default"].createElement(ui_1.ItemCounter, null)) : (react_1["default"].createElement(material_1.Typography, { variant: "h5" }, "3 items"))),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 2, display: "flex", alignItems: "center", flexDirection: "column" },
            react_1["default"].createElement(material_1.Typography, { variant: "subtitle1" }, "$" + product.price),
            editable && (react_1["default"].createElement(material_1.IconButton, null,
                react_1["default"].createElement(icons_material_1.Delete, null)))))); })));
};
