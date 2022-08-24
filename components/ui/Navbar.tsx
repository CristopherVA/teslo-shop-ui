import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar elevation={8}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link
            underline="none"
            display="flex"
            alignItems="center"
            fontWeight={400}
          >
            <Typography
              sx={{ color: "#212128", fontWeight: 600 }}
              variant="h6"
              component="h6"
            >
              Teslo |
            </Typography>
            <Typography sx={{ ml: 0.5, color: "#212128", fontWeight: 600 }}>
              Shop
            </Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref>
            <Link sx={{ color: "#212128", fontWeight: 600 }} underline="none">
              <Button>Hombres</Button>
            </Link>
          </NextLink>

          <NextLink href="/category/woman" passHref>
            <Link sx={{ color: "#212128", fontWeight: 600 }} underline="none">
              <Button>Mujeres</Button>
            </Link>
          </NextLink>

          <NextLink href="/category/kid" passHref>
            <Link sx={{ color: "#212128", fontWeight: 600 }} underline="none">
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link underline="none">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined
                sx={{ color: "#212128", fontWeight: 600 }}
              />
            </Badge>
          </Link>
        </NextLink>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
