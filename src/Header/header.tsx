import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './header.module.css';

interface MenuItem {
  id: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { id: 'advantages', label: 'Преимущества' },
  { id: 'functional', label: 'Функционал' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О нас' }
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.logo}>
          FITLOG
        </Typography>

        {/* Mobile menu */}
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle} className={styles.menuIcon}>
          <MenuIcon />
        </IconButton>

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
          <Box className={styles.drawerContent}>
            <IconButton onClick={handleDrawerToggle} className={styles.closeButton}>
              <CloseIcon />
            </IconButton>
            <Box>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => alert(`Navigate to ${item.label}`)}  // Обработчик клика для мобильной версии
                  className={styles.drawerButton}
                >
                  {item.label}
                </button>
              ))}
            </Box>
            <button
              onClick={() => alert('Navigate to login')}  // Обработчик для кнопки "Вход"
              className={styles.drawerButton}
            >
              Вход
            </button>
          </Box>
        </Drawer>

        {/* Desktop Navigation */}
        <Box className={styles.desktopNav}>
          {menuItems.map((item) => (
            <Button key={item.id} color="inherit" className={styles.desktopButton}>
              {item.label}
            </Button>
          ))}
          <Button color="inherit" className={styles.loginButton}>Вход</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
