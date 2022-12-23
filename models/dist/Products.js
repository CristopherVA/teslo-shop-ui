"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    description: {
        type: String,
        require: true
    },
    images: [
        {
            type: String,
            require: true
        },
    ],
    inStock: {
        type: Number,
        require: true,
        "default": 0
    },
    price: {
        type: Number,
        require: true,
        "default": 0
    },
    sizes: [
        {
            type: String,
            "enum": {
                values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
                message: "{VALUE} no es un tamaño valido"
            }
        },
    ],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true },
    type: [
        {
            type: String,
            "enum": {
                values: ["shirts", "pants", "hoodies", "hats"],
                message: "{VALUE} no es un tipo valido"
            }
        },
    ],
    gender: [
        {
            type: String,
            "enum": {
                values: ["men", "women", "kid", "unisex"],
                message: "{VALUE} no es un gender valido"
            }
        },
    ]
}, { timestamps: true });
var Product = mongoose_1["default"].models.Product || mongoose_1.model('Product', productSchema);
productSchema.index({
    title: 'text', tags: 'text'
});
exports["default"] = Product;
