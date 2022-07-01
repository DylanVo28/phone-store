import { Button, CardMedia, Grid, List } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import MultiItemCarousel from "../src/components/Simple";
import styles from "../styles/Home.module.css";
import CarouselM8 from "./../src/components/Carousel";
import icons from "../src/images/icons";
import ImgMediaCard from "../src/components/ImgMediaCard";
import { Container, Input, InputAdornment } from "@mui/material";
import Item from "../src/components/Item";
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
import Footer from "./../src/components/Footer";
import SpeedDialTooltipOpen from "./../src/components/SpeedDialTooltipOpen";
import { useEffect, useState } from "react";
import PackageCardM8 from "../src/components/PackageCardM8";
import background from "../src/images/background.svg";
import backgroundPromotion from "../src/images/background-promotion.svg";
import SolutionCard from "../src/components/SolutionCard";
import PromotionCard from "./../src/components/PromotionCard";
import NewsCard from "../src/components/NewsCard";
import NewsCardLeft from "../src/components/NewsCardLeft";
import Card from "@mui/material/Card";
import ActionAreaCardM8 from "../src/components/ActionAreaCardM8/ActionAreaCardM8";
import ParallaxCarouselM8 from "../src/components/ParallaxCarouselM8";
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
export default function Home() {
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
      <CarouselM8 items={itemsBanner}/>
      {/*package section*/}
      <Container maxWidth="lg">
        <Grid container spacing={2} id="packages">
          <Grid item xs={12}>
            <MultiItemCarousel
              iconLeft={icons.solution.src}
              titleLeft={"Gói cước"}
              iconRight={icons.arrowRight.src}
              titleRight={"Xem tất cả"}
              maxItemSlide={3}
              linkTo={"/packages"}
              component="package"
              htmlDescription={itemsPackage.map((item,index) => (
                <PackageCardM8 item={item} detail={true} key={index} />
              ))}
            />
          </Grid>
        </Grid>
      </Container>
      {/*product section*/}
      <Grid item xs={12} spacing={2} id="products">
        <Container
          maxWidth="lg"
          style={{ paddingTop: 30 + "px", paddingBottom: 150 + "px" }}
        >
          <MultiItemCarousel
            iconLeft={icons.device.src}
            titleLeft={"Thiết bị di động"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={4}
            linkTo={"/products"}
            component="product"
            isColorWhiteTextRight={true}
          
            htmlDescription={items.map((item,index) => (
              <ImgMediaCard item={item} isCart={true} isdiscount={true} key={index}/>
            ))}
          />
        </Container>
      </Grid>

      {/*solution section*/}
      <Container maxWidth="lg">
        <Grid container spacing={2} id="packages">
          <Grid item xs={12}>
            <MultiItemCarousel
              iconLeft={icons.solution.src}
              titleLeft={"Giải pháp doanh nghiệp"}
              iconRight={icons.arrowRight.src}
              titleRight={"Xem tất cả"}
              maxItemSlide={3}
              linkTo={"/packages"}
              component="package"
              htmlDescription={itemsPackage.map((item,index) => (
                <SolutionCard item={item} detail={true} key={index}/>
              ))}
            />
          </Grid>
        </Grid>
      </Container>

      {/*banner section*/}
      <Container maxWidth="lg">
        <Grid container spacing={2} style={{ padding: 15 + "px  " + 0 }}>
          <Grid item xs={12}>
            <div
              style={{
                background:
                  "url('https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg')",
                height: 300 + "px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 15 + "px",
              }}
            ></div>
          </Grid>
        </Grid>
      </Container>

      {/* promotion section*/}
      <Grid item xs={12} spacing={2} id="promotion">
        <Container
          maxWidth="lg"
          style={{ paddingTop: 30 + "px", paddingBottom: 150 + "px" }}
        >
          <MultiItemCarousel
            iconLeft={icons.device.src}
            titleLeft={"Thiết bị di động"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={3}
            linkTo={"/promotions"}
            component="promotion"
            isColorWhiteTextRight={true}
           
            htmlDescription={items.map((item,index) => (
              <PromotionCard item={item} isCart={true} isdiscount={true} key={index}/>
            ))}
          />
        </Container>
      </Grid>

      {/*news section */}
      <Container maxWidth="lg"  id="news">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "grid",
                  gridAutoColumns: "1fr",
                  gap: 1,
                }}
                className="news__box"
              >
                <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>
                  {
                    <NewsCardLeft
                      item={{
                        image:
                          "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
                        title: "Tada",
                        des: "Sau thành công lớn tại giải chạy online Head to 2021 được tổ chức vào cuối năm 2020 với gần 3000 VĐV tham dự trên khắp cả nước. Từ ngày 01/12/2021, MobiFone tiếp tục tổ chức giải chạy online Head to 2022. Giải được tổ chức nhằm đem lại sân chơi gắn kết cộng đồng với mong muốn...",
                      }}
                    />
                  }
                </Item>

                {/* The second non-visible column has width of 1/4 */}
                <Item
                  sx={{ gridRow: "1", gridColumn: "span 2" }}
                  className="news__col-right"
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    className="news__list"
                  >
                    <ListItem className="news__list-item">
                      <NewsCard />
                    </ListItem>
                    <ListItem className="news__list-item">
                      <NewsCard />
                    </ListItem>
                    <ListItem className="news__list-item">
                      <NewsCard />
                    </ListItem>
                  </List>
                </Item>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Button variant="contained">Đăng ký</Button>
      </Container>

      {/*banner section */}
      <Container maxWidth="lg" id="banner">
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
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            <Grid item xs={3}>
                <ActionAreaCardM8/>
            </Grid>
            </Grid>
            </Container>
      {/* {width && <SpeedDialTooltipOpen />} */}
      <Footer></Footer>
    </>
  );
}
