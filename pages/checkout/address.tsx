import React from "react";
import NextLink from 'next/link'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, display } from "@mui/system";
import { ShopLayout } from "../../components/layouts";

const AdressPage = () => {
  return (
    <ShopLayout
      title="Direccion"
      pageDescription="Confirmar direccion del destino"
    >
      <Typography variant="h1" component="h1">
        Direccion
      </Typography>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion 2 opcional" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Codigo Postal" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Pais</InputLabel>
            <Select variant="filled" label="Pais" value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={1}>Hondura</MenuItem>
              <MenuItem value={1}>El Salvador</MenuItem>
              <MenuItem value={1}>Mexico</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Telefono" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }} display="flex" justifyContent="center">
        <NextLink href='/checkout/summary'>
          <Link underline="none">
            <Button
              fullWidth
              color="secondary"
              className="circular-btn"
              size="large"
            >
              Revidar pedido
            </Button>
          </Link>
        </NextLink>
      </Box>
    </ShopLayout>
  );
};

export default AdressPage;
