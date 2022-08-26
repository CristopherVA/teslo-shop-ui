import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Box,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { UIContext } from "../../context";

export const Navbar = () => {
  const router = useRouter();

  const { toggleSideMenu } = useContext(UIContext);

  const handleClickMenu = () => toggleSideMenu();

  const pathCategoryMen = router.pathname === "/category/men";
  const pathCategoryKid = router.pathname === "/category/kid";
  const pathCategoryWomen = router.pathname === "/category/women";

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    router.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

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

        {!isSearchVisible === true ? (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NextLink href="/category/men" passHref>
              <Link underline="none">
                <Button
                  sx={{
                    color: pathCategoryMen ? "white" : "primary",
                    background: pathCategoryMen ? "#1E1E1E" : "info",
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
                    color: pathCategoryWomen ? "white" : "primary",
                    background: pathCategoryWomen ? "#1E1E1E" : "info",
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
                    color: pathCategoryKid ? "white" : "primary",
                    background: pathCategoryKid ? "#1E1E1E" : "info",
                  }}
                >
                  Niños
                </Button>
              </Link>
            </NextLink>
          </Box>
        ) : null}

        <Box flex={1} />

        {!isSearchVisible === true ? (
          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => {
              setIsSearchVisible(true);
            }}
          >
            <SearchOutlined />
          </IconButton>
        ) : null}

        {isSearchVisible ? (
          <Input
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearchTerm("");
                    setIsSearchVisible(false);
                  }}
                >
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : null}

        <IconButton
          onClick={handleClickMenu}
          sx={{ display: { xs: "flex", sm: "none" }, color: "primary" }}
        >
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
