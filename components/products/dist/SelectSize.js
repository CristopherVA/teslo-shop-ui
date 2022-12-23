"use strict";
exports.__esModule = true;
exports.SelectSize = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
exports.SelectSize = function (_a) {
    var selectdSize = _a.selectdSize, sizes = _a.sizes;
    return (react_1["default"].createElement(material_1.Box, null, sizes.map(function (size) { return (react_1["default"].createElement(material_1.Button, { key: size, size: "small" }, size)); })));
};
