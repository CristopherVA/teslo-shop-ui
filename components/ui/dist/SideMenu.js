"use strict";
exports.__esModule = true;
exports.SideMenu = void 0;
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var react_1 = require("react");
var context_1 = require("../../context");
var router_1 = require("next/router");
exports.SideMenu = function () {
    var router = router_1.useRouter();
    var _a = react_1.useContext(context_1.UIContext), isMenuOpen = _a.isMenuOpen, toggleSideMenu = _a.toggleSideMenu;
    var _b = react_1.useState(""), searchTerm = _b[0], setSearchTerm = _b[1];
    var onSearchTerm = function () {
        if (searchTerm.trim().length === 0)
            return;
        navigateTo("/search/" + searchTerm);
        setSearchTerm('');
    };
    var navigateTo = function (url) {
        router.push(url);
        toggleSideMenu();
    };
    return (React.createElement(material_1.Drawer, { open: isMenuOpen, anchor: "right", onKeyPress: function (e) { return e.key === 'Enter' ? onSearchTerm() : null; }, sx: { backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }, onClose: toggleSideMenu },
        React.createElement(material_1.Box, { sx: { width: 250, paddingTop: 5 } },
            React.createElement(material_1.List, null,
                React.createElement(material_1.ListItem, null,
                    React.createElement(material_1.Input, { autoFocus: true, value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, type: "text", placeholder: "Buscar...", endAdornment: React.createElement(material_1.InputAdornment, { position: "end" },
                            React.createElement(material_1.IconButton, { onClick: function () { return onSearchTerm(); } },
                                React.createElement(icons_material_1.SearchOutlined, null))) })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.AccountCircleOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Perfil" })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.ConfirmationNumberOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Mis Ordenes" })),
                React.createElement(material_1.ListItem, { onClick: function () { return navigateTo("/category/men"); }, button: true, sx: { display: { xs: "", sm: "none" } } },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.MaleOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Hombres" })),
                React.createElement(material_1.ListItem, { onClick: function () { return navigateTo("/category/women"); }, button: true, sx: { display: { xs: "", sm: "none" } } },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.FemaleOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Mujeres" })),
                React.createElement(material_1.ListItem, { onClick: function () { return navigateTo("/category/kid"); }, button: true, sx: { display: { xs: "", sm: "none" } } },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.EscalatorWarningOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Niños" })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.VpnKeyOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Ingresar" })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.LoginOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Salir" })),
                React.createElement(material_1.Divider, null),
                React.createElement(material_1.ListSubheader, null, "Admin Panel"),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.CategoryOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Productos" })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.ConfirmationNumberOutlined, null)),
                    React.createElement(material_1.ListItemText, { primary: "Ordenes" })),
                React.createElement(material_1.ListItem, { button: true },
                    React.createElement(material_1.ListItemIcon, null,
                        React.createElement(icons_material_1.AdminPanelSettings, null)),
                    React.createElement(material_1.ListItemText, { primary: "Usuarios" }))))));
};
