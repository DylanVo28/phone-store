import Navbar from "./../../src/components/Navbar";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import CarouselM8 from "../../src/components/Carousel";
import React, { useEffect, useState } from "react";
import ImageGalleryM8 from "../../src/components/ImageGalleryM8";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  List,
  ListItem,
  TableRow,
  TableCell,
  ListItemText,
} from "@mui/material";
import { Grid } from "@mui/material";
import TextHeader from "../../src/components/TextHeader";
import { Typography } from "@mui/material";
import ItemChildCardM8 from "../../src/components/ItemChildCardM8";
import IconTitle from "../../src/components/IconTitle";
import Image from "next/image";
import emoji from "../../src/images/emojione-v1_wrapped-gift.svg";
import tick from "../../src/images/TICK.svg";
import TypograPhyM8 from "../../src/components/TypographyM8/TypographyM8";
import { Link } from "next/link";
import LinkM8 from "../../src/components/LinkM8";
import ButtonBlockM8 from "../../src/components/ButtonBlockM8";
import NumericInputM8 from "../../src/components/NumericInputM8";
import TitleBoxM8 from "../../src/components/TitleBoxM8";
import TableM8 from "../../src/components/TableBodyM8";
import ModalM8 from "../../src/components/ModalM8";
import NewsCard from "../../src/components/NewsCard";
import MultiItemCarousel from "../../src/components/Simple";
import ImgMediaCard from "../../src/components/ImgMediaCard";
import icons from "../../src/images/icons";
import phone from "../../src/images/phone.png";
import NoSSR from "react-no-ssr";
import cart from "../../src/images/cart-blue.svg";
import giffy from "../../src/images/giphy.gif";
import BreadCrumbsM8 from "../../src/components/BreadCrumbsM8";
import closeIcon from "../../src/images/close.svg";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../../config";
import Head from "next/head";
import { useRouter } from "next/router";
import iconPrev from "../../src/images/icon-prev.svg";
import iconNext from "../../src/images/icon-next.svg";
import banner from "../../src/images/baner-6-1.png";
import hot from "../../src/images/hot.svg";
import MetaSEO from "../../src/components/MetaSEO";
import Script from "next/script";
const itemsProduct = [
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      " which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
  {
    id: 1,
    image: phone.src,
    discountValue: 1000000,
    title: "Samsung galaxy 2020",
    description:
      "which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.  ",
    price: 300000000,
  },
];
// import TableBodyM8 from './../../src/components/TableBodyM8';
const items = ["Tất cả", "Trả trước", "Trả trước", "Trả trước"];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];
var itemsBanner = [
  {
    image: banner.src,
  },
  {
    image: banner.src,
  },
];

const ProductDetail = () => {
  const [width, setWidth] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setWidth(window.innerWidth);
    if (document.querySelector(".image-gallery-left-nav")) {
      for (
        let i = 0;
        i <
        document.querySelectorAll(".image-gallery .image-gallery-thumbnail")
          .length;
        i++
      ) {
        document
          .querySelectorAll(".image-gallery .image-gallery-thumbnail")
          [i].addEventListener("click", function () {
            if (i === 2) {
              document.querySelector(".image-gallery-right-nav").style.display =
                "none";
            } else if (i === 0) {
              document.querySelector(".image-gallery-left-nav").style.display =
                "none";
            } else {
              document.querySelector(".image-gallery-right-nav").style.display =
                "block";
              document.querySelector(".image-gallery-left-nav").style.display =
                "block";
            }
          });
      }
      document
        .querySelector(".image-gallery-left-nav")
        .addEventListener("click", function () {
          if (
            document
              .querySelectorAll(".image-gallery .image-gallery-thumbnail")[1]
              .classList.contains("active")
          ) {
            document.querySelector(".image-gallery-left-nav").style.display =
              "none";
          } else {
            document.querySelector(".image-gallery-right-nav").style.display =
              "block";
          }
        });
      document
        .querySelector(".image-gallery-right-nav")
        .addEventListener("click", function () {
          if (
            document
              .querySelectorAll(".image-gallery .image-gallery-thumbnail")[1]
              .classList.contains("active")
          ) {
            document.querySelector(".image-gallery-right-nav").style.display =
              "none";
          } else {
            document.querySelector(".image-gallery-left-nav").style.display =
              "block";
          }
        });
      document.querySelector(
        ".image-gallery-left-nav"
      ).innerHTML = `<img src="${iconPrev.src}" alt=""/>`;
      document.querySelector(
        ".image-gallery-right-nav"
      ).innerHTML = `<img src="${iconNext.src}" alt=""/>`;
    }
  });

  const head = () => {
    return (
      <MetaSEO
        title={`Home | ${APP_NAME}`}
        description={"Trang product"}
        asPath={router.asPath}
        keywords="keywords"
        ogTitle={`Lasted web development | ${APP_NAME}`}
        ogDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        ogUrl={`${DOMAIN}${router.asPath}`}
        ogImage={banner.src}
      ></MetaSEO>
    );
  };
  return (
    <>
      <style jsx global>
        {`
        .product-detail {
          padding-top: 2vw;
          padding-bottom: 5vw;
        }
        .product-detail .product-detail__see-more{
          cursor: pointer;
        }
        .product-detail .product-detail__see-more .icon-title__title{
          color: #0061af;
          
        }
        .product-detail .button-block-m8{
          width: 100%;
          height: 100%;
        }
        .products--detail .filter-product{
          display: none;
        }
        #products{
          padding-bottom: 5vw;
        }
        #products.products--detail .title{
          color: white;
        }
        #products.products--detail .img-media-card .img-media-card__card{
          box-shadow: none;
          border: 1px solid #D9D9D9;
          border-radius: 12px;
        }
       
        .product-detail .product-detail__price{
          font-weight: 600;
          font-size: 32px;
          line-height: 38px;
          color: #EE1C24;
        }
        .product-detail .product-detail__price-origin{
          padding-left: 5px;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.0015em;
          text-decoration-line: line-through;
          color: #0061AF;
          
        }
        .product-detail .icon-title__icon{
          display: inline-block;
        }
        
        .product-detail .product-detail__icon-title{
          background: #E2EEFF;
          display: flex;
          align-items: center;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          padding: 5px 15px;
        }
        .product-detail .product-detail__title{
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.0015em;
          color: #333333;
        }
        .product-detail .product-detail__icon-image{
          width: 15px!important;
          min-width: auto!important;
        }
        .product-detail .product-detail__list-item{
          display: flex;
          align-items: center;
        }
        .product-detail .product-detail__link{
          text-decoration: none;
          float: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.0015em;
        }
        .product-detail .product-detail__list .product-detail__item{
          padding: 0;
        }
        .product-detail .product-detail__promotion{
          border: 1px solid #e2eeff;
          border-radius: 12px;
        }
        .product-detail .product-detail__promotion .product-detail__icon-title .icon-title__title{
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.0015em;
          color: #333333;
        }
        .product-detail .product-detail__box{
          padding: 5px 15px;
          border-top: 1px solid #E2EEFF;
        }
        .product-detail .product-detail__btn-cart{
          background: #E2EEFF;
    border: 1px solid #0061AF;
        }
        .product-detail .product-detail__btn-cart .icon-title__icon{
          color: #0061AF
        }
        .product-detail .product-detail p{
          display: flex;
          align-items: center;
        }
        .product-detail .product-detail__btn-cart .icon-title__title{
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.005em;
          color: #0061AF;
        }
        .product-detail .product-detail__table{
          padding: 0 15px 15px 0px;
          border-radius: 12px;
          border-top-left-radius: 25px;
          box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
        }
        .product-detail .news-card{
          border: none;
        }
        .product-detail .news-card img{
          background-size: 100%;
          object-fit: unset;
          border-radius: 12px;
        }
        .product-detail .news-card .news-card__box{
          width: auto
        }
        .product-detail .product-detail__max-length{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
                  line-clamp: 2; 
          -webkit-box-orient: vertical;
        }
        .product-detail .product-detail__max-length.over-flow--inherit{
          display: block;
        }
        .product-detail .product-detail__grid-12{
          border-radius: 12px;
          box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
        }
        .product-detail .product-detail__grid-6-right{
          padding: 16px;
          border-left: 1px solid #D9D9D9;
        }
        .product-detail .product-detail__grid-6-right .title{
          padding-left: 0px;
        }
        .product-detail .product-detail__list-item .icon-title__title p{
          display: flex;
          align-items: center;
        }
        .product-detail .product-detail__list-item .icon-title__title p a{
          padding-left: 5px
        }
        .bread-crumb .bread-crumb__grid-12{
          box-shadow: 0px 0px 4px rgb(130 130 130 / 25%);
          border-radius: 12px;
          padding-bottom: 20px;
        }
        .bread-crumb .bread-crumb__grid-12 .title{
          margin: 5px 0;
        }
        .modal-m8 .title-box-m8{
          border-radius: 0;
          display: flex;
          justify-content: space-between;
          padding-right: 12px;
        }
        .modal-m8 .table-m8 .table-m8__table-row{
          background: white;
          border: none;
          border-bottom: 1px solid #a7bfdf;
        }
        .modal-m8 .table-m8 .table-m8__table-row th,.modal-m8 .table-m8 .table-m8__table-row td{
          border: none
        }
       
        .modal-m8 .table-m8 .table-m8__table-row td{
          text-align: left;
          width: 30%;
        }
        .modal-m8 .modal-m8__title{
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          letter-spacing: 0.0015em;
        }
      `}
      </style>
      <React.Fragment>
        {head()}
        <NoSSR>
          <Navbar />
          <div style={{ height: 120 + "px" }}></div>
          <CarouselM8 items={itemsBanner} />
          <Container
            maxWidth="lg"
            style={{ paddingTop: "50px" }}
            className="product bread-crumb"
          >
            <Grid container spacing={2}>
              <Grid item md={12} className={"bread-crumb__grid-12"}>
                <h1 className="title">Gói cước</h1>
                <BreadCrumbsM8 />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className="product-detail">
            <Grid container spacing={2} className="product-detail__grid-12">
              <Grid item md={6}>
                <ImageGalleryM8 />
              </Grid>
              <Grid item md={6} className="product-detail__grid-6-right">
                <TextHeader title="Điện thoại sam sung galaxy s20 ultra" />

                <div className="display--flex align-items--center">
                  <Typography
                    variant="span"
                    component="span"
                    className="product-detail__price"
                  >
                    23.990.000đ
                  </Typography>
                  <Typography
                    variant="span"
                    component="span"
                    className="product-detail__price-origin"
                  >
                    24,290,000 đồng
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  component="p"
                  className="product-detail__description"
                >
                  Giá bán chỉ còn 11.890.000 đồng khi mua kèm gói cước sub1399,
                  cam kết sử dụng 18 tháng
                </Typography>
                <br />
                <Typography variant="span" component="span">
                  {"Chọn màu: "}
                </Typography>
                <Typography variant="span" component="span">
                  Đen
                </Typography>
                <Grid container spacing={2} style={{ paddingTop: 10 + "px" }}>
                  <Grid item md={4} style={{ paddingTop: "13px" }}>
                    <ItemChildCardM8 checked={true} />
                  </Grid>
                  <Grid item md={4} style={{ paddingTop: "13px" }}>
                    <ItemChildCardM8 />
                  </Grid>
                  <Grid item md={4} style={{ paddingTop: "13px" }}>
                    <ItemChildCardM8 />
                  </Grid>
                </Grid>
                <br />
                <Box
                  sx={{
                    display: "grid",
                    gridAutoColumns: "1fr",
                    gap: 1,
                  }}
                >
                  <div className="product-detail__promotion">
                    <IconTitle
                      variant="p"
                      component="h6"
                      className="product-detail__icon-title"
                      icon={
                        <Image
                          src={emoji.src}
                          width={30}
                          height={30}
                          alt="emoji"
                        />
                      }
                      title={"san pham"}
                    />
                    <Box className="product-detail__box">
                      <Typography
                        variant="b"
                        component="b"
                        className="product-detail__title"
                      >
                        Quà tặng
                      </Typography>
                      <List className="product-detail__list">
                        {items.map((item, index) => (
                          <ListItem
                            key={index}
                            className="product-detail__item"
                          >
                            <IconTitle
                              variant="p"
                              component="p"
                              icon={
                                <Image
                                  className="product-detail__icon-image"
                                  src={tick.src}
                                  width={30}
                                  height={30}
                                  alt="tick icon"
                                />
                              }
                              title={item}
                              className="product-detail__list-item"
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box className="product-detail__box">
                      <Typography variant="b" component="b">
                        Quà tặng
                      </Typography>
                      <List className="product-detail__list">
                        {items.map((item, index) => (
                          <ListItem
                            key={index}
                            className="product-detail__item"
                          >
                            <IconTitle
                              variant="p"
                              component="p"
                              icon={
                                <Image
                                  className="product-detail__icon-image"
                                  src={tick.src}
                                  width={30}
                                  height={30}
                                  alt="tick"
                                />
                              }
                              title={
                                <Typography variant="p" component="p">
                                  {item}
                                  <LinkM8
                                    href={"/tada"}
                                    title={"Xem chi tiết"}
                                  />
                                </Typography>
                              }
                              className="product-detail__list-item"
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </div>
                  <Grid container spacing={2} style={{ padding: "15px 0" }}>
                    <Grid
                      item
                      md={12}
                      className="display--flex align-items--center"
                    >
                      <span>Số lượng</span>
                      <NumericInputM8 />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <ButtonBlockM8 className="product-detail__btn-cart">
                        <IconTitle
                          variant="p"
                          component="h6"
                          className={
                            "display--flex align-items--center justify-content--center"
                          }
                          icon={
                            <Image
                              src={cart.src}
                              width={30}
                              height={30}
                              alt="cart"
                            />
                          }
                          title={"san pham"}
                        />
                      </ButtonBlockM8>
                    </Grid>
                    <Grid item md={6}>
                      <ButtonBlockM8>
                        <Typography
                          variant="h6"
                          component="h6"
                          className="button-block-m8__title"
                        >
                          Mua ngay
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          className="button-block-m8__description"
                        >
                          Giao tận nơi hoặc nhận tại cửa hàng
                        </Typography>
                      </ButtonBlockM8>
                    </Grid>
                  </Grid>

                  <ButtonBlockM8 background="background--orange">
                    <Typography
                      variant="div"
                      component="div"
                      className="button-block-m8__description"
                    >
                      Giao tận nơi hoặc nhận tại cửa hàng
                      <LinkM8
                        href={"/tada"}
                        title={"Xem chi tiết"}
                        className="product-detail__link"
                      />
                    </Typography>
                  </ButtonBlockM8>
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />

            <Grid container spacing={2}>
              <Grid item md={8} style={{ paddingLeft: 0 }}>
                <Grid md={12} className="product-detail__table">
                  <Box>
                    <TitleBoxM8 variant={"div"} component={"div"}>
                      <IconTitle
                        variant="h4"
                        component="h4"
                        icon={
                          <Image
                            src={hot.src}
                            width={30}
                            height={30}
                            alt="hot"
                          />
                        }
                        title={"san pham"}
                        className={"display--flex align-items--center"}
                      />
                    </TitleBoxM8>
                    <Box
                      style={{ padding: "16px 0px 0px 16px" }}
                      className="text-align--center"
                    >
                      <Image
                        src={giffy.src}
                        width={400}
                        height={300}
                        alt={banner.src}
                      />
                      <Typography
                        variant="p"
                        component="p"
                        className={`product-detail__max-length ${
                          seeMore ? "over-flow--inherit" : ""
                        }`}
                        style={{ textAlign: "left" }}
                      >
                        Đánh giá chi tiết Samsung Galaxy S22 Ultra 5G Samsung
                        Galaxy S22 Ultra 5G là siêu phẩm kế thừa tinh hoa Galaxy
                        Note cùng đột phá Galaxy S, tạo nên sức mạnh vô song
                        đỉnh cao. Điện thoại đã thiết lập chuẩn mực mới cho dòng
                        smartphone cao cấp từ sức mạnh hàng đầu Snapdragon 8 Gen
                        1, camera “mắt thần bóng đêm”, khả năng zoom 100x, bút
                        S-Pen tích hợp và thời gian sử dụng cả ngày dài. Đây là
                        siêu phẩm tuyệt vời nhất mà Samsung từng mang đến. Cuộc
                        cách mạng về thiết kế Lần đầu tiên Samsung mang tới
                        thiết kế dòng Galaxy Note lên Galaxy S. Siêu phẩm Galaxy
                        S22 Ultra 5G xuất hiện độc bản đậm chất Galaxy Note, cụm
                        camera không viền độc đáo và màu sắc thời thượng, tạo
                        nên bản sắc riêng biệt, khó nhầm lẫn trên thị trường.
                        Dẫn đầu xu hướng màu trên thế hệ di động, Samsung trang
                        bị hai màu sắc hoàn toàn mới là Đỏ Burgundy và Xanh Zeta
                        bên cạnh hai phiên bản Trắng Phantom và Đen Phantom sang
                        trọng và tinh tế. Cụm camera sau đã tăng lên 2 camera
                        gồm chiếc camera chính 12MP với khả năng lấy nét pha kép
                        Dual Pixel và camera phụ 5MP để thu độ sâu ảnh cho chức
                        năng chụp xóa phông. Trong khi đó, camera trước có độ
                        phân giải 8MP. Đáng chú ý, Bkav đã ứng dụng nhiếp ảnh
                        điện toán và AI để đưa vào camera của Bphone 2020 nhiều
                        tính năng mới mẻ như khả năng đóng băng chuyển động,
                        chụp đêm không nhiễu, chụp xóa phông tự nhiên, chụp cận
                        cảnh macro hay tính năng chụp sản phẩm dành Đây là siêu
                        phẩm tuyệt vời nhất mà Samsung từng mang đến. Lần đầu
                        tiên Samsung mang tới thiết kế
                      </Typography>
                      {!seeMore && (
                        <Button
                          variant="contained"
                          onClick={(e) => setSeeMore(!seeMore)}
                        >
                          Xem thêm
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid item md={12} className="product-detail__table">
                  <Box className="">
                    <TitleBoxM8 variant={"div"} component={"div"}>
                      <IconTitle
                        variant="h4"
                        component="h4"
                        icon={
                          <Image
                            src={hot.src}
                            width={30}
                            height={30}
                            alt="hot"
                          />
                        }
                        title={"san pham"}
                        className={"display--flex align-items--center"}
                      />
                    </TitleBoxM8>
                    <br />
                    <Box style={{ padding: "10px 0 0 10px" }}>
                      <TableM8>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:nth-child(2n)": {
                                background: "white!important",
                              },
                            }}
                            className={"table-m8__table-row "}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                          </TableRow>
                        ))}
                      </TableM8>
                      <br />
                    </Box>
                    <IconTitle
                      variant="p"
                      component="p"
                      icon={
                        <Image
                          src={emoji.src}
                          width={30}
                          height={30}
                          alt="hot"
                        />
                      }
                      onClick={(e) => setOpenModal(true)}
                      title={"Xem cấu hình chi tiết"}
                      className="display--flex align-items--center flex-direction--row-reverse justify-content--center product-detail__see-more"
                    />
                  </Box>
                </Grid>
                <br />
                <Grid item md={12} className="product-detail__table">
                  <Box>
                    <TitleBoxM8 variant={"div"} component={"div"}>
                      <IconTitle
                        variant="h4"
                        component="h4"
                        icon={
                          <Image
                            src={hot.src}
                            width={30}
                            height={30}
                            alt="hot"
                          />
                        }
                        title={"san pham"}
                        className={"display--flex align-items--center"}
                      />
                    </TitleBoxM8>
                    <br />
                    <br />
                    <Box style={{ padding: "10px 0 0 10px" }}>
                      <NewsCard heightCard={83} widthCard={125} />
                      <br />

                      <NewsCard heightCard={83} widthCard={125} />
                      <br />
                      <NewsCard heightCard={83} widthCard={125} />
                    </Box>
                  </Box>
                  <br />
                  <IconTitle
                    variant="p"
                    component="p"
                    icon={
                      <Image
                        src={emoji.src}
                        width={30}
                        height={30}
                        alt="emoji"
                      />
                    }
                    title={"Xem cấu hình chi tiết"}
                    className="display--flex align-items--center flex-direction--row-reverse justify-content--center product-detail__see-more"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
          {/*product section*/}
          <Grid
            item
            xs={12}
            spacing={2}
            id="products"
            className="products--detail"
          >
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
                htmlDescription={itemsProduct.map((item, index) => (
                  <ImgMediaCard
                    item={item}
                    isCart={true}
                    isdiscount={true}
                    key={index}
                  />
                ))}
                btnWhite={true}
                isBtnMore={false}
              />
            </Container>
          </Grid>
          {/*banner section */}
          <Container maxWidth="lg" id="banner">
            <Grid container spacing={2} >
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
          <ModalM8 open={openModal} onClose={(e) => setOpenModal(false)}>
            <Box>
              <TitleBoxM8 variant={"div"} component={"div"}>
                <IconTitle
                  variant="h4"
                  component="h4"
                  icon={
                    <Image src={emoji.src} width={30} height={30} alt="emoji" />
                  }
                  title={"san pham"}
                  className={"display--flex align-items--center"}
                />
                <Image
                  src={closeIcon.src}
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setOpenModal(false)}
                  alt="close icon"
                />
              </TitleBoxM8>
              <Container maxWidth="lg">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="b"
                      component="b"
                      className="modal-m8__title"
                    >
                      Thông tin hàng hóa
                    </Typography>
                    <TableM8>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:nth-child(2n)": {
                              background: "white!important",
                            },
                          }}
                          className={"table-m8__table-row "}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow
                        sx={{
                          "&:nth-child(2n)": { background: "white!important" },
                        }}
                        className={"table-m8__table-row "}
                      >
                        <TableCell component="th" scope="row">
                          danhs ach
                        </TableCell>
                        <TableCell align="right">
                          <List
                            sx={{
                              width: "100%",
                              maxWidth: 360,
                              bgcolor: "background.paper",
                            }}
                          >
                            {[
                              "ca me ra chinh",
                              "camera hphu",
                              "camera giua",
                              "camera lui",
                            ].map((value) => (
                              <ListItem key={value} disableGutters>
                                <span
                                  style={{
                                    width: "4px",
                                    height: "4px",
                                    background: "#495057",
                                    borderRadius: "50%",
                                  }}
                                ></span>
                                <ListItemText
                                  style={{ paddingLeft: "5px" }}
                                  primary={`Line item ${value}`}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </TableCell>
                        <TableCell align="right">
                          <List
                            sx={{
                              width: "100%",
                              maxWidth: 360,
                              bgcolor: "background.paper",
                            }}
                          >
                            {[
                              "ca me ra chinh",
                              "camera hphu",
                              "camera giua",
                              "camera lui",
                            ].map((value) => (
                              <ListItem key={value} disableGutters>
                                <span
                                  style={{
                                    width: "4px",
                                    height: "4px",
                                    background: "#495057",
                                    borderRadius: "50%",
                                  }}
                                ></span>
                                <ListItemText
                                  style={{ paddingLeft: "5px" }}
                                  primary={`Line item ${value}`}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </TableCell>
                      </TableRow>
                    </TableM8>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="b" component="b">
                      Thông tin hàng hóa
                    </Typography>
                    <TableM8>
                      {["item", "item1"].map((row) => (
                        <TableRow
                          key={row}
                          sx={{
                            "&:nth-child(2n)": {
                              background: "white!important",
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ border: "none" }}
                          >
                            <IconTitle
                              variant="p"
                              component="p"
                              className="display--flex align-item--center "
                              icon={
                                <Image
                                  src={emoji.src}
                                  width={30}
                                  height={30}
                                  alt="emoji"
                                />
                              }
                              title={"san pham"}
                            />
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{ textAlign: "left", border: "none" }}
                          >
                            <IconTitle
                              variant="p"
                              component="p"
                              className="display--flex align-item--center "
                              icon={
                                <Image
                                  src={emoji.src}
                                  width={30}
                                  height={30}
                                  alt="emoji"
                                />
                              }
                              title={"san pham"}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableM8>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </ModalM8>
          {width && <SpeedDialTooltipOpen />}
          <Footer></Footer>
        </NoSSR>
      </React.Fragment>
    </>
  );
};

export default ProductDetail;
