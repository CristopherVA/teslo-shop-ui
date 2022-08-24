import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ShopLayout } from "../components/layouts";
const Custom404 = () => {
  return (
    <ShopLayout title="404" pageDescription={"Pagina no encontrada!"}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna pagina aqui
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
