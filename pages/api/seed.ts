import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
import { Product } from "../../models";

type Data = {
  msg: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ msg: "No tiene accesso a la API" });
  }

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  return res.status(200).json({ msg: "Proceso realizado correctamente" });
}
