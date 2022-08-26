import { db } from ".";
import { IProduct } from "../interfaces";
import { Product } from "../models";

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  db.connect();
  const product = await Product.findOne({ slug }).lean();
  db.disconnect();

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();

  const slugs = await Product.find().select("slug -_id").lean();

  await db.disconnect();

  return slugs;
};

export const getProductByTerm = async (term: string): Promise<IProduct[]> => {
  term = term.toString().toLocaleLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: term },
  })
    .select("title inStock price images slug -_id")
    .lean();

  await db.disconnect();

  return products;
};

export const getAllProduct = async (): Promise<IProduct[]> => {
  await db.connect();
  const products = await Product.find().lean();

  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};
