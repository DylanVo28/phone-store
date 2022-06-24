import { Button, Grid, List } from "@mui/material";
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Link from 'next/link';
import Footer from './../src/components/Footer';
import SpeedDialTooltipOpen from './../src/components/SpeedDialTooltipOpen';
import { useEffect, useState } from "react";
import PackageCardM8 from "../src/components/PackageCardM8";
import background from '../src/images/background.svg'
import SolutionCard from "../src/components/SolutionCard";
const backgroundImage='https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/285412229_562998832205409_2099875105150622222_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7TyPYlJ_itoAX-cXw4U&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVJX0V-PkgSE9SJDX0_e04cTxkogOX1BVeuGywhh4hiIog&oe=62D7CC26'
const items = [
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:" which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
  {
    id:1,
    image:"https://n1.sdlcdn.com/imgs/g/o/f/iPhone-Black-iPhone-4s-16GB-SDL411082062-1-dfc7d.jpg",
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:"which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000
  },
];

const itemsPackage=[
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg",
    title: "dijango",
    des: "Thuê bao mới hòa mạng",
    incentives:[
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng",
      "Thuê bao mới hòa mạng"
    ]
  }
]
export default function Home() {
  const [width, setWidth] =useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  },[]);
  var itemsBanner = [
    {
     
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
       
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
]
  

  return (
    <>
    
   
      <Navbar />
      <Slide items={itemsBanner}/>
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
            style={<style jsx>
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
            </style>}
            htmlDescription={itemsPackage.map((item) => (
              <PackageCardM8 item={item} detail={true} />
            ))}
          />
        </Grid>
        
      </Grid>
      
     
      </Container>
      <Grid item xs={12} spacing={2} id="products">
      <Container maxWidth="lg" style={{paddingTop: 30+ 'px',paddingBottom: 150+'px'}}>
          <MultiItemCarousel
            iconLeft={icons.device.src}
            titleLeft={"Thiết bị di động"}
            iconRight={icons.arrowRight.src}
            titleRight={"Xem tất cả"}
            maxItemSlide={4}
            linkTo={"/products"}
            component="product"
            
            style={<style jsx>{`
                
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
            `}</style>}
            htmlDescription={items.map((item) => (
              <ImgMediaCard
                item={item}
                isCart={true}
                isdiscount={true}
              
              />
            ))}
          />
          </Container>
        </Grid>
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
            style={<style jsx>
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
            </style>}
            htmlDescription={itemsPackage.map((item) => (
              <SolutionCard item={item} detail={true} />
            ))}
          />
        </Grid>
        
      </Grid>
      
     
      </Container>
      <Container  maxWidth="lg">
      <Grid container spacing={2} id="news">
     
      <Grid item xs={12}>
          <div style={{ width: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
            >
              <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>{

                <img src="https://th.bing.com/th/id/R.92b1ab1d36d1ac3bdf247bbfacd4a466?rik=eWO2tKoCpMQQZg&pid=ImgRaw&r=0" style={{width: 100 +"%"}}/>
              }</Item>
              {/* The second non-visible column has width of 1/4 */}
              <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ArrowRightIcon />
                    </ListItemAvatar>
                    <ListItemText secondary="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " />
                  </ListItem>
                </List>
              </Item>
            </Box>
          </div>
        </Grid>
        </Grid>
      </Container>
      {width&&<SpeedDialTooltipOpen/>}
      <Footer></Footer>

    </>
  );
}
