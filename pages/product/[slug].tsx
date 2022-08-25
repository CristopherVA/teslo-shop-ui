import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideShow, SelectSize } from "../../components/products";
import { FullScreenLoading, ItemCounter } from "../../components/ui";
import { IProduct } from "../../interfaces";
import { dbProduct } from "../../database";


interface Props {
  product: IProduct
}

const ProductPage:FC<Props> = ({ product }) => {

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>

        {/* Info PRoduct */}
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection={"column"}>
            <Typography variant="h1" component={"h1"}>
              {product.title}
            </Typography>

            <Typography
              variant="subtitle1"
              component={"h2"}
            >{`$${product.price}`}</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SelectSize
                sizes={product.sizes}
                // selectdSize={product.sizes[0]}
              />
            </Box>

            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No al disponibles" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { slug } = params as {slug: string};
  const product = await dbProduct.getProductBySlug(slug)

  if(!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product,
    },
  };
};
