"use strict";
exports.__esModule = true;
exports.AuthLayout = void 0;
var react_1 = require("react");
var system_1 = require("@mui/system");
var head_1 = require("next/head");
exports.AuthLayout = function (_a) {
    var children = _a.children, title = _a.title;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, title)),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement(system_1.Box, { display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 200px)' }, children))));
};
