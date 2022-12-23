"use strict";
exports.__esModule = true;
exports.ShopLayout = void 0;
var head_1 = require("next/head");
var react_1 = require("react");
var ui_1 = require("../ui");
exports.ShopLayout = function (_a) {
    var children = _a.children, title = _a.title, pageDescription = _a.pageDescription, imgFullUrl = _a.imgFullUrl;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, title),
            react_1["default"].createElement("meta", { name: 'description', content: pageDescription }),
            react_1["default"].createElement("meta", { name: 'og:title', content: title }),
            react_1["default"].createElement("meta", { name: 'og:description', content: pageDescription }),
            imgFullUrl && (react_1["default"].createElement("meta", { name: 'og:image', content: imgFullUrl }))),
        react_1["default"].createElement("nav", null,
            react_1["default"].createElement(ui_1.Navbar, null)),
        react_1["default"].createElement(ui_1.SideMenu, null),
        react_1["default"].createElement("main", { style: {
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            } }, children),
        react_1["default"].createElement("footer", null)));
};
