import { Button, CardMedia, Grid, List } from "@mui/material";
import Navbar from "../src/components/Navbar";
import MultiItemCarousel from "../src/components/Simple";
import CarouselM8 from "./../src/components/Carousel";
import icons from "../src/images/icons";
import ImgMediaCard from "../src/components/ImgMediaCard";
import { Container, Input, InputAdornment } from "@mui/material";
import Item from "../src/components/Item";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Footer from "./../src/components/Footer";
import SpeedDialTooltipOpen from "./../src/components/SpeedDialTooltipOpen";
import React, { useEffect, useState } from "react";
import PackageCardM8 from "../src/components/PackageCardM8";
import SolutionCard from "../src/components/SolutionCard";
import PromotionCard from "./../src/components/PromotionCard";
import NewsCard from "../src/components/NewsCard";
import NewsCardLeft from "../src/components/NewsCardLeft";
import Card from "@mui/material/Card";
import ActionAreaCardM8 from "../src/components/ActionAreaCardM8/ActionAreaCardM8";
import { Private } from "../auth/auth";

import  Head  from 'next/head';
import { APP_NAME, DOMAIN,FB_APP_ID } from "../config";
import Router, { useRouter } from 'next/router';
import IconPrev from '../src/images/icon-prev.svg'
import IconNext from '../src/images/icon-next.svg'
const isSSR = () => typeof window === undefined; 
import NoSSR from 'react-no-ssr';
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
    id:1,
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
    id:1,
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
    id:1,
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
    id:1,
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
    id:1,
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
    id:1,
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
    id:1,
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
  const [width, setWidth] = useState(0);
  const router=useRouter()

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
  const head=()=>{
    return <Head>
      <title>Home | {APP_NAME}</title>
      <meta
        name="description"
        content="Trang home"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
      <meta property="og:title" content={`Lasted web development | ${APP_NAME}`}/>
      <meta property="og:description" content="Tada description"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
      <meta property="og:site_name" content={`${APP_NAME}`}/>
      <meta property="og:image" content={`${DOMAIN}/static/images/banner_1.jpg`}/>
      <meta property="og:image:secure_url" content={`../src/images/banner_1.jpg`}/>
      <meta property="og:image:type" content={`image/jpg`}/>
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  }
  return (
    <React.Fragment>
      {head()}
      <NoSSR>
{/* <Private> */}
<Navbar />

<CarouselM8 items={itemsBanner}/>
{/*package section*/}
<Container maxWidth="lg">
  <Grid container spacing={2} id="packages">
    <Grid item xs={12}>
      <MultiItemCarousel
        iconLeft={IconPrev.src}
        titleLeft={"Gói cước"}
        iconRight={IconNext.src}
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
      btnWhite={true}

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
        linkTo={"/solutions"}
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
      titleLeft={"Chương trình khuyến mãi"}
      maxItemSlide={3}
      linkTo={"/promotions"}
      component="promotion"
      isColorWhiteTextRight={true}
      btnWhite={true}
     
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
  {width&&<SpeedDialTooltipOpen />}
<Footer></Footer>
{/* </Private> */}
</NoSSR>
    </React.Fragment>
      
     
  );
}
// Home.getInitialProps=()=>{
//   //where call api to render data for page
// }