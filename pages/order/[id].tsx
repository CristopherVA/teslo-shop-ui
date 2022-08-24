import React from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import {
  Check,
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resume de la orden - 3123123131"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1">
        Orden ABC554564
      </Typography>

      {/* <Chip
        sx={{ mt: 2 }}
        label="Pendiente de pago"
        color="error"
        variant="outlined"
        icon={<CreditCardOffOutlined />}
      /> */}

      <Chip
        sx={{ mt: 2 }}
        label="Pagada"
        color="success"
        variant="outlined"
        icon={<CreditScoreOutlined />}
      />

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
                <Button color="secondary" className="circular-btn" fullWidth>
                  Pagar
                </Button>

                <Chip
                  sx={{ mt: 2 }}
                  label="Pagada"
                  color="success"
                  variant="outlined"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
