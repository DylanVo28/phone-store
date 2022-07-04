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
import LogoMobi from "../images/logo-mobi.svg";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import IconUser from "../images/icon-user.svg";
import SearchIcon from "@mui/icons-material/Search";
import Visibility from "@mui/icons-material/Visibility";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itemsNavbar = {
    logo: "https://cdn.tgdd.vn/Files/2015/04/21/634836/3638927_y-nghia-logo-mobifone.jpg",
    navItems: [
      {
        title: "Sản phẩm",
        items: [
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
        ],
      },
      {
        title: "Sản phẩm",
        items: [
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
        ],
      },
      {
        title: "Sản phẩm",
        items: [
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
        ],
      },
      {
        title: "Sản phẩm",
        items: [
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
          {
            title: "Gói cước",
            items: ["trả trước", "trả sau", "giải trí", "cho doanh nghiệp"],
          },
        ],
      },
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
        {itemsNavbar.navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
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
              <Link href="/" passHref>
                <a>
                  <Box
                    component="img"
                    sx={{
                      height: 100 + "%",
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 150, md: 150 },
                    }}
                    alt="The house from the offer."
                    src={LogoMobi.src}
                  />
                </a>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Link href={"/signin"}>
                <a className="navbar-header__sign-in">
                  <TypograPhyM8
                    title={"Đăng nhập"}
                    isWhiteColor={true}
                  ></TypograPhyM8>
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
            <Toolbar className="navbar__toolbar">
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
                {itemsNavbar.navItems.map((item, index) => (
                  <DropdownItemM8
                    key={index}
                    sx={{ color: "black" }}
                    title={item.title}
                    items={item.items}
                  >
                    {item}
                  </DropdownItemM8>
                ))}
              </Box>
              <InputM8
                placeHolder="Tìm kiếm"
                icon={
                  <SearchIcon
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {<Visibility />}
                  </SearchIcon>
                }
              />
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
