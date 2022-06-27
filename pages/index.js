import { Button, CardMedia, Grid, List } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import MultiItemCarousel from "../src/components/Simple";
import styles from "../styles/Home.module.css";
import Slide from "./../src/components/Carousel";
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
import PromotionCard from './../src/components/PromotionCard';
import NewsCard from "../src/components/NewsCard";
import NewsCardLeft from "../src/components/NewsCardLeft";
import  Card  from '@mui/material/Card';
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
      "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
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
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  var itemsBanner = [
    {
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <>
      <Navbar />
      <Slide items={itemsBanner} />
      {/*package section*/}
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
              style={
                <style jsx>
                  {`
                #packages .react-multi-carousel-track {
                  padding: 15px 0;
                }
                #packages .title{
                  font-weight: 600;
                  font-size: 32px;
                  line-height: 38px;
                  color: #0061AF;
                }
                #packages .text-mobi-8{
                  color: #5180C0;
                }
                #packages .arrow-forward-m8{
                  color: white;
                  background: #0061af; 
                }
              `}
                </style>
              }
              htmlDescription={itemsPackage.map((item) => (
                <PackageCardM8 item={item} detail={true} />
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
            style={
              <style jsx>{`
                
              #products .react-multi-carousel-item{
                padding-right: 10px;
                padding-left: 10px;
              }
              #products .css-1ri6ub7-MuiPaper-root-MuiCard-root{
                position: relative;
                border-radius: 15px;
                box-sizing: border-box;
                background: #FFFFFF;
                border-radius: 15;
                border: none;
              }
              #products .css-1ri6ub7-MuiPaper-root-MuiCard-root .cart-icon{
                position: absolute;
                background: #0090ff;
                padding: 4px;
                border-radius: 50%;
                width: 30px;
                right: 15px;
                top: 15px;
                box-shadow: 0px 0px 8px 0px #0090ff80;
                background: #0061AF;
                box-shadow: 0px 0px 8px 2px #67b9f4;
                border-radius: 100px;
              }
              #products .card-image{
                border-bottom: 1px solid #00000021;
                padding-bottom: 15px;
                padding-top: 15px;
              }
               #products .product__price-discount{
                position: absolute;
                top: -13px;
                background: #ff0000;
                padding: 3px 15px;
                color: white;
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
                font-size: 13px;
               }
               #products .react-multi-carousel-track{
                padding-top: 15px;
                padding-bottom: 15px;
               }
               #products .card__description{
                font-weight: 400;
                font-size: 14px;
                line-height: 125%;
                letter-spacing: 0.0025em;
                color: #44494D;
               }
               #products {
              background: url('${background.src}');
    background-size: cover;
               }
               #products .product__price{
                justify-content: space-between;
                padding: 16px
               }
               #products .product__price__price{
                text-decoration-line: line-through;
                color: #0061AF;
                letter-spacing: 0.004em;
                font-weight: 300;
                font-size: 14px;
               }
               #products .product__price__discount{
                color: #EE1C24;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.0015em;
               }
               #products .card__title{
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                text-align: center;
                letter-spacing: 0.0015em;
                color: #44494D;
               }
               #products .title{
                font-weight: 600;
                font-size: 32px;
                line-height: 38px;
                color: white;
               }
            `}</style>
            }
            htmlDescription={items.map((item) => (
              <ImgMediaCard item={item} isCart={true} isdiscount={true} />
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
              style={
                <style jsx>
                  {`
                #packages .react-multi-carousel-track {
                  padding: 15px 0;
                }
                #packages .title{
                  font-weight: 600;
                  font-size: 32px;
                  line-height: 38px;
                  color: #0061AF;
                }
                #packages .text-mobi-8{
                  color: #5180C0;
                }
                #packages .arrow-forward-m8{
                  color: white;
                  background: #0061af; 
                }
              `}
                </style>
              }
              htmlDescription={itemsPackage.map((item) => (
                <SolutionCard item={item} detail={true} />
              ))}
            />
          </Grid>
        </Grid>
      </Container>
      
      {/*banner section*/}
      <Container maxWidth="lg">
        <Grid container spacing={2} style={{padding: 15 +'px  '+ 0 }}>
          <Grid item xs={12}>
                <div style={{background: "url('https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg')",
                  height: 300+"px",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 15+ 'px'
              }}>

                </div>
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
            style={
              <style jsx>{`
                
              #promotion .react-multi-carousel-item{
                padding-right: 10px;
                padding-left: 10px;
              }
              #promotion .css-1ri6ub7-MuiPaper-root-MuiCard-root{
                position: relative;
                border-radius: 15px;
                box-sizing: border-box;
                background: #FFFFFF;
                border-radius: 15;
                border: none;
                display: contents;
              }
              #promotion .css-1ri6ub7-MuiPaper-root-MuiCard-root .cart-icon{
                position: absolute;
                background: #0090ff;
                padding: 4px;
                border-radius: 50%;
                width: 30px;
                right: 15px;
                top: 15px;
                box-shadow: 0px 0px 8px 0px #0090ff80;
                background: #0061AF;
                box-shadow: 0px 0px 8px 2px #67b9f4;
                border-radius: 100px;
              }
              #promotion .card-image{
                border-bottom: 1px solid #00000021;
                padding-bottom: 15px;
                padding-top: 15px;
              }
               #promotion .product__price-discount{
                position: absolute;
                top: -13px;
                background: #ff0000;
                padding: 3px 15px;
                color: white;
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
                font-size: 13px;
               }
               #promotion .react-multi-carousel-track{
                padding-top: 15px;
                padding-bottom: 15px;
               }
               #promotion .card__description{
                font-weight: 400;
                font-size: 14px;
                line-height: 125%;
                letter-spacing: 0.0025em;
                color: #44494D;
               }
               #promotion {
              background: url('${backgroundPromotion.src}');
    background-size: cover;
               }
               #promotion .product__price{
                justify-content: space-between;
                padding: 16px
               }
               #promotion .product__price__price{
                text-decoration-line: line-through;
                color: #0061AF;
                letter-spacing: 0.004em;
                font-weight: 300;
                font-size: 14px;
               }
               #promotion .product__price__discount{
                color: #EE1C24;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.0015em;
               }
               #promotion .card__title{
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                text-align: center;
                letter-spacing: 0.0015em;
                color: #44494D;
               }
               #promotion .title{
                font-weight: 600;
                font-size: 32px;
                line-height: 38px;
                color: white;
               }
            `}</style>
            }
            htmlDescription={items.map((item) => (
              <PromotionCard item={item} isCart={true} isdiscount={true} />
            ))}
          />
        </Container>
      </Grid>

      {/*news section */}
      <Container maxWidth="lg">
    
        <Grid container spacing={2} id="news">
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
                   item={{image: 'https://th.bing.com/th/id/R.a8fbbfa66ce63680ab673396ac354214?rik=%2bBodyjDVc04TSQ&pid=ImgRaw&r=0',
                   title:"Tada",
                   des:"Sau thành công lớn tại giải chạy online Head to 2021 được tổ chức vào cuối năm 2020 với gần 3000 VĐV tham dự trên khắp cả nước. Từ ngày 01/12/2021, MobiFone tiếp tục tổ chức giải chạy online Head to 2022. Giải được tổ chức nhằm đem lại sân chơi gắn kết cộng đồng với mong muốn..."
                  }}
                 
                   />
              
                  }
                </Item>
               
                {/* The second non-visible column has width of 1/4 */}
                <Item sx={{ gridRow: "1", gridColumn: "span 2" }} className="news__col-right">
                  
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    className="news__list"
                  >
                    <ListItem className="news__list-item">
                      <style jsx global>
                        {`
                          .news__list-item{
                            padding: 0;
                            padding-bottom:15px;
                          }
                        `}
                      </style>
                      <NewsCard/>
                    </ListItem>
                    <ListItem className="news__list-item">
                      <style jsx global>
                        {`
                          .news__list-item{
                            padding: 0;
                            padding-bottom:15px;
                          }
                        `}
                      </style>
                      <NewsCard/>
                    </ListItem>
                    <ListItem className="news__list-item">
                      <style jsx global>
                        {`
                          .news__list-item{
                            padding: 0;
                            padding-bottom:15px;
                          }
                        `}
                      </style>
                      <NewsCard/>
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
      <Container maxWidth="xl">
        <Grid container spacing={2} id="banners">
          <Grid item xs={6}>
          <Card sx={{ maxWidth: 100+'%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
         height="240"
        image={"https://th.bing.com/th/id/R.a8fbbfa66ce63680ab673396ac354214?rik=%2bBodyjDVc04TSQ&pid=ImgRaw&r=0"}
        className="card-image"
      />
     </Card>
          </Grid>
          <Grid item xs={6}>
          <Card sx={{ maxWidth: 100+'%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
         height="240"
        image={"https://th.bing.com/th/id/R.a8fbbfa66ce63680ab673396ac354214?rik=%2bBodyjDVc04TSQ&pid=ImgRaw&r=0"}
        className="card-image"
      />
     </Card>
     
          </Grid>
        </Grid>
      </Container>
    
      {width && <SpeedDialTooltipOpen />}
      <Footer></Footer>
    </>
  );
}
