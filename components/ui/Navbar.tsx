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
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { UIContext } from "../../context";

export const Navbar = () => {
  const router = useRouter();

  const { toggleSideMenu } = useContext(UIContext);

  const handleClickMenu = () => toggleSideMenu()

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
            <Link underline="none">
              <Button
                sx={{
                  color:
                    router.pathname === "/category/men" ? "#ffffff" : "#212128",
                  backgroundColor:
                    router.pathname === "/category/men" && "#212128",
                  fontWeight: 600,
                }}
              >
                Hombres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref>
            <Link underline="none">
              <Button
                sx={{
                  color:
                    router.pathname === "/category/women"
                      ? "#ffffff"
                      : "#212128",
                  backgroundColor:
                    router.pathname === "/category/women" && "#212128",
                  fontWeight: 600,
                }}
              >
                Mujeres
              </Button>
            </Link>
          </NextLink>

          <NextLink href="/category/kid" passHref>
            <Link underline="none">
              <Button
                sx={{
                  color:
                    router.pathname === "/category/kid" ? "#ffffff" : "#212128",
                  backgroundColor:
                    router.pathname === "/category/kid" && "#212128",
                  fontWeight: 600,
                }}
              >
                Niños
              </Button>
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

        <Button onClick={handleClickMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
