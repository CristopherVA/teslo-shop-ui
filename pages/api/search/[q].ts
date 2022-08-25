import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IProduct } from "../../../interfaces";
import { Product } from "../../../models";

type Data = { msg: string } | IProduct[] | IProduct;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      res.status(400).json({ msg: "Bad Request" });
  }
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res
      .status(404)
      .json({ msg: "Debes verificar el query de busqueda" });
  }

  q = q.toString().toLocaleLowerCase()

  await db.connect();
  const products = await Product.find({
    $text: { $search: q}
  })
   .select('title inStock price images slug -_id')
  .lean();
  await db.disconnect();

  if (!products) {
    res.status(404).json({ msg: "Producto no encontrado!" });
  }

  return res.status(200).json(products);
};
