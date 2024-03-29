import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { SHOP_CONTANTS } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type Data = 
   | { msg: string } 
   | IProduct[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      return res.status(400).json({ msg: "Bad request" });
  }

}
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

   const { gender = 'all'} = req.query
   let condition = {}

   if(gender !== 'all' && SHOP_CONTANTS.valideGenders.includes(`${gender}`)){
      condition = { gender }
   }


   await db.connect()
 
   const products = await Product.find(condition)
                                 .select("title images price inStock slug -_id")
                                 .lean()

   return res.status(200).json(products)
   await db.disconnect()


  
};
