import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./header.module.css";

interface MenuItem {
  id: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { id: "advantages", label: "Преимущества" },
  { id: "functional", label: "Функционал" },
  { id: "reviews", label: "Отзывы" },
  { id: "about", label: "О нас" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black" }}
    >
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h6"
          className={styles.logo}
          sx={{
            color: "#2550B9",
            fontSize: "23px",
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          FITLOG
        </Typography>

        {/* Desktop Navigation */}
        <Box className={styles.desktopNav}>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              className={styles.desktopButton}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "none",
                lineHeight: "24px",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Button className={styles.loginButton}>Вход</Button>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          className={styles.menuIcon}
        >
          <MenuIcon sx={{ color: "#2550B9" }} />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: "100%", backgroundColor: "#fff" } }}
      >
        <Box sx={{ p: 2, position: "relative" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#2550B9",
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            FITLOG
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            className={styles.closeButton}
          >
            <CloseIcon sx={{ color: "#2550B9", fontSize: "30px" }} />
          </IconButton>
        </Box>

        <Box className={styles.drawerContent}>
          <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => alert(`Navigate to ${item.label}`)}
                className={styles.drawerButton}
              >
                {item.label}
              </button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ p: 2 }}>
            <button
              onClick={() => alert("Navigate to login")}
              className={styles.drawerLoginButton}
            >
              Вход
            </button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;

