"use strict";
exports.__esModule = true;
exports.FullScreenLoading = void 0;
var material_1 = require("@mui/material");
var react_1 = require("react");
exports.FullScreenLoading = function () {
    return (react_1["default"].createElement(material_1.Box, { display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "calc(100vh - 200px)" },
        react_1["default"].createElement(material_1.Typography, { marginBottom: 3, variant: 'h2', fontWeight: 200, fontSize: 20 }, "Cargando..."),
        react_1["default"].createElement(material_1.CircularProgress, { thickness: 2 })));
};
