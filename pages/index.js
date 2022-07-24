/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
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
import Router, { useRouter } from "next/router";
import IconPrev from "../src/images/icon-prev.svg";
import IconNext from "../src/images/icon-next.svg";
import NoSSR from "react-no-ssr";
import banner from "../src/images/baner-6-1.png";
import solutionImage from "../src/images/solution-image.png";
import promotionImage from "../src/images/promotion-image.png";
import newsImage from "../src/images/news-image.png";
import banner62 from "../src/images/baner-6-2.png";
import faq from "../src/images/faq.png";
import content from "../public/locales/content";
import MobiService from "../actions/MobiService";
import {  useHomeContext } from './../src/context/HomeProvider';
import { replaceSpaceToDash } from "../src/helpers/utils";
const itemsPromotion = [
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: promotionImage.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];

const itemsSolution = [
  {
    id: 1,
    image: solutionImage.src,
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
    id: 1,
    image: solutionImage.src,
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
    id: 1,
    image: solutionImage.src,
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
    id: 1,
    image: solutionImage.src,
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
    id: 1,
    image: solutionImage.src,
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
    id: 1,
    image: solutionImage.src,
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
export default function Home({ res }) {
  const [width, setWidth] = useState(0);
  const {stPackages,setStPackages,setStDevices,stDevices}=useHomeContext()
  const { locale, router } = useRouter();
  useEffect(() => {
    setWidth(window.innerWidth);
    setStPackages(res[1]['data'])
    setStDevices(res[0]['data'])
  }, []);

  var itemsBanner = [
    {
      image:
        "https://media4.giphy.com/media/jJjb9AUHOiP3nJJMdy/giphy.gif?cid=82a1493brk1p5lo4f0kludsbvfxp3iv8d9ajxafmvqch52xy&rid=giphy.gif&ct=v",
    },
    {
      image: banner.src,
    },
  ];
  

  return (
    <React.Fragment>
     
        {/*banner section */}

        {/* <Private> */}
        <Navbar />
        <div style={{ height: 120 + "px" }}></div>
        <CarouselM8 items={itemsBanner} />

        {/*package section*/}
        <Container maxWidth="lg" id="packages">
          <MultiItemCarousel
            iconLeft={IconPrev.src}
            titleLeft={content[locale]["title.package"]}
            iconRight={IconNext.src}
            titleRight={content[locale]["title.viewAll"]}
            maxItemSlide={3}
            linkTo={content[locale]["title.[/packages]"]}
            component="package"
            htmlDescription={stPackages.map((item, index) => {
              if (index % 3 === 0) {
                return (
                  <PackageCardM8
                    item={item}
                    detail={true}
                    key={index}
                    kaka={index}
                    maxHeightImage={260}
                    justify={{ justifyContent: "flex-start" }}
                  />
                );
              } else if (index % 3 === 2) {
                return (
                  <PackageCardM8
                    item={item}
                    detail={true}
                    key={index}
                    kaka={index}
                    maxHeightImage={260}
                    justify={{ justifyContent: "flex-end" }}
                  />
                );
              }
              return (
                <PackageCardM8
                  item={item}
                  detail={true}
                  key={index}
                  kaka={index}
                  maxHeightImage={260}
                />
              );
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
              titleLeft={content[locale]["title.device"]}
              iconRight={icons.arrowRight.src}
              titleRight={content[locale]["title.viewAll"]}
              maxItemSlide={4}
              linkTo={content[locale]["title.[/products]"]}
              component="product"
              isColorWhiteTextRight={true}
              htmlDescription={stDevices.map((item, index) => (
                <ImgMediaCard
                  item={item}
                  isCart={true}
                  isdiscount={true}
                  key={index}
                  href={{
                    pathname: content[locale]["title.[/products/product]"],
                    query: { product: `${replaceSpaceToDash(item.name)}_${item.id}` },
                  }}
                />
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
                titleLeft={content[locale]["title.solutionEnterprise"]}
                iconRight={icons.arrowRight.src}
                titleRight={content[locale]["title.viewAll"]}
                maxItemSlide={3}
                linkTo={"/solutions"}
                component="package"
                htmlDescription={itemsSolution.map((item, index) => (
                  <SolutionCard item={item} detail={true} key={index} />
                ))}
              />
            </Grid>
          </Grid>
        </Container>

        {/* promotion section*/}
        <Grid item xs={12} spacing={2} id="promotion">
          <Container
            maxWidth="lg"
            style={{ paddingTop: 5 + "vw", paddingBottom: 5 + "vw" }}
          >
            <MultiItemCarousel
              iconLeft={icons.device.src}
              titleLeft={content[locale]["title.promotionProgram"]}
              maxItemSlide={3}
              linkTo={"/promotions"}
              component="promotion"
              isColorWhiteTextRight={true}
              btnWhite={true}
              htmlDescription={itemsPromotion.map((item, index) => (
                <PromotionCard
                  item={item}
                  isCart={true}
                  isdiscount={true}
                  key={index}
                />
              ))}
            />
          </Container>
        </Grid>

        {/*news section */}
        <Container maxWidth="lg" id="news">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{ width: "100%" }}>
                <h1 className="title" style={{ textAlign: "left" }}>
                  {content[locale]["title.news"]}
                </h1>
                <Box
                  sx={{
                    display: "grid",
                    gridAutoColumns: "1fr",
                    gap: 1,
                  }}
                  className="news__box"
                >
                  <Item
                    sx={{ gridRow: "1", gridColumn: "span 2" }}
                    className="news__item-left"
                  >
                    {
                      <NewsCardLeft
                        item={{
                          image: newsImage.src,
                          title: "Tada",
                          des: "Sau thành công lớn tại giải chạy online Head to 2021 được tổ chức vào cuối năm 2020 với gần 3000 VĐV tham dự trên khắp cả nước. Từ ngày 01/12/2021, MobiFone tiếp tục tổ chức giải chạy online Head to 2022. Giải được tổ chức nhằm đem lại sân chơi gắn kết cộng đồng với mong muốn...",
                          id: 1,
                        }}
                        heightCard={420}
                      />
                    }
                  </Item>

                  <Item
                    sx={{ gridRow: "1", gridColumn: "span 2" }}
                    className="news__col-right"
                    style={{ paddingRight: 0 }}
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
                        <NewsCard image={newsImage.src} />
                      </ListItem>
                      <ListItem className="news__list-item">
                        <NewsCard image={newsImage.src} />
                      </ListItem>
                      <ListItem className="news__list-item">
                        <NewsCard image={newsImage.src} />
                      </ListItem>
                    </List>
                  </Item>
                </Box>
              </div>
            </Grid>
          </Grid>
          <Button variant="contained">{content[locale]["title.signup"]}</Button>
        </Container>

        {/*banner section */}
        <Container maxWidth="lg" id="banner">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 100 + "%", boxShadow: "none" }}>
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
              <h1 className="title">
                {content[locale]["title.supportCustomer"]}
              </h1>
            </span>
          </Grid>
          <Grid container spacing={2} id="supports">
            <Grid item xs={3}>
              <ActionAreaCardM8 image={faq.src} />
            </Grid>
            <Grid item xs={3}>
              <ActionAreaCardM8 image={faq.src} />
            </Grid>
            <Grid item xs={3}>
              <ActionAreaCardM8 image={faq.src} />
            </Grid>
            <Grid item xs={3}>
              <ActionAreaCardM8 image={faq.src} />
            </Grid>
          </Grid>
        </Container>
        {width && <SpeedDialTooltipOpen />}
        <Footer></Footer>
        {/* </Private> */}

    </React.Fragment>
  );
}
export async function getServerSideProps() {
  //where call api to render data for page

  const res = await Promise.all([
    MobiService.getDevices(),
    MobiService.getPackages(),
  ]);
  return {
    props:{res}
  };
};
