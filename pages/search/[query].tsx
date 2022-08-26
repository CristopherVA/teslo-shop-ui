import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/";
import { ProductList } from "../../components/products";
import { IProduct } from "../../interfaces";
import { db, dbProduct } from "../../database";
import { Box } from "@mui/system";

interface Props {
  products: IProduct[];
  foundProduct: boolean;
  query: string;
}
const SearchPage: NextPage<Props> = ({ products, foundProduct, query }) => {
  return (
    <ShopLayout
      title={"Teslo - Search"}
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 1 }}>
        Buscar producto
      </Typography>
      {foundProduct ? (
        <Typography variant="h2" component="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Termino: {query}
        </Typography>
      ) : (
        <Box display='flex'>
          <Typography variant="h2" component="h2" sx={{ mb: 1 }} textTransform="capitalize">
            No encontramos productos:
          </Typography>
          <Typography marginLeft={1} variant="h2" component="h2" color='secondary' sx={{ mb: 1 }} textTransform="capitalize">
             { query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProduct.getProductByTerm(query);
  let foundProduct = products.length > 0;

  if (!foundProduct) {
    products = await dbProduct.getAllProduct();
  }

  return {
    props: {
      products,
      foundProduct,
      query,
    },
  };
};

export default SearchPage;
