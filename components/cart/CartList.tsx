import React, { FC } from "react";
import NextLink from "next/link";
import {
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { initialData } from "../../database/products";
// import { IProduct } from "../../interfaces";
import { ItemCounter } from "../ui";
import { Delete } from "@mui/icons-material";

interface Props {
  editable?: boolean;
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href="/product/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    className="fadeIn"
                    component="img"
                    image={`/products/${product.images[0]}`}
                    alt={product.title}
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">{product.title}</Typography>
            <Typography variant="body1">
              Talla: <strong>M</strong>
            </Typography>

            {editable ? (
              <ItemCounter />
            ) : (
              <Typography variant="h5">3 items</Typography>
            )}
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            {editable && (
              <IconButton>
                <Delete />
              </IconButton>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
