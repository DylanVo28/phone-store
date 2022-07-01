import { Button, CardMedia, Grid, List } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../src/components/Navbar";
import MultiItemCarousel from "../../src/components/Simple";
import icons from "../../src/images/icons";

import ImgMediaCard from "../../src/components/ImgMediaCard";
import { Container, Input, InputAdornment } from "@mui/material";
import Item from "../../src/components/Item";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { ImageIcon } from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import { WorkIcon } from "@mui/icons-material/Work";
import { BeachAccessIcon } from "@mui/icons-material/BeachAccess";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Link from "next/link";
import Footer from "../../src/components/Footer";
import SpeedDialTooltipOpen from "../../src/components/SpeedDialTooltipOpen";
import { useEffect, useState } from "react";
import PackageCardM8 from "../../src/components/PackageCardM8";
import background from "../../src/images/background.svg";
import backgroundPromotion from "../../src/images/background-promotion.svg";
import SolutionCard from "../../src/components/SolutionCard";
import PromotionCard from "../../src/components/PromotionCard";
import NewsCard from "../../src/components/NewsCard";
import NewsCardLeft from "../../src/components/NewsCardLeft";
import Card from "@mui/material/Card";
import ActionAreaCardM8 from "../../src/components/ActionAreaCardM8/ActionAreaCardM8";
import ParallaxCarouselM8 from "../../src/components/ParallaxCarouselM8";
import CardTextM8 from "../../src/components/CardTextM8";
const backgroundImage =
  "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/285412229_562998832205409_2099875105150622222_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7TyPYlJ_itoAX-cXw4U&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJX0V-PkgSE9SJDX0_e04cTxkogOX1BVeuGywhh4hiIog&oe=62D7CC26";
const items = [
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      "https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];

const itemsPackage = [
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives: [
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
    ],
  },
];
export default function PackageDetail() {
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);
  var itemsBanner = [
    {
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    },
    {
      image:
        "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      {/* <Slide items={itemsBanner} /> */}
      <ParallaxCarouselM8 />
      {/*package section*/}
      <Container maxWidth="lg" >
        <Grid container spacing={2} >
          <Grid item md={10}>
          <Grid container spacing={2} >
          <Grid item md={5}>
          <Card sx={{ maxWidth: 100 + "%" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={
                  "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
                }
                className="card-image"
              />
            </Card>
          </Grid>
            <Grid item md={7} className="display--flex justify-content--between">
            <Grid container spacing={2} >
          <Grid item md={6}>
          <CardTextM8/>

              </Grid>
          <Grid item md={6}>
          <CardTextM8/>
          <Button variant="contained" className="float--right">Đăng ký</Button>

              </Grid>
              </Grid>
              

            </Grid>
              
          </Grid>
            
          </Grid>
          <Grid item md={2}>
          </Grid>
        </Grid>
      </Container>

      {/*banner section */}
      <Container maxWidth="lg">
        <Grid container spacing={2} id="banners">
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 100 + "%" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="400"
                image={
                  "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg"
                }
                className="card-image"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/*support section*/}
      <Container maxWidth="lg">
        <div>
          <span>
            <h1 className="title">Hỗ trợ khách hàng</h1>
          </span>
        </div>
        <Grid container spacing={2} id="supports">
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
          <Grid item xs={3}>
            <ActionAreaCardM8 />
          </Grid>
        </Grid>
      </Container>
      {/* {width && <SpeedDialTooltipOpen />} */}
      <Footer></Footer>
    </>
  );
}
