/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
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
import Link from "next/link";
import { Container, Grid } from "@mui/material";
import DropdownItemM8 from "./DropdownItemM8";
import InputM8 from "./InputM8";
import LogoMobi from "../images/logo-mobi.svg";
import TypograPhyM8 from "./TypographyM8/TypographyM8";
import IconUser from "../images/icon-user.svg";
import SearchIcon from "@mui/icons-material/Search";
import Visibility from "@mui/icons-material/Visibility";
import NavbarStyle from "../styles/components/NavbarStyle";
import IconTitle from "./IconTitle";
import Image from "next/image";
import cart from '../images/cart.svg'
import idCart from '../images/id-cart.svg'
import discount from '../images/discount-menu.svg'
import newspaper from '../images/newspaper.svg'
import SelectLanguage from "./SelectLanguage";
import { useRouter } from 'next/router';
import content from './../../public/locales/content';
import NoSSR from "react-no-ssr";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const {locale}=useRouter()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const itemsNavbar = {
    logo: "https://cdn.tgdd.vn/Files/2015/04/21/634836/3638927_y-nghia-logo-mobifone.jpg",
    navItems: [
      {
        title: content[locale]['title.product'],
        icon: idCart.src,
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
          }
        ],
      },
      {
        title: content[locale]['title.switchNetwork'],
        icon: idCart.src,
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
        title:content[locale]['title.promotion'],
        icon: discount.src,
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
        title: content[locale]['title.supportCustomer'],
        icon: newspaper.src,
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
      <Grid item xs={12} style={{background: "#0061af"}} className="navbar-header">
        <NavbarStyle/>
        <Container maxWidth="lg" style={{overflow: 'hidden'}}>
          <Grid container >
            <Grid item xs={3} className="navbar-header__left">
              <Link href="/" passHref>
                <a>
                  
                  <Image width={150} height={50}  src={LogoMobi.src} alt="muna logo"/>
                </a>
              </Link>
            </Grid>
            <Grid item xs={3} className="navbar-header__between">
              
            </Grid>
            <Grid item xs={6} className="navbar-header__right">
            <Link href={"/signin"} passHref>
                <a className="navbar-header__sign-in text-decoration--none">
                <span className="icon-title__icon">
                    <Image width={20} height={20} src={IconUser.src} alt="user"/>
                  </span>
                  <TypograPhyM8
                    title={content[locale]['title.signin']}
                    isWhiteColor={true}
                  ></TypograPhyM8>
                
                </a>
               
              </Link>
              /
              <Link href={"/logout"}>

              <a className="navbar-header__register text-decoration--none">
                  <TypograPhyM8
                    title={content[locale]['title.signup']}
                    isWhiteColor={true}
                    style={{paddingLeft: '10px'}}
                  ></TypograPhyM8>
                 
                </a>
                </Link>
            <IconTitle
                  variant="p"
                  component="h5"
                  className="navbar-header__icon-title"
                  icon={<Image src={cart.src} width={30} height={30} className="navbar-header__cart" alt="cart"/>}
                  title={content[locale]['title.cart']}
                />
                    <SelectLanguage/>
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
                    icon={item.icon}
                  >
                    {item}
                  </DropdownItemM8>
                ))}
              </Box>
              <InputM8
                placeHolder={content[locale]['title.search']}
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
      <div className="menu-virtual"></div>
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
