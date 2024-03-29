import { timeStamp } from "console";
import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: {
      type: String,
      require: true,
    },
    images: [
      {
        type: String,
        require: true,
      },
    ],
    inStock: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} no es un tamaño valido",
        },
      },
    ],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true },
    type: [
      {
        type: String,
        enum: {
          values: ["shirts", "pants", "hoodies", "hats"],
          message: "{VALUE} no es un tipo valido",
        },
      },
    ],
    gender: [
      {
        type: String,
        enum: {
          values: ["men", "women", "kid", "unisex"],
          message: "{VALUE} no es un gender valido",
        },
      },
    ],
  },
  { timestamps: true }
);

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

productSchema.index({
  title:  'text', tags: 'text'
})

export default Product 