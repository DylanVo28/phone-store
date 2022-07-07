import Navbar from "./../../src/components/Navbar";
import Footer from "./../../src/components/Footer";
import SpeedDialTooltipOpen from "./../../src/components/SpeedDialTooltipOpen";
import CarouselM8 from "../../src/components/Carousel";
import { useEffect, useState } from "react";
import ImageGalleryM8 from "../../src/components/ImageGalleryM8";
import { Box, Card, CardMedia, Container, List, ListItem } from "@mui/material";
import { Grid } from "@mui/material";
import TextHeader from "../../src/components/TextHeader";
import { Typography } from "@mui/material";
import ItemChildCardM8 from "../../src/components/ItemChildCardM8";
import IconTitle from "../../src/components/IconTitle";
import Image from "next/image";
import emoji from "../../src/images/emojione-v1_wrapped-gift.svg";
import tick from "../../src/images/TICK.svg";
import TypograPhyM8 from "../../src/components/TypographyM8/TypographyM8";
import { Link } from 'next/link';
import LinkM8 from "../../src/components/LinkM8";
import ButtonBlockM8 from "../../src/components/ButtonBlockM8";
const items = ["Tất cả", "Trả trước", "Trả trước", "Trả trước"];

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
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2165858/screenshots/9565926/iphone_x-xs-11_pro___1_4x.jpg",
  },
];
const ProductDetail = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      <Navbar />
      <CarouselM8 items={itemsBanner} />
      <Container maxWidth="lg">
        <Grid container spacing={2} className="product-detail">
          <Grid item md={6}>
            <ImageGalleryM8 />
          </Grid>
          <Grid item md={6}>
            <TextHeader title="Điện thoại sam sung galaxy s20 ultra" />

            <div>
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
              Giá bán chỉ còn 11.890.000 đồng khi mua kèm gói cước sub1399, cam
              kết sử dụng 18 tháng
            </Typography>
            <Typography variant="span" component="span">
              {"Chọn màu: "}
            </Typography>
            <Typography variant="span" component="span">
              Đen
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <ItemChildCardM8 />
              </Grid>
              <Grid item md={4}>
                <ItemChildCardM8 />
              </Grid>
              <Grid item md={4}>
                <ItemChildCardM8 />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
              className="product-detail__box"
            >
              <div className="product-detail__promotion">
                <IconTitle
                  variant="p"
                  component="h6"
                  className="product-detail__icon-title"
                  icon={<Image src={emoji.src} width={30} height={30} />}
                  title={"san pham"}
                />
                <Box>
                  <Typography variant="b" component="b">Quà tặng</Typography>
                  <List>
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <IconTitle
                          variant="p"
                          component="h6"
                          icon={<Image src={tick.src} width={30} height={30} />}
                          title={item}
                          className="package-card__list-item"
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Typography variant="b" component="b">Quà tặng</Typography>
                  <List>
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <IconTitle
                          variant="p"
                          component="h6"
                          icon={<Image src={tick.src} width={30} height={30} />}
                          title={  <Typography variant="p" component="p">
                            {item}<LinkM8 href={"/tada"} title={"Xem chi tiết"}/>
                          </Typography>}
                          className="package-card__list-item"
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </div>
              <ButtonBlockM8 >
                      <Typography variant="h6" component="h6" className="button-block-m8__title">Mua ngay</Typography>
                      <Typography variant="p" component="p" className="button-block-m8__description">Giao tận nơi hoặc nhận tại cửa hàng</Typography>

              </ButtonBlockM8>
              <ButtonBlockM8 background="background--orange">
                      <Typography variant="p" component="p" className="button-block-m8__description">
                        Giao tận nơi hoặc nhận tại cửa hàng<LinkM8 href={"/tada"} title={"Xem chi tiết"} className="product-detail__link"/>

                        </Typography>

              </ButtonBlockM8>
            </Box>
          </Grid>
        </Grid>
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

      {width && <SpeedDialTooltipOpen />}
      <Footer></Footer>
    </>
  );
};

export default ProductDetail;
