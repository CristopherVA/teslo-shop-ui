import React from "react";
import NextLink from "next/link";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "fullname",
    headerName: "Nombre completo",
    width: 300,
  },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra informacion si esta pagada o no",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid === true ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="Pendiente a pagar" variant="outlined" />
      );
    },
  },
  {
    field: "option",
    headerName: "Option",
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/order/${params.row.id}`}>
          <Link underline="always">Ver Orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Cristopher Valentin" },
  { id: 2, paid: false, fullname: "Genesis Valentin" },
  { id: 3, paid: true, fullname: "Guadalupe Valentin" },
  { id: 4, paid: false, fullname: "Pedro Valentin" },
  { id: 5, paid: true, fullname: "Amanda Valentin" },
  { id: 6, paid: false, fullname: "Rosa Valentin" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription={"Historial de ordenes del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
