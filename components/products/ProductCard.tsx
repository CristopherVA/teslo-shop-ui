import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useMemo, useState } from "react";
import { IProduct } from "../../interfaces";

import NextLink from "next/link";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHover, setIsHover] = useState(false);

  const productImage = useMemo(() => {
    return isHover
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHover, product.images]);

  return (
    <Grid
      item
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Card>
        <NextLink href='/product/slug' passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                className="fadeIn"
                component="img"
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};