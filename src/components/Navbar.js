import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Container } from '@mui/material';
import DropdownItemM8 from './DropdownItemM8';

const drawerWidth = 240;


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itemsNavbar={
    logo:"https://cdn.tgdd.vn/Files/2015/04/21/634836/3638927_y-nghia-logo-mobifone.jpg",
    navItems:['Gói cước', 'Chọn số', 'Thiết bị di động','Giải pháp doanh nghiệp','Đăng ký MNP']
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {itemsNavbar.navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} id='navbar'>
      <style jsx global>{`
        #navbar .MuiPaper-root{
          position: unset!important
        }
        #navbar .logo.width-15{
          width: 15%
        }
        #navbar .width-100{
          width: 100%
        }
        #navbar .bg-white{
          background: white;
          box-shadow: none;
        }
        .navbar__box{
          display:flex
        }
      `}</style>
      <AppBar component="nav" className="bg-white">
      <Container maxWidth="lg">
      
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navbar__box">
            
            {itemsNavbar.navItems.map((item) => (
              <DropdownItemM8 key={item} sx={{ color: 'black' }}>
                {item}
              </DropdownItemM8>
            ))}
          </Box>
        </Toolbar>
      </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
