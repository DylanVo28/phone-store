import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container, Grid } from "@mui/material";
import DropdownItemM8 from "./DropdownItemM8";
import InputM8 from "./InputM8";
import LogoMobi from "../images/logo-mobi.png";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import IconUser from "../images/icon-user.svg";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itemsNavbar = {
    logo: "https://cdn.tgdd.vn/Files/2015/04/21/634836/3638927_y-nghia-logo-mobifone.jpg",
    navItems: [
      "Gói cước",
      "Chọn số",
      "Thiết bị di động",
      "Giải pháp doanh nghiệp",
      "Đăng ký MNP",
    ],
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {itemsNavbar.navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Grid item xs={12} spacing={2} className="navbar-header">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box
                component="img"
                sx={{
                  height: 100 + "%",
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={LogoMobi.src}
              />
            </Grid>
            <Grid item xs={9}>
              <Link href={"/signin"}>
                <a className="navbar-header__sign-in">
                  <TypograPhyM8 title={"Đăng nhập"}></TypograPhyM8>
                  <span>
                    <img src={IconUser.src} />
                  </span>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Box sx={{ display: "flex" }} id="navbar">
        <AppBar component="nav" className="bg-white">
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                md={{ display: { md: "none", lg: "block" } }}
                className="navbar__box"
              >
                {itemsNavbar.navItems.map((item) => (
                  <DropdownItemM8 key={item} sx={{ color: "black" }}>
                    {item}
                  </DropdownItemM8>
                ))}
              </Box>
              <InputM8 placeholder="Tìm kiếm" />
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
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
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
