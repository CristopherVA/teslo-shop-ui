"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_1 = require("react");
var link_1 = require("next/link");
exports.ProductCard = function (_a) {
    var product = _a.product;
    var _b = react_1.useState(false), isHover = _b[0], setIsHover = _b[1];
    var _c = react_1.useState(false), isImageLoaded = _c[0], setIsImageLoaded = _c[1];
    var productImage = react_1.useMemo(function () {
        return isHover
            ? "/products/" + product.images[1]
            : "/products/" + product.images[0];
    }, [isHover, product.images]);
    return (react_1["default"].createElement(material_1.Grid, { item: true, onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
        react_1["default"].createElement(material_1.Card, null,
            react_1["default"].createElement(link_1["default"], { href: "/product/" + product.slug, passHref: true, prefetch: false },
                react_1["default"].createElement(material_1.Link, null,
                    react_1["default"].createElement(material_1.CardActionArea, null,
                        react_1["default"].createElement(material_1.CardMedia, { className: "fadeIn", component: "img", image: productImage, alt: product.title, onLoad: function () { return setIsImageLoaded(true); } }))))),
        react_1["default"].createElement(system_1.Box, { sx: { mt: 1, display: isImageLoaded ? 'block' : 'none' }, className: "fadeIn" },
            react_1["default"].createElement(material_1.Typography, { fontWeight: 700 }, product.title),
            react_1["default"].createElement(material_1.Typography, { fontWeight: 500 }, "$" + product.price))));
};
