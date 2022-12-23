"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var link_1 = require("next/link");
var router_1 = require("next/router");
var react_1 = require("react");
var context_1 = require("../../context");
exports.Navbar = function () {
    var router = router_1.useRouter();
    var toggleSideMenu = react_1.useContext(context_1.UIContext).toggleSideMenu;
    var handleClickMenu = function () { return toggleSideMenu(); };
    var pathCategoryMen = router.pathname === "/category/men";
    var pathCategoryKid = router.pathname === "/category/kid";
    var pathCategoryWomen = router.pathname === "/category/women";
    var _a = react_1.useState(""), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState(false), isSearchVisible = _b[0], setIsSearchVisible = _b[1];
    var onSearchTerm = function () {
        if (searchTerm.trim().length === 0)
            return;
        router.push("/search/" + searchTerm);
        setSearchTerm("");
    };
    return (react_1["default"].createElement(material_1.AppBar, { elevation: 8 },
        react_1["default"].createElement(material_1.Toolbar, null,
            react_1["default"].createElement(link_1["default"], { href: "/", passHref: true },
                react_1["default"].createElement(material_1.Link, { underline: "none", display: "flex", alignItems: "center", fontWeight: 400 },
                    react_1["default"].createElement(material_1.Typography, { sx: { color: "#212128", fontWeight: 600 }, variant: "h6", component: "h6" }, "Teslo |"),
                    react_1["default"].createElement(material_1.Typography, { sx: { ml: 0.5, color: "#212128", fontWeight: 600 } }, "Shop"))),
            react_1["default"].createElement(material_1.Box, { flex: 1 }),
            !isSearchVisible === true ? (react_1["default"].createElement(material_1.Box, { sx: { display: { xs: "none", sm: "block" } } },
                react_1["default"].createElement(link_1["default"], { href: "/category/men", passHref: true },
                    react_1["default"].createElement(material_1.Link, { underline: "none" },
                        react_1["default"].createElement(material_1.Button, { sx: {
                                color: pathCategoryMen ? "white" : "primary",
                                background: pathCategoryMen ? "#1E1E1E" : "info"
                            } }, "Hombres"))),
                react_1["default"].createElement(link_1["default"], { href: "/category/women", passHref: true },
                    react_1["default"].createElement(material_1.Link, { underline: "none" },
                        react_1["default"].createElement(material_1.Button, { sx: {
                                color: pathCategoryWomen ? "white" : "primary",
                                background: pathCategoryWomen ? "#1E1E1E" : "info"
                            } }, "Mujeres"))),
                react_1["default"].createElement(link_1["default"], { href: "/category/kid", passHref: true },
                    react_1["default"].createElement(material_1.Link, { underline: "none" },
                        react_1["default"].createElement(material_1.Button, { sx: {
                                color: pathCategoryKid ? "white" : "primary",
                                background: pathCategoryKid ? "#1E1E1E" : "info"
                            } }, "Ni\u00F1os"))))) : null,
            react_1["default"].createElement(material_1.Box, { flex: 1 }),
            !isSearchVisible === true ? (react_1["default"].createElement(material_1.IconButton, { sx: { display: { xs: "none", sm: "block" } }, onClick: function () {
                    setIsSearchVisible(true);
                } },
                react_1["default"].createElement(icons_material_1.SearchOutlined, null))) : null,
            isSearchVisible ? (react_1["default"].createElement(material_1.Input, { autoFocus: true, value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, onKeyPress: function (e) { return (e.key === "Enter" ? onSearchTerm() : null); }, type: "text", placeholder: "Buscar...", endAdornment: react_1["default"].createElement(material_1.InputAdornment, { position: "end" },
                    react_1["default"].createElement(material_1.IconButton, { onClick: function () {
                            setSearchTerm("");
                            setIsSearchVisible(false);
                        } },
                        react_1["default"].createElement(icons_material_1.ClearOutlined, null))) })) : null,
            react_1["default"].createElement(material_1.IconButton, { onClick: handleClickMenu, sx: { display: { xs: "flex", sm: "none" }, color: "primary" } },
                react_1["default"].createElement(icons_material_1.SearchOutlined, null)),
            react_1["default"].createElement(link_1["default"], { href: "/cart", passHref: true },
                react_1["default"].createElement(material_1.Link, { underline: "none" },
                    react_1["default"].createElement(material_1.Badge, { badgeContent: 2, color: "secondary" },
                        react_1["default"].createElement(icons_material_1.ShoppingCartOutlined, { sx: { color: "#212128", fontWeight: 600 } })))),
            react_1["default"].createElement(material_1.Button, { onClick: handleClickMenu }, "Menu"))));
};
