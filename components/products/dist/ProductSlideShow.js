"use strict";
exports.__esModule = true;
exports.ProductSlideShow = void 0;
var react_1 = require("react");
var react_slideshow_image_1 = require("react-slideshow-image");
require("react-slideshow-image/dist/styles.css");
var ProductSliderShow_module_css_1 = require("./ProductSliderShow.module.css");
exports.ProductSlideShow = function (_a) {
    var images = _a.images;
    return (react_1["default"].createElement(react_slideshow_image_1.Slide, { easing: 'ease', duration: 7000, indicators: true }, images.map(function (image) {
        var url = "/products/" + image;
        return (react_1["default"].createElement("div", { className: ProductSliderShow_module_css_1["default"]['each-slide'], key: image },
            react_1["default"].createElement("div", { style: {
                    backgroundImage: "url(" + url + ")",
                    backgroundSize: 'cover'
                } })));
    })));
};
