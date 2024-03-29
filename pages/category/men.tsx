import { Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";
import { useProducts } from "../../hooks";

const MenPage = () => {

  const { products, isError, isLoading } = useProducts("/products?gender=men");

  return (
    <ShopLayout
      title={"Teslo - Shop - Men"}
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 1 }}>
        Hombre
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        Todos los productos para hombre
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
