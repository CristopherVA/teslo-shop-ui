import React, { FC, useContext, useState } from "react";
import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { CartContext } from "../../context";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideShow, SelectSize } from "../../components/products";
import { FullScreenLoading, ItemCounter } from "../../components/ui";
import { IProduct, ICartProduct, ISize } from "../../interfaces";
import { dbProduct } from "../../database";
import { useRouter } from "next/router";

interface Props {
  product: IProduct;
}

const ProductPage: FC<Props> = ({ product }) => {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    images: product.images[0],
    inStock: product.inStock,
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    type: product.type,
    gender: product.gender,
    quantity: 1,
  });

  const { addProductToCart } = useContext(CartContext);
  const route = useRouter()
  const selectedSize = (size: ISize) => {
    setTempCartProduct({ ...tempCartProduct, size });
  };

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct({ ...tempCartProduct, quantity });
  };

  const handleAddToCart = () => {
    if (!tempCartProduct.size) return;
    console.warn("hola");
    addProductToCart(tempCartProduct);
    route.push('/cart')
  };

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
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updateQuantity={onUpdateQuantity}
                maxValue={product.inStock > 5 ? 5 : product.inStock}
              />
              <SelectSize
                sizes={product.sizes}
                selectdSize={tempCartProduct.size}
                onSelectedSize={(size) => selectedSize(size)}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button
                onClick={handleAddToCart}
                color="secondary"
                className="circular-btn"
              >
                {tempCartProduct.size
                  ? "Agregar al carrito"
                  : "Seleccione una talla"}
              </Button>
            ) : (
              <Chip
                label="No al disponibles"
                color="error"
                variant="outlined"
              />
            )}

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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await dbProduct.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const product = await dbProduct.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
