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

import  Head  from 'next/head';
import { APP_NAME, DOMAIN,FB_APP_ID } from "../config";
import Router, { useRouter } from 'next/router';
import IconPrev from '../src/images/icon-prev.svg'
import IconNext from '../src/images/icon-next.svg'
import NoSSR from 'react-no-ssr';
import banner from '../src/images/baner-6-1.png'
import packageImage from '../src/images/package-image.png'
import phone from '../src/images/phone.png'
import solutionImage from '../src/images/solution-image.png'
import promotionImage from '../src/images/promotion-image.png'
import newsImage from '../src/images/news-image.png'
import banner62 from '../src/images/baner-6-2.png'
import faq from '../src/images/faq.png'
const items = [
  {
    id: 1,
    image:phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
      phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];
const itemsPromotion = [
  {
    id: 1,
    image:promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image:
    promotionImage.src,
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
    image:packageImage.src,
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
    image:packageImage.src,
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
      packageImage.src,
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
      packageImage.src,
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
      packageImage.src,
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
      packageImage.src,
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
const itemsSolution = [
  {
    id:1,
    image:solutionImage.src,
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
    image:solutionImage.src,
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
      solutionImage.src,
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
    solutionImage.src,
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
    solutionImage.src,
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
    solutionImage.src,
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
      image:'https://media4.giphy.com/media/jJjb9AUHOiP3nJJMdy/giphy.gif?cid=82a1493brk1p5lo4f0kludsbvfxp3iv8d9ajxafmvqch52xy&rid=giphy.gif&ct=v',
    },
    {
      image:banner.src,
    },
  ];
  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    };
  }
  const head=()=>{
    return <Head>
      <title>Home | {APP_NAME}</title>
      <meta
        name="description"
        content="Trang home"
        key="desc"
      />
      {/* <meta name="robots" content="all" /> */}
      <meta name="googlebot" content="noindex,nofollow" />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
      <meta property="og:title" content={`Lasted web development | ${APP_NAME}`}/>
      <meta property="og:description" content="Tada description"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
      <meta property="og:site_name" content={`${APP_NAME}`}/>
      <meta property="og:image" content={`${banner.src}`}/>
      <meta property="og:image:secure_url" content={`${banner.src}`}/>
      <meta property="og:image:type" content={`image/jpg`}/>
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
    </Head>
  }
  return (
    <React.Fragment>
      {head()}
      <NoSSR>
        {/*banner section */}

{/* <Private> */}
<Navbar />
<div style={{height: 120+"px"}}></div>
<CarouselM8 items={itemsBanner}/>

{/*package section*/}
<Container maxWidth="lg" id="packages">
  
      <MultiItemCarousel
        iconLeft={IconPrev.src}
        titleLeft={"Gói cước"}
        iconRight={IconNext.src}
        titleRight={"Xem tất cả"}
        maxItemSlide={3}
        linkTo={"/packages"}
        component="package"
        htmlDescription={itemsPackage.map((item,index) => {
          if(index%3===0){
            return  <PackageCardM8 item={item} detail={true} key={index} kaka={index} justify={{justifyContent: 'flex-start'}}/>
          }
          else if(index%3===2){
            return  <PackageCardM8 item={item} detail={true} key={index}  kaka={index} justify={{justifyContent: 'flex-end'}}/>

          }
           return  <PackageCardM8 item={item} detail={true} key={index}  kaka={index} />
        
        })}
      />
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
      isBtnMore={false}
    />
  </Container>
</Grid>

{/*solution section*/}
<Container maxWidth="lg">
  <Grid container spacing={2} id="solution">
    <Grid item xs={12}>
      <MultiItemCarousel
        iconLeft={icons.solution.src}
        titleLeft={"Giải pháp doanh nghiệp"}
        iconRight={icons.arrowRight.src}
        titleRight={"Xem tất cả"}
        maxItemSlide={3}
        linkTo={"/solutions"}
        component="package"
        htmlDescription={itemsSolution.map((item,index) => (
          <SolutionCard item={item} detail={true} key={index}/>
        ))}
      />
    </Grid>
  </Grid>
</Container>


{/* promotion section*/}
<Grid item xs={12} spacing={2} id="promotion">
  <Container
    maxWidth="lg"
    style={{ paddingTop: 5+"vw",paddingBottom: 5+"vw" }}
  >
    <MultiItemCarousel
      iconLeft={icons.device.src}
      titleLeft={"Chương trình khuyến mãi"}
      maxItemSlide={3}
      linkTo={"/promotions"}
      component="promotion"
      isColorWhiteTextRight={true}
      btnWhite={true}
     
      htmlDescription={itemsPromotion.map((item,index) => (
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
        <h1 className="title" style={{textAlign: 'left'}}>Tin tức</h1>
        <Box
          sx={{
            display: "grid",
            gridAutoColumns: "1fr",
            gap: 1,
          }}
          className="news__box"
        >
          <Item sx={{ gridRow: "1", gridColumn: "span 2" }} className="news__item-left" >
            {
              <NewsCardLeft
                item={{
                  image:newsImage.src,
                  title: "Tada",
                  des: "Sau thành công lớn tại giải chạy online Head to 2021 được tổ chức vào cuối năm 2020 với gần 3000 VĐV tham dự trên khắp cả nước. Từ ngày 01/12/2021, MobiFone tiếp tục tổ chức giải chạy online Head to 2022. Giải được tổ chức nhằm đem lại sân chơi gắn kết cộng đồng với mong muốn...",
                  id:1
                }}
                heightCard={420}
              />
            }
          </Item>

          {/* The second non-visible column has width of 1/4 */}
          <Item
            sx={{ gridRow: "1", gridColumn: "span 2" }}
            className="news__col-right"
            style={{paddingRight: 0}}
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
                <NewsCard   image={newsImage.src}/>
              </ListItem>
              <ListItem className="news__list-item">
                <NewsCard image={newsImage.src}/>
              </ListItem>
              <ListItem className="news__list-item">
                <NewsCard image={newsImage.src}/>
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
      <Card sx={{ maxWidth: 100 + "%" , boxShadow: 'none'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={banner62.src}
          className="card-image"
        />
      </Card>
    </Grid>
   
  </Grid>
</Container>

{/*support section*/}
<Container maxWidth="lg">
<Grid item xs={12}>
  <span>
    <h1 className="title">Hỗ trợ khách hàng</h1>
  </span>
</Grid>
  <Grid container spacing={2} id="supports">
    <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
      </Grid>
      <Grid item xs={3}>
          <ActionAreaCardM8 image={faq.src}/>
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