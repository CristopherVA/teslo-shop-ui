import { db } from ".";
import { IProduct } from "../interfaces";
import { Product } from "../models";


export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {

   db.connect()
   const product = await Product.findOne({ slug }).lean()
   db.disconnect()

   return JSON.parse(JSON.stringify(product))

}