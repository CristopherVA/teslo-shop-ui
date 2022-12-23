"use strict";
exports.__esModule = true;
exports.ItemCounter = void 0;
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_1 = require("react");
exports.ItemCounter = function () {
    return (react_1["default"].createElement(system_1.Box, { display: 'flex', alignItems: 'center' },
        react_1["default"].createElement(material_1.IconButton, null,
            react_1["default"].createElement(icons_material_1.RemoveCircleOutline, null)),
        react_1["default"].createElement(material_1.Typography, { sx: { width: 40, textAlign: 'center' } }, "1"),
        react_1["default"].createElement(material_1.IconButton, null,
            react_1["default"].createElement(icons_material_1.AddCircleOutline, null))));
};
