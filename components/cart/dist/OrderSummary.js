"use strict";
exports.__esModule = true;
exports.OrderSummary = void 0;
var material_1 = require("@mui/material");
var react_1 = require("react");
exports.OrderSummary = function () {
    return (react_1["default"].createElement(material_1.Grid, { container: true },
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
            react_1["default"].createElement(material_1.Typography, null, "No. Order")),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6, display: 'flex', justifyContent: 'end' },
            react_1["default"].createElement(material_1.Typography, null, "3 items")),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
            react_1["default"].createElement(material_1.Typography, null, "SubTotal")),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6, display: 'flex', justifyContent: 'end' },
            react_1["default"].createElement(material_1.Typography, null, "$" + 155.36)),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6 },
            react_1["default"].createElement(material_1.Typography, null, "Impuestos")),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6, display: 'flex', justifyContent: 'end' },
            react_1["default"].createElement(material_1.Typography, null, "$" + 35.34)),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6, sx: { mt: 2 } },
            react_1["default"].createElement(material_1.Typography, null, "Total")),
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 6, sx: { mt: 2 }, display: 'flex', justifyContent: 'end' },
            react_1["default"].createElement(material_1.Typography, { variant: 'subtitle1' }, "$" + 186.34))));
};
