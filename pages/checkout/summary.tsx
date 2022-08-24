import React from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Resume de la orden"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 Productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Direccion de entrega
                </Typography>

                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar direccion</Link>
                </NextLink>
              </Box>

              <Typography>Cristopher</Typography>
              <Typography>312 ALgun lugar</Typography>
              <Typography>mella streest</Typography>
              <Typography>Dominican Republic</Typography>
              <Typography>+1 4564645464</Typography>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar pedido</Link>
                </NextLink>
              </Box>

              {/* Order Summary */}
              <Box sx={{ mt: 3 }}>
                <OrderSummary />
                <NextLink href='' passHref>
                  <Link>
                    <Button
                      color="secondary"
                      className="circular-btn"
                      fullWidth
                    >
                      Confirm order
                    </Button>
                  </Link>
                </NextLink>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
