import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Typography, 
  Box, 
  Button, 
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

// Custom NavLink that works with MUI Button
const NavLinkButton = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => {
  return (
    <Button
      component={NavLink}
      to={to}
      sx={{
        color: 'white',
        fontWeight: 500,
        position: 'relative',
        textTransform: 'none',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 4,
          left: 8,
          width: 0,
          height: 2,
          bgcolor: 'secondary.main',
          transition: 'width 0.3s ease'
        },
        '&:hover:after, &.active:after': {
          width: 'calc(100% - 16px)'
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  
  const drawer = (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary={t('header.home')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/countries" onClick={handleDrawerToggle}>
            <ListItemText primary={t('header.countries')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/quiz" onClick={handleDrawerToggle}>
            <ListItemText primary={t('header.quiz')} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Box component="span" sx={{ mr: 1 }}>🇪🇺</Box>
            European Countries
          </Typography>

          {/* Mobile menu */}
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <LanguageSwitcher />
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box', 
                    width: drawerWidth 
                  },
                }}
                ModalProps={{
                  keepMounted: true, // Better mobile performance
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            // Desktop menu
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavLinkButton to="/">{t('header.home')}</NavLinkButton>
                <NavLinkButton to="/countries">{t('header.countries')}</NavLinkButton>
                <NavLinkButton to="/quiz">{t('header.quiz')}</NavLinkButton>
                <LanguageSwitcher />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 